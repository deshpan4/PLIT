#!/bin/bash
file="$1"
grep -v 'NA' ${file} > output1.txt
grep -v 'NNN' output1.txt > output2.txt
sed 's/:/,/g' output2.txt > output2.csv
rm output1.txt
rm output2.txt
cut -d',' -f2 output.csv > output-FASTA.csv