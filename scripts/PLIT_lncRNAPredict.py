import argparse
import sys, getopt
from optparse import OptionParser
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
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import confusion_matrix
from sklearn.metrics import accuracy_score
from sklearn.linear_model import Lasso
from rpy2.robjects.vectors import ListVector

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('-tr', '--training', help="input training set feature matrix")
    parser.add_argument('-te', '--test', help="input test set feature matrix")
    parser.add_argument('-tef', '--testfasta', help="input test set FASTA file")
    parser.add_argument('-o', '--output', help="output test set prediction filename")
    parser.add_argument('-v', dest='verbose', action='store_true')
    args = parser.parse_args()

fasta1 = pd.read_csv(args.testfasta,header=None)
fasta2 = fasta1[0].values
pattern='>'
fasta3=[]
fasta4=[]
for i in range(0,len(fasta2)):
	if pattern in fasta2[i]:
		fasta3.append(fasta2[i])

for i in range(0,len(fasta3)):
	temp=fasta3[i][1:]
	fasta4.append(temp)

def predictTestData(train,test):
	pandas2ri.activate()
	ro.conversion.py2ri = ro.numpy2ri
	ro.numpy2ri.activate()
	df1 = pd.read_csv(train)
	df2 = pd.read_csv(train)
	df3 = pd.read_csv(test)
	df31 = np.asarray(pd.read_csv(test))
	Xtrain = np.asarray(df1.iloc[:, :-1])
	Xtest = np.asarray(df3.iloc[:, :-1])
	ytr=df2.iloc[:,-1].values
	yte=np.random.randint(1,3,len(df3))
	irf = importr("iRF")
	auc = importr("AUC")
	base = importr("base")
	graphics = importr("graphics")
	grdevices = importr("grDevices")
	R = ro.r
	Xtr_mat1 = numpy2ri(Xtrain)
	Xte_mat1 = numpy2ri(Xtest)
	ytr_mat = ro.FactorVector(ytr)
	yte_mat = ro.FactorVector(yte)
	Xtr_mat = r.assign("bar", Xtr_mat1)
	Xte_mat = r.assign("bar", Xte_mat1)
	tempyte_mat = ytr_mat
	ncol=robjects.r('ncol')
	rep=robjects.r('rep')
	p1=ncol(df2)
	p=p1[0]
	selprob = rep(1/p,p)
	rf = robjects.r('list()')
	b = irf.randomForest(Xtr_mat, ytr_mat, Xte_mat, base.sample(yte_mat), selprob, ntree=400)
	print('Prediction finished')
	pred_1 = list(b[16][0])
	return pred_1

def resultOutput(prediction,output):
	pred_2 = []
	for i in range(0,len(prediction)):
		if prediction[i]==1:
			pred_2.append('coding')
		elif prediction[i]==2:
			pred_2.append('noncoding')
	
	pred1 = pd.DataFrame(pred_2)
	pred2=pred1.rename(index=str, columns={0: "Prediction"})
	fasta5=pd.DataFrame(fasta4)
	fasta6=fasta5.rename(index=str, columns={0: "Sequence_name"})
	pfasta=[fasta6,pred2]
	result = pd.concat([fasta6,pred2],axis=1)
	#return result
	result.to_csv(output, sep=',',index=False)

preds_1 = predictTestData(args.training,args.test)
res = resultOutput(preds_1,args.output)
