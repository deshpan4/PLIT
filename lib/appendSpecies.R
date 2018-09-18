a<-read.csv("fastafilefeatures2.csv",header=T)
a1 = data.frame(floor(runif(nrow(a), min=1, max=3)))
colnames(a1) = "species"
a2 = cbind(a,a1)
write.csv(a2,quote=F,row.names=F,"fastafilefeatures3.csv")