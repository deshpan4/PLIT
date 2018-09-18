#!/usr/bin/env python
'''manipulate fasta for fastq format files.'''

#import built-in modules
import re
import sys
from string import maketrans
from optparse import OptionParser
import collections
#import third-party modules

#changes to the paths

#changing history to this module


__author__ = "Liguo Wang"
__copyright__ = "Copyright 2010, Wei Li's Lab"
__credits__ = []
__license__ = "GPL"
__version__ = "1.0.1"
__maintainer__ = "Liguo Wang"
__email__ = "liguow@bcm.edu"
__status__ = "Development" #Prototype or Production



class Fasta:
	'''manipulate fasta or fastq format file
	'''
	
	def __init__(self,fastafile=None):
		'''initialize object, lowercase in sequence is automatically converted into uppercase'''
		self.seqs={}
		self.IDs=[]
		self.transtab = maketrans("ACGTNX","TGCANX")
		self.filename = fastafile
		tmpseq=''
		if fastafile is not None:
			for line in open(fastafile,'r'):
				line=line.strip(' \n')
				if line.startswith('>'):
					if(tmpseq):
						self.seqs[name]=tmpseq
					name='_'.join(line[1:].split(' '))
					tmpseq =''
					self.IDs.append(name)
					#print >>sys.stderr,"\tloading "+name+' ...'
				else:
					tmpseq += line.upper()
			self.seqs[name]=tmpseq
				
	def addSeq(self,id,seq):
		'''add sequence to current data'''
		if self.seqs.has_key(id):
			print >>sys.stderr,id +" already exists!"
			return
		else:
			self.seqs[id]=seq.upper()
			self.IDs.append(id)
			
	def getNames (self,file=None):
		'''return all sequence IDs'''
		return self.IDs
		
	def getSeq(self,seqID=None):
		'''return sequence for sepcified seqID, otherwise all sequences are returned'''
		if seqID is None:
			return self.seqs.values()
		else:
			return self.seqs[seqID]
	def getSeqLen(self,seqID=None):
		seqlen=collections.defaultdict(dict)
		if seqID is None:
			for (k,v) in self.seqs.items():
				seqlen[k]=len(v)
		else:
			try:
				seqlen[seqID]=len(self.seqs[seqID])
			except:
				print >>sys.stderr,"Not found"
		return seqlen
			
	def countBase(self,pattern=None):
		'''count occurence of substring (defined by pattern), otherwise count A,C,G,T,N,X
		NOTE: pattern is counted non-overlappingly'''
		if pattern is None:
			print "ID\tTotal\tA\tC\tG\tT\tN\tX"
			for (k,v) in self.seqs.items():
				print k+"\t",
				print len(v),"\t",
				print str(v.count('A'))+"\t",
				print str(v.count('C'))+"\t",
				print str(v.count('G'))+"\t",
				print str(v.count('T'))+"\t",
				print str(v.count('N'))+"\t",
				print v.count('X')
		else:
			for (k,v) in self.seqs.items():
				print k+"\t",
				print str(len(v))+"\t",
				print v.count(pattern)

	def countBaseSlidingWindow(self,pattern,stepSize=50):
		'''count occurence of substring (defined by pattern), otherwise count A,C,G,T,N,X
		NOTE: pattern is counted non-overlappingly'''
		
		for (k,v) in self.seqs.items():
			total_length = len(v)
			for start in xrange(0,total_length,stepSize):
				end = start + stepSize
				if end < total_length:
					frq = 1.0 * v[start:end].count(pattern)/stepSize
					print '\t'.join([str(i) for i in (k, start, end, frq)])
				else:
					frq = 1.0 * v[start:total_length].count(pattern)/len(v[start:total_length])
					print '\t'.join([str(i) for i in (k, start, total_length, frq)])
					

		
	def revComp(self,seqID=None):
		'''return reverse-complemented sequence for sepcified seqID, otherwise all sequences are 
		reverse-complemented'''
		if seqID is None:
			for (k,v) in self.seqs.items():
				print ">" + k + "_rev"
				tmp = v.translate(self.transtab)
				return tmp[::-1]			
		else:
			return self.seqs[seqID].translate(self.transtab)[::-1]

			
	def getUniqSeqs(self):
		'''remove redundancy from original fasta files.
		duplicated sequences will be only report once'''

		seq2Name={}
		seq2Count={}
		for (key,value) in self.seqs.items():
			seq2Name[value]=key
			if seq2Count.has_key(value):
				seq2Count[value]+=1
			else:
				seq2Count[value]=1
		for value in seq2Name.keys():
				print '>'+ str(seq2Name[value]) + '_' + str(seq2Count[value])
				print value


	def findPattern(self,pat,outfile,seqID=None,rev=True):
		''' find pattern in all sequence unless seqID is specified, coordinates will be returned as bed format file'''
		
		fout=open(outfile,'w')
		length=len(pat)	

		Pat=pat.upper()
		start=0
		
		
		if seqID is None:
			for (k,v) in self.seqs.items():
				loopSwitch=0
				start=0
				while loopSwitch !=-1:
					loopSwitch = v.find(Pat,start)
					if loopSwitch !=-1:
						print >>fout,k + "\t" + str(loopSwitch) + "\t" + str(loopSwitch + length) + "\t" + Pat + "\t0\t+" 
						start = loopSwitch +1
					
		else:
			loopSwitch=0
			start=0
			while loopSwitch !=-1:
				loopSwitch = self.seqs[seqID].find(Pat,start)
				print >>fout, seqID + "\t" + str(loopSwitch) + "\t" + str(loopSwitch + length) + "\t" + Pat + "\t0\t+" 
				start = loopSwitch +1

		if rev==True:
			Pat_rev=Pat.translate(self.transtab)[::-1]
			if seqID is None:
				for (k,v) in self.seqs.items():
					loopSwitch=0
					start=0
					while loopSwitch !=-1:
						loopSwitch = v.find(Pat_rev,start)
						if loopSwitch !=-1:
							print >>fout,k + "\t" + str(loopSwitch) + "\t" + str(loopSwitch + length) + "\t" + Pat + "\t0\t-" 
							start = loopSwitch +1
						
			else:
				loopSwitch=0
				start=0
				while loopSwitch !=-1:
					loopSwitch = self.seqs[seqID].find(Pat_rev,start)
					print >>fout, seqID + "\t" + str(loopSwitch) + "\t" + str(loopSwitch + length) + "\t" + Pat + "\t0\t-" 
					start = loopSwitch +1		

	def fetchSeq(self,chr=None,st=None,end=None,infile=None,outfile=None):
		''' Fetching sequence based on chrName (should be exactly the same as fasta file), St, End. 
		NOTE: the coordinate is 0-based,half-open. use infile to specify multiple coordinates. infile
		should be bed3, bed6 or bed12'''

		if (infile is not None) and (outfile is not None):
			fout=open(outfile,'w')
			for line in open(infile):
				fields=line.strip().split()
				if (len(fields)==3):
					print >>fout,fields[0]+":"+fields[1]+"-"+fields[2]+"\t"+"strand=+"
					print >>fout,self.seqs[fields[0]][int(fields[1]):int(fields[2])].upper()
				elif (len(fields)>3):
					if fields[5]=='-':
						print >>fout,fields[0]+":"+fields[1]+"-"+fields[2]+"\t"+"strand=-"
						print >>fout,self.seqs[fields[0]][int(fields[1]):int(fields[2])].translate(self.transtab)[::-1].upper()
					else:
						print >>fout,fields[0]+":"+fields[1]+"-"+fields[2]+"\t"+"strand=+"
						print >>fout,self.seqs[fields[0]][int(fields[1]):int(fields[2])].upper()
		else:
			try:
				return self.seqs[chr][st:end].upper()
			except:
				print >>sys.stderr, "cannot fetch sequence from " + self.filename + " for " + chr + ":" + str(st) + "-" + str(end)
				return ''
				#print >>sys.stderr, chr + "\t" + str(st) +'\t' + str(end) + "  Please input chr,st,end"
def reverse_comp1(seq):
	'''reverse complement DNA sequences'''
	swap = {"A":"T", "T":"A", "C":"G", "G":"C","N":"N","X":"X"}
	tmp = "".join(swap[b] for b in seq.upper())
	return tmp[::-1]

def reverse_comp2(seq):
	'''reverse complement DNA sequences'''
	from string import maketrans
	transtab = maketrans("ACGTNX","TGCANX")
	return seq.upper().translate(transtab)[::-1]
						
def main():
	obj=Fasta(sys.argv[1])	#Fasta file
	obj.countBaseSlidingWindow(pattern = sys.argv[2])	#nucleotide pattern want to count

if __name__ == "__main__":
    main()
	
