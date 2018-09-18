#!/bin/bash
while [ "$#" -gt 0 ]; do
  case "$1" in
    -testc) testcodingfile="$2"; shift 2;;
    -testl) testlncfile="$2"; shift 2;;
    -fasta) fastafile="$2"; shift 2;;
    -output) outputfile="$2"; shift 2;;
    -scripts) scriptsdir="$2"; shift 2;;
    -b) bindir="$2"; shift 2;;
    -cpat) cpatdir="$2"; shift 2;;

    --codingfile=*) codingfile="$2"; shift 1;;
    --lnoncodingfile=*) lnoncodingfile="$2"; shift 1;;
    --bindir=*) bindir="$2"; shift 1;;
    --codingfile|--noncodingfile|--bindir) echo "$1 requires an argument" >&2; exit 1;;

    -*) echo "unknown option: $1" >&2; exit 1;;
    *) handle_argument "$1"; shift 1;;
  esac
done
echo 'Feature Extraction started'
/usr/bin/python2.7 ${cpatdir}/make_hexamer_tab.py -c ${testcodingfile} -n ${testlncfile} > hexamer-table.txt
Rscript ${scriptsdir}/calculate_hexamer_score.R ${fastafile}
mv Hexamer-Score.csv mRNA-hexamer-score.csv
sed '1d' mRNA-hexamer-score.csv > mRNA-hexamer-score1.csv
rm mRNA-hexamer-score.csv
mv mRNA-hexamer-score1.csv Test-hexamer-score.csv
#Rscript ${scriptsdir}/calculate_hexamer_score-linux-noInf.R ${testlncfile}
#mv Hexamer-Score.csv lncRNA-hexamer-score.csv
#sed '1d' lncRNA-hexamer-score.csv > lncRNA-hexamer-score1.csv
#rm lncRNA-hexamer-score.csv
#mv lncRNA-hexamer-score1.csv Test-lncRNA-hexamer-score.csv
#cat Test-mRNA-hexamer-score.csv Test-lncRNA-hexamer-score.csv > Test-hexamer-score.csv
#rm Test-mRNA-hexamer-score.csv Test-lncRNA-hexamer-score.csv
nodejs ${bindir}/extractORFSequenceFeatures.js --input ${fastafile} --output1 t1.csv --output2 t2.csv
bash ${bindir}/matrixTranspose.sh t1.csv $PWD/ATH-trimmed-base-translate.csv
rm t1.csv
nodejs ${bindir}/extractFickettScore.js --input ${fastafile} --output1 t1.csv --output2 t2.csv
bash ${bindir}/matrixTranspose.sh t1.csv $PWD/ATH-trimmed-fickett-score.csv
rm t1.csv
nodejs ${bindir}/extractCodonBiasMeasures.js --input ${fastafile} --output1 t1.csv --output2 t2.csv
bash ${bindir}/matrixTranspose.sh t1.csv $PWD/ATH-trimmed-codon-bias.csv
rm t1.csv
head -n -2 ATH-trimmed-fickett-score.csv > ATH-trimmed-fickett-score1.csv
rm ATH-trimmed-fickett-score.csv
mv ATH-trimmed-fickett-score1.csv ATH-trimmed-fickett-score.csv
head -n -1 ATH-trimmed-base-translate.csv > ATH-trimmed-base-translate1.csv
rm ATH-trimmed-base-translate.csv
mv ATH-trimmed-base-translate1.csv ATH-trimmed-base-translate.csv
head -n -1 ATH-trimmed-codon-bias.csv > ATH-trimmed-codon-bias1.csv
rm ATH-trimmed-codon-bias.csv
mv ATH-trimmed-codon-bias1.csv ATH-trimmed-codon-bias.csv
paste -d',' ATH-trimmed-base-translate.csv ATH-trimmed-fickett-score.csv ATH-trimmed-codon-bias.csv > ATH-trimmed.csv
cut -d',' -f3,5-8,10,12,14-78 ATH-trimmed.csv > ATH-trimmed1.csv
sed '1d' ATH-trimmed1.csv > ATH-trimmed2.csv
sed 's/NaN/0/g' ATH-trimmed2.csv > ATH-trimmed3.csv
sed 's/-Infinity/0/g' ATH-trimmed3.csv > ATH-trimmed4.csv
rm ATH-trimmed1.csv ATH-trimmed2.csv ATH-trimmed3.csv
mv ATH-trimmed4.csv ATH-trimmed.csv
rm ATH-trimmed-fickett-score.csv ATH-trimmed-base-translate.csv ATH-trimmed-codon-bias.csv
mv ATH-trimmed.csv fastafilefeatures.csv 
paste -d',' Test-hexamer-score.csv fastafilefeatures.csv > fastafilefeatures1.csv
cat ${bindir}/header-com-1.csv fastafilefeatures1.csv > fastafilefeatures2.csv
Rscript ${bindir}/appendSpecies.R
mv fastafilefeatures3.csv ${outputfile}
echo "Finished Feature extraction"