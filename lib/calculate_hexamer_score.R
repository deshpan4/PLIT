library(Biostrings)
library(data.table)
args <- commandArgs(TRUE)
a<-read.delim("hexamer-table.txt",header = T,check.names = F)
seqs<-read.delim(args[1],header=F)
s1<-dim(seqs)
set4<-numeric(0)
for (t in 1:s1[1]) {
	#print(seqs[t,1])
	ex1<-seqs[t,1]
	ex2 <- DNAString(ex1)
	ex3 <- oligonucleotideFrequency(ex2, 6)
	set3<-numeric(0)
	for (t in 1:length(ex3)) {
		if(ex3[t]!=0){
			set3<-c(set3,ex3[t])
		} else {
			#print("hexamer with zero not appended")
		}
	}
	ex4<-data.frame(set3)
	ex5<-setDT(ex4, keep.rownames = TRUE)[]
	names(ex5)[names(ex5) == "rn"] <- "hexamer"
	ex5a<-merge(ex5,a,by="hexamer",all.x=T)
	ex5a$hexScore <- with(ex5a, log(coding/noncoding))
	ex5alen<-dim(ex5a)
	r <- with(ex5a, which(hexScore=='-Inf', arr.ind=TRUE))
	if(length(r)==0) { 
		hexScoreSeq<-sum(ex5a$hexScore)/ex5alen[1] 
		set4<-c(set4,hexScoreSeq)
	} else { 
	newd <- ex5a[-r, ]
	r1 <- with(newd, which(hexScore=='Inf', arr.ind=TRUE))
	if(length(r1)!=0) {
		newd1 <- newd[-r1, ]
		newd2<-na.omit(newd1)
		ex5alen<-dim(newd2)
		hexScoreSeq<-sum(newd2$hexScore)/ex5alen[1]
		set4<-c(set4,hexScoreSeq)
	} else {
		newd2<-na.omit(newd)
		ex5alen<-dim(newd2)
		hexScoreSeq<-sum(newd2$hexScore)/ex5alen[1]
		set4<-c(set4,hexScoreSeq)
	}
}
}
set4df<-data.frame(set4)
colnames(set4df) <- c("HexamerScore")
write.csv(set4df,quote = F,row.names = F,"Hexamer-Score.csv")
