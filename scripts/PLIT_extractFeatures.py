from __future__ import division
import argparse
import os, sys, getopt
import itertools
from itertools import islice
from collections import defaultdict
from collections import Counter
import numpy as np
import csv
import re
import math
import pandas as pd
sys.path.append("/home/sumukh/Downloads/CPAT-1.2.2/lib/")
from cpmodule.FrameKmer import kmer_freq_file


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('-c', '--coding',help='input coding FASTA file')
    parser.add_argument('-n', '--noncoding',help='input non-coding FASTA file')
    parser.add_argument('-f', '--fasta',help='input target FASTA file for extracting features')
    parser.add_argument('-o', '--output',help='output CSV feature matrix filename')
    parser.add_argument('-v', dest='verbose', action='store_true')
    args = parser.parse_args()

wordsArr=[]
hexamerArray = []
codingArray = []
noncodingArray = []
header = []
a1=[]
a2=[]
b1=[]
b2=[]
c1=[]
c2=[]

ra1=[]
ra2=[]
rb1=[]
rb2=[]
rc1=[]
rc2=[]
alt_map = {'ins':'0'}
complement = {'A': 'T', 'C': 'G', 'G': 'C', 'T': 'A'} 
filename = args.fasta

pattern='>'

with open(filename) as f:
 data = f.readlines()
 i = 0
 for line in data:
 	if pattern in line:
 		data.pop(i)
 	i += 1

wordsArr1=[]
for i in range(0,len(data)):
	wordsArr1.append(data[i].strip('\n'))

wordsArr=[]
for i in range(0,len(data)):
	wordsArr.append(list(wordsArr1[i]))


def reverse_complement(seq):    
    for k,v in alt_map.iteritems():
        seq = seq.replace(k,v)
    bases = list(seq) 
    bases = reversed([complement.get(base,base) for base in bases])
    bases = ''.join(bases)
    for k,v in alt_map.iteritems():
        bases = bases.replace(v,k)
    return bases

def aggregateCodonsAminoAcids(sequenceArray):
	c1=[]
	c2=[]
	for i in range(0,len(sequenceArray)):
		c1=[]
		for j in range(0,len(sequenceArray[i])):
			if sequenceArray[i][j] == 'TTC' or sequenceArray[i][j] == 'TTT':
				codon='F'
				c1.append(codon)
			elif sequenceArray[i][j] == 'TTA' or sequenceArray[i][j] == 'TTG' or sequenceArray[i][j] == 'CTT' or sequenceArray[i][j] == 'CTC' or sequenceArray[i][j] == 'CTA' or sequenceArray[i][j] == 'CTG':
				codon='L'
				c1.append(codon)
			elif sequenceArray[i][j] == 'ATT' or sequenceArray[i][j] == 'ATC' or sequenceArray[i][j] == 'ATA':
				codon='I'
				c1.append(codon)
			elif sequenceArray[i][j] == 'ATG':
				codon='M'
				c1.append(codon)
			elif sequenceArray[i][j] == 'GTT' or sequenceArray[i][j] == 'GTC' or sequenceArray[i][j] == 'GTA' or sequenceArray[i][j] == 'GTG':
				codon='V'
				c1.append(codon)
			elif sequenceArray[i][j] == 'TCT' or sequenceArray[i][j] == 'TCC' or sequenceArray[i][j] == 'TCA' or sequenceArray[i][j] == 'TCG' or sequenceArray[i][j] == 'AGT' or sequenceArray[i][j] == 'AGC':
				codon='S'
				c1.append(codon)
			elif sequenceArray[i][j] == 'CCT' or sequenceArray[i][j] == 'CCC' or sequenceArray[i][j] == 'CCA' or sequenceArray[i][j] == 'CCG':
				codon='P'
				c1.append(codon)
			elif sequenceArray[i][j] == 'ACT' or sequenceArray[i][j] == 'ACC' or sequenceArray[i][j] == 'ACA' or sequenceArray[i][j] == 'ACG':
				codon='T'
				c1.append(codon)
			elif sequenceArray[i][j] == 'GCT' or sequenceArray[i][j] == 'GCC' or sequenceArray[i][j] == 'GCA' or sequenceArray[i][j] == 'GCG':
				codon='A'
				c1.append(codon)
			elif sequenceArray[i][j] == 'TAT' or sequenceArray[i][j] == 'TAC':
				codon='Y'
				c1.append(codon)
			elif sequenceArray[i][j] == 'TAA' or sequenceArray[i][j] == 'TAG' or sequenceArray[i][j] == 'TGA':
				codon='-'
				c1.append(codon)
			elif sequenceArray[i][j] == 'CAT' or sequenceArray[i][j] == 'CAC':
				codon='H'
				c1.append(codon)
			elif sequenceArray[i][j] == 'CAA' or sequenceArray[i][j] == 'CAG':
				codon='Q'
				c1.append(codon)
			elif sequenceArray[i][j] == 'AAT' or sequenceArray[i][j] == 'AAC':
				codon='N'
				c1.append(codon)
			elif sequenceArray[i][j] == 'AAA' or sequenceArray[i][j] == 'AAG':
				codon='K'
				c1.append(codon)
			elif sequenceArray[i][j] == 'GAT' or sequenceArray[i][j] == 'GAC':
				codon='D'
				c1.append(codon)
			elif sequenceArray[i][j] == 'GAA' or sequenceArray[i][j] == 'GAG':
				codon='E'
				c1.append(codon)
			elif sequenceArray[i][j] == 'TGT' or sequenceArray[i][j] == 'TGC':
				codon='C'
				c1.append(codon)
			elif sequenceArray[i][j] == 'TGG':
				codon='W'
				c1.append(codon)
			elif sequenceArray[i][j] == 'CGT' or sequenceArray[i][j] == 'CGC' or sequenceArray[i][j] == 'CGA' or sequenceArray[i][j] == 'CGG' or sequenceArray[i][j] == 'AGA' or sequenceArray[i][j] == 'AGG':
				codon='R'
				c1.append(codon)
			elif sequenceArray[i][j] == 'GGT' or sequenceArray[i][j] == 'GGC' or sequenceArray[i][j] == 'GGA' or sequenceArray[i][j] == 'GGG':
				codon='G'
				c1.append(codon)
		c2.append(c1)
	
	return(c2)

wordsArr2=[]

def extractORF(forwardFrameArray,sequenceArray):

	a1, a2, b1, b2, c1, c2, ra1, ra2, rb1, rb2, rc1, rc2 = ([] for i in range(12))
	
	for i in range(0,len(wordsArr)):
		a1=[]
		for x in range(0,len(wordsArr[i]),3):
			list1 = wordsArr[i][x:x+3]
			list2 = ''.join(map(str,list1))
			a1.append(list2)
		a2.append(a1)
	
	for i in range(0,len(wordsArr)):
		b1=[]
		for x in range(1,len(wordsArr[i]),3):
			list1 = wordsArr[i][x:x+3]
			list2 = ''.join(map(str,list1))
			b1.append(list2)
		b2.append(b1)
	
	for i in range(0,len(wordsArr)):
		c1=[]
		for x in range(2,len(wordsArr[i]),3):
			list1 = wordsArr[i][x:x+3]
			list2 = ''.join(map(str,list1))
			c1.append(list2)
		c2.append(c1)
	
	for i in range(0,len(wordsArr1)):
		wordsArr2.append(reverse_complement(wordsArr1[i]))
	
	for i in range(0,len(wordsArr2)):
		ra1=[]
		temp1=list(wordsArr2[i])
		for x in range(0,len(temp1),3):
			list1 = temp1[x:x+3]
			list2 = ''.join(map(str,list1))
			ra1.append(list2)
		ra2.append(ra1)
	
	for i in range(0,len(wordsArr2)):
		rb1=[]
		temp1=list(wordsArr2[i])
		for x in range(1,len(temp1),3):
			list1 = temp1[x:x+3]
			list2 = ''.join(map(str,list1))
			rb1.append(list2)
		rb2.append(rb1)
	
	for i in range(0,len(wordsArr2)):
		rc1=[]
		temp1=list(wordsArr2[i])
		for x in range(2,len(temp1),3):
			list1 = temp1[x:x+3]
			list2 = ''.join(map(str,list1))
			rc1.append(list2)
		rc2.append(rc1)
	
	arrayAll, array11, array2, array3, rarray1, rarray2, rarray3 = ([] for i in range(7))
	
	array11.append(aggregateCodonsAminoAcids(a2))
	array2.append(aggregateCodonsAminoAcids(b2))
	array3.append(aggregateCodonsAminoAcids(c2))
	rarray1.append(aggregateCodonsAminoAcids(ra2))
	rarray2.append(aggregateCodonsAminoAcids(rb2))
	rarray3.append(aggregateCodonsAminoAcids(rc2))
	
	arrayAll.append(array11)
	arrayAll.append(array2)
	arrayAll.append(array3)
	arrayAll.append(rarray1)
	arrayAll.append(rarray2)
	arrayAll.append(rarray3)
	orfArray1=[]
	orfArray2=[]
	orfArray1=[]
	orfArr22=[]
	testing1=arrayAll
	for i in range(0,len(testing1)):
		orfArr2=[]
		for j in range(0,len(testing1[i])):
			orfArr1=[]
			for k in range(0,len(testing1[i][j])):
				test3=[]
				a=[]
				b=[]
				c=[]
				d=[]
				x=0
				a = [m for m, n in enumerate(testing1[i][j][k]) if n == "-"]
				b = [m for m, n in enumerate(testing1[i][j][k]) if n == "M"]
				if not a:
					a.append(len(testing1[i][j][k]))
				for s in range(0,len(b)):
					while b[s] > a[x] and b[s] < a[len(a)-1]:
						x=x+1
					if len(c) == 0:
						c.append(a[x])
						d.append(b[s])
					elif b[s] > a[x]:
						c.append(len(testing1[i][j][k]))
						d.append(b[s])
						break
					elif a[x] == c[len(c)-1]:
						continue
					else:
						c.append(a[x])	
						d.append(b[s])
				for t in range(0,len(c)):
						test2=testing1[i][j][k][d[t]:c[t]]
						test3.append(test2)
				orfArr1.append(test3)
			orfArr2.append(orfArr1)
		orfArr22.append(orfArr2)
	orfArr4=[]
	orfArr44=[]
	for i in range(0,len(orfArr22)):
		orfArr4=[]
		for j in range(0,len(orfArr22[i])):
			orfArr3=[]
			orfArr3 = [x for x in orfArr22[i][j] if x != []]
			orfArr4.append(orfArr3)
		orfArr44.append(orfArr4)
	
	orfArr444=[]
	orfArr4444=[]
	for i in range(0,len(orfArr22)):
		orfArr444=[]
		for j in range(0,len(orfArr22[i])):
			if not orfArr22[i][j]:
				item='X'
				orfArr444.append(item)
			if orfArr22[i][j]:
				item=orfArr22[i][j]
				orfArr444.append(item)
		orfArr4444.append(orfArr444)

	return orfArr4444

orfRes=extractORF(wordsArr,wordsArr1)

orfLenMax1=[]
orfLenMax2=[]

for t in range(0,len(orfRes)):
	orfLenMax1=[]
	for i in range(0,len(orfRes[t])):
		orfLen=[]
		for j in range(0,len(orfRes[t][i])):
			orfLen1=[]
			for k in range(0,len(orfRes[t][i][j])):
				if orfRes[t][i][j][k]=='X':
					a = 0
					orfLen1.append(0)
					orfLen1.append(0)
				else:
					a = len(orfRes[t][i][j][k])
					orfLen1.append(a)
			orfLen.append(orfLen1)
		orfLenMax1.append(max(orfLen))
	orfLenMax2.append(orfLen)

maxOrf=[]
for i in range(0,len(orfLenMax2)):
	maxOrf1=[]
	for j in range(0,len(orfLenMax2[i])):
		if orfLenMax2[i][j] == []:
			maxOrf1.append(0)
		else:
			maxOrf1.append(max(orfLenMax2[i][j]))
	maxOrf.append(maxOrf1)

maxOrf2=np.maximum.reduce(maxOrf)

print("Maximum ORF lengths of sequences: ",maxOrf2)

print("**************************** GC percent *******************************************")

gcCount=[]

for i in range(0,len(wordsArr1)):
	gcCount.append(wordsArr1[i].count('GC'))

print("GC count: ",np.asarray(gcCount))

print("**************************** Transcript length *******************************************")

transcriptLen=[]

for i in range(0,len(wordsArr1)):
	transcriptLen.append(len(wordsArr1[i]))

transcriptLen1=np.asarray(transcriptLen)
print("Transcript length: ",np.asarray(transcriptLen))


print("**************************** ORF Coverage *******************************************")

orfCov=[]

for i in range(0,len(wordsArr1)):
	orfCov.append(maxOrf2[i]/transcriptLen1[i])

orfCov1=np.asarray(orfCov)
print("ORF Coverage: ",orfCov1)

print("**************************** Mean ORF Coverage *******************************************")


maxOrfnp = np.asarray(maxOrf)

print("sum of orf: ",np.sum(maxOrf,axis=0))

sumORF=np.sum(maxOrf,axis=0)

meanO1=[]
for i in range(0,len(sumORF)):
	meanO1.append((sumORF[i]/6)/transcriptLen1[i])

print("Mean ORF Coverage: ",np.asarray(meanO1))

print("**************************** Fickett Score *******************************************")

def computeFickettScore(seqs):
	aposArr=[]
	tposArr=[]
	gposArr=[]
	cposArr=[]
	atgcGlobalArr=[]
	for i in range(0,len(seqs)):
		atgcGlobalArr1=[]
		atgcGlobalArr2=[]
		atgcGlobalArr3=[]
		atgcGlobalArr4=[]
		for j in range(0,len(seqs[i]),3):
			if seqs[i][j] == 'A':
				aposArr.append(seqs[i][j])
			elif seqs[i][j] == 'T':
				tposArr.append(seqs[i][j])
			elif seqs[i][j] == 'G':
				gposArr.append(seqs[i][j])
			elif seqs[i][j] == 'C':
				cposArr.append(seqs[i][j])
		atgcGlobalArr1.append(len(aposArr))
		atgcGlobalArr1.append(len(tposArr))
		atgcGlobalArr1.append(len(gposArr))
		atgcGlobalArr1.append(len(cposArr))
		aposArr=[]
		tposArr=[]
		gposArr=[]
		cposArr=[]
		for k in range(1,len(seqs[i]),3):
			if seqs[i][k] == 'A':
				aposArr.append(seqs[i][j])
			elif seqs[i][k] == 'T':
				tposArr.append(seqs[i][j])
			elif seqs[i][k] == 'G':
				gposArr.append(seqs[i][j])
			elif seqs[i][k] == 'C':
				cposArr.append(seqs[i][j])
		atgcGlobalArr2.append(len(aposArr))
		atgcGlobalArr2.append(len(tposArr))
		atgcGlobalArr2.append(len(gposArr))
		atgcGlobalArr2.append(len(cposArr))
		aposArr=[]
		tposArr=[]
		gposArr=[]
		cposArr=[]			
		for l in range(2,len(seqs[i]),3):
			if seqs[i][j] == 'A':
				aposArr.append(seqs[i][j])
			elif seqs[i][l] == 'T':
				tposArr.append(seqs[i][j])
			elif seqs[i][l] == 'G':
				gposArr.append(seqs[i][j])
			elif seqs[i][l] == 'C':
				cposArr.append(seqs[i][j])
		atgcGlobalArr3.append(len(aposArr))
		atgcGlobalArr3.append(len(tposArr))
		atgcGlobalArr3.append(len(gposArr))
		atgcGlobalArr3.append(len(cposArr))
		atgcGlobalArr4.append(atgcGlobalArr1)
		atgcGlobalArr4.append(atgcGlobalArr2)
		atgcGlobalArr4.append(atgcGlobalArr3)
		atgcGlobalArr.append(atgcGlobalArr4)	

	maxValArr2=[]
	for i in range(0,len(atgcGlobalArr)):
		maxValArr1=[]
		maxVal=np.maximum.reduce(atgcGlobalArr[i])
		maxValArr1.append(maxVal)
		maxValArr2.append(maxValArr1)


	minValArr2=[]
	for i in range(0,len(atgcGlobalArr)):
		minValArr1=[]
		minVal=np.minimum.reduce(atgcGlobalArr[i])
		minValArr1.append(minVal)
		minValArr2.append(minValArr1)

	aPosValArr=[]
	tPosValArr=[]
	gPosValArr=[]
	cPosValArr=[]
	posValArr1=[]
	posValArr2=[]
	for i in range(0,len(maxValArr2)):
		posValArr1=[]
		for j in range(0,len(maxValArr2[i])):
			for k in range(0,len(maxValArr2[i][j])):
				posVal = maxValArr2[i][j][k]/(minValArr2[i][j][k]+1)
				posValArr1.append(posVal)
		posValArr2.append(posValArr1)


	perValArr=[]
	for i in range(0,len(seqs)):
		baseArr1=[]
		baseArr1.append(seqs[i].count('A')/len(seqs[i]))
		baseArr1.append(seqs[i].count('T')/len(seqs[i]))
		baseArr1.append(seqs[i].count('G')/len(seqs[i]))
		baseArr1.append(seqs[i].count('C')/len(seqs[i]))
		perValArr.append(baseArr1)


	rangeArr1, rangeArr2, rangeArr3, rangeArr4, rangeArr5, rangeArr6, rangeArr7, rangeArr8, rangeArr9, rangeArr10 = ([] for i in range(10))
	rangeArr1=[0.0572,0.0297,0.0248,0.0414]
	rangeArr2=[0.0520,0.0297,0.0248,0.054]
	rangeArr3=[0.0884,0.066,0.0496,0.0594]
	rangeArr4=[0.117,0.178,0.083,0.091]
	rangeArr5=[0.1768,0.1452,0.1488,0.0864]
	rangeArr6=[0.1508,0.227,0.1643,0.1188]
	rangeArr7=[0.2418,0.2244,0.1984,0.1458]
	rangeArr8=[0.2184,0.3003,0.2294,0.126]
	rangeArr9=[0.1768,0.3201,0.2728,0.126]
	rangeArr10=[0.2444,0.3201,0.279,0.144]

	posProb=[]
	for i in range(0,len(posValArr2)):
		posProb1=[]
		for j in range(0,len(posValArr2[i])):
			if posValArr2[i][j] >= 0.0 and posValArr2[i][j] < 1.1:
				posProb1.append(rangeArr1[j])
			elif posValArr2[i][j] >= 1.1 and posValArr2[i][j] < 1.2:
				posProb1.append(rangeArr2[j])
			elif posValArr2[i][j] >= 1.2 and posValArr2[i][j] < 1.3:
				posProb1.append(rangeArr3[j])
			elif posValArr2[i][j] >= 1.3 and posValArr2[i][j] < 1.4:
				posProb1.append(rangeArr4[j])
			elif posValArr2[i][j] >= 1.4 and posValArr2[i][j] < 1.5:
				posProb1.append(rangeArr5[j])				
			elif posValArr2[i][j] >= 1.5 and posValArr2[i][j] < 1.6:
				posProb1.append(rangeArr6[j])				
			elif posValArr2[i][j] >= 1.6 and posValArr2[i][j] < 1.7:
				posProb1.append(rangeArr7[j])				
			elif posValArr2[i][j] >= 1.7 and posValArr2[i][j] < 1.8:
				posProb1.append(rangeArr8[j])				
			elif posValArr2[i][j] >= 1.8 and posValArr2[i][j] < 1.9:
				posProb1.append(rangeArr9[j])				
			elif posValArr2[i][j] >= 1.9:
				posProb1.append(rangeArr10[j])		
		posProb.append(posProb1)

	countArr1, countArr2, countArr3, countArr4, countArr5, countArr6, countArr7, countArr8, countArr9, countArr10 = ([] for i in range(10))
	countArr1=[0.0231,0.0812,0.0435,0.0372]
	countArr2=[0.0891,0.0714,0.0495,0.0468]
	countArr3=[0.0715,0.0966,0.0615,0.0528]
	countArr4=[0.0737,0.0784,0.0615,0.0516]
	countArr5=[0.0539,0.1050,0.1095,0.0708]
	countArr6=[0.0682,0.0770,0.0960,0.0708]
	countArr7=[0.0605,0.0560,0.0960,0.0768]
	countArr8=[0.0484,0.0546,0.0705,0.0612]
	countArr9=[0.0539,0.0336,0.0810,0.0768]
	countArr10=[0.0308,0.0392,0.06,0.098]

	countProb=[]
	for i in range(0,len(perValArr)):
		countProb1=[]
		for j in range(0,len(perValArr[i])):
			if perValArr[i][j] >= 0.0 and perValArr[i][j] < 0.17:
				countProb1.append(countArr1[j])
			elif perValArr[i][j] >= 0.17 and perValArr[i][j] < 0.19:
				countProb1.append(countArr2[j])
			elif perValArr[i][j] >= 0.19 and perValArr[i][j] < 0.21:
				countProb1.append(countArr3[j])
			elif perValArr[i][j] >= 0.21 and perValArr[i][j] < 0.23:
				countProb1.append(countArr4[j])
			elif perValArr[i][j] >= 0.23 and perValArr[i][j] < 0.25:
				countProb1.append(countArr5[j])				
			elif perValArr[i][j] >= 0.25 and perValArr[i][j] < 0.27:
				countProb1.append(countArr6[j])				
			elif perValArr[i][j] >= 0.27 and perValArr[i][j] < 0.29:
				countProb1.append(countArr7[j])				
			elif perValArr[i][j] >= 0.29 and perValArr[i][j] < 0.31:
				countProb1.append(countArr8[j])				
			elif perValArr[i][j] >= 0.31 and perValArr[i][j] < 0.33:
				countProb1.append(countArr9[j])				
			elif perValArr[i][j] >= 0.33 and perValArr[i][j] <= 0.99:
				countProb1.append(countArr10[j])
		countProb.append(countProb1)	

	hexScore=[]
	for i in range(0,len(seqs)):
		hexScore.append(np.sum(posProb[i])+np.sum(countProb[i]))

	return (np.asarray(hexScore))


res=computeFickettScore(wordsArr1)
print("Fickett score: ",res)


def computeHexamerScore(coding,noncoding,fasta):
	cod = kmer_freq_file(fastafile = coding, word_size = 6, step_size = 3, frame = 0)
	noncod = kmer_freq_file(fastafile = noncoding, word_size = 6, step_size = 1, frame = 0)
	cod_sum = 0.0
	cod_sum += sum(cod.values())
	noncod_sum = 0.0
	noncod_sum += sum(noncod.values())
	#print 'hexamer' + '\t' + 'coding' + '\t' + 'noncoding'
	hexScoreArr=[]
	for kmer in cod:
		hexamerArr1=[]
		if 'N' in kmer:
			continue
		hexamerArr1.append(kmer)
		hexamerArr1.append(float(cod[kmer]/cod_sum))
		hexamerArr1.append(float(noncod[kmer]/noncod_sum))
		hexScoreArr.append(hexamerArr1)
	iterables1=[]
	kmer=6
	for x in range(0,kmer):
		iterables1.append(['A','T','C','G'])
	iterables = [ ['A','T','C','G'], ['A','T','C','G'], ['A','T','C','G'] ]
	aList=[]
	aList1=[]
	for t in itertools.product(*iterables1):
		aList = ''.join(map(str,t))
		aList1.append(aList)
	freqArray=[]
	for i in range(0,len(fasta)):
		freqArray1=[]
		freqArray3=[]
		for j in range(0,len(aList1)):
			freqArray2=[]
			countval=fasta[i].count(aList1[j])
			freqArray2.append(aList1[j])
			freqArray2.append(countval)
			freqArray3.append(freqArray2)
		freqArray.append(freqArray3)
		#freqArray.append(freqArray1)

	f1=[]
	for i in range(0,len(freqArray)):
		f11=[]
		for j in range(0,len(freqArray[i])):
			if freqArray[i][j][1]==0:
				continue
			else:
				f11.append(freqArray[i][j])
		f1.append(f11)

	filteredHexArr=[]
	for i in range(0,len(f1)):
		fil2=[]
		for i2 in range(0,len(f1[i])):
			for j in range(0,len(hexScoreArr)):
				if f1[i][i2][0]==hexScoreArr[j][0]:
					fil1=[]
					if hexScoreArr[j][1]==0:
						fil1.append(0)
						fil2.append(fil1)
					else:
						fil1.append(math.log(hexScoreArr[j][1]/hexScoreArr[j][2]))
						fil2.append(fil1)
		filteredHexArr.append(fil2)

	hexamerVal=[]
	for i in range(0,len(filteredHexArr)):
		sumVal=np.sum(filteredHexArr[i])
		sumVal1=sumVal/len(filteredHexArr[i])
		hexamerVal.append(sumVal1)

	return hexamerVal


hexamerArr=computeHexamerScore(args.coding,args.noncoding,wordsArr1)

print("**************************** Hexamer score *******************************************")
print("Haxamer Score ",np.asarray(hexamerArr))

def extractFopValue(wordsArr):
	a2=[]
	for i in range(0,len(wordsArr)):
		a1=[]
		for x in range(0,len(wordsArr[i]),3):
			list1 = wordsArr[i][x:x+3]
			list2 = ''.join(map(str,list1))
			a1.append(list2)
		a2.append(a1)

	a3=[]	
	for i in range(0,len(a2)):
		a4=[]
		for j in range(0,len(a2[i])):
			if a2[i][j]=='TTA' or a2[i][j]=='CTA' or a2[i][j]=='TCA' or a2[i][j]=='CCA' or a2[i][j]=='AGC' or a2[i][j]=='GAC' or a2[i][j]=='AAC' or a2[i][j]=='GGC':
				a4.append(1)
		a3.append(len(a4))
	return a3

def countFrequenciesAA(wordsArr):
	a2=[]
	for i in range(0,len(wordsArr)):
		a1=[]
		for x in range(0,len(wordsArr[i]),3):
			list1 = wordsArr[i][x:x+3]
			list2 = ''.join(map(str,list1))
			a1.append(list2)
		a2.append(a1)

	freqAA1, freqAA2, freqAA3, freqAA4, freqAA5, freqAA6, freqAA7, freqAA8, freqAA9, freqAA10, freqAA11, freqAA12, freqAA13, freqAA14, freqAA15, freqAA16, freqAA17, freqAA18, freqAA19, freqAA20 = ([] for i in range(20))
	freqsAA=[]
	for i in range(0,len(a2)):
		freqsAA1, freqsAA2, freqsAA3, freqsAA4, freqsAA5, freqsAA6, freqsAA7, freqsAA8, freqsAA9, freqsAA10, freqsAA11, freqsAA12, freqsAA13, freqsAA14, freqsAA15, freqsAA16, freqsAA17, freqsAA18, freqsAA19, freqsAA20 = ([] for i in range(20))
		for j in range(0,len(a2[i])):
			if a2[i][j] == 'TTC' or a2[i][j] == 'TTT':
				codon='F'
				freqsAA1.append(1)
			elif a2[i][j] == 'TTA' or a2[i][j] == 'TTG' or a2[i][j] == 'CTT' or a2[i][j] == 'CTC' or a2[i][j] == 'CTA' or a2[i][j] == 'CTG':
				codon='L'
				freqsAA2.append(1)
			elif a2[i][j] == 'ATT' or a2[i][j] == 'ATC' or a2[i][j] == 'ATA':
				codon='I'
				freqsAA3.append(1)
			elif a2[i][j] == 'ATG':
				codon='M'
				freqsAA4.append(1)
			elif a2[i][j] == 'GTT' or a2[i][j] == 'GTC' or a2[i][j] == 'GTA' or a2[i][j] == 'GTG':
				codon='V'
				freqsAA5.append(1)
			elif a2[i][j] == 'TCT' or a2[i][j] == 'TCC' or a2[i][j] == 'TCA' or a2[i][j] == 'TCG' or a2[i][j] == 'AGT' or a2[i][j] == 'AGC':
				codon='S'
				freqsAA6.append(1)
			elif a2[i][j] == 'CCT' or a2[i][j] == 'CCC' or a2[i][j] == 'CCA' or a2[i][j] == 'CCG':
				codon='P'
				freqsAA7.append(1)
			elif a2[i][j] == 'ACT' or a2[i][j] == 'ACC' or a2[i][j] == 'ACA' or a2[i][j] == 'ACG':
				codon='T'
				freqsAA8.append(1)
			elif a2[i][j] == 'GCT' or a2[i][j] == 'GCC' or a2[i][j] == 'GCA' or a2[i][j] == 'GCG':
				codon='A'
				freqsAA9.append(1)
			elif a2[i][j] == 'TAT' or a2[i][j] == 'TAC':
				codon='Y'
				freqsAA10.append(1)
			elif a2[i][j] == 'CAT' or a2[i][j] == 'CAC':
				codon='H'
				freqsAA11.append(1)
			elif a2[i][j] == 'CAA' or a2[i][j] == 'CAG':
				codon='Q'
				freqsAA12.append(1)
			elif a2[i][j] == 'AAT' or a2[i][j] == 'AAC':
				codon='N'
				freqsAA13.append(1)
			elif a2[i][j] == 'AAA' or a2[i][j] == 'AAG':
				codon='K'
				freqsAA14.append(1)
			elif a2[i][j] == 'GAT' or a2[i][j] == 'GAC':
				codon='D'
				freqsAA15.append(1)
			elif a2[i][j] == 'GAA' or a2[i][j] == 'GAG':
				codon='E'
				freqsAA16.append(1)
			elif a2[i][j] == 'TGT' or a2[i][j] == 'TGC':
				codon='C'
				freqsAA17.append(1)
			elif a2[i][j] == 'TGG':
				codon='W'
				freqsAA18.append(1)
			elif a2[i][j] == 'CGT' or a2[i][j] == 'CGC' or a2[i][j] == 'CGA' or a2[i][j] == 'CGG' or a2[i][j] == 'AGA' or a2[i][j] == 'AGG':
				codon='R'
				freqsAA19.append(1)
			elif a2[i][j] == 'GGT' or a2[i][j] == 'GGC' or a2[i][j] == 'GGA' or a2[i][j] == 'GGG':
				codon='G'
				freqsAA20.append(1)
		freqsAAAll=len(freqsAA1)+len(freqsAA2)+len(freqsAA3)+len(freqsAA4)+len(freqsAA5)+len(freqsAA6)+len(freqsAA7)+len(freqsAA8)+len(freqsAA9)+len(freqsAA10)+len(freqsAA11)+len(freqsAA12)+len(freqsAA13)+len(freqsAA14)+len(freqsAA15)+len(freqsAA16)+len(freqsAA17)+len(freqsAA18)+len(freqsAA19)+len(freqsAA20)
		freqsAA.append(freqsAAAll)
	return freqsAA

fopValue=extractFopValue(wordsArr)
frequencyAA=countFrequenciesAA(wordsArr)

fopScore=[]
for i in range(0,len(wordsArr)):
	fopScore.append(fopValue[i]/frequencyAA[i])


print("**************************** Fop score *******************************************")
print("Fop Score ",np.asarray(fopScore))

out1 = np.column_stack((np.asarray(maxOrf2),np.asarray(gcCount)))
out2 = np.column_stack((out1,np.asarray(transcriptLen)))
out3 = np.column_stack((out2,orfCov1))
out4 = np.column_stack((out3,np.asarray(meanO1)))
out5 = np.column_stack((out4,res))
out6 = np.column_stack((out5,np.asarray(hexamerArr)))
out7 = np.column_stack((out6,np.asarray(fopScore)))

np.savetxt(args.output,out7,delimiter=",",fmt="%s")
