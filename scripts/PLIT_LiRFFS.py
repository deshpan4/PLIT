import argparse
import sys, getopt
from scipy.optimize import minimize
import numpy as np
import pandas as pd
import os
import rpy2
import rpy2.robjects as robjects
from rpy2.robjects.packages import importr
from rpy2.robjects import r, pandas2ri
from rpy2.robjects.numpy2ri import numpy2ri
from rpy2 import robjects as ro
import sys, getopt
from sklearn import metrics
from sklearn.metrics import confusion_matrix
from sklearn.metrics import accuracy_score
from sklearn.linear_model import Lasso
from rpy2.robjects.vectors import ListVector

pandas2ri.activate()
ro.conversion.py2ri = ro.numpy2ri
ro.numpy2ri.activate()


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('-tr', '--training', help="input training set feature matrix")
    parser.add_argument('-te', '--validation', help="input validation set feature matrix")
    parser.add_argument('-lambdaL', '--lambdaLower', help="input lower limit for lambda")
    parser.add_argument('-lambdaU', '--lambdaUpper', help="input upper limit for lambda")
    parser.add_argument('-lambdaS', '--lambdaStepSize', help="input step size for lambda")
    parser.add_argument('-tol', '--tolerance', help="input tolerance level")
    parser.add_argument('-otrMin', '--outputTrMin', help="output training set with minimal optimal features")
    parser.add_argument('-oteMin', '--outputTeMin', help="output validation set with minimal optimal features")
    parser.add_argument('-otrMax', '--outputTrMax', help="output training set with maximal optimal features")
    parser.add_argument('-oteMax', '--outputTeMax', help="output validation set with maximal optimal features")    
    args = parser.parse_args()

df1 = np.asarray(pd.read_csv(args.training))
df2 = pd.read_csv(args.training)
df3 = pd.read_csv(args.validation)
df31 = np.asarray(pd.read_csv(args.validation))
X = np.asarray(df1[:, 0:73])
y = df1[:, -1].astype(int)
ytr=df2.iloc[:,-1].values
yte=df3.iloc[:,-1].values
irf = importr("iRF")
auc = importr("AUC")
graphics = importr("graphics")
grdevices = importr("grDevices")
R = ro.r
arr2=[]
u1=range(1,45)
accArr=[]
accDiff=[]
lambdaValArr=[]
indexArr=[]
optArr=[]
lambdaval = robjects.r('rev(seq(%s,%s,%s))'%(args.lambdaLower,args.lambdaUpper,args.lambdaStepSize))
for i in range(0,len(lambdaval)):
 lambda_ = lambdaval[i]
 lasso = Lasso(alpha=lambda_)
 lasso.fit(X, y)
 arr1 = [i for i,x in enumerate(lasso.coef_) if x != 0. or x != -0.]
 if len(arr1) == 0:
  continue
 else:
  if len(arr2) == 0:
   arr2.append(len(arr1)) 
   Xtrain = np.asarray(df2[arr1])
   Xtest = np.asarray(df3[arr1])
   Xtr_mat1 = numpy2ri(Xtrain)
   Xte_mat1 = numpy2ri(Xtest)
   ytr_mat = ro.FactorVector(ytr)
   yte_mat = ro.FactorVector(yte)
   Xtr_mat = r.assign("bar", Xtr_mat1)
   Xte_mat = r.assign("bar", Xte_mat1)
   ncol=robjects.r('ncol')
   rep=robjects.r('rep')
   p1=ncol(df2)
   p=p1[0]
   selprob = rep(1/p,p)
   rf = robjects.r('list()')
   b = irf.randomForest(Xtr_mat, ytr_mat, Xte_mat, yte_mat, selprob, ntree=400)
   total = b[16][2][0] + b[16][2][1] + b[16][2][2] + b[16][2][3]
   accuracy = (b[16][2][0]+b[16][2][3])/total
   acc1=accuracy*100
   accArr.append(acc1)
   lambdaValArr.append(lambda_)
  elif len(arr1) == arr2[-1]:
   continue
  elif len(arr1) != arr2[-1]:
   arr2.append(len(arr1)) 
   Xtrain = np.asarray(df2[arr1])
   Xtest = np.asarray(df3[arr1])
   Xtr_mat1 = numpy2ri(Xtrain)
   Xte_mat1 = numpy2ri(Xtest)
   ytr_mat = ro.FactorVector(ytr)
   yte_mat = ro.FactorVector(yte)
   Xtr_mat = r.assign("bar", Xtr_mat1)
   Xte_mat = r.assign("bar", Xte_mat1)
   ncol=robjects.r('ncol')
   rep=robjects.r('rep')
   p1=ncol(df2)
   p=p1[0]
   selprob = rep(1/p,p)
   rf = robjects.r('list()')
   b = irf.randomForest(Xtr_mat, ytr_mat, Xte_mat, yte_mat, selprob, ntree=400)
   total = b[16][2][0] + b[16][2][1] + b[16][2][2] + b[16][2][3]
   accuracy = (b[16][2][0]+b[16][2][3])/total
   acc1=accuracy*100
   accArr.append(acc1)
   lambdaValArr.append(lambda_)
maxAcc = np.argmax(accArr)
maxAcc1=maxAcc-1
maxAcc2=maxAcc+1
accDiffOpp=[]
indexArrOpp=[]

for i in range(maxAcc1,-1,-1):
   accDiff1 = accArr[maxAcc]-accArr[i]
   accDiff.append(accDiff1)
   indexArr.append(i)

for i in range(maxAcc2,len(accArr)):
  accDiffOpp1 = accArr[maxAcc]-accArr[i]
  accDiffOpp.append(accDiffOpp1)
  indexArrOpp.append(i)

#print("indexArrOpp ",indexArrOpp)
#print("accDiffOpp ",accDiffOpp)


filArr = [i for i in accDiff if i <= float(args.tolerance)]
filArr1 = [i for i,x in enumerate(accDiff) if x <= float(args.tolerance)]
if filArr1 == []: 
  lambda_ = lambdaValArr[maxAcc]
else:
  optIndex=max(filArr1)
  optimalIndex=indexArr[optIndex]
  lambda_ = lambdaValArr[optimalIndex]

lasso = Lasso(alpha=lambda_)
lasso.fit(X, y)
arr1 = [i for i,x in enumerate(lasso.coef_) if x != 0. or x != -0.]
dfHeaders=np.array(list(df2))
outdf2=df2[arr1]
outdf3=df3[arr1]
print("Optimal Features min: ",dfHeaders[arr1])
oTr=pd.concat([outdf2,df2["species"]],axis=1)
oTe=pd.concat([outdf3,df3["species"]],axis=1)
oTr.to_csv(args.outputTrMin, sep=',',index=False)
oTe.to_csv(args.outputTeMin, sep=',',index=False)

#print("max accuracy index",maxAcc)

#print("Max accuracy opposite",filArr1Opp)



#print("maximum index on the opposite ",max(maxIndexArr))

#print("lambdaValArr ",lambdaValArr)

filArrOpp = [i for i in accDiffOpp if i <= float(args.tolerance)]
filArr1Opp = [i for i,x in enumerate(accDiffOpp) if x <= float(args.tolerance)]

maxIndexArr=[]

for i in range(0,len(filArr1Opp)):
  #print("index number ",indexArrOpp[i])
  maxIndexArr.append(indexArrOpp[i])

if filArr1Opp == []: 
  lambda_ = lambdaValArr[maxAcc]
else:
  optIndexOpp=max(maxIndexArr)  
  lambda_ = lambdaValArr[optIndexOpp]

#optIndexOpp=max(maxIndexArr)
#lambda_ = lambdaValArr[optIndexOpp]

#print("lambda ",lambda_)
  
lasso = Lasso(alpha=lambda_)
lasso.fit(X, y)
arr1 = [i for i,x in enumerate(lasso.coef_) if x != 0. or x != -0.]
dfHeaders=np.array(list(df2))
outdf2=df2[arr1]
outdf3=df3[arr1]
print("Optimal Features max: ",dfHeaders[arr1])
oTr=pd.concat([outdf2,df2["species"]],axis=1)
oTe=pd.concat([outdf3,df3["species"]],axis=1)
oTr.to_csv(args.outputTrMax, sep=',',index=False)
oTe.to_csv(args.outputTeMax, sep=',',index=False)
