var fs = require('fs'); 
var csv = require("fast-csv");
const argv = require('yargs').usage('Usage: $0 --input Input_filename --output1 Output_filename1')
    .demandOption(['input','output1'])
    .argv;
const spawn = require('child_process').spawn;

var ws = fs.createWriteStream(argv.output1);

var h1=['file']
var h2=['Frequency of optimal codons (Fop)']
var h3=['Codon Bias Index (CBI)']
var h4=['Codon Usage Bias (CUB)']
var h5=['Relative Codon Usage Bias (RCB)']
var h6=['Codon Preference Statistic (P)']
var h7=['Weighted sum of relative entropy (Ew)']
var h8=['Synonymous codon usage order (SCUO)']
var h7rcsuTTT=['RSCU value TTT']
var h7rcsuTTC=['RSCU value TTC']
var h7rcsuTTA=['RSCU value TTA']
var h7rcsuTTG=['RSCU value TTG']
var h7rcsuCTT=['RSCU value CTT']
var h7rcsuCTC=['RSCU value CTC']
var h7rcsuCTA=['RSCU value CTA']
var h7rcsuCTG=['RSCU value CTG']
var h7rcsuATT=['RSCU value ATT']
var h7rcsuATC=['RSCU value ATC']
var h7rcsuATA=['RSCU value ATA']
var h7rcsuATG=['RSCU value ATG']
var h7rcsuGTT=['RSCU value GTT']
var h7rcsuGTC=['RSCU value GTC']
var h7rcsuGTA=['RSCU value GTA']
var h7rcsuGTG=['RSCU value GTG']
var h7rcsuTCT=['RSCU value TCT']
var h7rcsuTCC=['RSCU value TCC']
var h7rcsuTCA=['RSCU value TCA']
var h7rcsuTCG=['RSCU value TCG']
var h7rcsuCCT=['RSCU value CCT']
var h7rcsuCCC=['RSCU value CCC']
var h7rcsuCCA=['RSCU value CCA']
var h7rcsuCCG=['RSCU value CCG']
var h7rcsuACT=['RSCU value ACT']
var h7rcsuACC=['RSCU value ACC']
var h7rcsuACA=['RSCU value ACA']
var h7rcsuACG=['RSCU value ACG']
var h7rcsuGCT=['RSCU value GCT']
var h7rcsuGCC=['RSCU value GCC']
var h7rcsuGCA=['RSCU value GCA']
var h7rcsuGCG=['RSCU value GCG']
var h7rcsuTAT=['RSCU value TAT']
var h7rcsuTAC=['RSCU value TAC']
var h7rcsuCAT=['RSCU value CAT']
var h7rcsuCAC=['RSCU value CAC']
var h7rcsuCAA=['RSCU value CAA']
var h7rcsuCAG=['RSCU value CAG']
var h7rcsuAAT=['RSCU value AAT']
var h7rcsuAAC=['RSCU value AAC']
var h7rcsuAAA=['RSCU value AAA']
var h7rcsuAAG=['RSCU value AAG']
var h7rcsuGAT=['RSCU value GAT']
var h7rcsuGAC=['RSCU value GAC']
var h7rcsuGAA=['RSCU value GAA']
var h7rcsuGAG=['RSCU value GAG']
var h7rcsuTGT=['RSCU value TGT']
var h7rcsuTGC=['RSCU value TGC']
var h7rcsuTGG=['RSCU value TGG']
var h7rcsuCGT=['RSCU value CGT']
var h7rcsuCGC=['RSCU value CGC']
var h7rcsuCGA=['RSCU value CGA']
var h7rcsuCGG=['RSCU value CGG']
var h7rcsuAGT=['RSCU value AGT']
var h7rcsuAGC=['RSCU value AGC']
var h7rcsuAGA=['RSCU value AGA']
var h7rcsuAGG=['RSCU value AGG']
var h7rcsuGGT=['RSCU value GGT']
var h7rcsuGGC=['RSCU value GGC']
var h7rcsuGGA=['RSCU value GGA']
var h7rcsuGGG=['RSCU value GGG']
var k1=0


var fileName=argv.input;
var output1=argv.output1
var file1 = fs.readFileSync(fileName,'utf8').toString().split("\n");

for(var i=1;i<file1.length+1;i++) {
	var h11='sequence-' + (i)
	h1.push(h11)
}

var freqTTT=[], freqTTC=[], freqTTA=[], freqTTG=[], freqCTT=[], freqCTC=[], freqCTA=[], freqCTG=[], freqATT=[], freqATC=[], freqATA=[], freqATG=[], freqGTT=[], freqGTC=[], freqGTA=[], freqGTG=[], freqTCT=[], freqTCC=[], freqTCA=[], freqTCG=[], freqCCT=[], freqCCC=[], freqCCA=[], freqCCG=[], freqACT=[], freqACC=[], freqACA=[], freqACG=[], freqGCT=[], freqGCC=[], freqGCA=[], freqGCG=[], freqTAT=[], freqTAC=[], freqTAA=[], freqTAG=[], freqTGA=[], freqCAT=[], freqCAC=[], freqCAA=[], freqCAG=[], freqAAT=[], freqAAC=[], freqAAA=[], freqAAG=[], freqGAT=[], freqGAC=[], freqGAA=[], freqGAG=[], freqTGT=[], freqTGC=[], freqTGG=[], freqCGT=[], freqCGC=[], freqCGA=[], freqCGG=[], freqAGT=[], freqAGC=[], freqAGA=[], freqAGG=[], freqGGT=[], freqGGC=[], freqGGA=[], freqGGG=[];
var freqTTT1=[], freqTTC1=[], freqTTA1=[], freqTTG1=[], freqCTT1=[], freqCTC1=[], freqCTA1=[], freqCTG1=[], freqATT1=[], freqATC1=[], freqATA1=[], freqATG1=[], freqGTT1=[], freqGTC1=[], freqGTA1=[], freqGTG1=[], freqTCT1=[], freqTCC1=[], freqTCA1=[], freqTCG1=[], freqCCT1=[], freqCCC1=[], freqCCA1=[], freqCCG1=[], freqACT1=[], freqACC1=[], freqACA1=[], freqACG1=[], freqGCT1=[], freqGCC1=[], freqGCA1=[], freqGCG1=[], freqTAT1=[], freqTAC1=[], freqTAA1=[], freqTAG1=[], freqTGA1=[], freqCAT1=[], freqCAC1=[], freqCAA1=[], freqCAG1=[], freqAAT1=[], freqAAC1=[], freqAAA1=[], freqAAG1=[], freqGAT1=[], freqGAC1=[], freqGAA1=[], freqGAG1=[], freqTGT1=[], freqTGC1=[], freqTGG1=[], freqCGT1=[], freqCGC1=[], freqCGA1=[], freqCGG1=[], freqAGT1=[], freqAGC1=[], freqAGA1=[], freqAGG1=[], freqGGT1=[], freqGGC1=[], freqGGA1=[], freqGGG1=[];

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream(argv.input)
});

lineReader.on('line', function (line) {

k1 = k1+1
process.stdout.clearLine();
process.stdout.cursorTo(0);
process.stdout.write("Finished processing FASTA sequences " + k1);


var a=line

var lengthL;

if(a.length < 5000) {
	lengthL=25
} else {
	lengthL=50
}	


//	Forward Frame 1
var a1=[]
var a2=[]
var a3=[]
var a4=[]
//var a1=a.aplit('')

var freq1=[]
var freq2=[]
var freq3=[]
var freq4=[]
var freq5=[]
var freq6=[]
var freq7=[]
var freq8=[]
var freq9=[]
var freq10=[]
var freq11stop=[]
var freq12=[]
var freq13=[]
var freq14=[]
var freq15=[]
var freq16=[]
var freq17=[]
var freq18=[]
var freq19=[]
var freq20=[]
var freq21=[]
var freq22=[]

//Circular RNA
var refTTTval=0.023
var refTTCval=0.019
var refTTAval=0.013
var refTTGval=0.019
var refCTTval=0.021
var refCTCval=0.019
var refCTAval=0.012
var refCTGval=0.030
var refATTval=0.019
var refATCval=0.016
var refATAval=0.012
var refATGval=0.023
var refGTTval=0.013
var refGTCval=0.012
var refGTAval=0.010
var refGTGval=0.020
var refTCTval=0.021
var refTCCval=0.019
var refTCAval=0.021
var refTCGval=0.005
var refCCTval=0.024
var refCCCval=0.019
var refCCAval=0.025
var refCCGval=0.007
var refACTval=0.017
var refACCval=0.017
var refACAval=0.022
var refACGval=0.005
var refGCTval=0.021
var refGCCval=0.019
var refGCAval=0.020
var refGCGval=0.005
var refTATval=0.014
var refTACval=0.012
var refTAAval=0.011
var refTAGval=0.008
var refTGAval=0.023
var refCATval=0.017
var refCACval=0.016
var refCAAval=0.021
var refCAGval=0.032
var refAATval=0.018
var refAACval=0.016
var refAAAval=0.027
var refAAGval=0.026
var refGATval=0.019
var refGACval=0.015
var refGAAval=0.028
var refGAGval=0.023
var refTGTval=0.018
var refTGCval=0.019
var refTGGval=0.025
var refCGTval=0.005
var refCGCval=0.005
var refCGAval=0.006
var refCGGval=0.007
var refAGTval=0.017
var refAGCval=0.020
var refAGAval=0.026
var refAGGval=0.020
var refGGTval=0.012
var refGGCval=0.017
var refGGAval=0.025
var refGGGval=0.017



/*
//Intergenic lncRNA
var refTTTval=0.026
var refTTCval=0.020
var refTTAval=0.014
var refTTGval=0.019
var refCTTval=0.021
var refCTCval=0.021
var refCTAval=0.012
var refCTGval=0.029
var refATTval=0.020
var refATCval=0.015
var refATAval=0.014
var refATGval=0.020
var refGTTval=0.013
var refGTCval=0.012
var refGTAval=0.009
var refGTGval=0.018
var refTCTval=0.023
var refTCCval=0.020
var refTCAval=0.021
var refTCGval=0.004
var refCCTval=0.023
var refCCCval=0.018
var refCCAval=0.025
var refCCGval=0.005
var refACTval=0.017
var refACCval=0.016
var refACAval=0.023
var refACGval=0.004
var refGCTval=0.018
var refGCCval=0.018
var refGCAval=0.018
var refGCGval=0.005
var refTATval=0.013
var refTACval=0.010
var refTAAval=0.016
var refTAGval=0.010
var refTGAval=0.023
var refCATval=0.019
var refCACval=0.019
var refCAAval=0.021
var refCAGval=0.028
var refAATval=0.021
var refAACval=0.017
var refAAAval=0.034
var refAAGval=0.026
var refGATval=0.015
var refGACval=0.014
var refGAAval=0.027
var refGAGval=0.024
var refTGTval=0.020
var refTGCval=0.019
var refTGGval=0.023
var refCGTval=0.004
var refCGCval=0.005
var refCGAval=0.004
var refCGGval=0.006
var refAGTval=0.016
var refAGCval=0.020
var refAGAval=0.029
var refAGGval=0.022
var refGGTval=0.012
var refGGCval=0.016
var refGGAval=0.023
var refGGGval=0.017*/


/*
//Intronic lncRNA
var refTTTval=0.043
var refTTCval=0.021
var refTTAval=0.020
var refTTGval=0.023
var refCTTval=0.022
var refCTCval=0.020
var refCTAval=0.013
var refCTGval=0.026
var refATTval=0.025
var refATCval=0.014
var refATAval=0.018
var refATGval=0.020
var refGTTval=0.017
var refGTCval=0.012
var refGTAval=0.012
var refGTGval=0.020
var refTCTval=0.024
var refTCCval=0.018
var refTCAval=0.021
var refTCGval=0.003
var refCCTval=0.022
var refCCCval=0.017
var refCCAval=0.021
var refCCGval=0.004
var refACTval=0.017
var refACCval=0.014
var refACAval=0.020
var refACGval=0.003
var refGCTval=0.018
var refGCCval=0.017
var refGCAval=0.017
var refGCGval=0.004
var refTATval=0.019
var refTACval=0.011
var refTAAval=0.019
var refTAGval=0.014
var refTGAval=0.022
var refCATval=0.019
var refCACval=0.017
var refCAAval=0.018
var refCAGval=0.025
var refAATval=0.023
var refAACval=0.014
var refAAAval=0.036
var refAAGval=0.021
var refGATval=0.015
var refGACval=0.011
var refGAAval=0.020
var refGAGval=0.022
var refTGTval=0.024
var refTGCval=0.017
var refTGGval=0.024
var refCGTval=0.004
var refCGCval=0.004
var refCGAval=0.003
var refCGGval=0.004
var refAGTval=0.019
var refAGCval=0.017
var refAGAval=0.024
var refAGGval=0.022
var refGGTval=0.015
var refGGCval=0.017
var refGGAval=0.019
var refGGGval=0.018*/


/*
//Antisense lncRNA
var refTTTval=0.026
var refTTCval=0.020
var refTTAval=0.014
var refTTGval=0.017
var refCTTval=0.020
var refCTCval=0.022
var refCTAval=0.011
var refCTGval=0.029
var refATTval=0.017
var refATCval=0.014
var refATAval=0.014
var refATGval=0.019
var refGTTval=0.013
var refGTCval=0.013
var refGTAval=0.010
var refGTGval=0.017
var refTCTval=0.022
var refTCCval=0.021
var refTCAval=0.021
var refTCGval=0.005
var refCCTval=0.025
var refCCCval=0.022
var refCCAval=0.024
var refCCGval=0.009
var refACTval=0.017
var refACCval=0.016
var refACAval=0.021
var refACGval=0.005
var refGCTval=0.020
var refGCCval=0.020
var refGCAval=0.019
var refGCGval=0.007
var refTATval=0.013
var refTACval=0.010
var refTAAval=0.015
var refTAGval=0.010
var refTGAval=0.021
var refCATval=0.017
var refCACval=0.019
var refCAAval=0.020
var refCAGval=0.028
var refAATval=0.020
var refAACval=0.016
var refAAAval=0.033
var refAAGval=0.024
var refGATval=0.014
var refGACval=0.014
var refGAAval=0.025
var refGAGval=0.023
var refTGTval=0.018
var refTGCval=0.018
var refTGGval=0.023
var refCGTval=0.005
var refCGCval=0.008
var refCGAval=0.005
var refCGGval=0.009
var refAGTval=0.016
var refAGCval=0.021
var refAGAval=0.026
var refAGGval=0.023
var refGGTval=0.013
var refGGCval=0.019
var refGGAval=0.024
var refGGGval=0.020*/

/*
//Sense-Overlap

var refTTTval=0.019
var refTTCval=0.018
var refTTAval=0.008
var refTTGval=0.015
var refCTTval=0.018
var refCTCval=0.026
var refCTAval=0.009
var refCTGval=0.035
var refATTval=0.012
var refATCval=0.013
var refATAval=0.008
var refATGval=0.015
var refGTTval=0.012
var refGTCval=0.015
var refGTAval=0.008
var refGTGval=0.022
var refTCTval=0.021
var refTCCval=0.024
var refTCAval=0.018
var refTCGval=0.007
var refCCTval=0.029
var refCCCval=0.034
var refCCAval=0.027
var refCCGval=0.014
var refACTval=0.014
var refACCval=0.019
var refACAval=0.017
var refACGval=0.008
var refGCTval=0.023
var refGCCval=0.028
var refGCAval=0.020
var refGCGval=0.013
var refTATval=0.008
var refTACval=0.008
var refTAAval=0.009
var refTAGval=0.008
var refTGAval=0.019
var refCATval=0.015
var refCACval=0.019
var refCAAval=0.015
var refCAGval=0.032
var refAATval=0.011
var refAACval=0.013
var refAAAval=0.019
var refAAGval=0.020
var refGATval=0.013
var refGACval=0.017
var refGAAval=0.019
var refGAGval=0.029
var refTGTval=0.018
var refTGCval=0.021
var refTGGval=0.028
var refCGTval=0.008
var refCGCval=0.013
var refCGAval=0.008
var refCGGval=0.014
var refAGTval=0.015
var refAGCval=0.022
var refAGAval=0.023
var refAGGval=0.027
var refGGTval=0.016
var refGGCval=0.027
var refGGAval=0.027
var refGGGval=0.029*/





/*
// Humans mRNA
var refTTTval=0.021
var refTTCval=0.019
var refTTAval=0.010
var refTTGval=0.017
var refCTTval=0.019
var refCTCval=0.021
var refCTAval=0.010
var refCTGval=0.033
var refATTval=0.015
var refATCval=0.014
var refATAval=0.010
var refATGval=0.019
var refGTTval=0.012
var refGTCval=0.013
var refGTAval=0.008
var refGTGval=0.020
var refTCTval=0.020
var refTCCval=0.021
var refTCAval=0.019
var refTCGval=0.006
var refCCTval=0.026
var refCCCval=0.026
var refCCAval=0.026
var refCCGval=0.011
var refACTval=0.015
var refACCval=0.018
var refACAval=0.018
var refACGval=0.006
var refGCTval=0.022
var refGCCval=0.025
var refGCAval=0.020
var refGCGval=0.010
var refTATval=0.011
var refTACval=0.011
var refTAAval=0.010
var refTAGval=0.008
var refTGAval=0.021
var refCATval=0.016
var refCACval=0.018
var refCAAval=0.018
var refCAGval=0.031
var refAATval=0.015
var refAACval=0.014
var refAAAval=0.024
var refAAGval=0.024
var refGATval=0.015
var refGACval=0.016
var refGAAval=0.024
var refGAGval=0.026
var refTGTval=0.018
var refTGCval=0.021
var refTGGval=0.027
var refCGTval=0.006
var refCGCval=0.009
var refCGAval=0.007
var refCGGval=0.011
var refAGTval=0.015
var refAGCval=0.023
var refAGAval=0.026
var refAGGval=0.024
var refGGTval=0.014
var refGGCval=0.024
var refGGAval=0.026
var refGGGval=0.022*/

/*
// Humans ncRNA
var refTTTval=0.027
var refTTCval=0.021
var refTTAval=0.015
var refTTGval=0.018
var refCTTval=0.021
var refCTCval=0.023
var refCTAval=0.012
var refCTGval=0.029
var refATTval=0.019
var refATCval=0.015
var refATAval=0.014
var refATGval=0.020
var refGTTval=0.014
var refGTCval=0.012
var refGTAval=0.009
var refGTGval=0.018
var refTCTval=0.023
var refTCCval=0.020
var refTCAval=0.022
var refTCGval=0.004
var refCCTval=0.024
var refCCCval=0.019
var refCCAval=0.024
var refCCGval=0.007
var refACTval=0.018
var refACCval=0.016
var refACAval=0.022
var refACGval=0.004
var refGCTval=0.019
var refGCCval=0.018
var refGCAval=0.019
var refGCGval=0.005
var refTATval=0.014
var refTACval=0.010
var refTAAval=0.016
var refTAGval=0.010
var refTGAval=0.023
var refCATval=0.018
var refCACval=0.019
var refCAAval=0.020
var refCAGval=0.028
var refAATval=0.020
var refAACval=0.016
var refAAAval=0.033
var refAAGval=0.026
var refGATval=0.015
var refGACval=0.014
var refGAAval=0.026
var refGAGval=0.023
var refTGTval=0.019
var refTGCval=0.018
var refTGGval=0.024
var refCGTval=0.004
var refCGCval=0.005
var refCGAval=0.004
var refCGGval=0.006
var refAGTval=0.016
var refAGCval=0.020
var refAGAval=0.028
var refAGGval=0.022
var refGGTval=0.013
var refGGCval=0.017
var refGGAval=0.023
var refGGGval=0.017*/





/*
// Mouse mRNA
var refTTTval=0.023
var refTTCval=0.020
var refTTAval=0.012
var refTTGval=0.018
var refCTTval=0.020
var refCTCval=0.021
var refCTAval=0.012
var refCTGval=0.030
var refATTval=0.016
var refATCval=0.015
var refATAval=0.011
var refATGval=0.020
var refGTTval=0.014
var refGTCval=0.013
var refGTAval=0.009
var refGTGval=0.020
var refTCTval=0.022
var refTCCval=0.020
var refTCAval=0.020
var refTCGval=0.006
var refCCTval=0.023
var refCCCval=0.019
var refCCAval=0.024
var refCCGval=0.009
var refACTval=0.017
var refACCval=0.017
var refACAval=0.021
var refACGval=0.006
var refGCTval=0.021
var refGCCval=0.020
var refGCAval=0.019
var refGCGval=0.008
var refTATval=0.013
var refTACval=0.011
var refTAAval=0.012
var refTAGval=0.009
var refTGAval=0.021
var refCATval=0.017
var refCACval=0.018
var refCAAval=0.020
var refCAGval=0.029
var refAATval=0.016
var refAACval=0.016
var refAAAval=0.026
var refAAGval=0.025
var refGATval=0.016
var refGACval=0.016
var refGAAval=0.025
var refGAGval=0.025
var refTGTval=0.021
var refTGCval=0.020
var refTGGval=0.024
var refCGTval=0.005
var refCGCval=0.008
var refCGAval=0.007
var refCGGval=0.009
var refAGTval=0.016
var refAGCval=0.022
var refAGAval=0.028
var refAGGval=0.022
var refGGTval=0.013
var refGGCval=0.019
var refGGAval=0.024
var refGGGval=0.017*/

/*
// Mouse ncRNA
var refTTTval=0.029
var refTTCval=0.021
var refTTAval=0.016
var refTTGval=0.019
var refCTTval=0.023
var refCTCval=0.022
var refCTAval=0.013
var refCTGval=0.028
var refATTval=0.018
var refATCval=0.014
var refATAval=0.015
var refATGval=0.020
var refGTTval=0.015
var refGTCval=0.013
var refGTAval=0.010
var refGTGval=0.019
var refTCTval=0.025
var refTCCval=0.020
var refTCAval=0.020
var refTCGval=0.004
var refCCTval=0.023
var refCCCval=0.018
var refCCAval=0.022
var refCCGval=0.006
var refACTval=0.018
var refACCval=0.015
var refACAval=0.023
var refACGval=0.005
var refGCTval=0.020
var refGCCval=0.016
var refGCAval=0.018
var refGCGval=0.005
var refTATval=0.015
var refTACval=0.011
var refTAAval=0.016
var refTAGval=0.012
var refTGAval=0.022
var refCATval=0.018
var refCACval=0.018
var refCAAval=0.020
var refCAGval=0.027
var refAATval=0.019
var refAACval=0.017
var refAAAval=0.031
var refAAGval=0.025
var refGATval=0.014
var refGACval=0.014
var refGAAval=0.024
var refGAGval=0.023
var refTGTval=0.023
var refTGCval=0.018
var refTGGval=0.023
var refCGTval=0.004
var refCGCval=0.005
var refCGAval=0.004
var refCGGval=0.006
var refAGTval=0.017
var refAGCval=0.020
var refAGAval=0.028
var refAGGval=0.022
var refGGTval=0.013
var refGGCval=0.016
var refGGAval=0.022
var refGGGval=0.017*/




/*
//plants mRNA
var refTTTval=0.022
var refTTCval=0.020
var refTTAval=0.016
var refTTGval=0.021
var refCTTval=0.018
var refCTCval=0.018
var refCTAval=0.009
var refCTGval=0.023
var refATTval=0.025
var refATCval=0.023
var refATAval=0.014
var refATGval=0.027
var refGTTval=0.019
var refGTCval=0.017
var refGTAval=0.010
var refGTGval=0.021
var refTCTval=0.017
var refTCCval=0.014
var refTCAval=0.018
var refTCGval=0.012
var refCCTval=0.014
var refCCCval=0.012
var refCCAval=0.017
var refCCGval=0.012
var refACTval=0.015
var refACCval=0.015
var refACAval=0.017
var refACGval=0.012
var refGCTval=0.019
var refGCCval=0.021
var refGCAval=0.018
var refGCGval=0.017
var refTATval=0.015
var refTACval=0.013
var refTAAval=0.007
var refTAGval=0.004
var refTGAval=0.006
var refCATval=0.014
var refCACval=0.012
var refCAAval=0.022
var refCAGval=0.021
var refAATval=0.027
var refAACval=0.020
var refAAAval=0.029
var refAAGval=0.029
var refGATval=0.031
var refGACval=0.025
var refGAAval=0.032
var refGAGval=0.030
var refTGTval=0.011
var refTGCval=0.011
var refTGGval=0.013
var refCGTval=0.008
var refCGCval=0.013
var refCGAval=0.009
var refCGGval=0.009
var refAGTval=0.014
var refAGCval=0.016
var refAGAval=0.015
var refAGGval=0.010
var refGGTval=0.016
var refGGCval=0.021
var refGGAval=0.019
var refGGGval=0.012*/



/*
//plants ncRNA
var refTTTval=0.045
var refTTCval=0.026
var refTTAval=0.023
var refTTGval=0.027
var refCTTval=0.027
var refCTCval=0.018
var refCTAval=0.014
var refCTGval=0.012
var refATTval=0.028
var refATCval=0.021
var refATAval=0.023
var refATGval=0.020
var refGTTval=0.021
var refGTCval=0.012
var refGTAval=0.012
var refGTGval=0.014
var refTCTval=0.029
var refTCCval=0.016
var refTCAval=0.023
var refTCGval=0.011
var refCCTval=0.013
var refCCCval=0.008
var refCCAval=0.016
var refCCGval=0.007
var refACTval=0.017
var refACCval=0.013
var refACAval=0.021
var refACGval=0.009
var refGCTval=0.013
var refGCCval=0.008
var refGCAval=0.011
var refGCGval=0.005
var refTATval=0.023
var refTACval=0.012
var refTAAval=0.023
var refTAGval=0.014
var refTGAval=0.025
var refCATval=0.021
var refCACval=0.013
var refCAAval=0.025
var refCAGval=0.011
var refAATval=0.028
var refAACval=0.020
var refAAAval=0.041
var refAAGval=0.024
var refGATval=0.022
var refGACval=0.011
var refGAAval=0.024
var refGAGval=0.018
var refTGTval=0.021
var refTGCval=0.012
var refTGGval=0.016
var refCGTval=0.009
var refCGCval=0.005
var refCGAval=0.010
var refCGGval=0.006
var refAGTval=0.016
var refAGCval=0.012
var refAGAval=0.026
var refAGGval=0.011
var refGGTval=0.012
var refGGCval=0.008
var refGGAval=0.014
var refGGGval=0.007*/







for(var i=0;i<a.length;i+=3) {
	a1=a.substring(i,i+3)
	a2.push(a1)
}

//console.log(a2)

for(var i=0;i<a2.length;i++) {
	if(a2[i] == 'TTT' || a2[i] == 'TTC') {
		a3='F'
		freq1.push(1)
	} else if(a2[i] == 'TTA' || a2[i] == 'TTG' || a2[i] == 'CTT' || a2[i] == 'CTC' || a2[i] == 'CTA' || a2[i] == 'CTG') {
		a3='L'
		freq2.push(1)
	} else if(a2[i] == 'ATT' || a2[i] == 'ATC' || a2[i] == 'ATA') {
		a3='I'
		freq3.push(1)
	} else if(a2[i] == 'ATG') {
		a3='M'
		freq4.push(1)
	} else if(a2[i] == 'GTT' || a2[i] == 'GTC' || a2[i] == 'GTA' || a2[i] == 'GTG') {
		a3='V'
		freq5.push(1)
	} else if(a2[i] == 'TCT' || a2[i] == 'TCC' || a2[i] == 'TCA' || a2[i] == 'TCG') {
		a3='S'
		freq6.push(1)
	} else if(a2[i] == 'CCT' || a2[i] == 'CCC' || a2[i] == 'CCA' || a2[i] == 'CCG') {
		a3='P'
		freq7.push(1)
	} else if(a2[i] == 'ACT' || a2[i] == 'ACC' || a2[i] == 'ACA' || a2[i] == 'ACG') {
		a3='T'
		freq8.push(1)
	} else if(a2[i] == 'GCT' || a2[i] == 'GCC' || a2[i] == 'GCA' || a2[i] == 'GCG') {
		a3='A'
		freq9.push(1)
	} else if(a2[i] == 'TAT' || a2[i] == 'TAC') {
		a3='Y'
		freq10.push(1)
	} else if(a2[i] == 'TAA' || a2[i] == 'TAG' || a2[i] == 'TGA') {
		a3='-'
		freq11stop.push(1)
	} else if(a2[i] == 'CAT' || a2[i] == 'CAC') {
		a3='H'
		freq12.push(1)
	} else if(a2[i] == 'CAA' || a2[i] == 'CAG') {
		a3='Q'
		freq13.push(1)
	} else if(a2[i] == 'AAT' || a2[i] == 'AAC') {
		a3='N'
		freq14.push(1)
	} else if(a2[i] == 'AAA' || a2[i] == 'AAG') {
		a3='K'
		freq15.push(1)
	} else if(a2[i] == 'GAT' || a2[i] == 'GAC') {
		a3='D'
		freq16.push(1)
	} else if(a2[i] == 'GAA' || a2[i] == 'GAG') {
		a3='E'
		freq17.push(1)
	} else if(a2[i] == 'TGT' || a2[i] == 'TGC') {
		a3='C'
		freq18.push(1)
	} else if(a2[i] == 'TGG') {
		a3='W'
		freq19.push(1)
	} else if(a2[i] == 'CGT' || a2[i] == 'CGC' || a2[i] == 'CGA' || a2[i] == 'CGG') {
		a3='R'
		freq20.push(1)
	} else if(a2[i] == 'AGT' || a2[i] == 'AGC') {
		a3='S'
		freq6.push(1)
	} else if(a2[i] == 'AGA' || a2[i] == 'AGG') {
		a3='R'
		freq20.push(1)
	} else if(a2[i] == 'GGT' || a2[i] == 'GGC' || a2[i] == 'GGA' || a2[i] == 'GGG') {
		a3='G'
		freq21.push(1)
	} else if(a2[i] == 'A' || a2[i] == 'T' || a2[i] == 'G' || a2[i] == 'C' || a2[i] == 'AA' || a2[i] == 'AT' || a2[i] == 'AG' || a2[i] == 'AC' || a2[i] == 'TA' || a2[i] == 'TT' || a2[i] == 'TG' || a2[i] == 'TC' || a2[i] == 'GA' || a2[i] == 'GT' || a2[i] == 'GG' || a2[i] == 'GC' || a2[i] == 'CA' || a2[i] == 'CT' || a2[i] == 'CG' || a2[i] == 'CC'){
		a3=''
	}
}

var freqTTT=[]
var freqTTC=[]

for(var i=0;i<a2.length;i++) {
	if(a2[i] == 'TTT') {
		a3='F'
		freqTTT.push(1)
	} else if(a2[i] == 'TTC') {
		a3='F'
		freqTTC.push(1)	
	}
}	


/********* START	Frequency of Optimal Codons *********/

var freqOptimalCodons=[]

for(var i=0;i<a2.length;i++) {
	if(a2[i] == 'TTA' || a2[i] == 'CTA' || a2[i] == 'TCA' || a2[i] == 'CCA' || a2[i] == 'AGC' || a2[i] == 'GAC' || a2[i] == 'AAC' || a2[i] == 'GGC') {
		freqOptimalCodons.push(1)
	}  
}
/********* END 		Frequency of Optimal Codons *********/



//console.log("F: "+freq1.length+"-- L: "+freq2.length+"-- I: "+freq3.length+"-- M: "+freq4.length+"-- V: "+freq5.length+"-- S: "+freq6.length+"-- P: "+freq7.length+"-- T: "+freq8.length+"-- A: "+freq9.length+"-- Y: "+freq10.length+"-- STOP: "+freq11stop.length+"-- H: "+freq12.length+"-- Q: "+freq13.length+"-- N: "+freq14.length+"-- K: "+freq15.length+"-- D: "+freq16.length+"-- E: "+freq17.length+"-- C: "+freq18.length+"-- W: "+freq19.length+"-- R: "+freq20.length+"-- G: "+freq21.length)

var allCountsF1=freq1.length+freq2.length+freq3.length+freq4.length+freq5.length+freq6.length+freq7.length+freq8.length+freq9.length+freq10.length+freq12.length+freq13.length+freq14.length+freq15.length+freq16.length+freq17.length+freq18.length+freq19.length+freq20.length
var rcsu=freqTTC.length/0.5*(freqTTC.length+freqTTT.length)
var r1=0.5*(freqTTC.length+freqTTT.length)
var r2=freqTTC.length/r1
var maxF=Math.max(freqTTC.length,freqTTT.length);

//console.log("TTC: "+freqTTC.length)
//console.log("TTT: "+freqTTT.length)


/********* START 	Random effect of codon usage *********/

var naOptaaF=[]
var naOptaaL=[]
var naOptaaI=[]
var naOptaaM=[]
var naOptaaV=[]
var naOptaaS=[]
var naOptaaP=[]
var naOptaaT=[]
var naOptaaA=[]
var naOptaaY=[]
var naOptaaH=[]
var naOptaaQ=[]
var naOptaaN=[]
var naOptaaK=[]
var naOptaaD=[]
var naOptaaE=[]
var naOptaaC=[]
var naOptaaW=[]
var naOptaaR=[]
var naOptaaG=[]
var naOptaaStop=[]

for(var i=0;i<a2.length;i++) {
	if(a2[i] == 'TTT' || a2[i] == 'TTC') {
		a3='F'
	} else if(a2[i] == 'TTA' || a2[i] == 'CTA') {
		a3='L'
		naOptaaL.push(1)
	} else if(a2[i] == 'ATT' || a2[i] == 'ATC' || a2[i] == 'ATA') {
		a3='I'
	} else if(a2[i] == 'ATG') {
		a3='M'
	} else if(a2[i] == 'GTT' || a2[i] == 'GTC' || a2[i] == 'GTA' || a2[i] == 'GTG') {
		a3='V'
	} else if(a2[i] == 'TCA' || a2[i] == 'AGC') {
		a3='S'
		naOptaaS.push(1)
	} else if(a2[i] == 'CCA') {
		a3='P'
		naOptaaP.push(1)
	} else if(a2[i] == 'ACT' || a2[i] == 'ACC' || a2[i] == 'ACA' || a2[i] == 'ACG') {
		a3='T'
	} else if(a2[i] == 'GCT' || a2[i] == 'GCC' || a2[i] == 'GCA' || a2[i] == 'GCG') {
		a3='A'
	} else if(a2[i] == 'TAT' || a2[i] == 'TAC') {
		a3='Y'
	} else if(a2[i] == 'TAA' || a2[i] == 'TAG' || a2[i] == 'TGA') {
		a3='-'
	} else if(a2[i] == 'CAT' || a2[i] == 'CAC') {
		a3='H'
	} else if(a2[i] == 'CAA' || a2[i] == 'CAG') {
		a3='Q'
	} else if(a2[i] == 'AAC') {
		a3='N'
		naOptaaN.push(1)
	} else if(a2[i] == 'AAA' || a2[i] == 'AAG') {
		a3='K'
	} else if(a2[i] == 'GAC') {
		a3='D'
		naOptaaD.push(1)
	} else if(a2[i] == 'GAA' || a2[i] == 'GAG') {
		a3='E'
	} else if(a2[i] == 'TGT' || a2[i] == 'TGC') {
		a3='C'
	} else if(a2[i] == 'TGG') {
		a3='W'
	} else if(a2[i] == 'CGT' || a2[i] == 'CGC' || a2[i] == 'CGA' || a2[i] == 'CGG') {
		a3='R'
	} else if(a2[i] == 'AGA' || a2[i] == 'AGG') {
		a3='R'
	} else if(a2[i] == 'GGC') {
		a3='G'
		naOptaaG.push(1)
	} 
}

//var eRand = (freq2.length*(naOptaaL.length/5)) + (freq6.length*(naOptaaS.length/3)) + (freq7.length*(naOptaaP.length/3)) + (freq14.length*(naOptaaN.length/1)) + (freq16.length*(naOptaaD.length/1)) + (freq21.length*(naOptaaG.length/3))
//var eRand = freq1.length*(naOptaaF.length/1) + freq2.length*(naOptaaL.length/5) + freq3.length*(naOptaaI.length/2) + freq4.length*(naOptaaM.length/0) + freq5.length*(naOptaaV.length/3) + freq6.length*(naOptaaS.length/3) + freq7.length*(naOptaaP.length/3) + freq8.length*(naOptaaT.length/3) + freq9.length*(naOptaaA.length/3) + freq10.length*(naOptaaY.length/3) + freq11stop.length*(naOptaaStop.length/2) + freq12.length*(naOptaaH.length/1) + freq13.length*(naOptaaQ.length/1) + freq14.length*(naOptaaN.length/1) + freq15.length*(naOptaaK.length/1) + freq16.length*(naOptaaD.length/1) + freq17.length*(naOptaaE.length/1) + freq18.length*(naOptaaC.length/1) + freq19.length*(naOptaaW.length/0) + freq20.length*(naOptaaR.length/5) + freq21.length*(naOptaaG.length/3)

var eRand = freq1.length*(naOptaaF.length/1) + freq2.length*(naOptaaL.length/5) + freq3.length*(naOptaaI.length/2) + freq5.length*(naOptaaV.length/3) + freq6.length*(naOptaaS.length/3) + freq7.length*(naOptaaP.length/3) + freq8.length*(naOptaaT.length/3) + freq9.length*(naOptaaA.length/3) + freq10.length*(naOptaaY.length/3) + freq11stop.length*(naOptaaStop.length/2) + freq12.length*(naOptaaH.length/1) + freq13.length*(naOptaaQ.length/1) + freq14.length*(naOptaaN.length/1) + freq15.length*(naOptaaK.length/1) + freq16.length*(naOptaaD.length/1) + freq17.length*(naOptaaE.length/1) + freq18.length*(naOptaaC.length/1) + freq20.length*(naOptaaR.length/5) + freq21.length*(naOptaaG.length/3)

//var eRand = freq1.length*(naOptaaF.length/freq1.length) + freq2.length*(naOptaaL.length/freq2.length) + freq3.length*(naOptaaI.length/freq3.length) + freq4.length*(naOptaaM.length/freq4.length) + freq5.length*(naOptaaV.length/freq5.length) + freq6.length*(naOptaaS.length/freq6.length) + freq7.length*(naOptaaP.length/freq7.length) + freq8.length*(naOptaaT.length/freq8.length) + freq9.length*(naOptaaA.length/freq9.length) + freq10.length*(naOptaaY.length/freq10.length) + freq11stop.length*(naOptaaStop.length/freq11stop.length) + freq12.length*(naOptaaH.length/freq12.length) + freq13.length*(naOptaaQ.length/freq13.length) + freq14.length*(naOptaaN.length/freq14.length) + freq15.length*(naOptaaK.length/freq15.length) + freq16.length*(naOptaaD.length/freq16.length) + freq17.length*(naOptaaE.length/freq17.length) + freq18.length*(naOptaaC.length/freq18.length) + freq19.length*(naOptaaW.length/freq19.length) + freq20.length*(naOptaaR.length/freq20.length) + freq21.length*(naOptaaG.length/freq21.length)

	//console.log(freq21.length*(naOptaaG.length/3))
	//console.log("eRand for : "+eRand)
	//console.log("CBI: "+((freqOptimalCodons.length-eRand)/(allCountsF1-eRand)))

//console.log("Relative Synonymous Codon Usage (RCSU) for TTC (F) : "+r2.toFixed(3))

var cbiVal=((freqOptimalCodons.length-eRand)/(allCountsF1-eRand))

h3.push(cbiVal)

//freq1


/********* END 		Random effect of codon usage *********/


/*console.log("F relative count: "+(freq1.length/allCountsF1).toFixed(3))
console.log("Relative count for TTT (F) : "+(freqTTT.length/freq1.length).toFixed(3))
console.log("Relative count for TTC (F) : "+(freqTTC.length/freq1.length).toFixed(3))
console.log("Relative Synonymous Codon Usage (RCSU) for TTC (F) : "+r2.toFixed(3))
console.log("Relative Adaptiveness of TTC "+freqTTC.length/maxF)
console.log("Relative Adaptiveness of TTT "+freqTTT.length/maxF)
console.log("Frequency of optimal codons: "+freqOptimalCodons.length/allCountsF1)*/

var Fop=freqOptimalCodons.length/allCountsF1

h2.push(Fop)






/********* START 	Codon Usage Bias (CUB) *********/

var freqTTT=[], freqTTC=[], freqTTA=[], freqTTG=[], freqCTT=[], freqCTC=[], freqCTA=[], freqCTG=[], freqATT=[], freqATC=[], freqATA=[], freqATG=[], freqGTT=[], freqGTC=[], freqGTA=[], freqGTG=[], freqTCT=[], freqTCC=[], freqTCA=[], freqTCG=[], freqCCT=[], freqCCC=[], freqCCA=[], freqCCG=[], freqACT=[], freqACC=[], freqACA=[], freqACG=[], freqGCT=[], freqGCC=[], freqGCA=[], freqGCG=[], freqTAT=[], freqTAC=[], freqTAA=[], freqTAG=[], freqTGA=[], freqCAT=[], freqCAC=[], freqCAA=[], freqCAG=[], freqAAT=[], freqAAC=[], freqAAA=[], freqAAG=[], freqGAT=[], freqGAC=[], freqGAA=[], freqGAG=[], freqTGT=[], freqTGC=[], freqTGG=[], freqCGT=[], freqCGC=[], freqCGA=[], freqCGG=[], freqAGT=[], freqAGC=[], freqAGA=[], freqAGG=[], freqGGT=[], freqGGC=[], freqGGA=[], freqGGG=[];

for(var i=0;i<a2.length;i++) {
	if(a2[i] == 'TTT') {
		freqTTT.push(1)
	} else if(a2[i] == 'TTC') {
		freqTTC.push(1)
	} else if(a2[i] == 'TTA') {
		freqTTA.push(1)
	} else if(a2[i] == 'TTG') {
		freqTTG.push(1)
	} else if(a2[i] == 'CTT') {
		freqCTT.push(1)
	} else if(a2[i] == 'CTC') {
		freqCTC.push(1)
	} else if(a2[i] == 'CTA') {
		freqCTA.push(1)
	} else if(a2[i] == 'CTG') {
		freqCTG.push(1)
	} else if(a2[i] == 'ATT') {
		freqATT.push(1)
	} else if(a2[i] == 'ATC') {
		freqATC.push(1)
	} else if(a2[i] == 'ATA') {
		freqATA.push(1)
	} else if(a2[i] == 'ATG') {
		freqATG.push(1)
	} else if(a2[i] == 'GTT') {
		freqGTT.push(1)
	} else if(a2[i] == 'GTC') {
		freqGTC.push(1)
	} else if(a2[i] == 'GTA') {
		freqGTA.push(1)
	} else if(a2[i] == 'GTG') {
		freqGTG.push(1)
	} else if(a2[i] == 'TCT') {
		freqTCT.push(1)
	} else if(a2[i] == 'TCC') {
		freqTCC.push(1)
	} else if(a2[i] == 'TCA') {
		freqTCA.push(1)
	} else if(a2[i] == 'TCG') {
		freqTCG.push(1)
	} else if(a2[i] == 'CCT') {
		freqCCT.push(1)
	} else if(a2[i] == 'CCC') {
		freqCCC.push(1)
	} else if(a2[i] == 'CCA') {
		freqCCA.push(1)
	} else if(a2[i] == 'CCG') {
		freqCCG.push(1)
	} else if(a2[i] == 'ACT') {
		freqACT.push(1)
	} else if(a2[i] == 'ACC') {
		freqACC.push(1)
	} else if(a2[i] == 'ACA') {
		freqACA.push(1)
	} else if(a2[i] == 'ACG') {
		freqACG.push(1)
	} else if(a2[i] == 'GCT') {
		freqGCT.push(1)
	} else if(a2[i] == 'GCC') {
		freqGCC.push(1)
	} else if(a2[i] == 'GCA') {
		freqGCA.push(1)
	} else if(a2[i] == 'GCG') {
		freqGCG.push(1)
	} else if(a2[i] == 'TAT') {
		freqTAT.push(1)
	} else if(a2[i] == 'TAC') {
		freqTAC.push(1)
	} else if(a2[i] == 'TAA') {
		freqTAA.push(1)
	} else if(a2[i] == 'TAG') {
		freqTAG.push(1)
	} else if(a2[i] == 'TGA') {
		freqTGA.push(1)
	} else if(a2[i] == 'CAT') {
		freqCAT.push(1)
	} else if(a2[i] == 'CAC') {
		freqCAC.push(1)
	} else if(a2[i] == 'CAA') {
		freqCAA.push(1)
	} else if(a2[i] == 'CAG') {
		freqCAG.push(1)
	} else if(a2[i] == 'AAT') {
		freqAAT.push(1)
	} else if(a2[i] == 'AAC') {
		freqAAC.push(1)
	} else if(a2[i] == 'AAA') {
		freqAAA.push(1)
	} else if(a2[i] == 'AAG') {
		freqAAG.push(1)
	} else if(a2[i] == 'GAT') {
		freqGAT.push(1)
	} else if(a2[i] == 'GAC') {
		freqGAC.push(1)
	} else if(a2[i] == 'GAA') {
		freqGAA.push(1)
	} else if(a2[i] == 'GAG') {
		freqGAG.push(1)
	} else if(a2[i] == 'TGT') {
		freqTGT.push(1)
	} else if(a2[i] == 'TGC') {
		freqTGC.push(1)
	} else if(a2[i] == 'TGG') {
		freqTGG.push(1)
	} else if(a2[i] == 'CGT') {
		freqCGT.push(1)
	} else if(a2[i] == 'CGC') {
		freqCGC.push(1)
	} else if(a2[i] == 'CGA') {
		freqCGA.push(1)
	} else if(a2[i] == 'CGG') {
		freqCGG.push(1)
	} else if(a2[i] == 'AGT') {
		freqAGT.push(1)
	} else if(a2[i] == 'AGC') {
		freqAGC.push(1)
	} else if(a2[i] == 'AGA') {
		freqAGA.push(1)
	} else if(a2[i] == 'AGG') {
		freqAGG.push(1)
	} else if(a2[i] == 'GGT') {
		freqGGT.push(1)
	} else if(a2[i] == 'GGC') {
		freqGGC.push(1)
	} else if(a2[i] == 'GGA') {
		freqGGA.push(1)
	} else if(a2[i] == 'GGG') {
		freqGGG.push(1)
	}
}	

var relfreqTTT=freqTTT.length/allCountsF1
var relfreqTTC=freqTTC.length/allCountsF1
var relfreqTTA=freqTTA.length/allCountsF1
var relfreqTTG=freqTTG.length/allCountsF1
var relfreqCTT=freqCTT.length/allCountsF1
var relfreqCTC=freqCTC.length/allCountsF1
var relfreqCTA=freqCTA.length/allCountsF1
var relfreqCTG=freqCTG.length/allCountsF1
var relfreqATT=freqATT.length/allCountsF1
var relfreqATC=freqATC.length/allCountsF1
var relfreqATA=freqATA.length/allCountsF1
var relfreqATG=freqATG.length/allCountsF1
var relfreqGTT=freqGTT.length/allCountsF1
var relfreqGTC=freqGTC.length/allCountsF1
var relfreqGTA=freqGTA.length/allCountsF1
var relfreqGTG=freqGTG.length/allCountsF1
var relfreqTCT=freqTCT.length/allCountsF1
var relfreqTCC=freqTCC.length/allCountsF1
var relfreqTCA=freqTCA.length/allCountsF1
var relfreqTCG=freqTCG.length/allCountsF1
var relfreqCCT=freqCCT.length/allCountsF1
var relfreqCCC=freqCCC.length/allCountsF1
var relfreqCCA=freqCCA.length/allCountsF1
var relfreqCCG=freqCCG.length/allCountsF1
var relfreqACT=freqACT.length/allCountsF1
var relfreqACC=freqACC.length/allCountsF1
var relfreqACA=freqACA.length/allCountsF1
var relfreqACG=freqACG.length/allCountsF1
var relfreqGCT=freqGCT.length/allCountsF1
var relfreqGCC=freqGCC.length/allCountsF1
var relfreqGCA=freqGCA.length/allCountsF1
var relfreqGCG=freqGCG.length/allCountsF1
var relfreqTAT=freqTAT.length/allCountsF1
var relfreqTAC=freqTAC.length/allCountsF1
var relfreqTAA=freqTAA.length/allCountsF1
var relfreqTAG=freqTAG.length/allCountsF1
var relfreqTGA=freqTGA.length/allCountsF1
var relfreqCAT=freqCAT.length/allCountsF1
var relfreqCAC=freqCAC.length/allCountsF1
var relfreqCAA=freqCAA.length/allCountsF1
var relfreqCAG=freqCAG.length/allCountsF1
var relfreqAAT=freqAAT.length/allCountsF1
var relfreqAAC=freqAAC.length/allCountsF1
var relfreqAAA=freqAAA.length/allCountsF1
var relfreqAAG=freqAAG.length/allCountsF1
var relfreqGAT=freqGAT.length/allCountsF1
var relfreqGAC=freqGAC.length/allCountsF1
var relfreqGAA=freqGAA.length/allCountsF1
var relfreqGAG=freqGAG.length/allCountsF1
var relfreqTGT=freqTGT.length/allCountsF1
var relfreqTGC=freqTGC.length/allCountsF1
var relfreqTGG=freqTGG.length/allCountsF1
var relfreqCGT=freqCGT.length/allCountsF1
var relfreqCGC=freqCGC.length/allCountsF1
var relfreqCGA=freqCGA.length/allCountsF1
var relfreqCGG=freqCGG.length/allCountsF1
var relfreqAGT=freqAGT.length/allCountsF1
var relfreqAGC=freqAGC.length/allCountsF1
var relfreqAGA=freqAGA.length/allCountsF1
var relfreqAGG=freqAGG.length/allCountsF1
var relfreqGGT=freqGGT.length/allCountsF1
var relfreqGGC=freqGGC.length/allCountsF1
var relfreqGGA=freqGGA.length/allCountsF1
var relfreqGGG=freqGGG.length/allCountsF1

var onenormDistTTT=Math.abs(relfreqTTT-refTTTval)
var onenormDistTTC=Math.abs(relfreqTTC-refTTCval)
var onenormDistTTA=Math.abs(relfreqTTA-refTTAval)
var onenormDistTTG=Math.abs(relfreqTTG-refTTGval)
var onenormDistCTT=Math.abs(relfreqCTT-refCTTval)
var onenormDistCTC=Math.abs(relfreqCTC-refCTCval)
var onenormDistCTA=Math.abs(relfreqCTA-refCTAval)
var onenormDistCTG=Math.abs(relfreqCTG-refCTGval)
var onenormDistATT=Math.abs(relfreqATT-refATTval)
var onenormDistATC=Math.abs(relfreqATC-refATCval)
var onenormDistATA=Math.abs(relfreqATA-refATAval)
var onenormDistATG=Math.abs(relfreqATG-refATGval)
var onenormDistGTT=Math.abs(relfreqGTT-refGTTval)
var onenormDistGTC=Math.abs(relfreqGTC-refGTCval)
var onenormDistGTA=Math.abs(relfreqGTA-refGTAval)
var onenormDistGTG=Math.abs(relfreqGTG-refGTGval)
var onenormDistTCT=Math.abs(relfreqTCT-refTCTval)
var onenormDistTCC=Math.abs(relfreqTCC-refTCCval)
var onenormDistTCA=Math.abs(relfreqTCA-refTCAval)
var onenormDistTCG=Math.abs(relfreqTCG-refTCGval)
var onenormDistCCT=Math.abs(relfreqCCT-refCCTval)
var onenormDistCCC=Math.abs(relfreqCCC-refCCCval)
var onenormDistCCA=Math.abs(relfreqCCA-refCCAval)
var onenormDistCCG=Math.abs(relfreqCCG-refCCGval)
var onenormDistACT=Math.abs(relfreqACT-refACTval)
var onenormDistACC=Math.abs(relfreqACC-refACCval)
var onenormDistACA=Math.abs(relfreqACA-refACAval)
var onenormDistACG=Math.abs(relfreqACG-refACGval)
var onenormDistGCT=Math.abs(relfreqGCT-refGCTval)
var onenormDistGCC=Math.abs(relfreqGCC-refGCCval)
var onenormDistGCA=Math.abs(relfreqGCA-refGCAval)
var onenormDistGCG=Math.abs(relfreqGCG-refGCGval)
var onenormDistTAT=Math.abs(relfreqTAT-refTATval)
var onenormDistTAC=Math.abs(relfreqTAC-refTACval)
var onenormDistTAA=Math.abs(relfreqTAA-refTAAval)
var onenormDistTAG=Math.abs(relfreqTAG-refTAGval)
var onenormDistTGA=Math.abs(relfreqTGA-refTGAval)
var onenormDistCAT=Math.abs(relfreqCAT-refCATval)
var onenormDistCAC=Math.abs(relfreqCAC-refCACval)
var onenormDistCAA=Math.abs(relfreqCAA-refCAAval)
var onenormDistCAG=Math.abs(relfreqCAG-refCAGval)
var onenormDistAAT=Math.abs(relfreqAAT-refAATval)
var onenormDistAAC=Math.abs(relfreqAAC-refAACval)
var onenormDistAAA=Math.abs(relfreqAAA-refAAAval)
var onenormDistAAG=Math.abs(relfreqAAG-refAAGval)
var onenormDistGAT=Math.abs(relfreqGAT-refGATval)
var onenormDistGAC=Math.abs(relfreqGAC-refGACval)
var onenormDistGAA=Math.abs(relfreqGAA-refGAAval)
var onenormDistGAG=Math.abs(relfreqGAG-refGAGval)
var onenormDistTGT=Math.abs(relfreqTGT-refTGTval)
var onenormDistTGC=Math.abs(relfreqTGC-refTGCval)
var onenormDistTGG=Math.abs(relfreqTGG-refTGGval)
var onenormDistCGT=Math.abs(relfreqCGT-refCGTval)
var onenormDistCGC=Math.abs(relfreqCGC-refCGCval)
var onenormDistCGA=Math.abs(relfreqCGA-refCGAval)
var onenormDistCGG=Math.abs(relfreqCGG-refCGGval)
var onenormDistAGT=Math.abs(relfreqAGT-refAGTval)
var onenormDistAGC=Math.abs(relfreqAGC-refAGCval)
var onenormDistAGA=Math.abs(relfreqAGA-refAGAval)
var onenormDistAGG=Math.abs(relfreqAGG-refAGGval)
var onenormDistGGT=Math.abs(relfreqGGT-refGGTval)
var onenormDistGGC=Math.abs(relfreqGGC-refGGCval)
var onenormDistGGA=Math.abs(relfreqGGA-refGGAval)
var onenormDistGGG=Math.abs(relfreqGGG-refGGGval)

var onenormDist=onenormDistTTT+onenormDistTTC+onenormDistTTA+onenormDistTTG+onenormDistCTT+onenormDistCTC+onenormDistCTA+onenormDistCTG+onenormDistATT+onenormDistATC+onenormDistATA+onenormDistATG+onenormDistGTT+onenormDistGTC+onenormDistGTA+onenormDistGTG+onenormDistTCT+onenormDistTCC+onenormDistTCA+onenormDistTCG+onenormDistCCT+onenormDistCCC+onenormDistCCA+onenormDistCCG+onenormDistACT+onenormDistACC+onenormDistACA+onenormDistACG+onenormDistGCT+onenormDistGCC+onenormDistGCA+onenormDistGCG+onenormDistTAT+onenormDistTAC+onenormDistTAA+onenormDistTAG+onenormDistTGA+onenormDistCAT+onenormDistCAC+onenormDistCAA+onenormDistCAG+onenormDistAAT+onenormDistAAC+onenormDistAAA+onenormDistAAG+onenormDistGAT+onenormDistGAC+onenormDistGAA+onenormDistGAG+onenormDistTGT+onenormDistTGC+onenormDistTGG+onenormDistCGT+onenormDistCGC+onenormDistCGA+onenormDistCGG+onenormDistAGT+onenormDistAGC+onenormDistAGA+onenormDistAGG+onenormDistGGT+onenormDistGGC+onenormDistGGA+onenormDistGGG
var cub=(freq1.length*onenormDist) + (freq2.length*onenormDist) + (freq3.length*onenormDist) + (freq4.length*onenormDist) + (freq5.length*onenormDist) + (freq6.length*onenormDist) + (freq7.length*onenormDist) + (freq8.length*onenormDist) + (freq9.length*onenormDist) + (freq10.length*onenormDist) + (freq11stop.length*onenormDist) + (freq12.length*onenormDist) + (freq13.length*onenormDist) + (freq14.length*onenormDist) + (freq15.length*onenormDist) + (freq16.length*onenormDist) + (freq17.length*onenormDist) + (freq18.length*onenormDist) + (freq19.length*onenormDist) + (freq20.length*onenormDist) + (freq21.length*onenormDist)




//console.log("1-norm distance of amino acid a for TTT: "+onenormDist)
//console.log("Codon Usage Bias (CUB): "+cub)

h4.push(cub)

/********* END	 	Codon Usage Bias (CUB) *********/



/********* START 	RCSU *********/
var rcsuTTT=freqTTT.length/0.5*(freqTTC.length+freqTTT.length)
var rcsuTTC=freqTTC.length/0.5*(freqTTC.length+freqTTT.length)
var rcsuTTA=freqTTA.length/0.167*(freqTTA.length+freqTTG.length+freqCTT.length+freqCTC.length+freqCTA.length+freqCTG.length)
var rcsuTTG=freqTTG.length/0.167*(freqTTA.length+freqTTG.length+freqCTT.length+freqCTC.length+freqCTA.length+freqCTG.length)
var rcsuCTT=freqCTT.length/0.167*(freqTTA.length+freqTTG.length+freqCTT.length+freqCTC.length+freqCTA.length+freqCTG.length)
var rcsuCTC=freqCTC.length/0.167*(freqTTA.length+freqTTG.length+freqCTT.length+freqCTC.length+freqCTA.length+freqCTG.length)
var rcsuCTA=freqCTA.length/0.167*(freqTTA.length+freqTTG.length+freqCTT.length+freqCTC.length+freqCTA.length+freqCTG.length)
var rcsuCTG=freqCTG.length/0.167*(freqTTA.length+freqTTG.length+freqCTT.length+freqCTC.length+freqCTA.length+freqCTG.length)
var rcsuATT=freqATT.length/0.33*(freqATT.length+freqATC.length+freqATA.length)
var rcsuATC=freqATC.length/0.33*(freqATT.length+freqATC.length+freqATA.length)
var rcsuATA=freqATA.length/0.33*(freqATT.length+freqATC.length+freqATA.length)
var rcsuATG=freqATG.length/1*(freqATG.length)
var rcsuGTT=freqGTT.length/0.25*(freqGTT.length+freqGTC.length+freqGTA.length+freqGTG.length)
var rcsuGTC=freqGTC.length/0.25*(freqGTT.length+freqGTC.length+freqGTA.length+freqGTG.length)
var rcsuGTA=freqGTA.length/0.25*(freqGTT.length+freqGTC.length+freqGTA.length+freqGTG.length)
var rcsuGTG=freqGTG.length/0.25*(freqGTT.length+freqGTC.length+freqGTA.length+freqGTG.length)
var rcsuTCT=freqTCT.length/0.25*(freqTCT.length+freqTCC.length+freqTCA.length+freqTCG.length)
var rcsuTCC=freqTCC.length/0.25*(freqTCT.length+freqTCC.length+freqTCA.length+freqTCG.length)
var rcsuTCA=freqTCA.length/0.25*(freqTCT.length+freqTCC.length+freqTCA.length+freqTCG.length)
var rcsuTCG=freqTCG.length/0.25*(freqTCT.length+freqTCC.length+freqTCA.length+freqTCG.length)
var rcsuCCT=freqCCT.length/0.25*(freqCCT.length+freqCCC.length+freqCCA.length+freqCCG.length)
var rcsuCCC=freqCCC.length/0.25*(freqCCT.length+freqCCC.length+freqCCA.length+freqCCG.length)
var rcsuCCA=freqCCA.length/0.25*(freqCCT.length+freqCCC.length+freqCCA.length+freqCCG.length)
var rcsuCCG=freqCCG.length/0.25*(freqCCT.length+freqCCC.length+freqCCA.length+freqCCG.length)
var rcsuACT=freqACT.length/0.25*(freqACT.length+freqACC.length+freqACA.length+freqACG.length)
var rcsuACC=freqACC.length/0.25*(freqACT.length+freqACC.length+freqACA.length+freqACG.length)
var rcsuACA=freqACA.length/0.25*(freqACT.length+freqACC.length+freqACA.length+freqACG.length)
var rcsuACG=freqACG.length/0.25*(freqACT.length+freqACC.length+freqACA.length+freqACG.length)
var rcsuGCT=freqGCT.length/0.25*(freqGCT.length+freqGCC.length+freqGCA.length+freqGCG.length)
var rcsuGCC=freqGCC.length/0.25*(freqGCT.length+freqGCC.length+freqGCA.length+freqGCG.length)
var rcsuGCA=freqGCA.length/0.25*(freqGCT.length+freqGCC.length+freqGCA.length+freqGCG.length)
var rcsuGCG=freqGCG.length/0.25*(freqGCT.length+freqGCC.length+freqGCA.length+freqGCG.length)
var rcsuTAT=freqTAT.length/0.5*(freqTAT.length+freqTAC.length)
var rcsuTAC=freqTAC.length/0.5*(freqTAT.length+freqTAC.length)
//var rcsuTAA=freqTAA.length/0.5*(freqTAA.length+freqTAG.length+freqTGA.length)
//var rcsuTAG=freqTAG.length/0.5*(freqTAA.length+freqTAG.length+freqTGA.length)
//var rcsuTGA=freqTGA.length/0.5*(freqTAA.length+freqTAG.length+freqTGA.length)
var rcsuCAT=freqCAT.length/0.5*(freqCAT.length+freqCAC.length)
var rcsuCAC=freqCAC.length/0.5*(freqCAT.length+freqCAC.length)
var rcsuCAA=freqCAA.length/0.5*(freqCAA.length+freqCAG.length) 
var rcsuCAG=freqCAG.length/0.5*(freqCAA.length+freqCAG.length)
var rcsuAAT=freqAAT.length/0.5*(freqAAT.length+freqAAC.length)
var rcsuAAC=freqAAC.length/0.5*(freqAAT.length+freqAAC.length)
var rcsuAAA=freqAAA.length/0.5*(freqAAA.length+freqAAG.length)
var rcsuAAG=freqAAG.length/0.5*(freqAAA.length+freqAAG.length)
var rcsuGAT=freqGAT.length/0.5*(freqGAT.length+freqGAC.length)
var rcsuGAC=freqGAC.length/0.5*(freqGAT.length+freqGAC.length)
var rcsuGAA=freqGAA.length/0.5*(freqGAA.length+freqGAG.length)
var rcsuGAG=freqGAG.length/0.5*(freqGAA.length+freqGAG.length)
var rcsuTGT=freqTGT.length/0.5*(freqTGT.length+freqTGC.length)
var rcsuTGC=freqTGC.length/0.5*(freqTGT.length+freqTGC.length)
var rcsuTGG=freqTGG.length/1*(freqTGG.length)
var rcsuCGT=freqCGT.length/0.25*(freqCGT.length+freqCGC.length+freqCGA.length+freqCGG.length)
var rcsuCGC=freqCGC.length/0.25*(freqCGT.length+freqCGC.length+freqCGA.length+freqCGG.length)
var rcsuCGA=freqCGA.length/0.25*(freqCGT.length+freqCGC.length+freqCGA.length+freqCGG.length)
var rcsuCGG=freqCGG.length/0.25*(freqCGT.length+freqCGC.length+freqCGA.length+freqCGG.length)
var rcsuAGT=freqAGT.length/0.5*(freqAGT.length+freqAGC.length)
var rcsuAGC=freqAGC.length/0.5*(freqAGT.length+freqAGC.length)
var rcsuAGA=freqAGA.length/0.5*(freqAGA.length+freqAGG.length)
var rcsuAGG=freqAGG.length/0.5*(freqAGA.length+freqAGG.length)
var rcsuGGT=freqGGT.length/0.25*(freqGGT.length+freqGGC.length+freqGGA.length+freqGGG.length)
var rcsuGGC=freqGGC.length/0.25*(freqGGT.length+freqGGC.length+freqGGA.length+freqGGG.length)
var rcsuGGA=freqGGA.length/0.25*(freqGGT.length+freqGGC.length+freqGGA.length+freqGGG.length)
var rcsuGGG=freqGGG.length/0.25*(freqGGT.length+freqGGC.length+freqGGA.length+freqGGG.length)

h7rcsuTTT.push(rcsuTTT)
h7rcsuTTC.push(rcsuTTC)
h7rcsuTTA.push(rcsuTTA)
h7rcsuTTG.push(rcsuTTG)
h7rcsuCTT.push(rcsuCTT)
h7rcsuCTC.push(rcsuCTC)
h7rcsuCTA.push(rcsuCTA)
h7rcsuCTG.push(rcsuCTG)
h7rcsuATT.push(rcsuATT)
h7rcsuATC.push(rcsuATC)
h7rcsuATA.push(rcsuATA)
h7rcsuATG.push(rcsuATG)
h7rcsuGTT.push(rcsuGTT)
h7rcsuGTC.push(rcsuGTC)
h7rcsuGTA.push(rcsuGTA)
h7rcsuGTG.push(rcsuGTG)
h7rcsuTCT.push(rcsuTCT)
h7rcsuTCC.push(rcsuTCC)
h7rcsuTCA.push(rcsuTCA)
h7rcsuTCG.push(rcsuTCG)
h7rcsuCCT.push(rcsuCCT)
h7rcsuCCC.push(rcsuCCC)
h7rcsuCCA.push(rcsuCCA)
h7rcsuCCG.push(rcsuCCG)
h7rcsuACT.push(rcsuACT)
h7rcsuACC.push(rcsuACC)
h7rcsuACA.push(rcsuACA)
h7rcsuACG.push(rcsuACG)
h7rcsuGCT.push(rcsuGCT)
h7rcsuGCC.push(rcsuGCC)
h7rcsuGCA.push(rcsuGCA)
h7rcsuGCG.push(rcsuGCG)
h7rcsuTAT.push(rcsuTAT)
h7rcsuTAC.push(rcsuTAC)
h7rcsuCAT.push(rcsuCAT)
h7rcsuCAC.push(rcsuCAC)
h7rcsuCAA.push(rcsuCAA)
h7rcsuCAG.push(rcsuCAG)
h7rcsuAAT.push(rcsuAAT)
h7rcsuAAC.push(rcsuAAC)
h7rcsuAAA.push(rcsuAAA)
h7rcsuAAG.push(rcsuAAG)
h7rcsuGAT.push(rcsuGAT)
h7rcsuGAC.push(rcsuGAC)
h7rcsuGAA.push(rcsuGAA)
h7rcsuGAG.push(rcsuGAG)
h7rcsuTGT.push(rcsuTGT)
h7rcsuTGC.push(rcsuTGC)
h7rcsuTGG.push(rcsuTGG)
h7rcsuCGT.push(rcsuCGT)
h7rcsuCGC.push(rcsuCGC)
h7rcsuCGA.push(rcsuCGA)
h7rcsuCGG.push(rcsuCGG)
h7rcsuAGT.push(rcsuAGT)
h7rcsuAGC.push(rcsuAGC)
h7rcsuAGA.push(rcsuAGA)
h7rcsuAGG.push(rcsuAGG)
h7rcsuGGT.push(rcsuGGT)
h7rcsuGGC.push(rcsuGGC)
h7rcsuGGA.push(rcsuGGA)
h7rcsuGGG.push(rcsuGGG)




/********* END 		RCSU *********/







/********* START 	Codon Preference (P) *********/

var freqAb1=[], freqAb2=[], freqAb3=[], freqTb1=[], freqTb2=[], freqTb3=[], freqCb1=[], freqCb2=[], freqCb3=[], freqGb1=[], freqGb2=[], freqGb3=[]; 

for(var i=0;i<a.length;i+=3) {
	if(a[i]=='A') {
		freqAb1.push(a[i])
	} else if(a[i]=='T') {
		freqTb1.push(a[i])
	} else if(a[i]=='C') {
		freqCb1.push(a[i])
	} else if(a[i]=='G') {
		freqGb1.push(a[i])
	}
}

for(var i=1;i<a.length;i+=3) {
	if(a[i]=='A') {
		freqAb2.push(a[i])
	} else if(a[i]=='T') {
		freqTb2.push(a[i])
	} else if(a[i]=='C') {
		freqCb2.push(a[i])
	} else if(a[i]=='G') {
		freqGb2.push(a[i])
	}
}

for(var i=2;i<a.length;i+=3) {
	if(a[i]=='A') {
		freqAb3.push(a[i])
	} else if(a[i]=='T') {
		freqTb3.push(a[i])
	} else if(a[i]=='C') {
		freqCb3.push(a[i])
	} else if(a[i]=='G') {
		freqGb3.push(a[i])
	}
}

var rabcTTT=(freqTb1.length*freqTb2.length*freqTb3.length)/(a.length*a.length*a.length)
var rabcTTC=(freqTb1.length*freqTb2.length*freqCb3.length)/(a.length*a.length*a.length)
var rabcTTA=(freqTb1.length*freqTb2.length*freqAb3.length)/(a.length*a.length*a.length)
var rabcTTG=(freqTb1.length*freqTb2.length*freqGb3.length)/(a.length*a.length*a.length)
var rabcCTT=(freqCb1.length*freqTb2.length*freqTb3.length)/(a.length*a.length*a.length)
var rabcCTC=(freqCb1.length*freqTb2.length*freqCb3.length)/(a.length*a.length*a.length)
var rabcCTA=(freqCb1.length*freqTb2.length*freqAb3.length)/(a.length*a.length*a.length)
var rabcCTG=(freqCb1.length*freqTb2.length*freqGb3.length)/(a.length*a.length*a.length)
var rabcATT=(freqAb1.length*freqTb2.length*freqTb3.length)/(a.length*a.length*a.length)
var rabcATC=(freqAb1.length*freqTb2.length*freqCb3.length)/(a.length*a.length*a.length)
var rabcATA=(freqAb1.length*freqTb2.length*freqAb3.length)/(a.length*a.length*a.length)
var rabcATG=(freqAb1.length*freqTb2.length*freqGb3.length)/(a.length*a.length*a.length)
var rabcGTT=(freqGb1.length*freqTb2.length*freqTb3.length)/(a.length*a.length*a.length)
var rabcGTC=(freqGb1.length*freqTb2.length*freqCb3.length)/(a.length*a.length*a.length)
var rabcGTA=(freqGb1.length*freqTb2.length*freqAb3.length)/(a.length*a.length*a.length)
var rabcGTG=(freqGb1.length*freqTb2.length*freqGb3.length)/(a.length*a.length*a.length)
var rabcTCT=(freqTb1.length*freqCb2.length*freqTb3.length)/(a.length*a.length*a.length)
var rabcTCC=(freqTb1.length*freqCb2.length*freqCb3.length)/(a.length*a.length*a.length)
var rabcTCA=(freqTb1.length*freqCb2.length*freqAb3.length)/(a.length*a.length*a.length)
var rabcTCG=(freqTb1.length*freqCb2.length*freqGb3.length)/(a.length*a.length*a.length)
var rabcCCT=(freqCb1.length*freqCb2.length*freqTb3.length)/(a.length*a.length*a.length)
var rabcCCC=(freqCb1.length*freqCb2.length*freqCb3.length)/(a.length*a.length*a.length)
var rabcCCA=(freqCb1.length*freqCb2.length*freqAb3.length)/(a.length*a.length*a.length)
var rabcCCG=(freqCb1.length*freqCb2.length*freqGb3.length)/(a.length*a.length*a.length)
var rabcACT=(freqAb1.length*freqCb2.length*freqTb3.length)/(a.length*a.length*a.length)
var rabcACC=(freqAb1.length*freqCb2.length*freqCb3.length)/(a.length*a.length*a.length)
var rabcACA=(freqAb1.length*freqCb2.length*freqAb3.length)/(a.length*a.length*a.length)
var rabcACG=(freqAb1.length*freqCb2.length*freqGb3.length)/(a.length*a.length*a.length)
var rabcGCT=(freqGb1.length*freqCb2.length*freqTb3.length)/(a.length*a.length*a.length)
var rabcGCC=(freqGb1.length*freqCb2.length*freqCb3.length)/(a.length*a.length*a.length)
var rabcGCA=(freqGb1.length*freqCb2.length*freqAb3.length)/(a.length*a.length*a.length)
var rabcGCG=(freqGb1.length*freqCb2.length*freqGb3.length)/(a.length*a.length*a.length)
var rabcTAT=(freqTb1.length*freqAb2.length*freqTb3.length)/(a.length*a.length*a.length)
var rabcTAC=(freqTb1.length*freqAb2.length*freqCb3.length)/(a.length*a.length*a.length)
var rabcTAA=(freqTb1.length*freqAb2.length*freqAb3.length)/(a.length*a.length*a.length)
var rabcTAG=(freqTb1.length*freqAb2.length*freqGb3.length)/(a.length*a.length*a.length)
var rabcTGA=(freqTb1.length*freqGb2.length*freqAb3.length)/(a.length*a.length*a.length)
var rabcCAT=(freqCb1.length*freqAb2.length*freqTb3.length)/(a.length*a.length*a.length)
var rabcCAC=(freqCb1.length*freqAb2.length*freqCb3.length)/(a.length*a.length*a.length)
var rabcCAA=(freqCb1.length*freqAb2.length*freqAb3.length)/(a.length*a.length*a.length)
var rabcCAG=(freqCb1.length*freqAb2.length*freqGb3.length)/(a.length*a.length*a.length)
var rabcAAT=(freqAb1.length*freqAb2.length*freqTb3.length)/(a.length*a.length*a.length)
var rabcAAC=(freqAb1.length*freqAb2.length*freqCb3.length)/(a.length*a.length*a.length)
var rabcAAA=(freqAb1.length*freqAb2.length*freqAb3.length)/(a.length*a.length*a.length)
var rabcAAG=(freqAb1.length*freqAb2.length*freqGb3.length)/(a.length*a.length*a.length)
var rabcGAT=(freqGb1.length*freqAb2.length*freqTb3.length)/(a.length*a.length*a.length)
var rabcGAC=(freqGb1.length*freqAb2.length*freqCb3.length)/(a.length*a.length*a.length)
var rabcGAA=(freqGb1.length*freqAb2.length*freqAb3.length)/(a.length*a.length*a.length)
var rabcGAG=(freqGb1.length*freqAb2.length*freqGb3.length)/(a.length*a.length*a.length)
var rabcTGT=(freqTb1.length*freqGb2.length*freqTb3.length)/(a.length*a.length*a.length)
var rabcTGC=(freqTb1.length*freqGb2.length*freqCb3.length)/(a.length*a.length*a.length)
var rabcTGG=(freqTb1.length*freqGb2.length*freqGb3.length)/(a.length*a.length*a.length)
var rabcCGT=(freqCb1.length*freqGb2.length*freqTb3.length)/(a.length*a.length*a.length)
var rabcCGC=(freqCb1.length*freqGb2.length*freqCb3.length)/(a.length*a.length*a.length)
var rabcCGA=(freqCb1.length*freqGb2.length*freqAb3.length)/(a.length*a.length*a.length)
var rabcCGG=(freqCb1.length*freqGb2.length*freqGb3.length)/(a.length*a.length*a.length)
var rabcAGT=(freqAb1.length*freqGb2.length*freqTb3.length)/(a.length*a.length*a.length)
var rabcAGC=(freqAb1.length*freqGb2.length*freqCb3.length)/(a.length*a.length*a.length)
var rabcAGA=(freqAb1.length*freqGb2.length*freqAb3.length)/(a.length*a.length*a.length)
var rabcAGG=(freqAb1.length*freqGb2.length*freqGb3.length)/(a.length*a.length*a.length)
var rabcGGT=(freqGb1.length*freqGb2.length*freqTb3.length)/(a.length*a.length*a.length)
var rabcGGC=(freqGb1.length*freqGb2.length*freqCb3.length)/(a.length*a.length*a.length)
var rabcGGA=(freqGb1.length*freqGb2.length*freqAb3.length)/(a.length*a.length*a.length)
var rabcGGG=(freqGb1.length*freqGb2.length*freqGb3.length)/(a.length*a.length*a.length)



var preferenceParameterTTT=((freqTTT.length/freq1.length)/(rabcTTT/(rabcTTT+rabcTTC)))
var preferenceParameterTTC=((freqTTC.length/freq1.length)/(rabcTTC/(rabcTTT+rabcTTC)))
var preferenceParameterTTA=((freqTTA.length/freq2.length)/(rabcTTA/(rabcTTA+rabcTTG+rabcCTT+rabcCTC+rabcCTA+rabcCTG)))
var preferenceParameterTTG=((freqTTG.length/freq2.length)/(rabcTTG/(rabcTTA+rabcTTG+rabcCTT+rabcCTC+rabcCTA+rabcCTG)))
var preferenceParameterCTT=((freqCTT.length/freq2.length)/(rabcCTT/(rabcTTA+rabcTTG+rabcCTT+rabcCTC+rabcCTA+rabcCTG)))
var preferenceParameterCTC=((freqCTC.length/freq2.length)/(rabcCTC/(rabcTTA+rabcTTG+rabcCTT+rabcCTC+rabcCTA+rabcCTG)))
var preferenceParameterCTA=((freqCTA.length/freq2.length)/(rabcCTA/(rabcTTA+rabcTTG+rabcCTT+rabcCTC+rabcCTA+rabcCTG)))
var preferenceParameterCTG=((freqCTG.length/freq2.length)/(rabcCTG/(rabcTTA+rabcTTG+rabcCTT+rabcCTC+rabcCTA+rabcCTG)))
var preferenceParameterATT=((freqATT.length/freq3.length)/(rabcATT/(rabcATT+rabcATC+rabcATA)))
var preferenceParameterATC=((freqATC.length/freq3.length)/(rabcATC/(rabcATT+rabcATC+rabcATA)))
var preferenceParameterATA=((freqATA.length/freq3.length)/(rabcATA/(rabcATT+rabcATC+rabcATA)))
var preferenceParameterATG=((freqATG.length/freq4.length)/(rabcATG/(rabcATG)))
var preferenceParameterGTT=((freqGTT.length/freq5.length)/(rabcGTT/(rabcGTT+rabcGTC+rabcGTA+rabcGTG)))
var preferenceParameterGTC=((freqGTC.length/freq5.length)/(rabcGTC/(rabcGTT+rabcGTC+rabcGTA+rabcGTG)))
var preferenceParameterGTA=((freqGTA.length/freq5.length)/(rabcGTA/(rabcGTT+rabcGTC+rabcGTA+rabcGTG)))
var preferenceParameterGTG=((freqGTG.length/freq5.length)/(rabcGTG/(rabcGTT+rabcGTC+rabcGTA+rabcGTG)))
var preferenceParameterTCT=((freqTCT.length/freq6.length)/(rabcTCT/(rabcTCT+rabcTCC+rabcTCA+rabcTCG)))
var preferenceParameterTCC=((freqTCC.length/freq6.length)/(rabcTCC/(rabcTCT+rabcTCC+rabcTCA+rabcTCG)))
var preferenceParameterTCA=((freqTCA.length/freq6.length)/(rabcTCA/(rabcTCT+rabcTCC+rabcTCA+rabcTCG)))
var preferenceParameterTCG=((freqTCG.length/freq6.length)/(rabcTCG/(rabcTCT+rabcTCC+rabcTCA+rabcTCG)))
var preferenceParameterCCT=((freqCCT.length/freq7.length)/(rabcCCT/(rabcCCT+rabcCCC+rabcCCA+rabcCCG)))
var preferenceParameterCCC=((freqCCC.length/freq7.length)/(rabcCCC/(rabcCCT+rabcCCC+rabcCCA+rabcCCG)))
var preferenceParameterCCA=((freqCCA.length/freq7.length)/(rabcCCA/(rabcCCT+rabcCCC+rabcCCA+rabcCCG)))
var preferenceParameterCCG=((freqCCG.length/freq7.length)/(rabcCCG/(rabcCCT+rabcCCC+rabcCCA+rabcCCG)))
var preferenceParameterACT=((freqACT.length/freq8.length)/(rabcACT/(rabcACT+rabcACC+rabcACA+rabcACG)))
var preferenceParameterACC=((freqACC.length/freq8.length)/(rabcACC/(rabcACT+rabcACC+rabcACA+rabcACG)))
var preferenceParameterACA=((freqACA.length/freq8.length)/(rabcACA/(rabcACT+rabcACC+rabcACA+rabcACG)))
var preferenceParameterACG=((freqACG.length/freq8.length)/(rabcACG/(rabcACT+rabcACC+rabcACA+rabcACG)))
var preferenceParameterGCT=((freqGCT.length/freq9.length)/(rabcGCT/(rabcGCT+rabcGCC+rabcGCA+rabcGCG)))
var preferenceParameterGCC=((freqGCC.length/freq9.length)/(rabcGCC/(rabcGCT+rabcGCC+rabcGCA+rabcGCG)))
var preferenceParameterGCA=((freqGCA.length/freq9.length)/(rabcGCA/(rabcGCT+rabcGCC+rabcGCA+rabcGCG)))
var preferenceParameterGCG=((freqGCG.length/freq9.length)/(rabcGCG/(rabcGCT+rabcGCC+rabcGCA+rabcGCG)))
var preferenceParameterTAT=((freqTAT.length/freq10.length)/(rabcTAT/(rabcTAT+rabcTAC)))
var preferenceParameterTAC=((freqTAC.length/freq10.length)/(rabcTAC/(rabcTAT+rabcTAC)))
var preferenceParameterTAA=((freqTAA.length/freq11stop.length)/(rabcTAA/(rabcTAA+rabcTAG+rabcTGA)))
var preferenceParameterTAG=((freqTAG.length/freq11stop.length)/(rabcTAG/(rabcTAA+rabcTAG+rabcTGA)))
var preferenceParameterTGA=((freqTGA.length/freq11stop.length)/(rabcTGA/(rabcTAA+rabcTAG+rabcTGA)))
var preferenceParameterCAT=((freqCAT.length/freq12.length)/(rabcCAT/(rabcCAT+rabcCAC)))
var preferenceParameterCAC=((freqCAC.length/freq12.length)/(rabcCAC/(rabcCAT+rabcCAC)))
var preferenceParameterCAA=((freqCAA.length/freq13.length)/(rabcCAA/(rabcCAA+rabcCAG)))
var preferenceParameterCAG=((freqCAG.length/freq13.length)/(rabcCAG/(rabcCAA+rabcCAG)))
var preferenceParameterAAT=((freqAAT.length/freq14.length)/(rabcAAT/(rabcAAT+rabcAAC)))
var preferenceParameterAAC=((freqAAC.length/freq14.length)/(rabcAAC/(rabcAAT+rabcAAC)))
var preferenceParameterAAA=((freqAAA.length/freq15.length)/(rabcAAA/(rabcAAA+rabcAAG)))
var preferenceParameterAAG=((freqAAG.length/freq15.length)/(rabcAAG/(rabcAAA+rabcAAG)))
var preferenceParameterGAT=((freqGAT.length/freq16.length)/(rabcGAT/(rabcGAT+rabcGAC)))
var preferenceParameterGAC=((freqGAC.length/freq16.length)/(rabcGAC/(rabcGAT+rabcGAC)))
var preferenceParameterGAA=((freqGAA.length/freq17.length)/(rabcGAA/(rabcGAA+rabcGAG)))
var preferenceParameterGAG=((freqGAG.length/freq17.length)/(rabcGAG/(rabcGAA+rabcGAG)))
var preferenceParameterTGT=((freqTGT.length/freq18.length)/(rabcTGT/(rabcTGT+rabcTGC)))
var preferenceParameterTGC=((freqTGC.length/freq18.length)/(rabcTGC/(rabcTGT+rabcTGC)))
var preferenceParameterTGG=((freqTGG.length/freq19.length)/(rabcTGG/(rabcTGG)))
var preferenceParameterCGT=((freqCGT.length/freq20.length)/(rabcCGT/(rabcCGT+rabcCGC+rabcCGA+rabcCGG)))
var preferenceParameterCGC=((freqCGC.length/freq20.length)/(rabcCGC/(rabcCGT+rabcCGC+rabcCGA+rabcCGG)))
var preferenceParameterCGA=((freqCGA.length/freq20.length)/(rabcCGA/(rabcCGT+rabcCGC+rabcCGA+rabcCGG)))
var preferenceParameterCGG=((freqCGG.length/freq20.length)/(rabcCGG/(rabcCGT+rabcCGC+rabcCGA+rabcCGG)))
var preferenceParameterAGT=((freqAGT.length/freq6.length)/(rabcAGT/(rabcAGT+rabcAGC)))
var preferenceParameterAGC=((freqAGC.length/freq6.length)/(rabcAGC/(rabcAGT+rabcAGC)))
var preferenceParameterAGA=((freqAGA.length/freq20.length)/(rabcAGA/(rabcAGA+rabcAGG)))
var preferenceParameterAGG=((freqAGG.length/freq20.length)/(rabcAGG/(rabcAGA+rabcAGG)))
var preferenceParameterGGT=((freqGGT.length/freq21.length)/(rabcGGT/(rabcGGT+rabcGGC+rabcGGA+rabcGGG)))
var preferenceParameterGGC=((freqGGC.length/freq21.length)/(rabcGGC/(rabcGGT+rabcGGC+rabcGGA+rabcGGG)))
var preferenceParameterGGA=((freqGGA.length/freq21.length)/(rabcGGA/(rabcGGT+rabcGGC+rabcGGA+rabcGGG)))
var preferenceParameterGGG=((freqGGG.length/freq21.length)/(rabcGGG/(rabcGGT+rabcGGC+rabcGGA+rabcGGG)))

var b1=[]

b1.push(Math.log(preferenceParameterTTT))
b1.push(Math.log(preferenceParameterTTC))
b1.push(Math.log(preferenceParameterTTA))
b1.push(Math.log(preferenceParameterTTG))
b1.push(Math.log(preferenceParameterCTT))
b1.push(Math.log(preferenceParameterCTC))
b1.push(Math.log(preferenceParameterCTA))
b1.push(Math.log(preferenceParameterCTG))
b1.push(Math.log(preferenceParameterATT))
b1.push(Math.log(preferenceParameterATC))
b1.push(Math.log(preferenceParameterATA))
b1.push(Math.log(preferenceParameterATG))
b1.push(Math.log(preferenceParameterGTT))
b1.push(Math.log(preferenceParameterGTC))
b1.push(Math.log(preferenceParameterGTA))
b1.push(Math.log(preferenceParameterGTG))
b1.push(Math.log(preferenceParameterTCT))
b1.push(Math.log(preferenceParameterTCC))
b1.push(Math.log(preferenceParameterTCA))
b1.push(Math.log(preferenceParameterTCG))
b1.push(Math.log(preferenceParameterCCT))
b1.push(Math.log(preferenceParameterCCC))
b1.push(Math.log(preferenceParameterCCA))
b1.push(Math.log(preferenceParameterCCG))
b1.push(Math.log(preferenceParameterACT))
b1.push(Math.log(preferenceParameterACC))
b1.push(Math.log(preferenceParameterACA))
b1.push(Math.log(preferenceParameterACG))
b1.push(Math.log(preferenceParameterGCT))
b1.push(Math.log(preferenceParameterGCC))
b1.push(Math.log(preferenceParameterGCA))
b1.push(Math.log(preferenceParameterGCG))
b1.push(Math.log(preferenceParameterTAT))
b1.push(Math.log(preferenceParameterTAC))
b1.push(Math.log(preferenceParameterTAA))
b1.push(Math.log(preferenceParameterTAG))
b1.push(Math.log(preferenceParameterTGA))
b1.push(Math.log(preferenceParameterCAT))
b1.push(Math.log(preferenceParameterCAC))
b1.push(Math.log(preferenceParameterCAA))
b1.push(Math.log(preferenceParameterCAG))
b1.push(Math.log(preferenceParameterAAT))
b1.push(Math.log(preferenceParameterAAC))
b1.push(Math.log(preferenceParameterAAA))
b1.push(Math.log(preferenceParameterAAG))
b1.push(Math.log(preferenceParameterGAT))
b1.push(Math.log(preferenceParameterGAC))
b1.push(Math.log(preferenceParameterGAA))
b1.push(Math.log(preferenceParameterGAG))
b1.push(Math.log(preferenceParameterTGT))
b1.push(Math.log(preferenceParameterTGC))
b1.push(Math.log(preferenceParameterTGG))
b1.push(Math.log(preferenceParameterCGT))
b1.push(Math.log(preferenceParameterCGC))
b1.push(Math.log(preferenceParameterCGA))
b1.push(Math.log(preferenceParameterCGG))
b1.push(Math.log(preferenceParameterAGT))
b1.push(Math.log(preferenceParameterAGC))
b1.push(Math.log(preferenceParameterAGA))
b1.push(Math.log(preferenceParameterAGG))
b1.push(Math.log(preferenceParameterGGT))
b1.push(Math.log(preferenceParameterGGC))
b1.push(Math.log(preferenceParameterGGA))
b1.push(Math.log(preferenceParameterGGG))

var b11=0;

for(var i=0;i<b1.length;i++) {
	var counter;
	if(isNaN(b1[i])==true) {
		//console.log("NaN value")
		continue;
	}else if(isFinite(b1[i])==false) {
		continue;
	}else if(isNaN(b1[i])==false){
		b11+=b1[i]
		//console.log(wcWcRel1)
	}
}

var codonPreferenceStatistic=Math.exp(b11/lengthL)

//console.log("pi value: "+b11)
//console.log("Codon Preference Statistic: "+codonPreferenceStatistic)
//h6.push(codonPreferenceStatistic)

/********* END	 	Codon Preference (P) *********/



/********* START 	Relative Codon Usage Bias (RCB) *********/

var wcRCBvalTTT=(relfreqTTT-refTTTval)/refTTTval
var wcRCBvalTTC=(relfreqTTC-refTTCval)/refTTCval
var wcRCBvalTTA=(relfreqTTA-refTTAval)/refTTAval
var wcRCBvalTTG=(relfreqTTG-refTTGval)/refTTGval
var wcRCBvalCTT=(relfreqCTT-refCTTval)/refCTTval
var wcRCBvalCTC=(relfreqCTC-refCTCval)/refCTCval
var wcRCBvalCTA=(relfreqCTA-refCTAval)/refCTAval
var wcRCBvalCTG=(relfreqCTG-refCTGval)/refCTGval
var wcRCBvalATT=(relfreqATT-refATTval)/refATTval
var wcRCBvalATC=(relfreqATC-refATCval)/refATCval
var wcRCBvalATA=(relfreqATA-refATAval)/refATAval
var wcRCBvalATG=(relfreqATG-refATGval)/refATGval
var wcRCBvalGTT=(relfreqGTT-refGTTval)/refGTTval
var wcRCBvalGTC=(relfreqGTC-refGTCval)/refGTCval
var wcRCBvalGTA=(relfreqGTA-refGTAval)/refGTAval
var wcRCBvalGTG=(relfreqGTG-refGTGval)/refGTGval
var wcRCBvalTCT=(relfreqTCT-refTCTval)/refTCTval
var wcRCBvalTCC=(relfreqTCC-refTCCval)/refTCCval
var wcRCBvalTCA=(relfreqTCA-refTCAval)/refTCAval
var wcRCBvalTCG=(relfreqTCG-refTCGval)/refTCGval
var wcRCBvalCCT=(relfreqCCT-refCCTval)/refCCTval
var wcRCBvalCCC=(relfreqCCC-refCCCval)/refCCCval
var wcRCBvalCCA=(relfreqCCA-refCCAval)/refCCAval
var wcRCBvalCCG=(relfreqCCG-refCCGval)/refCCGval
var wcRCBvalACT=(relfreqACT-refACTval)/refACTval
var wcRCBvalACC=(relfreqACC-refACCval)/refACCval
var wcRCBvalACA=(relfreqACA-refACAval)/refACAval
var wcRCBvalACG=(relfreqACG-refACGval)/refACGval
var wcRCBvalGCT=(relfreqGCT-refGCTval)/refGCTval
var wcRCBvalGCC=(relfreqGCC-refGCCval)/refGCCval
var wcRCBvalGCA=(relfreqGCA-refGCAval)/refGCAval
var wcRCBvalGCG=(relfreqGCG-refGCGval)/refGCGval
var wcRCBvalTAT=(relfreqTAT-refTATval)/refTATval
var wcRCBvalTAC=(relfreqTAC-refTACval)/refTACval
var wcRCBvalTAA=(relfreqTAA-refTAAval)/refTAAval
var wcRCBvalTAG=(relfreqTAG-refTAGval)/refTAGval
var wcRCBvalTGA=(relfreqTGA-refTGAval)/refTGAval
var wcRCBvalCAT=(relfreqCAT-refCATval)/refCATval
var wcRCBvalCAC=(relfreqCAC-refCACval)/refCACval
var wcRCBvalCAA=(relfreqCAA-refCAAval)/refCAAval
var wcRCBvalCAG=(relfreqCAG-refCAGval)/refCAGval
var wcRCBvalAAT=(relfreqAAT-refAATval)/refAATval
var wcRCBvalAAC=(relfreqAAC-refAACval)/refAACval
var wcRCBvalAAA=(relfreqAAA-refAAAval)/refAAAval
var wcRCBvalAAG=(relfreqAAG-refAAGval)/refAAGval
var wcRCBvalGAT=(relfreqGAT-refGATval)/refGATval
var wcRCBvalGAC=(relfreqGAC-refGACval)/refGACval
var wcRCBvalGAA=(relfreqGAA-refGAAval)/refGAAval
var wcRCBvalGAG=(relfreqGAG-refGAGval)/refGAGval
var wcRCBvalTGT=(relfreqTGT-refTGTval)/refTGTval
var wcRCBvalTGC=(relfreqTGC-refTGCval)/refTGCval
var wcRCBvalTGG=(relfreqTGG-refTGGval)/refTGGval
var wcRCBvalCGT=(relfreqCGT-refCGTval)/refCGTval
var wcRCBvalCGC=(relfreqCGC-refCGCval)/refCGCval
var wcRCBvalCGA=(relfreqCGA-refCGAval)/refCGAval
var wcRCBvalCGG=(relfreqCGG-refCGGval)/refCGGval
var wcRCBvalAGT=(relfreqAGT-refAGTval)/refAGTval
var wcRCBvalAGC=(relfreqAGC-refAGCval)/refAGCval
var wcRCBvalAGA=(relfreqAGA-refAGAval)/refAGAval
var wcRCBvalAGG=(relfreqAGG-refAGGval)/refAGGval
var wcRCBvalGGT=(relfreqGGT-refGGTval)/refGGTval
var wcRCBvalGGC=(relfreqGGC-refGGCval)/refGGCval
var wcRCBvalGGA=(relfreqGGA-refGGAval)/refGGAval
var wcRCBvalGGG=(relfreqGGG-refGGGval)/refGGGval


var freqAb1=[], freqAb2=[], freqAb3=[], freqTb1=[], freqTb2=[], freqTb3=[], freqCb1=[], freqCb2=[], freqCb3=[], freqGb1=[], freqGb2=[], freqGb3=[]; 

for(var i=0;i<a.length;i+=3) {
	if(a[i]=='A') {
		freqAb1.push(a[i])
	} else if(a[i]=='T') {
		freqTb1.push(a[i])
	} else if(a[i]=='C') {
		freqCb1.push(a[i])
	} else if(a[i]=='G') {
		freqGb1.push(a[i])
	}
}

for(var i=1;i<a.length;i+=3) {
	if(a[i]=='A') {
		freqAb2.push(a[i])
	} else if(a[i]=='T') {
		freqTb2.push(a[i])
	} else if(a[i]=='C') {
		freqCb2.push(a[i])
	} else if(a[i]=='G') {
		freqGb2.push(a[i])
	}
}

for(var i=2;i<a.length;i+=3) {
	if(a[i]=='A') {
		freqAb3.push(a[i])
	} else if(a[i]=='T') {
		freqTb3.push(a[i])
	} else if(a[i]=='C') {
		freqCb3.push(a[i])
	} else if(a[i]=='G') {
		freqGb3.push(a[i])
	}
}

var val1TTT=Math.log(Math.abs((freqTTT.length/allCountsF1)-((freqTb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqTb3.length/allCountsF1))/((freqTb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqTb3.length/allCountsF1))))
var val1TTC=Math.log(Math.abs((freqTTC.length/allCountsF1)-((freqTb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqCb3.length/allCountsF1))/((freqTb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqCb3.length/allCountsF1))))
var val1TTA=Math.log(Math.abs((freqTTA.length/allCountsF1)-((freqTb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqAb3.length/allCountsF1))/((freqTb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqAb3.length/allCountsF1))))
var val1TTG=Math.log(Math.abs((freqTTG.length/allCountsF1)-((freqTb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqGb3.length/allCountsF1))/((freqTb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqGb3.length/allCountsF1))))
var val1CTT=Math.log(Math.abs((freqCTT.length/allCountsF1)-((freqCb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqTb3.length/allCountsF1))/((freqCb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqTb3.length/allCountsF1))))
var val1CTC=Math.log(Math.abs((freqCTC.length/allCountsF1)-((freqCb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqCb3.length/allCountsF1))/((freqCb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqCb3.length/allCountsF1))))
var val1CTA=Math.log(Math.abs((freqCTA.length/allCountsF1)-((freqCb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqAb3.length/allCountsF1))/((freqCb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqAb3.length/allCountsF1))))
var val1CTG=Math.log(Math.abs((freqCTG.length/allCountsF1)-((freqCb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqGb3.length/allCountsF1))/((freqCb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqGb3.length/allCountsF1))))
var val1ATT=Math.log(Math.abs((freqATT.length/allCountsF1)-((freqAb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqTb3.length/allCountsF1))/((freqAb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqTb3.length/allCountsF1))))
var val1ATC=Math.log(Math.abs((freqATC.length/allCountsF1)-((freqAb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqCb3.length/allCountsF1))/((freqAb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqCb3.length/allCountsF1))))
var val1ATA=Math.log(Math.abs((freqATA.length/allCountsF1)-((freqAb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqAb3.length/allCountsF1))/((freqAb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqAb3.length/allCountsF1))))
var val1ATG=Math.log(Math.abs((freqATG.length/allCountsF1)-((freqAb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqGb3.length/allCountsF1))/((freqAb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqGb3.length/allCountsF1))))
var val1GTT=Math.log(Math.abs((freqGTT.length/allCountsF1)-((freqGb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqTb3.length/allCountsF1))/((freqGb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqTb3.length/allCountsF1))))
var val1GTC=Math.log(Math.abs((freqGTC.length/allCountsF1)-((freqGb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqCb3.length/allCountsF1))/((freqGb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqCb3.length/allCountsF1))))
var val1GTA=Math.log(Math.abs((freqGTA.length/allCountsF1)-((freqGb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqAb3.length/allCountsF1))/((freqGb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqAb3.length/allCountsF1))))
var val1GTG=Math.log(Math.abs((freqGTG.length/allCountsF1)-((freqGb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqGb3.length/allCountsF1))/((freqGb1.length/allCountsF1)*(freqTb2.length/allCountsF1)*(freqGb3.length/allCountsF1))))
var val1TCT=Math.log(Math.abs((freqTCT.length/allCountsF1)-((freqTb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqTb3.length/allCountsF1))/((freqTb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqTb3.length/allCountsF1))))
var val1TCC=Math.log(Math.abs((freqTCC.length/allCountsF1)-((freqTb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqCb3.length/allCountsF1))/((freqTb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqCb3.length/allCountsF1))))
var val1TCA=Math.log(Math.abs((freqTCA.length/allCountsF1)-((freqTb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqAb3.length/allCountsF1))/((freqTb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqAb3.length/allCountsF1))))
var val1TCG=Math.log(Math.abs((freqTCG.length/allCountsF1)-((freqTb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqGb3.length/allCountsF1))/((freqTb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqGb3.length/allCountsF1))))
var val1CCT=Math.log(Math.abs((freqCCT.length/allCountsF1)-((freqCb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqTb3.length/allCountsF1))/((freqCb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqTb3.length/allCountsF1))))
var val1CCC=Math.log(Math.abs((freqCCC.length/allCountsF1)-((freqCb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqCb3.length/allCountsF1))/((freqCb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqCb3.length/allCountsF1))))
var val1CCA=Math.log(Math.abs((freqCCA.length/allCountsF1)-((freqCb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqAb3.length/allCountsF1))/((freqCb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqAb3.length/allCountsF1))))
var val1CCG=Math.log(Math.abs((freqCCG.length/allCountsF1)-((freqCb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqGb3.length/allCountsF1))/((freqCb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqGb3.length/allCountsF1))))
var val1ACT=Math.log(Math.abs((freqACT.length/allCountsF1)-((freqAb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqTb3.length/allCountsF1))/((freqAb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqTb3.length/allCountsF1))))
var val1ACC=Math.log(Math.abs((freqACC.length/allCountsF1)-((freqAb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqCb3.length/allCountsF1))/((freqAb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqCb3.length/allCountsF1))))
var val1ACA=Math.log(Math.abs((freqACA.length/allCountsF1)-((freqAb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqAb3.length/allCountsF1))/((freqAb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqAb3.length/allCountsF1))))
var val1ACG=Math.log(Math.abs((freqACG.length/allCountsF1)-((freqAb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqGb3.length/allCountsF1))/((freqAb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqGb3.length/allCountsF1))))
var val1GCT=Math.log(Math.abs((freqGCT.length/allCountsF1)-((freqGb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqTb3.length/allCountsF1))/((freqGb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqTb3.length/allCountsF1))))
var val1GCC=Math.log(Math.abs((freqGCC.length/allCountsF1)-((freqGb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqCb3.length/allCountsF1))/((freqGb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqCb3.length/allCountsF1))))
var val1GCA=Math.log(Math.abs((freqGCA.length/allCountsF1)-((freqGb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqAb3.length/allCountsF1))/((freqGb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqAb3.length/allCountsF1))))
var val1GCG=Math.log(Math.abs((freqGCG.length/allCountsF1)-((freqGb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqGb3.length/allCountsF1))/((freqGb1.length/allCountsF1)*(freqCb2.length/allCountsF1)*(freqGb3.length/allCountsF1))))
var val1TAT=Math.log(Math.abs((freqTAT.length/allCountsF1)-((freqTb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqTb3.length/allCountsF1))/((freqTb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqTb3.length/allCountsF1))))
var val1TAC=Math.log(Math.abs((freqTAC.length/allCountsF1)-((freqTb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqCb3.length/allCountsF1))/((freqTb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqCb3.length/allCountsF1))))
var val1TAA=Math.log(Math.abs((freqTAA.length/allCountsF1)-((freqTb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqAb3.length/allCountsF1))/((freqTb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqAb3.length/allCountsF1))))
var val1TAG=Math.log(Math.abs((freqTAG.length/allCountsF1)-((freqTb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqGb3.length/allCountsF1))/((freqTb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqGb3.length/allCountsF1))))
var val1TGA=Math.log(Math.abs((freqTGA.length/allCountsF1)-((freqTb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqAb3.length/allCountsF1))/((freqTb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqAb3.length/allCountsF1))))
var val1CAT=Math.log(Math.abs((freqCAT.length/allCountsF1)-((freqCb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqTb3.length/allCountsF1))/((freqCb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqTb3.length/allCountsF1))))
var val1CAC=Math.log(Math.abs((freqCAC.length/allCountsF1)-((freqCb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqCb3.length/allCountsF1))/((freqCb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqCb3.length/allCountsF1))))
var val1CAA=Math.log(Math.abs((freqCAA.length/allCountsF1)-((freqCb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqAb3.length/allCountsF1))/((freqCb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqAb3.length/allCountsF1))))
var val1CAG=Math.log(Math.abs((freqCAG.length/allCountsF1)-((freqCb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqGb3.length/allCountsF1))/((freqCb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqGb3.length/allCountsF1))))
var val1AAT=Math.log(Math.abs((freqAAT.length/allCountsF1)-((freqAb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqTb3.length/allCountsF1))/((freqAb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqTb3.length/allCountsF1))))
var val1AAC=Math.log(Math.abs((freqAAC.length/allCountsF1)-((freqAb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqCb3.length/allCountsF1))/((freqAb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqCb3.length/allCountsF1))))
var val1AAA=Math.log(Math.abs((freqAAA.length/allCountsF1)-((freqAb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqAb3.length/allCountsF1))/((freqAb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqAb3.length/allCountsF1))))
var val1AAG=Math.log(Math.abs((freqAAG.length/allCountsF1)-((freqAb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqGb3.length/allCountsF1))/((freqAb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqGb3.length/allCountsF1))))
var val1GAT=Math.log(Math.abs((freqGAT.length/allCountsF1)-((freqGb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqTb3.length/allCountsF1))/((freqGb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqTb3.length/allCountsF1))))
var val1GAC=Math.log(Math.abs((freqGAC.length/allCountsF1)-((freqGb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqCb3.length/allCountsF1))/((freqGb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqCb3.length/allCountsF1))))
var val1GAA=Math.log(Math.abs((freqGAA.length/allCountsF1)-((freqGb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqAb3.length/allCountsF1))/((freqGb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqAb3.length/allCountsF1))))
var val1GAG=Math.log(Math.abs((freqGAG.length/allCountsF1)-((freqGb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqGb3.length/allCountsF1))/((freqGb1.length/allCountsF1)*(freqAb2.length/allCountsF1)*(freqGb3.length/allCountsF1))))
var val1TGT=Math.log(Math.abs((freqTGT.length/allCountsF1)-((freqTb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqTb3.length/allCountsF1))/((freqTb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqTb3.length/allCountsF1))))
var val1TGC=Math.log(Math.abs((freqTGC.length/allCountsF1)-((freqTb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqCb3.length/allCountsF1))/((freqTb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqCb3.length/allCountsF1))))
var val1TGG=Math.log(Math.abs((freqTGG.length/allCountsF1)-((freqTb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqGb3.length/allCountsF1))/((freqTb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqGb3.length/allCountsF1))))
var val1CGT=Math.log(Math.abs((freqCGT.length/allCountsF1)-((freqCb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqTb3.length/allCountsF1))/((freqCb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqTb3.length/allCountsF1))))
var val1CGC=Math.log(Math.abs((freqCGC.length/allCountsF1)-((freqCb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqCb3.length/allCountsF1))/((freqCb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqCb3.length/allCountsF1))))
var val1CGA=Math.log(Math.abs((freqCGA.length/allCountsF1)-((freqCb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqAb3.length/allCountsF1))/((freqCb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqAb3.length/allCountsF1))))
var val1CGG=Math.log(Math.abs((freqCGG.length/allCountsF1)-((freqCb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqGb3.length/allCountsF1))/((freqCb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqGb3.length/allCountsF1))))
var val1AGT=Math.log(Math.abs((freqAGT.length/allCountsF1)-((freqAb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqTb3.length/allCountsF1))/((freqAb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqTb3.length/allCountsF1))))
var val1AGC=Math.log(Math.abs((freqAGC.length/allCountsF1)-((freqAb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqCb3.length/allCountsF1))/((freqAb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqCb3.length/allCountsF1))))
var val1AGA=Math.log(Math.abs((freqAGA.length/allCountsF1)-((freqAb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqAb3.length/allCountsF1))/((freqAb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqAb3.length/allCountsF1))))
var val1AGG=Math.log(Math.abs((freqAGG.length/allCountsF1)-((freqAb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqGb3.length/allCountsF1))/((freqAb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqGb3.length/allCountsF1))))
var val1GGT=Math.log(Math.abs((freqGGT.length/allCountsF1)-((freqGb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqTb3.length/allCountsF1))/((freqGb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqTb3.length/allCountsF1))))
var val1GGC=Math.log(Math.abs((freqGGC.length/allCountsF1)-((freqGb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqCb3.length/allCountsF1))/((freqGb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqCb3.length/allCountsF1))))
var val1GGA=Math.log(Math.abs((freqGGA.length/allCountsF1)-((freqGb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqAb3.length/allCountsF1))/((freqGb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqAb3.length/allCountsF1))))
var val1GGG=Math.log(Math.abs((freqGGG.length/allCountsF1)-((freqGb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqGb3.length/allCountsF1))/((freqGb1.length/allCountsF1)*(freqGb2.length/allCountsF1)*(freqGb3.length/allCountsF1))))

var logWcRCB=val1TTT+val1TTC+val1TTA+val1TTG+val1CTT+val1CTC+val1CTA+val1CTG+val1ATT+val1ATC+val1ATA+val1ATG+val1GTT+val1GTC+val1GTA+val1GTG+val1TCT+val1TCC+val1TCA+val1TCG+val1CCT+val1CCC+val1CCA+val1CCG+val1ACT+val1ACC+val1ACA+val1ACG+val1GCT+val1GCC+val1GCA+val1GCG+val1TAT+val1TAC+val1TAA+val1TAG+val1TGA+val1CAT+val1CAC+val1CAA+val1CAG+val1AAT+val1AAC+val1AAA+val1AAG+val1GAT+val1GAC+val1GAA+val1GAG+val1TGT+val1TGC+val1TGG+val1CGT+val1CGC+val1CGA+val1CGG+val1AGT+val1AGC+val1AGA+val1AGG+val1GGT+val1GGC+val1GGA+val1GGG

//console.log("RCB: "+(Math.exp(logWcRCB/a.length)-1))

var rcbVal=(Math.exp(logWcRCB/a.length)-1)

h5.push(rcbVal)

/********* END	 	Relative Codon Usage Bias (RCB) *********/




//	Forward Frame 2
var b1=[]
var b2=[]
var b3=[]
var b4=[]

for(var i=1;i<a.length;i+=3) {
	b1=a.substring(i,i+3)
	b2.push(b1)
}

//	Forward Frame 3

var c1=[]
var c2=[]
var c3=[]
var c4=[]


for(var i=2;i<a.length;i+=3) {
	c1=a.substring(i,i+3)
	c2.push(c1)
}

//	Forward strand Frame 2	//

for(var i=0;i<b2.length;i++) {
	if(b2[i] == 'TTT' || b2[i] == 'TTC') {
		b3='F'
		b4.push(b3)
	} else if(b2[i] == 'TTA' || b2[i] == 'TTG' || b2[i] == 'CTT' || b2[i] == 'CTC' || b2[i] == 'CTA' || b2[i] == 'CTG') {
		b3='L'
		b4.push(b3)
	} else if(b2[i] == 'ATT' || b2[i] == 'ATC' || b2[i] == 'ATA') {
		b3='I'
		b4.push(b3)
	} else if(b2[i] == 'ATG') {
		b3='M'
		b4.push(b3)
	} else if(b2[i] == 'GTT' || b2[i] == 'GTC' || b2[i] == 'GTA' || b2[i] == 'GTG') {
		b3='V'
		b4.push(b3)
	} else if(b2[i] == 'TCT' || b2[i] == 'TCC' || b2[i] == 'TCA' || b2[i] == 'TCG') {
		b3='S'
		b4.push(b3)
	} else if(b2[i] == 'CCT' || b2[i] == 'CCC' || b2[i] == 'CCA' || b2[i] == 'CCG') {
		b3='P'
		b4.push(b3)
	} else if(b2[i] == 'ACT' || b2[i] == 'ACC' || b2[i] == 'ACA' || b2[i] == 'ACG') {
		b3='T'
		b4.push(b3)
	} else if(b2[i] == 'GCT' || b2[i] == 'GCC' || b2[i] == 'GCA' || b2[i] == 'GCG') {
		b3='A'
		b4.push(b3)
	} else if(b2[i] == 'TAT' || b2[i] == 'TAC') {
		b3='Y'
		b4.push(b3)
	} else if(b2[i] == 'TAA' || b2[i] == 'TAG' || b2[i] == 'TGA') {
		b3='-'
		b4.push(b3)
	} else if(b2[i] == 'CAT' || b2[i] == 'CAC') {
		b3='H'
		b4.push(b3)
	} else if(b2[i] == 'CAA' || b2[i] == 'CAG') {
		b3='Q'
		b4.push(b3)
	} else if(b2[i] == 'AAT' || b2[i] == 'AAC') {
		b3='N'
		b4.push(b3)
	} else if(b2[i] == 'AAA' || b2[i] == 'AAG') {
		b3='K'
		b4.push(b3)
	} else if(b2[i] == 'GAT' || b2[i] == 'GAC') {
		b3='D'
		b4.push(b3)
	} else if(b2[i] == 'GAA' || b2[i] == 'GAG') {
		b3='E'
		b4.push(b3)
	} else if(b2[i] == 'TGT' || b2[i] == 'TGC') {
		b3='C'
		b4.push(b3)
	} else if(b2[i] == 'TGG') {
		b3='W'
		b4.push(b3)
	} else if(b2[i] == 'CGT' || b2[i] == 'CGC' || b2[i] == 'CGA' || b2[i] == 'CGG') {
		b3='R'
		b4.push(b3)
	} else if(b2[i] == 'AGT' || b2[i] == 'AGC') {
		b3='S'
		b4.push(b3)
	} else if(b2[i] == 'AGA' || b2[i] == 'AGG') {
		b3='R'
		b4.push(b3)
	} else if(b2[i] == 'GGT' || b2[i] == 'GGC' || b2[i] == 'GGA' || b2[i] == 'GGG') {
		b3='G'
		b4.push(b3)
	} else if(b2[i] == 'A' || b2[i] == 'T' || b2[i] == 'G' || b2[i] == 'C' || b2[i] == 'AA' || b2[i] == 'AT' || b2[i] == 'AG' || b2[i] == 'AC' || b2[i] == 'TA' || b2[i] == 'TT' || b2[i] == 'TG' || b2[i] == 'TC' || b2[i] == 'GA' || b2[i] == 'GT' || b2[i] == 'GG' || b2[i] == 'GC' || b2[i] == 'CA' || b2[i] == 'CT' || b2[i] == 'CG' || b2[i] == 'CC'){
		b3=''
	}
	
}

//	Forward strand Frame 3	//

for(var i=0;i<c2.length;i++) {
	if(c2[i] == 'TTT' || c2[i] == 'TTC') {
		c3='F'
		c4.push(c3)
	} else if(c2[i] == 'TTA' || c2[i] == 'TTG' || c2[i] == 'CTT' || c2[i] == 'CTC' || c2[i] == 'CTA' || c2[i] == 'CTG') {
		c3='L'
		c4.push(c3)
	} else if(c2[i] == 'ATT' || c2[i] == 'ATC' || c2[i] == 'ATA') {
		c3='I'
		c4.push(c3)
	} else if(c2[i] == 'ATG') {
		c3='M'
		c4.push(c3)
	} else if(c2[i] == 'GTT' || c2[i] == 'GTC' || c2[i] == 'GTA' || c2[i] == 'GTG') {
		c3='V'
		c4.push(c3)
	} else if(c2[i] == 'TCT' || c2[i] == 'TCC' || c2[i] == 'TCA' || c2[i] == 'TCG') {
		c3='S'
		c4.push(c3)
	} else if(c2[i] == 'CCT' || c2[i] == 'CCC' || c2[i] == 'CCA' || c2[i] == 'CCG') {
		c3='P'
		c4.push(c3)
	} else if(c2[i] == 'ACT' || c2[i] == 'ACC' || c2[i] == 'ACA' || c2[i] == 'ACG') {
		c3='T'
		c4.push(c3)
	} else if(c2[i] == 'GCT' || c2[i] == 'GCC' || c2[i] == 'GCA' || c2[i] == 'GCG') {
		c3='A'
		c4.push(c3)
	} else if(c2[i] == 'TAT' || c2[i] == 'TAC') {
		c3='Y'
		c4.push(c3)
	} else if(c2[i] == 'TAA' || c2[i] == 'TAG' || c2[i] == 'TGA') {
		c3='-'
		c4.push(c3)
	} else if(c2[i] == 'CAT' || c2[i] == 'CAC') {
		c3='H'
		c4.push(c3)
	} else if(c2[i] == 'CAA' || c2[i] == 'CAG') {
		c3='Q'
		c4.push(c3)
	} else if(c2[i] == 'AAT' || c2[i] == 'AAC') {
		c3='N'
		c4.push(c3)
	} else if(c2[i] == 'AAA' || c2[i] == 'AAG') {
		c3='K'
		c4.push(c3)
	} else if(c2[i] == 'GAT' || c2[i] == 'GAC') {
		c3='D'
		c4.push(c3)
	} else if(c2[i] == 'GAA' || c2[i] == 'GAG') {
		c3='E'
		c4.push(c3)
	} else if(c2[i] == 'TGT' || c2[i] == 'TGC') {
		c3='C'
		c4.push(c3)
	} else if(c2[i] == 'TGG') {
		c3='W'
		c4.push(c3)
	} else if(c2[i] == 'CGT' || c2[i] == 'CGC' || c2[i] == 'CGA' || c2[i] == 'CGG') {
		c3='R'
		c4.push(c3)
	} else if(c2[i] == 'AGT' || c2[i] == 'AGC') {
		c3='S'
		c4.push(c3)
	} else if(c2[i] == 'AGA' || c2[i] == 'AGG') {
		c3='R'
		c4.push(c3)
	} else if(c2[i] == 'GGT' || c2[i] == 'GGC' || c2[i] == 'GGA' || c2[i] == 'GGG') {
		c3='G'
		c4.push(c3)
	} else if(c2[i] == 'A' || c2[i] == 'T' || c2[i] == 'G' || c2[i] == 'C' || c2[i] == 'AA' || c2[i] == 'AT' || c2[i] == 'AG' || c2[i] == 'AC' || c2[i] == 'TA' || c2[i] == 'TT' || c2[i] == 'TG' || c2[i] == 'TC' || c2[i] == 'GA' || c2[i] == 'GT' || c2[i] == 'GG' || c2[i] == 'GC' || c2[i] == 'CA' || c2[i] == 'CT' || c2[i] == 'CG' || c2[i] == 'CC'){
		c3=''
	}
	
}


/********* START 	Relative codon adaptation index (rCAI) *********/


var freqTTTF2=[], freqTTCF2=[], freqTTAF2=[], freqTTGF2=[], freqCTTF2=[], freqCTCF2=[], freqCTAF2=[], freqCTGF2=[], freqATTF2=[], freqATCF2=[], freqATAF2=[], freqATGF2=[], freqGTTF2=[], freqGTCF2=[], freqGTAF2=[], freqGTGF2=[], freqTCTF2=[], freqTCCF2=[], freqTCAF2=[], freqTCGF2=[], freqCCTF2=[], freqCCCF2=[], freqCCAF2=[], freqCCGF2=[], freqACTF2=[], freqACCF2=[], freqACAF2=[], freqACGF2=[], freqGCTF2=[], freqGCCF2=[], freqGCAF2=[], freqGCGF2=[], freqTATF2=[], freqTACF2=[], freqTAAF2=[], freqTAGF2=[], freqTGAF2=[], freqCATF2=[], freqCACF2=[], freqCAAF2=[], freqCAGF2=[], freqAATF2=[], freqAACF2=[], freqAAAF2=[], freqAAGF2=[], freqGATF2=[], freqGACF2=[], freqGAAF2=[], freqGAGF2=[], freqTGTF2=[], freqTGCF2=[], freqTGGF2=[], freqCGTF2=[], freqCGCF2=[], freqCGAF2=[], freqCGGF2=[], freqAGTF2=[], freqAGCF2=[], freqAGAF2=[], freqAGGF2=[], freqGGTF2=[], freqGGCF2=[], freqGGAF2=[], freqGGGF2=[];

for(var i=1;i<a2.length;i++) {
	if(a2[i] == 'TTT') {
		freqTTTF2.push(1)
	} else if(a2[i] == 'TTC') {
		freqTTCF2.push(1)
	} else if(a2[i] == 'TTA') {
		freqTTAF2.push(1)
	} else if(a2[i] == 'TTG') {
		freqTTGF2.push(1)
	} else if(a2[i] == 'CTT') {
		freqCTTF2.push(1)
	} else if(a2[i] == 'CTC') {
		freqCTCF2.push(1)
	} else if(a2[i] == 'CTA') {
		freqCTAF2.push(1)
	} else if(a2[i] == 'CTG') {
		freqCTGF2.push(1)
	} else if(a2[i] == 'ATT') {
		freqATTF2.push(1)
	} else if(a2[i] == 'ATC') {
		freqATCF2.push(1)
	} else if(a2[i] == 'ATA') {
		freqATAF2.push(1)
	} else if(a2[i] == 'ATG') {
		freqATGF2.push(1)
	} else if(a2[i] == 'GTT') {
		freqGTTF2.push(1)
	} else if(a2[i] == 'GTC') {
		freqGTCF2.push(1)
	} else if(a2[i] == 'GTA') {
		freqGTAF2.push(1)
	} else if(a2[i] == 'GTG') {
		freqGTGF2.push(1)
	} else if(a2[i] == 'TCT') {
		freqTCTF2.push(1)
	} else if(a2[i] == 'TCC') {
		freqTCCF2.push(1)
	} else if(a2[i] == 'TCA') {
		freqTCAF2.push(1)
	} else if(a2[i] == 'TCG') {
		freqTCGF2.push(1)
	} else if(a2[i] == 'CCT') {
		freqCCTF2.push(1)
	} else if(a2[i] == 'CCC') {
		freqCCCF2.push(1)
	} else if(a2[i] == 'CCA') {
		freqCCAF2.push(1)
	} else if(a2[i] == 'CCG') {
		freqCCGF2.push(1)
	} else if(a2[i] == 'ACT') {
		freqACTF2.push(1)
	} else if(a2[i] == 'ACC') {
		freqACCF2.push(1)
	} else if(a2[i] == 'ACA') {
		freqACAF2.push(1)
	} else if(a2[i] == 'ACG') {
		freqACGF2.push(1)
	} else if(a2[i] == 'GCT') {
		freqGCTF2.push(1)
	} else if(a2[i] == 'GCC') {
		freqGCCF2.push(1)
	} else if(a2[i] == 'GCA') {
		freqGCAF2.push(1)
	} else if(a2[i] == 'GCG') {
		freqGCGF2.push(1)
	} else if(a2[i] == 'TAT') {
		freqTATF2.push(1)
	} else if(a2[i] == 'TAC') {
		freqTACF2.push(1)
	} else if(a2[i] == 'TAA') {
		freqTAAF2.push(1)
	} else if(a2[i] == 'TAG') {
		freqTAGF2.push(1)
	} else if(a2[i] == 'TGA') {
		freqTGAF2.push(1)
	} else if(a2[i] == 'CAT') {
		freqCATF2.push(1)
	} else if(a2[i] == 'CAC') {
		freqCACF2.push(1)
	} else if(a2[i] == 'CAA') {
		freqCAAF2.push(1)
	} else if(a2[i] == 'CAG') {
		freqCAGF2.push(1)
	} else if(a2[i] == 'AAT') {
		freqAATF2.push(1)
	} else if(a2[i] == 'AAC') {
		freqAACF2.push(1)
	} else if(a2[i] == 'AAA') {
		freqAAAF2.push(1)
	} else if(a2[i] == 'AAG') {
		freqAAGF2.push(1)
	} else if(a2[i] == 'GAT') {
		freqGATF2.push(1)
	} else if(a2[i] == 'GAC') {
		freqGACF2.push(1)
	} else if(a2[i] == 'GAA') {
		freqGAAF2.push(1)
	} else if(a2[i] == 'GAG') {
		freqGAGF2.push(1)
	} else if(a2[i] == 'TGT') {
		freqTGTF2.push(1)
	} else if(a2[i] == 'TGC') {
		freqTGCF2.push(1)
	} else if(a2[i] == 'TGG') {
		freqTGGF2.push(1)
	} else if(a2[i] == 'CGT') {
		freqCGTF2.push(1)
	} else if(a2[i] == 'CGC') {
		freqCGCF2.push(1)
	} else if(a2[i] == 'CGA') {
		freqCGAF2.push(1)
	} else if(a2[i] == 'CGG') {
		freqCGGF2.push(1)
	} else if(a2[i] == 'AGT') {
		freqAGTF2.push(1)
	} else if(a2[i] == 'AGC') {
		freqAGCF2.push(1)
	} else if(a2[i] == 'AGA') {
		freqAGAF2.push(1)
	} else if(a2[i] == 'AGG') {
		freqAGGF2.push(1)
	} else if(a2[i] == 'GGT') {
		freqGGTF2.push(1)
	} else if(a2[i] == 'GGC') {
		freqGGCF2.push(1)
	} else if(a2[i] == 'GGA') {
		freqGGAF2.push(1)
	} else if(a2[i] == 'GGG') {
		freqGGGF2.push(1)
	}
}	

var freqTTTF3=[], freqTTCF3=[], freqTTAF3=[], freqTTGF3=[], freqCTTF3=[], freqCTCF3=[], freqCTAF3=[], freqCTGF3=[], freqATTF3=[], freqATCF3=[], freqATAF3=[], freqATGF3=[], freqGTTF3=[], freqGTCF3=[], freqGTAF3=[], freqGTGF3=[], freqTCTF3=[], freqTCCF3=[], freqTCAF3=[], freqTCGF3=[], freqCCTF3=[], freqCCCF3=[], freqCCAF3=[], freqCCGF3=[], freqACTF3=[], freqACCF3=[], freqACAF3=[], freqACGF3=[], freqGCTF3=[], freqGCCF3=[], freqGCAF3=[], freqGCGF3=[], freqTATF3=[], freqTACF3=[], freqTAAF3=[], freqTAGF3=[], freqTGAF3=[], freqCATF3=[], freqCACF3=[], freqCAAF3=[], freqCAGF3=[], freqAATF3=[], freqAACF3=[], freqAAAF3=[], freqAAGF3=[], freqGATF3=[], freqGACF3=[], freqGAAF3=[], freqGAGF3=[], freqTGTF3=[], freqTGCF3=[], freqTGGF3=[], freqCGTF3=[], freqCGCF3=[], freqCGAF3=[], freqCGGF3=[], freqAGTF3=[], freqAGCF3=[], freqAGAF3=[], freqAGGF3=[], freqGGTF3=[], freqGGCF3=[], freqGGAF3=[], freqGGGF3=[];

for(var i=2;i<a2.length;i++) {
	if(a2[i] == 'TTT') {
		freqTTTF3.push(1)
	} else if(a2[i] == 'TTC') {
		freqTTCF3.push(1)
	} else if(a2[i] == 'TTA') {
		freqTTAF3.push(1)
	} else if(a2[i] == 'TTG') {
		freqTTGF3.push(1)
	} else if(a2[i] == 'CTT') {
		freqCTTF3.push(1)
	} else if(a2[i] == 'CTC') {
		freqCTCF3.push(1)
	} else if(a2[i] == 'CTA') {
		freqCTAF3.push(1)
	} else if(a2[i] == 'CTG') {
		freqCTGF3.push(1)
	} else if(a2[i] == 'ATT') {
		freqATTF3.push(1)
	} else if(a2[i] == 'ATC') {
		freqATCF3.push(1)
	} else if(a2[i] == 'ATA') {
		freqATAF3.push(1)
	} else if(a2[i] == 'ATG') {
		freqATGF3.push(1)
	} else if(a2[i] == 'GTT') {
		freqGTTF3.push(1)
	} else if(a2[i] == 'GTC') {
		freqGTCF3.push(1)
	} else if(a2[i] == 'GTA') {
		freqGTAF3.push(1)
	} else if(a2[i] == 'GTG') {
		freqGTGF3.push(1)
	} else if(a2[i] == 'TCT') {
		freqTCTF3.push(1)
	} else if(a2[i] == 'TCC') {
		freqTCCF3.push(1)
	} else if(a2[i] == 'TCA') {
		freqTCAF3.push(1)
	} else if(a2[i] == 'TCG') {
		freqTCGF3.push(1)
	} else if(a2[i] == 'CCT') {
		freqCCTF3.push(1)
	} else if(a2[i] == 'CCC') {
		freqCCCF3.push(1)
	} else if(a2[i] == 'CCA') {
		freqCCAF3.push(1)
	} else if(a2[i] == 'CCG') {
		freqCCGF3.push(1)
	} else if(a2[i] == 'ACT') {
		freqACTF3.push(1)
	} else if(a2[i] == 'ACC') {
		freqACCF3.push(1)
	} else if(a2[i] == 'ACA') {
		freqACAF3.push(1)
	} else if(a2[i] == 'ACG') {
		freqACGF3.push(1)
	} else if(a2[i] == 'GCT') {
		freqGCTF3.push(1)
	} else if(a2[i] == 'GCC') {
		freqGCCF3.push(1)
	} else if(a2[i] == 'GCA') {
		freqGCAF3.push(1)
	} else if(a2[i] == 'GCG') {
		freqGCGF3.push(1)
	} else if(a2[i] == 'TAT') {
		freqTATF3.push(1)
	} else if(a2[i] == 'TAC') {
		freqTACF3.push(1)
	} else if(a2[i] == 'TAA') {
		freqTAAF3.push(1)
	} else if(a2[i] == 'TAG') {
		freqTAGF3.push(1)
	} else if(a2[i] == 'TGA') {
		freqTGAF3.push(1)
	} else if(a2[i] == 'CAT') {
		freqCATF3.push(1)
	} else if(a2[i] == 'CAC') {
		freqCACF3.push(1)
	} else if(a2[i] == 'CAA') {
		freqCAAF3.push(1)
	} else if(a2[i] == 'CAG') {
		freqCAGF3.push(1)
	} else if(a2[i] == 'AAT') {
		freqAATF3.push(1)
	} else if(a2[i] == 'AAC') {
		freqAACF3.push(1)
	} else if(a2[i] == 'AAA') {
		freqAAAF3.push(1)
	} else if(a2[i] == 'AAG') {
		freqAAGF3.push(1)
	} else if(a2[i] == 'GAT') {
		freqGATF3.push(1)
	} else if(a2[i] == 'GAC') {
		freqGACF3.push(1)
	} else if(a2[i] == 'GAA') {
		freqGAAF3.push(1)
	} else if(a2[i] == 'GAG') {
		freqGAGF3.push(1)
	} else if(a2[i] == 'TGT') {
		freqTGTF3.push(1)
	} else if(a2[i] == 'TGC') {
		freqTGCF3.push(1)
	} else if(a2[i] == 'TGG') {
		freqTGGF3.push(1)
	} else if(a2[i] == 'CGT') {
		freqCGTF3.push(1)
	} else if(a2[i] == 'CGC') {
		freqCGCF3.push(1)
	} else if(a2[i] == 'CGA') {
		freqCGAF3.push(1)
	} else if(a2[i] == 'CGG') {
		freqCGGF3.push(1)
	} else if(a2[i] == 'AGT') {
		freqAGTF3.push(1)
	} else if(a2[i] == 'AGC') {
		freqAGCF3.push(1)
	} else if(a2[i] == 'AGA') {
		freqAGAF3.push(1)
	} else if(a2[i] == 'AGG') {
		freqAGGF3.push(1)
	} else if(a2[i] == 'GGT') {
		freqGGTF3.push(1)
	} else if(a2[i] == 'GGC') {
		freqGGCF3.push(1)
	} else if(a2[i] == 'GGA') {
		freqGGAF3.push(1)
	} else if(a2[i] == 'GGG') {
		freqGGGF3.push(1)
	}
}	

var allCountsF2=freqTTTF2.length+freqTTCF2.length+freqTTAF2.length+freqTTGF2.length+freqCTTF2.length+freqCTCF2.length+freqCTAF2.length+freqCTGF2.length+freqATTF2.length+freqATCF2.length+freqATAF2.length+freqATGF2.length+freqGTTF2.length+freqGTCF2.length+freqGTAF2.length+freqGTGF2.length+freqTCTF2.length+freqTCCF2.length+freqTCAF2.length+freqTCGF2.length+freqCCTF2.length+freqCCCF2.length+freqCCAF2.length+freqCCGF2.length+freqACTF2.length+freqACCF2.length+freqACAF2.length+freqACGF2.length+freqGCTF2.length+freqGCCF2.length+freqGCAF2.length+freqGCGF2.length+freqTATF2.length+freqTACF2.length+freqTAAF2.length+freqTAGF2.length+freqTGAF2.length+freqCATF2.length+freqCACF2.length+freqCAAF2.length+freqCAGF2.length+freqAATF2.length+freqAACF2.length+freqAAAF2.length+freqAAGF2.length+freqGATF2.length+freqGACF2.length+freqGAAF2.length+freqGAGF2.length+freqTGTF2.length+freqTGCF2.length+freqTGGF2.length+freqCGTF2.length+freqCGCF2.length+freqCGAF2.length+freqCGGF2.length+freqAGTF2.length+freqAGCF2.length+freqAGAF2.length+freqAGGF2.length+freqGGTF2.length+freqGGCF2.length+freqGGAF2.length+freqGGGF2.length
var allCountsF3=freqTTTF3.length+freqTTCF3.length+freqTTAF3.length+freqTTGF3.length+freqCTTF3.length+freqCTCF3.length+freqCTAF3.length+freqCTGF3.length+freqATTF3.length+freqATCF3.length+freqATAF3.length+freqATGF3.length+freqGTTF3.length+freqGTCF3.length+freqGTAF3.length+freqGTGF3.length+freqTCTF3.length+freqTCCF3.length+freqTCAF3.length+freqTCGF3.length+freqCCTF3.length+freqCCCF3.length+freqCCAF3.length+freqCCGF3.length+freqACTF3.length+freqACCF3.length+freqACAF3.length+freqACGF3.length+freqGCTF3.length+freqGCCF3.length+freqGCAF3.length+freqGCGF3.length+freqTATF3.length+freqTACF3.length+freqTAAF3.length+freqTAGF3.length+freqTGAF3.length+freqCATF3.length+freqCACF3.length+freqCAAF3.length+freqCAGF3.length+freqAATF3.length+freqAACF3.length+freqAAAF3.length+freqAAGF3.length+freqGATF3.length+freqGACF3.length+freqGAAF3.length+freqGAGF3.length+freqTGTF3.length+freqTGCF3.length+freqTGGF3.length+freqCGTF3.length+freqCGCF3.length+freqCGAF3.length+freqCGGF3.length+freqAGTF3.length+freqAGCF3.length+freqAGAF3.length+freqAGGF3.length+freqGGTF3.length+freqGGCF3.length+freqGGAF3.length+freqGGGF3.length

var freqAb1F2=[], freqAb2F2=[], freqAb3F2=[], freqTb1F2=[], freqTb2F2=[], freqTb3F2=[], freqCb1F2=[], freqCb2F2=[], freqCb3F2=[], freqGb1F2=[], freqGb2F2=[], freqGb3F2=[]; 

for(var i=1;i<a.length;i+=3) {
	if(a[i]=='A') {
		freqAb1F2.push(a[i])
	} else if(a[i]=='T') {
		freqTb1F2.push(a[i])
	} else if(a[i]=='C') {
		freqCb1F2.push(a[i])
	} else if(a[i]=='G') {
		freqGb1F2.push(a[i])
	}
}

for(var i=2;i<a.length;i+=3) {
	if(a[i]=='A') {
		freqAb2F2.push(a[i])
	} else if(a[i]=='T') {
		freqTb2F2.push(a[i])
	} else if(a[i]=='C') {
		freqCb2F2.push(a[i])
	} else if(a[i]=='G') {
		freqGb2F2.push(a[i])
	}
}

for(var i=3;i<a.length;i+=3) {
	if(a[i]=='A') {
		freqAb3F2.push(a[i])
	} else if(a[i]=='T') {
		freqTb3F2.push(a[i])
	} else if(a[i]=='C') {
		freqCb3F2.push(a[i])
	} else if(a[i]=='G') {
		freqGb3F2.push(a[i])
	}
}

var val1TTTF2=Math.log(Math.abs((freqTTTF2.length/allCountsF2)-((freqTb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))/((freqTb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))))
var val1TTCF2=Math.log(Math.abs((freqTTCF2.length/allCountsF2)-((freqTb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))/((freqTb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))))
var val1TTAF2=Math.log(Math.abs((freqTTAF2.length/allCountsF2)-((freqTb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))/((freqTb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))))
var val1TTGF2=Math.log(Math.abs((freqTTGF2.length/allCountsF2)-((freqTb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))/((freqTb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))))
var val1CTTF2=Math.log(Math.abs((freqCTTF2.length/allCountsF2)-((freqCb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))/((freqCb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))))
var val1CTCF2=Math.log(Math.abs((freqCTCF2.length/allCountsF2)-((freqCb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))/((freqCb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))))
var val1CTAF2=Math.log(Math.abs((freqCTAF2.length/allCountsF2)-((freqCb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))/((freqCb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))))
var val1CTGF2=Math.log(Math.abs((freqCTGF2.length/allCountsF2)-((freqCb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))/((freqCb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))))
var val1ATTF2=Math.log(Math.abs((freqATTF2.length/allCountsF2)-((freqAb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))/((freqAb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))))
var val1ATCF2=Math.log(Math.abs((freqATCF2.length/allCountsF2)-((freqAb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))/((freqAb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))))
var val1ATAF2=Math.log(Math.abs((freqATAF2.length/allCountsF2)-((freqAb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))/((freqAb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))))
var val1ATGF2=Math.log(Math.abs((freqATGF2.length/allCountsF2)-((freqAb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))/((freqAb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))))
var val1GTTF2=Math.log(Math.abs((freqGTTF2.length/allCountsF2)-((freqGb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))/((freqGb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))))
var val1GTCF2=Math.log(Math.abs((freqGTCF2.length/allCountsF2)-((freqGb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))/((freqGb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))))
var val1GTAF2=Math.log(Math.abs((freqGTAF2.length/allCountsF2)-((freqGb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))/((freqGb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))))
var val1GTGF2=Math.log(Math.abs((freqGTGF2.length/allCountsF2)-((freqGb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))/((freqGb1F2.length/allCountsF2)*(freqTb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))))
var val1TCTF2=Math.log(Math.abs((freqTCTF2.length/allCountsF2)-((freqTb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))/((freqTb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))))
var val1TCCF2=Math.log(Math.abs((freqTCCF2.length/allCountsF2)-((freqTb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))/((freqTb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))))
var val1TCAF2=Math.log(Math.abs((freqTCAF2.length/allCountsF2)-((freqTb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))/((freqTb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))))
var val1TCGF2=Math.log(Math.abs((freqTCGF2.length/allCountsF2)-((freqTb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))/((freqTb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))))
var val1CCTF2=Math.log(Math.abs((freqCCTF2.length/allCountsF2)-((freqCb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))/((freqCb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))))
var val1CCCF2=Math.log(Math.abs((freqCCCF2.length/allCountsF2)-((freqCb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))/((freqCb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))))
var val1CCAF2=Math.log(Math.abs((freqCCAF2.length/allCountsF2)-((freqCb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))/((freqCb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))))
var val1CCGF2=Math.log(Math.abs((freqCCGF2.length/allCountsF2)-((freqCb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))/((freqCb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))))
var val1ACTF2=Math.log(Math.abs((freqACTF2.length/allCountsF2)-((freqAb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))/((freqAb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))))
var val1ACCF2=Math.log(Math.abs((freqACCF2.length/allCountsF2)-((freqAb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))/((freqAb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))))
var val1ACAF2=Math.log(Math.abs((freqACAF2.length/allCountsF2)-((freqAb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))/((freqAb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))))
var val1ACGF2=Math.log(Math.abs((freqACGF2.length/allCountsF2)-((freqAb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))/((freqAb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))))
var val1GCTF2=Math.log(Math.abs((freqGCTF2.length/allCountsF2)-((freqGb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))/((freqGb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))))
var val1GCCF2=Math.log(Math.abs((freqGCCF2.length/allCountsF2)-((freqGb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))/((freqGb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))))
var val1GCAF2=Math.log(Math.abs((freqGCAF2.length/allCountsF2)-((freqGb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))/((freqGb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))))
var val1GCGF2=Math.log(Math.abs((freqGCGF2.length/allCountsF2)-((freqGb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))/((freqGb1F2.length/allCountsF2)*(freqCb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))))
var val1TATF2=Math.log(Math.abs((freqTATF2.length/allCountsF2)-((freqTb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))/((freqTb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))))
var val1TACF2=Math.log(Math.abs((freqTACF2.length/allCountsF2)-((freqTb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))/((freqTb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))))
var val1TAAF2=Math.log(Math.abs((freqTAAF2.length/allCountsF2)-((freqTb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))/((freqTb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))))
var val1TAGF2=Math.log(Math.abs((freqTAGF2.length/allCountsF2)-((freqTb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))/((freqTb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))))
var val1TGAF2=Math.log(Math.abs((freqTGAF2.length/allCountsF2)-((freqTb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))/((freqTb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))))
var val1CATF2=Math.log(Math.abs((freqCATF2.length/allCountsF2)-((freqCb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))/((freqCb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))))
var val1CACF2=Math.log(Math.abs((freqCACF2.length/allCountsF2)-((freqCb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))/((freqCb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))))
var val1CAAF2=Math.log(Math.abs((freqCAAF2.length/allCountsF2)-((freqCb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))/((freqCb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))))
var val1CAGF2=Math.log(Math.abs((freqCAGF2.length/allCountsF2)-((freqCb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))/((freqCb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))))
var val1AATF2=Math.log(Math.abs((freqAATF2.length/allCountsF2)-((freqAb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))/((freqAb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))))
var val1AACF2=Math.log(Math.abs((freqAACF2.length/allCountsF2)-((freqAb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))/((freqAb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))))
var val1AAAF2=Math.log(Math.abs((freqAAAF2.length/allCountsF2)-((freqAb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))/((freqAb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))))
var val1AAGF2=Math.log(Math.abs((freqAAGF2.length/allCountsF2)-((freqAb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))/((freqAb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))))
var val1GATF2=Math.log(Math.abs((freqGATF2.length/allCountsF2)-((freqGb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))/((freqGb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))))
var val1GACF2=Math.log(Math.abs((freqGACF2.length/allCountsF2)-((freqGb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))/((freqGb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))))
var val1GAAF2=Math.log(Math.abs((freqGAAF2.length/allCountsF2)-((freqGb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))/((freqGb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))))
var val1GAGF2=Math.log(Math.abs((freqGAGF2.length/allCountsF2)-((freqGb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))/((freqGb1F2.length/allCountsF2)*(freqAb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))))
var val1TGTF2=Math.log(Math.abs((freqTGTF2.length/allCountsF2)-((freqTb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))/((freqTb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))))
var val1TGCF2=Math.log(Math.abs((freqTGCF2.length/allCountsF2)-((freqTb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))/((freqTb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))))
var val1TGGF2=Math.log(Math.abs((freqTGGF2.length/allCountsF2)-((freqTb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))/((freqTb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))))
var val1CGTF2=Math.log(Math.abs((freqCGTF2.length/allCountsF2)-((freqCb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))/((freqCb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))))
var val1CGCF2=Math.log(Math.abs((freqCGCF2.length/allCountsF2)-((freqCb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))/((freqCb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))))
var val1CGAF2=Math.log(Math.abs((freqCGAF2.length/allCountsF2)-((freqCb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))/((freqCb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))))
var val1CGGF2=Math.log(Math.abs((freqCGGF2.length/allCountsF2)-((freqCb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))/((freqCb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))))
var val1AGTF2=Math.log(Math.abs((freqAGTF2.length/allCountsF2)-((freqAb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))/((freqAb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))))
var val1AGCF2=Math.log(Math.abs((freqAGCF2.length/allCountsF2)-((freqAb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))/((freqAb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))))
var val1AGAF2=Math.log(Math.abs((freqAGAF2.length/allCountsF2)-((freqAb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))/((freqAb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))))
var val1AGGF2=Math.log(Math.abs((freqAGGF2.length/allCountsF2)-((freqAb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))/((freqAb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))))
var val1GGTF2=Math.log(Math.abs((freqGGTF2.length/allCountsF2)-((freqGb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))/((freqGb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqTb3F2.length/allCountsF2))))
var val1GGCF2=Math.log(Math.abs((freqGGCF2.length/allCountsF2)-((freqGb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))/((freqGb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqCb3F2.length/allCountsF2))))
var val1GGAF2=Math.log(Math.abs((freqGGAF2.length/allCountsF2)-((freqGb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))/((freqGb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqAb3F2.length/allCountsF2))))
var val1GGGF2=Math.log(Math.abs((freqGGGF2.length/allCountsF2)-((freqGb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))/((freqGb1F2.length/allCountsF2)*(freqGb2F2.length/allCountsF2)*(freqGb3F2.length/allCountsF2))))

var logWcRCBF2=val1TTTF2+val1TTCF2+val1TTAF2+val1TTGF2+val1CTTF2+val1CTCF2+val1CTAF2+val1CTGF2+val1ATTF2+val1ATCF2+val1ATAF2+val1ATGF2+val1GTTF2+val1GTCF2+val1GTAF2+val1GTGF2+val1TCTF2+val1TCCF2+val1TCAF2+val1TCGF2+val1CCTF2+val1CCCF2+val1CCAF2+val1CCGF2+val1ACTF2+val1ACCF2+val1ACAF2+val1ACGF2+val1GCTF2+val1GCCF2+val1GCAF2+val1GCGF2+val1TATF2+val1TACF2+val1TAAF2+val1TAGF2+val1TGAF2+val1CATF2+val1CACF2+val1CAAF2+val1CAGF2+val1AATF2+val1AACF2+val1AAAF2+val1AAGF2+val1GATF2+val1GACF2+val1GAAF2+val1GAGF2+val1TGTF2+val1TGCF2+val1TGGF2+val1CGTF2+val1CGCF2+val1CGAF2+val1CGGF2+val1AGTF2+val1AGCF2+val1AGAF2+val1AGGF2+val1GGTF2+val1GGCF2+val1GGAF2+val1GGGF2

var freqAb1F3=[], freqAb2F3=[], freqAb3F3=[], freqTb1F3=[], freqTb2F3=[], freqTb3F3=[], freqCb1F3=[], freqCb2F3=[], freqCb3F3=[], freqGb1F3=[], freqGb2F3=[], freqGb3F3=[]; 

for(var i=1;i<a.length;i+=3) {
	if(a[i]=='A') {
		freqAb1F3.push(a[i])
	} else if(a[i]=='T') {
		freqTb1F3.push(a[i])
	} else if(a[i]=='C') {
		freqCb1F3.push(a[i])
	} else if(a[i]=='G') {
		freqGb1F3.push(a[i])
	}
}

for(var i=2;i<a.length;i+=3) {
	if(a[i]=='A') {
		freqAb2F3.push(a[i])
	} else if(a[i]=='T') {
		freqTb2F3.push(a[i])
	} else if(a[i]=='C') {
		freqCb2F3.push(a[i])
	} else if(a[i]=='G') {
		freqGb2F3.push(a[i])
	}
}

for(var i=3;i<a.length;i+=3) {
	if(a[i]=='A') {
		freqAb3F3.push(a[i])
	} else if(a[i]=='T') {
		freqTb3F3.push(a[i])
	} else if(a[i]=='C') {
		freqCb3F3.push(a[i])
	} else if(a[i]=='G') {
		freqGb3F3.push(a[i])
	}
}

var val1TTTF3=Math.log(Math.abs((freqTTTF3.length/allCountsF3)-((freqTb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))/((freqTb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))))
var val1TTCF3=Math.log(Math.abs((freqTTCF3.length/allCountsF3)-((freqTb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))/((freqTb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))))
var val1TTAF3=Math.log(Math.abs((freqTTAF3.length/allCountsF3)-((freqTb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))/((freqTb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))))
var val1TTGF3=Math.log(Math.abs((freqTTGF3.length/allCountsF3)-((freqTb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))/((freqTb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))))
var val1CTTF3=Math.log(Math.abs((freqCTTF3.length/allCountsF3)-((freqCb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))/((freqCb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))))
var val1CTCF3=Math.log(Math.abs((freqCTCF3.length/allCountsF3)-((freqCb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))/((freqCb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))))
var val1CTAF3=Math.log(Math.abs((freqCTAF3.length/allCountsF3)-((freqCb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))/((freqCb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))))
var val1CTGF3=Math.log(Math.abs((freqCTGF3.length/allCountsF3)-((freqCb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))/((freqCb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))))
var val1ATTF3=Math.log(Math.abs((freqATTF3.length/allCountsF3)-((freqAb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))/((freqAb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))))
var val1ATCF3=Math.log(Math.abs((freqATCF3.length/allCountsF3)-((freqAb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))/((freqAb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))))
var val1ATAF3=Math.log(Math.abs((freqATAF3.length/allCountsF3)-((freqAb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))/((freqAb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))))
var val1ATGF3=Math.log(Math.abs((freqATGF3.length/allCountsF3)-((freqAb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))/((freqAb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))))
var val1GTTF3=Math.log(Math.abs((freqGTTF3.length/allCountsF3)-((freqGb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))/((freqGb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))))
var val1GTCF3=Math.log(Math.abs((freqGTCF3.length/allCountsF3)-((freqGb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))/((freqGb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))))
var val1GTAF3=Math.log(Math.abs((freqGTAF3.length/allCountsF3)-((freqGb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))/((freqGb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))))
var val1GTGF3=Math.log(Math.abs((freqGTGF3.length/allCountsF3)-((freqGb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))/((freqGb1F3.length/allCountsF3)*(freqTb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))))
var val1TCTF3=Math.log(Math.abs((freqTCTF3.length/allCountsF3)-((freqTb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))/((freqTb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))))
var val1TCCF3=Math.log(Math.abs((freqTCCF3.length/allCountsF3)-((freqTb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))/((freqTb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))))
var val1TCAF3=Math.log(Math.abs((freqTCAF3.length/allCountsF3)-((freqTb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))/((freqTb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))))
var val1TCGF3=Math.log(Math.abs((freqTCGF3.length/allCountsF3)-((freqTb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))/((freqTb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))))
var val1CCTF3=Math.log(Math.abs((freqCCTF3.length/allCountsF3)-((freqCb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))/((freqCb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))))
var val1CCCF3=Math.log(Math.abs((freqCCCF3.length/allCountsF3)-((freqCb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))/((freqCb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))))
var val1CCAF3=Math.log(Math.abs((freqCCAF3.length/allCountsF3)-((freqCb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))/((freqCb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))))
var val1CCGF3=Math.log(Math.abs((freqCCGF3.length/allCountsF3)-((freqCb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))/((freqCb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))))
var val1ACTF3=Math.log(Math.abs((freqACTF3.length/allCountsF3)-((freqAb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))/((freqAb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))))
var val1ACCF3=Math.log(Math.abs((freqACCF3.length/allCountsF3)-((freqAb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))/((freqAb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))))
var val1ACAF3=Math.log(Math.abs((freqACAF3.length/allCountsF3)-((freqAb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))/((freqAb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))))
var val1ACGF3=Math.log(Math.abs((freqACGF3.length/allCountsF3)-((freqAb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))/((freqAb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))))
var val1GCTF3=Math.log(Math.abs((freqGCTF3.length/allCountsF3)-((freqGb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))/((freqGb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))))
var val1GCCF3=Math.log(Math.abs((freqGCCF3.length/allCountsF3)-((freqGb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))/((freqGb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))))
var val1GCAF3=Math.log(Math.abs((freqGCAF3.length/allCountsF3)-((freqGb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))/((freqGb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))))
var val1GCGF3=Math.log(Math.abs((freqGCGF3.length/allCountsF3)-((freqGb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))/((freqGb1F3.length/allCountsF3)*(freqCb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))))
var val1TATF3=Math.log(Math.abs((freqTATF3.length/allCountsF3)-((freqTb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))/((freqTb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))))
var val1TACF3=Math.log(Math.abs((freqTACF3.length/allCountsF3)-((freqTb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))/((freqTb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))))
var val1TAAF3=Math.log(Math.abs((freqTAAF3.length/allCountsF3)-((freqTb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))/((freqTb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))))
var val1TAGF3=Math.log(Math.abs((freqTAGF3.length/allCountsF3)-((freqTb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))/((freqTb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))))
var val1TGAF3=Math.log(Math.abs((freqTGAF3.length/allCountsF3)-((freqTb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))/((freqTb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))))
var val1CATF3=Math.log(Math.abs((freqCATF3.length/allCountsF3)-((freqCb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))/((freqCb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))))
var val1CACF3=Math.log(Math.abs((freqCACF3.length/allCountsF3)-((freqCb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))/((freqCb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))))
var val1CAAF3=Math.log(Math.abs((freqCAAF3.length/allCountsF3)-((freqCb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))/((freqCb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))))
var val1CAGF3=Math.log(Math.abs((freqCAGF3.length/allCountsF3)-((freqCb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))/((freqCb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))))
var val1AATF3=Math.log(Math.abs((freqAATF3.length/allCountsF3)-((freqAb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))/((freqAb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))))
var val1AACF3=Math.log(Math.abs((freqAACF3.length/allCountsF3)-((freqAb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))/((freqAb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))))
var val1AAAF3=Math.log(Math.abs((freqAAAF3.length/allCountsF3)-((freqAb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))/((freqAb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))))
var val1AAGF3=Math.log(Math.abs((freqAAGF3.length/allCountsF3)-((freqAb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))/((freqAb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))))
var val1GATF3=Math.log(Math.abs((freqGATF3.length/allCountsF3)-((freqGb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))/((freqGb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))))
var val1GACF3=Math.log(Math.abs((freqGACF3.length/allCountsF3)-((freqGb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))/((freqGb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))))
var val1GAAF3=Math.log(Math.abs((freqGAAF3.length/allCountsF3)-((freqGb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))/((freqGb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))))
var val1GAGF3=Math.log(Math.abs((freqGAGF3.length/allCountsF3)-((freqGb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))/((freqGb1F3.length/allCountsF3)*(freqAb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))))
var val1TGTF3=Math.log(Math.abs((freqTGTF3.length/allCountsF3)-((freqTb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))/((freqTb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))))
var val1TGCF3=Math.log(Math.abs((freqTGCF3.length/allCountsF3)-((freqTb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))/((freqTb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))))
var val1TGGF3=Math.log(Math.abs((freqTGGF3.length/allCountsF3)-((freqTb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))/((freqTb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))))
var val1CGTF3=Math.log(Math.abs((freqCGTF3.length/allCountsF3)-((freqCb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))/((freqCb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))))
var val1CGCF3=Math.log(Math.abs((freqCGCF3.length/allCountsF3)-((freqCb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))/((freqCb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))))
var val1CGAF3=Math.log(Math.abs((freqCGAF3.length/allCountsF3)-((freqCb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))/((freqCb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))))
var val1CGGF3=Math.log(Math.abs((freqCGGF3.length/allCountsF3)-((freqCb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))/((freqCb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))))
var val1AGTF3=Math.log(Math.abs((freqAGTF3.length/allCountsF3)-((freqAb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))/((freqAb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))))
var val1AGCF3=Math.log(Math.abs((freqAGCF3.length/allCountsF3)-((freqAb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))/((freqAb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))))
var val1AGAF3=Math.log(Math.abs((freqAGAF3.length/allCountsF3)-((freqAb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))/((freqAb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))))
var val1AGGF3=Math.log(Math.abs((freqAGGF3.length/allCountsF3)-((freqAb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))/((freqAb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))))
var val1GGTF3=Math.log(Math.abs((freqGGTF3.length/allCountsF3)-((freqGb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))/((freqGb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqTb3F3.length/allCountsF3))))
var val1GGCF3=Math.log(Math.abs((freqGGCF3.length/allCountsF3)-((freqGb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))/((freqGb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqCb3F3.length/allCountsF3))))
var val1GGAF3=Math.log(Math.abs((freqGGAF3.length/allCountsF3)-((freqGb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))/((freqGb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqAb3F3.length/allCountsF3))))
var val1GGGF3=Math.log(Math.abs((freqGGGF3.length/allCountsF3)-((freqGb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))/((freqGb1F3.length/allCountsF3)*(freqGb2F3.length/allCountsF3)*(freqGb3F3.length/allCountsF3))))

var logWcRCBF3=val1TTTF3+val1TTCF3+val1TTAF3+val1TTGF3+val1CTTF3+val1CTCF3+val1CTAF3+val1CTGF3+val1ATTF3+val1ATCF3+val1ATAF3+val1ATGF3+val1GTTF3+val1GTCF3+val1GTAF3+val1GTGF3+val1TCTF3+val1TCCF3+val1TCAF3+val1TCGF3+val1CCTF3+val1CCCF3+val1CCAF3+val1CCGF3+val1ACTF3+val1ACCF3+val1ACAF3+val1ACGF3+val1GCTF3+val1GCCF3+val1GCAF3+val1GCGF3+val1TATF3+val1TACF3+val1TAAF3+val1TAGF3+val1TGAF3+val1CATF3+val1CACF3+val1CAAF3+val1CAGF3+val1AATF3+val1AACF3+val1AAAF3+val1AAGF3+val1GATF3+val1GACF3+val1GAAF3+val1GAGF3+val1TGTF3+val1TGCF3+val1TGGF3+val1CGTF3+val1CGCF3+val1CGAF3+val1CGGF3+val1AGTF3+val1AGCF3+val1AGAF3+val1AGGF3+val1GGTF3+val1GGCF3+val1GGAF3+val1GGGF3

var wcWcRel=[]
wcWcRel.push(Math.log(Math.abs(val1TTT)/(Math.sqrt(Math.abs(val1TTTF2))*(Math.sqrt(Math.abs(val1TTTF3))))))
wcWcRel.push(Math.log(Math.abs(val1TTC)/(Math.sqrt(Math.abs(val1TTCF2))*(Math.sqrt(Math.abs(val1TTCF3))))))
wcWcRel.push(Math.log(Math.abs(val1TTA)/(Math.sqrt(Math.abs(val1TTAF2))*(Math.sqrt(Math.abs(val1TTAF3))))))
wcWcRel.push(Math.log(Math.abs(val1TTG)/(Math.sqrt(Math.abs(val1TTGF2))*(Math.sqrt(Math.abs(val1TTGF3))))))
wcWcRel.push(Math.log(Math.abs(val1CTT)/(Math.sqrt(Math.abs(val1CTTF2))*(Math.sqrt(Math.abs(val1CTTF3))))))
wcWcRel.push(Math.log(Math.abs(val1CTC)/(Math.sqrt(Math.abs(val1CTCF2))*(Math.sqrt(Math.abs(val1CTCF3))))))
wcWcRel.push(Math.log(Math.abs(val1CTA)/(Math.sqrt(Math.abs(val1CTAF2))*(Math.sqrt(Math.abs(val1CTAF3))))))
wcWcRel.push(Math.log(Math.abs(val1CTG)/(Math.sqrt(Math.abs(val1CTGF2))*(Math.sqrt(Math.abs(val1CTGF3))))))
wcWcRel.push(Math.log(Math.abs(val1ATT)/(Math.sqrt(Math.abs(val1ATTF2))*(Math.sqrt(Math.abs(val1ATTF3))))))
wcWcRel.push(Math.log(Math.abs(val1ATC)/(Math.sqrt(Math.abs(val1ATCF2))*(Math.sqrt(Math.abs(val1ATCF3))))))
wcWcRel.push(Math.log(Math.abs(val1ATA)/(Math.sqrt(Math.abs(val1ATAF2))*(Math.sqrt(Math.abs(val1ATAF3))))))
wcWcRel.push(Math.log(Math.abs(val1ATG)/(Math.sqrt(Math.abs(val1ATGF2))*(Math.sqrt(Math.abs(val1ATGF3))))))
wcWcRel.push(Math.log(Math.abs(val1GTT)/(Math.sqrt(Math.abs(val1GTTF2))*(Math.sqrt(Math.abs(val1GTTF3))))))
wcWcRel.push(Math.log(Math.abs(val1GTC)/(Math.sqrt(Math.abs(val1GTCF2))*(Math.sqrt(Math.abs(val1GTCF3))))))
wcWcRel.push(Math.log(Math.abs(val1GTA)/(Math.sqrt(Math.abs(val1GTAF2))*(Math.sqrt(Math.abs(val1GTAF3))))))
wcWcRel.push(Math.log(Math.abs(val1GTG)/(Math.sqrt(Math.abs(val1GTGF2))*(Math.sqrt(Math.abs(val1GTGF3))))))
wcWcRel.push(Math.log(Math.abs(val1TCT)/(Math.sqrt(Math.abs(val1TCTF2))*(Math.sqrt(Math.abs(val1TCTF3))))))
wcWcRel.push(Math.log(Math.abs(val1TCC)/(Math.sqrt(Math.abs(val1TCCF2))*(Math.sqrt(Math.abs(val1TCCF3))))))
wcWcRel.push(Math.log(Math.abs(val1TCA)/(Math.sqrt(Math.abs(val1TCAF2))*(Math.sqrt(Math.abs(val1TCAF3))))))
wcWcRel.push(Math.log(Math.abs(val1TCG)/(Math.sqrt(Math.abs(val1TCGF2))*(Math.sqrt(Math.abs(val1TCGF3))))))
wcWcRel.push(Math.log(Math.abs(val1CCT)/(Math.sqrt(Math.abs(val1CCTF2))*(Math.sqrt(Math.abs(val1CCTF3))))))
wcWcRel.push(Math.log(Math.abs(val1CCC)/(Math.sqrt(Math.abs(val1CCCF2))*(Math.sqrt(Math.abs(val1CCCF3))))))
wcWcRel.push(Math.log(Math.abs(val1CCA)/(Math.sqrt(Math.abs(val1CCAF2))*(Math.sqrt(Math.abs(val1CCAF3))))))
wcWcRel.push(Math.log(Math.abs(val1CCG)/(Math.sqrt(Math.abs(val1CCGF2))*(Math.sqrt(Math.abs(val1CCGF3))))))
wcWcRel.push(Math.log(Math.abs(val1ACT)/(Math.sqrt(Math.abs(val1ACTF2))*(Math.sqrt(Math.abs(val1ACTF3))))))
wcWcRel.push(Math.log(Math.abs(val1ACC)/(Math.sqrt(Math.abs(val1ACCF2))*(Math.sqrt(Math.abs(val1ACCF3))))))
wcWcRel.push(Math.log(Math.abs(val1ACA)/(Math.sqrt(Math.abs(val1ACAF2))*(Math.sqrt(Math.abs(val1ACAF3))))))
wcWcRel.push(Math.log(Math.abs(val1ACG)/(Math.sqrt(Math.abs(val1ACGF2))*(Math.sqrt(Math.abs(val1ACGF3))))))
wcWcRel.push(Math.log(Math.abs(val1GCT)/(Math.sqrt(Math.abs(val1GCTF2))*(Math.sqrt(Math.abs(val1GCTF3))))))
wcWcRel.push(Math.log(Math.abs(val1GCC)/(Math.sqrt(Math.abs(val1GCCF2))*(Math.sqrt(Math.abs(val1GCCF3))))))
wcWcRel.push(Math.log(Math.abs(val1GCA)/(Math.sqrt(Math.abs(val1GCAF2))*(Math.sqrt(Math.abs(val1GCAF3))))))
wcWcRel.push(Math.log(Math.abs(val1GCG)/(Math.sqrt(Math.abs(val1GCGF2))*(Math.sqrt(Math.abs(val1GCGF3))))))
wcWcRel.push(Math.log(Math.abs(val1TAT)/(Math.sqrt(Math.abs(val1TATF2))*(Math.sqrt(Math.abs(val1TATF3))))))
wcWcRel.push(Math.log(Math.abs(val1TAC)/(Math.sqrt(Math.abs(val1TACF2))*(Math.sqrt(Math.abs(val1TACF3))))))
wcWcRel.push(Math.log(Math.abs(val1TAA)/(Math.sqrt(Math.abs(val1TAAF2))*(Math.sqrt(Math.abs(val1TAAF3))))))
wcWcRel.push(Math.log(Math.abs(val1TAG)/(Math.sqrt(Math.abs(val1TAGF2))*(Math.sqrt(Math.abs(val1TAGF3))))))
wcWcRel.push(Math.log(Math.abs(val1TGA)/(Math.sqrt(Math.abs(val1TGAF2))*(Math.sqrt(Math.abs(val1TGAF3))))))
wcWcRel.push(Math.log(Math.abs(val1CAT)/(Math.sqrt(Math.abs(val1CATF2))*(Math.sqrt(Math.abs(val1CATF3))))))
wcWcRel.push(Math.log(Math.abs(val1CAC)/(Math.sqrt(Math.abs(val1CACF2))*(Math.sqrt(Math.abs(val1CACF3))))))
wcWcRel.push(Math.log(Math.abs(val1CAA)/(Math.sqrt(Math.abs(val1CAAF2))*(Math.sqrt(Math.abs(val1CAAF3))))))
wcWcRel.push(Math.log(Math.abs(val1CAG)/(Math.sqrt(Math.abs(val1CAGF2))*(Math.sqrt(Math.abs(val1CAGF3))))))
wcWcRel.push(Math.log(Math.abs(val1AAT)/(Math.sqrt(Math.abs(val1AATF2))*(Math.sqrt(Math.abs(val1AATF3))))))
wcWcRel.push(Math.log(Math.abs(val1AAC)/(Math.sqrt(Math.abs(val1AACF2))*(Math.sqrt(Math.abs(val1AACF3))))))
wcWcRel.push(Math.log(Math.abs(val1AAA)/(Math.sqrt(Math.abs(val1AAAF2))*(Math.sqrt(Math.abs(val1AAAF3))))))
wcWcRel.push(Math.log(Math.abs(val1AAG)/(Math.sqrt(Math.abs(val1AAGF2))*(Math.sqrt(Math.abs(val1AAGF3))))))
wcWcRel.push(Math.log(Math.abs(val1GAT)/(Math.sqrt(Math.abs(val1GATF2))*(Math.sqrt(Math.abs(val1GATF3))))))
wcWcRel.push(Math.log(Math.abs(val1GAC)/(Math.sqrt(Math.abs(val1GACF2))*(Math.sqrt(Math.abs(val1GACF3))))))
wcWcRel.push(Math.log(Math.abs(val1GAA)/(Math.sqrt(Math.abs(val1GAAF2))*(Math.sqrt(Math.abs(val1GAAF3))))))
wcWcRel.push(Math.log(Math.abs(val1GAG)/(Math.sqrt(Math.abs(val1GAGF2))*(Math.sqrt(Math.abs(val1GAGF3))))))
wcWcRel.push(Math.log(Math.abs(val1TGT)/(Math.sqrt(Math.abs(val1TGTF2))*(Math.sqrt(Math.abs(val1TGTF3))))))
wcWcRel.push(Math.log(Math.abs(val1TGC)/(Math.sqrt(Math.abs(val1TGCF2))*(Math.sqrt(Math.abs(val1TGCF3))))))
wcWcRel.push(Math.log(Math.abs(val1TGG)/(Math.sqrt(Math.abs(val1TGGF2))*(Math.sqrt(Math.abs(val1TGGF3))))))
wcWcRel.push(Math.log(Math.abs(val1CGT)/(Math.sqrt(Math.abs(val1CGTF2))*(Math.sqrt(Math.abs(val1CGTF3))))))
wcWcRel.push(Math.log(Math.abs(val1CGC)/(Math.sqrt(Math.abs(val1CGCF2))*(Math.sqrt(Math.abs(val1CGCF3))))))
wcWcRel.push(Math.log(Math.abs(val1CGA)/(Math.sqrt(Math.abs(val1CGAF2))*(Math.sqrt(Math.abs(val1CGAF3))))))
wcWcRel.push(Math.log(Math.abs(val1CGG)/(Math.sqrt(Math.abs(val1CGGF2))*(Math.sqrt(Math.abs(val1CGGF3))))))
wcWcRel.push(Math.log(Math.abs(val1AGT)/(Math.sqrt(Math.abs(val1AGTF2))*(Math.sqrt(Math.abs(val1AGTF3))))))
wcWcRel.push(Math.log(Math.abs(val1AGC)/(Math.sqrt(Math.abs(val1AGCF2))*(Math.sqrt(Math.abs(val1AGCF3))))))
wcWcRel.push(Math.log(Math.abs(val1AGA)/(Math.sqrt(Math.abs(val1AGAF2))*(Math.sqrt(Math.abs(val1AGAF3))))))
wcWcRel.push(Math.log(Math.abs(val1AGG)/(Math.sqrt(Math.abs(val1AGGF2))*(Math.sqrt(Math.abs(val1AGGF3))))))
wcWcRel.push(Math.log(Math.abs(val1GGT)/(Math.sqrt(Math.abs(val1GGTF2))*(Math.sqrt(Math.abs(val1GGTF3))))))
wcWcRel.push(Math.log(Math.abs(val1GGC)/(Math.sqrt(Math.abs(val1GGCF2))*(Math.sqrt(Math.abs(val1GGCF3))))))
wcWcRel.push(Math.log(Math.abs(val1GGA)/(Math.sqrt(Math.abs(val1GGAF2))*(Math.sqrt(Math.abs(val1GGAF3))))))
wcWcRel.push(Math.log(Math.abs(val1GGG)/(Math.sqrt(Math.abs(val1GGGF2))*(Math.sqrt(Math.abs(val1GGGF3))))))

var wcWcRel1=0;

for(var i=0;i<wcWcRel.length;i++) {
	var counter;
	if(isNaN(wcWcRel[i])==true) {
		continue;
	}else if(isFinite(wcWcRel[i])==false) {
		continue;
	}else if(isNaN(wcWcRel[i])==false){
		wcWcRel1+=wcWcRel[i]
	}
}

var ex1=Math.sqrt(val1TTTF2)
var ex2=Math.sqrt(val1TTTF3)
var ex3=ex1*ex2
//console.log("rCAI: "+(Math.exp(wcWcRel1/a.length)-1))


freqTTT_L=freqTTT.length
freqTTC_L=freqTTC.length
freqTTA_L=freqTTA.length
freqTTG_L=freqTTG.length
freqCTT_L=freqCTT.length
freqCTC_L=freqCTC.length
freqCTA_L=freqCTA.length
freqCTG_L=freqCTG.length
freqATT_L=freqATT.length
freqATC_L=freqATC.length
freqATA_L=freqATA.length
freqATG_L=freqATG.length
freqGTT_L=freqGTT.length
freqGTC_L=freqGTC.length
freqGTA_L=freqGTA.length
freqGTG_L=freqGTG.length
freqTCT_L=freqTCT.length
freqTCC_L=freqTCC.length
freqTCA_L=freqTCA.length
freqTCG_L=freqTCG.length
freqCCT_L=freqCCT.length
freqCCC_L=freqCCC.length
freqCCA_L=freqCCA.length
freqCCG_L=freqCCG.length
freqACT_L=freqACT.length
freqACC_L=freqACC.length
freqACA_L=freqACA.length
freqACG_L=freqACG.length
freqGCT_L=freqGCT.length
freqGCC_L=freqGCC.length
freqGCA_L=freqGCA.length
freqGCG_L=freqGCG.length
freqTAT_L=freqTAT.length
freqTAC_L=freqTAC.length
freqTAA_L=freqTAA.length
freqTAG_L=freqTAG.length
freqTGA_L=freqTGA.length
freqCAT_L=freqCAT.length
freqCAC_L=freqCAC.length
freqCAA_L=freqCAA.length
freqCAG_L=freqCAG.length
freqAAT_L=freqAAT.length
freqAAC_L=freqAAC.length
freqAAA_L=freqAAA.length
freqAAG_L=freqAAG.length
freqGAT_L=freqGAT.length
freqGAC_L=freqGAC.length
freqGAA_L=freqGAA.length
freqGAG_L=freqGAG.length
freqTGT_L=freqTGT.length
freqTGC_L=freqTGC.length
freqTGG_L=freqTGG.length
freqCGT_L=freqCGT.length
freqCGC_L=freqCGC.length
freqCGA_L=freqCGA.length
freqCGG_L=freqCGG.length
freqAGT_L=freqAGT.length
freqAGC_L=freqAGC.length
freqAGA_L=freqAGA.length
freqAGG_L=freqAGG.length
freqGGT_L=freqGGT.length
freqGGC_L=freqGGC.length
freqGGA_L=freqGGA.length
freqGGG_L=freqGGG.length

freqCodons=[]

freqCodons.push(freqTTT_L/allCountsF1 * Math.log2(freqTTT_L)/allCountsF1)
freqCodons.push(freqTTC_L/allCountsF1 * Math.log2(freqTTC_L)/allCountsF1)
freqCodons.push(freqTTA_L/allCountsF1 * Math.log2(freqTTA_L)/allCountsF1)
freqCodons.push(freqTTG_L/allCountsF1 * Math.log2(freqTTG_L)/allCountsF1)
freqCodons.push(freqCTT_L/allCountsF1 * Math.log2(freqCTT_L)/allCountsF1)
freqCodons.push(freqCTC_L/allCountsF1 * Math.log2(freqCTC_L)/allCountsF1)
freqCodons.push(freqCTA_L/allCountsF1 * Math.log2(freqCTA_L)/allCountsF1)
freqCodons.push(freqCTG_L/allCountsF1 * Math.log2(freqCTG_L)/allCountsF1)
freqCodons.push(freqATT_L/allCountsF1 * Math.log2(freqATT_L)/allCountsF1)
freqCodons.push(freqATC_L/allCountsF1 * Math.log2(freqATC_L)/allCountsF1)
freqCodons.push(freqATA_L/allCountsF1 * Math.log2(freqATA_L)/allCountsF1)
freqCodons.push(freqATG_L/allCountsF1 * Math.log2(freqATG_L)/allCountsF1)
freqCodons.push(freqGTT_L/allCountsF1 * Math.log2(freqGTT_L)/allCountsF1)
freqCodons.push(freqGTC_L/allCountsF1 * Math.log2(freqGTC_L)/allCountsF1)
freqCodons.push(freqGTA_L/allCountsF1 * Math.log2(freqGTA_L)/allCountsF1)
freqCodons.push(freqGTG_L/allCountsF1 * Math.log2(freqGTG_L)/allCountsF1)
freqCodons.push(freqTCT_L/allCountsF1 * Math.log2(freqTCT_L)/allCountsF1)
freqCodons.push(freqTCC_L/allCountsF1 * Math.log2(freqTCC_L)/allCountsF1)
freqCodons.push(freqTCA_L/allCountsF1 * Math.log2(freqTCA_L)/allCountsF1)
freqCodons.push(freqTCG_L/allCountsF1 * Math.log2(freqTCG_L)/allCountsF1)
freqCodons.push(freqCCT_L/allCountsF1 * Math.log2(freqCCT_L)/allCountsF1)
freqCodons.push(freqCCC_L/allCountsF1 * Math.log2(freqCCC_L)/allCountsF1)
freqCodons.push(freqCCA_L/allCountsF1 * Math.log2(freqCCA_L)/allCountsF1)
freqCodons.push(freqCCG_L/allCountsF1 * Math.log2(freqCCG_L)/allCountsF1)
freqCodons.push(freqACT_L/allCountsF1 * Math.log2(freqACT_L)/allCountsF1)
freqCodons.push(freqACC_L/allCountsF1 * Math.log2(freqACC_L)/allCountsF1)
freqCodons.push(freqACA_L/allCountsF1 * Math.log2(freqACA_L)/allCountsF1)
freqCodons.push(freqACG_L/allCountsF1 * Math.log2(freqACG_L)/allCountsF1)
freqCodons.push(freqGCT_L/allCountsF1 * Math.log2(freqGCT_L)/allCountsF1)
freqCodons.push(freqGCC_L/allCountsF1 * Math.log2(freqGCC_L)/allCountsF1)
freqCodons.push(freqGCA_L/allCountsF1 * Math.log2(freqGCA_L)/allCountsF1)
freqCodons.push(freqGCG_L/allCountsF1 * Math.log2(freqGCG_L)/allCountsF1)
freqCodons.push(freqTAT_L/allCountsF1 * Math.log2(freqTAT_L)/allCountsF1)
freqCodons.push(freqTAC_L/allCountsF1 * Math.log2(freqTAC_L)/allCountsF1)
freqCodons.push(freqTAA_L/allCountsF1 * Math.log2(freqTAA_L)/allCountsF1)
freqCodons.push(freqTAG_L/allCountsF1 * Math.log2(freqTAG_L)/allCountsF1)
freqCodons.push(freqTGA_L/allCountsF1 * Math.log2(freqTGA_L)/allCountsF1)
freqCodons.push(freqCAT_L/allCountsF1 * Math.log2(freqCAT_L)/allCountsF1)
freqCodons.push(freqCAC_L/allCountsF1 * Math.log2(freqCAC_L)/allCountsF1)
freqCodons.push(freqCAA_L/allCountsF1 * Math.log2(freqCAA_L)/allCountsF1)
freqCodons.push(freqCAG_L/allCountsF1 * Math.log2(freqCAG_L)/allCountsF1)
freqCodons.push(freqAAT_L/allCountsF1 * Math.log2(freqAAT_L)/allCountsF1)
freqCodons.push(freqAAC_L/allCountsF1 * Math.log2(freqAAC_L)/allCountsF1)
freqCodons.push(freqAAA_L/allCountsF1 * Math.log2(freqAAA_L)/allCountsF1)
freqCodons.push(freqAAG_L/allCountsF1 * Math.log2(freqAAG_L)/allCountsF1)
freqCodons.push(freqGAT_L/allCountsF1 * Math.log2(freqGAT_L)/allCountsF1)
freqCodons.push(freqGAC_L/allCountsF1 * Math.log2(freqGAC_L)/allCountsF1)
freqCodons.push(freqGAA_L/allCountsF1 * Math.log2(freqGAA_L)/allCountsF1)
freqCodons.push(freqGAG_L/allCountsF1 * Math.log2(freqGAG_L)/allCountsF1)
freqCodons.push(freqTGT_L/allCountsF1 * Math.log2(freqTGT_L)/allCountsF1)
freqCodons.push(freqTGC_L/allCountsF1 * Math.log2(freqTGC_L)/allCountsF1)
freqCodons.push(freqTGG_L/allCountsF1 * Math.log2(freqTGG_L)/allCountsF1)
freqCodons.push(freqCGT_L/allCountsF1 * Math.log2(freqCGT_L)/allCountsF1)
freqCodons.push(freqCGC_L/allCountsF1 * Math.log2(freqCGC_L)/allCountsF1)
freqCodons.push(freqCGA_L/allCountsF1 * Math.log2(freqCGA_L)/allCountsF1)
freqCodons.push(freqCGG_L/allCountsF1 * Math.log2(freqCGG_L)/allCountsF1)
freqCodons.push(freqAGT_L/allCountsF1 * Math.log2(freqAGT_L)/allCountsF1)
freqCodons.push(freqAGC_L/allCountsF1 * Math.log2(freqAGC_L)/allCountsF1)
freqCodons.push(freqAGA_L/allCountsF1 * Math.log2(freqAGA_L)/allCountsF1)
freqCodons.push(freqAGG_L/allCountsF1 * Math.log2(freqAGG_L)/allCountsF1)
freqCodons.push(freqGGT_L/allCountsF1 * Math.log2(freqGGT_L)/allCountsF1)
freqCodons.push(freqGGC_L/allCountsF1 * Math.log2(freqGGC_L)/allCountsF1)
freqCodons.push(freqGGA_L/allCountsF1 * Math.log2(freqGGA_L)/allCountsF1)
freqCodons.push(freqGGG_L/allCountsF1 * Math.log2(freqGGG_L)/allCountsF1)

var freqCodons1=0;

for(var i=0;i<freqCodons.length;i++) {
	var counter;
	if(isNaN(freqCodons[i])==true) {
		//console.log("NaN value")
		continue;
	}else if(isFinite(freqCodons[i])==false) {
		continue;
	}else if(isNaN(freqCodons[i])==false){
		freqCodons1+=freqCodons[i]
	}
}

//console.log("val1 "+freqCodons1)



var aaF=freq1.length/allCountsF1
var aaL=freq2.length/allCountsF1
var aaI=freq3.length/allCountsF1
var aaM=freq4.length/allCountsF1
var aaV=freq5.length/allCountsF1
var aaS=freq6.length/allCountsF1
var aaP=freq7.length/allCountsF1
var aaT=freq8.length/allCountsF1
var aaA=freq9.length/allCountsF1
var aaY=freq10.length/allCountsF1
var aaH=freq12.length/allCountsF1
var aaQ=freq13.length/allCountsF1
var aaN=freq14.length/allCountsF1
var aaK=freq15.length/allCountsF1
var aaD=freq16.length/allCountsF1
var aaE=freq17.length/allCountsF1
var aaC=freq18.length/allCountsF1
var aaW=freq19.length/allCountsF1
var aaR=freq20.length/allCountsF1
var aaG=freq21.length/allCountsF1

var eaF = -freqCodons1/Math.log2(freq1.length)
var eaL = -freqCodons1/Math.log2(freq2.length)
var eaI = -freqCodons1/Math.log2(freq3.length)
var eaM = -freqCodons1/Math.log2(freq4.length)
var eaV = -freqCodons1/Math.log2(freq5.length)
var eaS = -freqCodons1/Math.log2(freq6.length)
var eaP = -freqCodons1/Math.log2(freq7.length)
var eaT = -freqCodons1/Math.log2(freq8.length)
var eaA = -freqCodons1/Math.log2(freq9.length)
var eaY = -freqCodons1/Math.log2(freq10.length)
var eaH = -freqCodons1/Math.log2(freq12.length)
var eaQ = -freqCodons1/Math.log2(freq13.length)
var eaN = -freqCodons1/Math.log2(freq14.length)
var eaK = -freqCodons1/Math.log2(freq15.length)
var eaD = -freqCodons1/Math.log2(freq16.length)
var eaE = -freqCodons1/Math.log2(freq17.length)
var eaC = -freqCodons1/Math.log2(freq18.length)
var eaW = -freqCodons1/Math.log2(freq19.length)
var eaR = -freqCodons1/Math.log2(freq20.length)
var eaG = -freqCodons1/Math.log2(freq21.length)

eW=[]
var eW1=0

eW.push(aaF*eaF) 
eW.push(aaL*eaL)
eW.push(aaI*eaI)
eW.push(aaM*eaM)
eW.push(aaV*eaV)
eW.push(aaS*eaS)
eW.push(aaP*eaP)
eW.push(aaT*eaT)
eW.push(aaA*eaA)
eW.push(aaY*eaY)
eW.push(aaH*eaH)
eW.push(aaQ*eaQ)
eW.push(aaN*eaN)
eW.push(aaK*eaK)
eW.push(aaD*eaD)
eW.push(aaE*eaE)
eW.push(aaC*eaC)
eW.push(aaW*eaW)
eW.push(aaR*eaR)
eW.push(aaG*eaG)


for(var i=0;i<eW.length;i++) {
	var counter;
	if(isNaN(eW[i])==true) {
		//console.log("NaN value")
		continue;
	}else if(isFinite(eW[i])==false) {
		continue;
	}else if(isNaN(eW[i])==false){
		eW1+=eW[i]
	}
}


//console.log("Weighted sum of relative entropy (Ew): "+Math.abs(eW1))

var eaF_SCUO = Math.log2(freq1.length)-(-freqCodons1)/Math.log2(freq1.length)
var eaL_SCUO = Math.log2(freq1.length)-(-freqCodons1)/Math.log2(freq2.length)
var eaI_SCUO = Math.log2(freq1.length)-(-freqCodons1)/Math.log2(freq3.length)
var eaM_SCUO = Math.log2(freq1.length)-(-freqCodons1)/Math.log2(freq4.length)
var eaV_SCUO = Math.log2(freq1.length)-(-freqCodons1)/Math.log2(freq5.length)
var eaS_SCUO = Math.log2(freq1.length)-(-freqCodons1)/Math.log2(freq6.length)
var eaP_SCUO = Math.log2(freq1.length)-(-freqCodons1)/Math.log2(freq7.length)
var eaT_SCUO = Math.log2(freq1.length)-(-freqCodons1)/Math.log2(freq8.length)
var eaA_SCUO = Math.log2(freq1.length)-(-freqCodons1)/Math.log2(freq9.length)
var eaY_SCUO = Math.log2(freq1.length)-(-freqCodons1)/Math.log2(freq10.length)
var eaH_SCUO = Math.log2(freq1.length)-(-freqCodons1)/Math.log2(freq12.length)
var eaQ_SCUO = Math.log2(freq1.length)-(-freqCodons1)/Math.log2(freq13.length)
var eaN_SCUO = Math.log2(freq1.length)-(-freqCodons1)/Math.log2(freq14.length)
var eaK_SCUO = Math.log2(freq1.length)-(-freqCodons1)/Math.log2(freq15.length)
var eaD_SCUO = Math.log2(freq1.length)-(-freqCodons1)/Math.log2(freq16.length)
var eaE_SCUO = Math.log2(freq1.length)-(-freqCodons1)/Math.log2(freq17.length)
var eaC_SCUO = Math.log2(freq1.length)-(-freqCodons1)/Math.log2(freq18.length)
var eaW_SCUO = Math.log2(freq1.length)-(-freqCodons1)/Math.log2(freq19.length)
var eaR_SCUO = Math.log2(freq1.length)-(-freqCodons1)/Math.log2(freq20.length)
var eaG_SCUO = Math.log2(freq1.length)-(-freqCodons1)/Math.log2(freq21.length)

scuo=[]
var scuo1=0

scuo.push(aaF*eaF_SCUO)
scuo.push(aaL*eaL_SCUO)
scuo.push(aaI*eaI_SCUO)
scuo.push(aaM*eaM_SCUO)
scuo.push(aaV*eaV_SCUO)
scuo.push(aaS*eaS_SCUO)
scuo.push(aaP*eaP_SCUO)
scuo.push(aaT*eaT_SCUO)
scuo.push(aaA*eaA_SCUO)
scuo.push(aaY*eaY_SCUO)
scuo.push(aaH*eaH_SCUO)
scuo.push(aaQ*eaQ_SCUO)
scuo.push(aaN*eaN_SCUO)
scuo.push(aaK*eaK_SCUO)
scuo.push(aaD*eaD_SCUO)
scuo.push(aaE*eaE_SCUO)
scuo.push(aaC*eaC_SCUO)
scuo.push(aaW*eaW_SCUO)
scuo.push(aaR*eaR_SCUO)
scuo.push(aaG*eaG_SCUO)

for(var i=0;i<scuo.length;i++) {
	var counter;
	if(isNaN(scuo[i])==true) {
		//console.log("NaN value")
		continue;
	}else if(isFinite(scuo[i])==false) {
		continue;
	}else if(isNaN(scuo[i])==false){
		scuo1+=scuo[i]
	}
}


//console.log("SCUO: "+scuo1)

h7.push(Math.abs(eW1))
h8.push(scuo1)


//console.log("**************************************************************************************************")


});

lineReader.on('close', function (line) {
	process.stdout.write("\n");
	csv
   .write([
       h1,
       h2,
       h3,
       h4,
       h5,
       h7,
       h8,
       h7rcsuTTT,
       h7rcsuTTC,
       h7rcsuTTA,
       h7rcsuTTG,
       h7rcsuCTT,
       h7rcsuCTC,
       h7rcsuCTA,
       h7rcsuCTG,
       h7rcsuATT,
       h7rcsuATC,
       h7rcsuATA,
       h7rcsuATG,
       h7rcsuGTT,
       h7rcsuGTC,
       h7rcsuGTA,
       h7rcsuGTG,
       h7rcsuTCT,
       h7rcsuTCC,
       h7rcsuTCA,
       h7rcsuTCG,
       h7rcsuCCT,
       h7rcsuCCC,
       h7rcsuCCA,
       h7rcsuCCG,
       h7rcsuACT,
       h7rcsuACC,
       h7rcsuACA,
       h7rcsuACG,
       h7rcsuGCT,
       h7rcsuGCC,
       h7rcsuGCA,
       h7rcsuGCG,
       h7rcsuTAT,
       h7rcsuTAC,
       h7rcsuCAT,
       h7rcsuCAC,
       h7rcsuCAA,
       h7rcsuCAG,
       h7rcsuAAT,
       h7rcsuAAC,
       h7rcsuAAA,
       h7rcsuAAG,
       h7rcsuGAT,
       h7rcsuGAC,
       h7rcsuGAA,
       h7rcsuGAG,
       h7rcsuTGT,
       h7rcsuTGC,
       h7rcsuTGG,
       h7rcsuCGT,
       h7rcsuCGC,
       h7rcsuCGA,
       h7rcsuCGG,
       h7rcsuAGT,
       h7rcsuAGC,
       h7rcsuAGA,
       h7rcsuAGG,
       h7rcsuGGT,
       h7rcsuGGC,
       h7rcsuGGA,
       h7rcsuGGG
    ], {headers: true})
   .pipe(ws);	

});