#!/bin/bash
file="$1"
ls -l | awk '$3 == "transcript"' ${file} > g_max.gtf
cut -f9 g_max.gtf > col9.txt
cut -d';' -f4 col9.txt > oId1.txt
cut -d';' -f5 col9.txt > oId.txt
sed 's/ gene_id //g' oId1.txt > oId2.txt
sed 's/ transcript_id //g' oId.txt > oId-1.txt
sed 's/"//g' oId-1.txt > oId-2.txt
sed 's/"//g' oId2.txt > oId3.txt
cut -f1,4,5,7 g_max.gtf > col-1-4-5-7.txt
paste col-1-4-5-7.txt oId-2.txt oId3.txt > merged-cols.txt
rm col9.txt oId.txt oId-1.txt oId-2.txt col-1-4-5-7.txt oId1.txt oId2.txt oId3.txt
sed 's/\t/,/g' merged-cols.txt > merged-cols1.csv