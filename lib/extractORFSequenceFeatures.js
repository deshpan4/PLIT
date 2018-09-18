var fs = require('fs'); 
var csv = require("fast-csv");
const argv = require('yargs').usage('Usage: $0 --input Input_filename --output1 Output_filename1')
    .demandOption(['input','output1'])
    .argv;

const spawn = require('child_process').spawn;



var h1=['file']
var h2=['Frame name']
var h3=['ORF Length']
var h4=['ORF sequence']
var h5=['ORF Coverage from all frames']
var h6=['ORF Coverage']
var h7=['Transcript length']
var h8=['(G+C)%']

var x1=0

var fileName=argv.input
var output1=argv.output1

var ws = fs.createWriteStream(output1);

var file1 = fs.readFileSync(fileName,'utf8').toString().split("\n");

/*var total = file1.length,
    count = 0,
    pace = require('pace')(total);*/

for(var i=1;i<file1.length+1;i++) {
	var h11='sequence-' + i
	h1.push(h11)
}

//while (count++ < total) {

 	
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream(argv.input)
});

lineReader.on('line', function (line) {

//pace.op();


//count=count;

x1 = x1+1
process.stdout.clearLine();
process.stdout.cursorTo(0);
process.stdout.write("Finished processing FASTA sequences " + x1);

/*var i = 0;  // dots counter
setInterval(function() {
  process.stdout.clearLine();  // clear current text
  process.stdout.cursorTo(0);  // move cursor to beginning of line
  i = (i + 1);
  process.stdout.write("FASTA sequences processed" + i);  // write text
}, 300);
*/
var file11=line

//	Forward Frame 1
var a1=[]
var a2=[]
var a3=[]
var a4=[]

for(var i=0;i<file11.length;i+=3) {
	a1=file11.substring(i,i+3)
	a2.push(a1)
}


//	Forward Frame 2
var b1=[]
var b2=[]
var b3=[]
var b4=[]


for(var i=1;i<file11.length;i+=3) {
	b1=file11.substring(i,i+3)
	b2.push(b1)
}


if(b2[b2.length-1].length == 3) {
	b2.push('AT')
}


//	Forward Frame 3

var c1=[]
var c2=[]
var c3=[]
var c4=[]


for(var i=2;i<file11.length;i+=3) {
	c1=file11.substring(i,i+3)
	c2.push(c1)
}

if(c2[c2.length-1].length == 3) {
	c2.push('AT')
}

function reverseString(str) {
    var splitString = str.split(""); // var splitString = "hello".split("");
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    return joinArray; // "olleh"
}

var x2=[]
var x3=[]

function complementString(str) {
	var x1 = str.split("");
	for(var i=0;i<str.length;i++) {
		if(str[i]=='A') {
			x2='T'
			x3.push(x2)
		} else if(str[i]=='T') {
			x2='A'
			x3.push(x2)
		} else if(str[i]=='G') {
			x2='C'
			x3.push(x2)
		} else if(str[i]=='C') {
			x2='G'
			x3.push(x2)
		}
	}
	var joinArray1 = x3.join("")
	return joinArray1;
}



var y = complementString(file11)

b = reverseString(y);


//	Reverse Frame 1
var d1=[]
var d2=[]
var d3=[]
var d4=[]


for(var i=0;i<b.length;i+=3) {
	d1=b.substring(i,i+3)
	d2.push(d1)
}


//	Reverse Frame 2
var e1=[]
var e2=[]
var e3=[]
var e4=[]


for(var i=1;i<b.length;i+=3) {
	e1=b.substring(i,i+3)
	e2.push(e1)
}

//	Reverse Frame 3

var f1=[]
var f2=[]
var f3=[]
var f4=[]


for(var i=2;i<b.length;i+=3) {
	f1=b.substring(i,i+3)
	f2.push(f1)
}


//	Forward strand Frame 1	//

for(var i=0;i<a2.length;i++) {
	if(a2[i] == 'TTT' || a2[i] == 'TTC') {
		a3='F'
		a4.push(a3)
	} else if(a2[i] == 'TTA' || a2[i] == 'TTG' || a2[i] == 'CTT' || a2[i] == 'CTC' || a2[i] == 'CTA' || a2[i] == 'CTG') {
		a3='L'
		a4.push(a3)
	} else if(a2[i] == 'ATT' || a2[i] == 'ATC' || a2[i] == 'ATA') {
		a3='I'
		a4.push(a3)
	} else if(a2[i] == 'ATG') {
		a3='M'
		a4.push(a3)
	} else if(a2[i] == 'GTT' || a2[i] == 'GTC' || a2[i] == 'GTA' || a2[i] == 'GTG') {
		a3='V'
		a4.push(a3)
	} else if(a2[i] == 'TCT' || a2[i] == 'TCC' || a2[i] == 'TCA' || a2[i] == 'TCG') {
		a3='S'
		a4.push(a3)
	} else if(a2[i] == 'CCT' || a2[i] == 'CCC' || a2[i] == 'CCA' || a2[i] == 'CCG') {
		a3='P'
		a4.push(a3)
	} else if(a2[i] == 'ACT' || a2[i] == 'ACC' || a2[i] == 'ACA' || a2[i] == 'ACG') {
		a3='T'
		a4.push(a3)
	} else if(a2[i] == 'GCT' || a2[i] == 'GCC' || a2[i] == 'GCA' || a2[i] == 'GCG') {
		a3='A'
		a4.push(a3)
	} else if(a2[i] == 'TAT' || a2[i] == 'TAC') {
		a3='Y'
		a4.push(a3)
	} else if(a2[i] == 'TAA' || a2[i] == 'TAG' || a2[i] == 'TGA') {
		a3='-'
		a4.push(a3)
	} else if(a2[i] == 'CAT' || a2[i] == 'CAC') {
		a3='H'
		a4.push(a3)
	} else if(a2[i] == 'CAA' || a2[i] == 'CAG') {
		a3='Q'
		a4.push(a3)
	} else if(a2[i] == 'AAT' || a2[i] == 'AAC') {
		a3='N'
		a4.push(a3)
	} else if(a2[i] == 'AAA' || a2[i] == 'AAG') {
		a3='K'
		a4.push(a3)
	} else if(a2[i] == 'GAT' || a2[i] == 'GAC') {
		a3='D'
		a4.push(a3)
	} else if(a2[i] == 'GAA' || a2[i] == 'GAG') {
		a3='E'
		a4.push(a3)
	} else if(a2[i] == 'TGT' || a2[i] == 'TGC') {
		a3='C'
		a4.push(a3)
	} else if(a2[i] == 'TGG') {
		a3='W'
		a4.push(a3)
	} else if(a2[i] == 'CGT' || a2[i] == 'CGC' || a2[i] == 'CGA' || a2[i] == 'CGG') {
		a3='R'
		a4.push(a3)
	} else if(a2[i] == 'AGT' || a2[i] == 'AGC') {
		a3='S'
		a4.push(a3)
	} else if(a2[i] == 'AGA' || a2[i] == 'AGG') {
		a3='R'
		a4.push(a3)
	} else if(a2[i] == 'GGT' || a2[i] == 'GGC' || a2[i] == 'GGA' || a2[i] == 'GGG') {
		a3='G'
		a4.push(a3)
	} else if(a2[i] == 'A' || a2[i] == 'T' || a2[i] == 'G' || a2[i] == 'C' || a2[i] == 'AA' || a2[i] == 'AT' || a2[i] == 'AG' || a2[i] == 'AC' || a2[i] == 'TA' || a2[i] == 'TT' || a2[i] == 'TG' || a2[i] == 'TC' || a2[i] == 'GA' || a2[i] == 'GT' || a2[i] == 'GG' || a2[i] == 'GC' || a2[i] == 'CA' || a2[i] == 'CT' || a2[i] == 'CG' || a2[i] == 'CC'){
		a3=''
	}
	
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

var c22=[]

if(c2[c2.length-1] == 'A' || c2[c2.length-1] == 'T' || c2[c2.length-1] == 'G' || c2[c2.length-1] == 'C' || c2[c2.length-1] == 'AA' || c2[c2.length-1] == 'AT' || c2[c2.length-1] == 'AG' || c2[c2.length-1] == 'AC' || c2[c2.length-1] == 'TA' || c2[c2.length-1] == 'TT' || c2[c2.length-1] == 'TG' || c2[c2.length-1] == 'TC' || c2[c2.length-1] == 'GA' || c2[c2.length-1] == 'GT' || c2[c2.length-1] == 'GG' || c2[c2.length-1] == 'GC' || c2[c2.length-1] == 'CA' || c2[c2.length-1] == 'CT' || c2[c2.length-1] == 'CG' || c2[c2.length-1] == 'CC') {
	c22=c2.pop();
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



//	Reverse strand Frame 1	//

for(var i=0;i<d2.length;i++) {
	if(d2[i] == 'TTT' || d2[i] == 'TTC') {
		d3='F'
		d4.push(d3)
	} else if(d2[i] == 'TTA' || d2[i] == 'TTG' || d2[i] == 'CTT' || d2[i] == 'CTC' || d2[i] == 'CTA' || d2[i] == 'CTG') {
		d3='L'
		d4.push(d3)
	} else if(d2[i] == 'ATT' || d2[i] == 'ATC' || d2[i] == 'ATA') {
		d3='I'
		d4.push(d3)
	} else if(d2[i] == 'ATG') {
		d3='M'
		d4.push(d3)
	} else if(d2[i] == 'GTT' || d2[i] == 'GTC' || d2[i] == 'GTA' || d2[i] == 'GTG') {
		d3='V'
		d4.push(d3)
	} else if(d2[i] == 'TCT' || d2[i] == 'TCC' || d2[i] == 'TCA' || d2[i] == 'TCG') {
		d3='S'
		d4.push(d3)
	} else if(d2[i] == 'CCT' || d2[i] == 'CCC' || d2[i] == 'CCA' || d2[i] == 'CCG') {
		d3='P'
		d4.push(d3)
	} else if(d2[i] == 'ACT' || d2[i] == 'ACC' || d2[i] == 'ACA' || d2[i] == 'ACG') {
		d3='T'
		d4.push(d3)
	} else if(d2[i] == 'GCT' || d2[i] == 'GCC' || d2[i] == 'GCA' || d2[i] == 'GCG') {
		d3='A'
		d4.push(d3)
	} else if(d2[i] == 'TAT' || d2[i] == 'TAC') {
		d3='Y'
		d4.push(d3)
	} else if(d2[i] == 'TAA' || d2[i] == 'TAG' || d2[i] == 'TGA') {
		d3='-'
		d4.push(d3)
	} else if(d2[i] == 'CAT' || d2[i] == 'CAC') {
		d3='H'
		d4.push(d3)
	} else if(d2[i] == 'CAA' || d2[i] == 'CAG') {
		d3='Q'
		d4.push(d3)
	} else if(d2[i] == 'AAT' || d2[i] == 'AAC') {
		d3='N'
		d4.push(d3)
	} else if(d2[i] == 'AAA' || d2[i] == 'AAG') {
		d3='K'
		d4.push(d3)
	} else if(d2[i] == 'GAT' || d2[i] == 'GAC') {
		d3='D'
		d4.push(d3)
	} else if(d2[i] == 'GAA' || d2[i] == 'GAG') {
		d3='E'
		d4.push(d3)
	} else if(d2[i] == 'TGT' || d2[i] == 'TGC') {
		d3='C'
		d4.push(d3)
	} else if(d2[i] == 'TGG') {
		d3='W'
		d4.push(d3)
	} else if(d2[i] == 'CGT' || d2[i] == 'CGC' || d2[i] == 'CGA' || d2[i] == 'CGG') {
		d3='R'
		d4.push(d3)
	} else if(d2[i] == 'AGT' || d2[i] == 'AGC') {
		d3='S'
		d4.push(d3)
	} else if(d2[i] == 'AGA' || d2[i] == 'AGG') {
		d3='R'
		d4.push(d3)
	} else if(d2[i] == 'GGT' || d2[i] == 'GGC' || d2[i] == 'GGA' || d2[i] == 'GGG') {
		d3='G'
		d4.push(d3)
	} else if(d2[i] == 'A' || d2[i] == 'T' || d2[i] == 'G' || d2[i] == 'C' || d2[i] == 'AA' || d2[i] == 'AT' || d2[i] == 'AG' || d2[i] == 'AC' || d2[i] == 'TA' || d2[i] == 'TT' || d2[i] == 'TG' || d2[i] == 'TC' || d2[i] == 'GA' || d2[i] == 'GT' || d2[i] == 'GG' || d2[i] == 'GC' || d2[i] == 'CA' || d2[i] == 'CT' || d2[i] == 'CG' || d2[i] == 'CC'){
		d3=''
	}
	
}


//	Reverse strand Frame 2	//

for(var i=0;i<e2.length;i++) {
	if(e2[i] == 'TTT' || e2[i] == 'TTC') {
		e3='F'
		e4.push(e3)
	} else if(e2[i] == 'TTA' || e2[i] == 'TTG' || e2[i] == 'CTT' || e2[i] == 'CTC' || e2[i] == 'CTA' || e2[i] == 'CTG') {
		e3='L'
		e4.push(e3)
	} else if(e2[i] == 'ATT' || e2[i] == 'ATC' || e2[i] == 'ATA') {
		e3='I'
		e4.push(e3)
	} else if(e2[i] == 'ATG') {
		e3='M'
		e4.push(e3)
	} else if(e2[i] == 'GTT' || e2[i] == 'GTC' || e2[i] == 'GTA' || e2[i] == 'GTG') {
		e3='V'
		e4.push(e3)
	} else if(e2[i] == 'TCT' || e2[i] == 'TCC' || e2[i] == 'TCA' || e2[i] == 'TCG') {
		e3='S'
		e4.push(e3)
	} else if(e2[i] == 'CCT' || e2[i] == 'CCC' || e2[i] == 'CCA' || e2[i] == 'CCG') {
		e3='P'
		e4.push(e3)
	} else if(e2[i] == 'ACT' || e2[i] == 'ACC' || e2[i] == 'ACA' || e2[i] == 'ACG') {
		e3='T'
		e4.push(e3)
	} else if(e2[i] == 'GCT' || e2[i] == 'GCC' || e2[i] == 'GCA' || e2[i] == 'GCG') {
		e3='A'
		e4.push(e3)
	} else if(e2[i] == 'TAT' || e2[i] == 'TAC') {
		e3='Y'
		e4.push(e3)
	} else if(e2[i] == 'TAA' || e2[i] == 'TAG' || e2[i] == 'TGA') {
		e3='-'
		e4.push(e3)
	} else if(e2[i] == 'CAT' || e2[i] == 'CAC') {
		e3='H'
		e4.push(e3)
	} else if(e2[i] == 'CAA' || e2[i] == 'CAG') {
		e3='Q'
		e4.push(e3)
	} else if(e2[i] == 'AAT' || e2[i] == 'AAC') {
		e3='N'
		e4.push(e3)
	} else if(e2[i] == 'AAA' || e2[i] == 'AAG') {
		e3='K'
		e4.push(e3)
	} else if(e2[i] == 'GAT' || e2[i] == 'GAC') {
		e3='D'
		e4.push(e3)
	} else if(e2[i] == 'GAA' || e2[i] == 'GAG') {
		e3='E'
		e4.push(e3)
	} else if(e2[i] == 'TGT' || e2[i] == 'TGC') {
		e3='C'
		e4.push(e3)
	} else if(e2[i] == 'TGG') {
		e3='W'
		e4.push(e3)
	} else if(e2[i] == 'CGT' || e2[i] == 'CGC' || e2[i] == 'CGA' || e2[i] == 'CGG') {
		e3='R'
		e4.push(e3)
	} else if(e2[i] == 'AGT' || e2[i] == 'AGC') {
		e3='S'
		e4.push(e3)
	} else if(e2[i] == 'AGA' || e2[i] == 'AGG') {
		e3='R'
		e4.push(e3)
	} else if(e2[i] == 'GGT' || e2[i] == 'GGC' || e2[i] == 'GGA' || e2[i] == 'GGG') {
		e3='G'
		e4.push(e3)
	} else if(e2[i] == 'A' || e2[i] == 'T' || e2[i] == 'G' || e2[i] == 'C' || e2[i] == 'AA' || e2[i] == 'AT' || e2[i] == 'AG' || e2[i] == 'AC' || e2[i] == 'TA' || e2[i] == 'TT' || e2[i] == 'TG' || e2[i] == 'TC' || e2[i] == 'GA' || e2[i] == 'GT' || e2[i] == 'GG' || e2[i] == 'GC' || e2[i] == 'CA' || e2[i] == 'CT' || e2[i] == 'CG' || e2[i] == 'CC'){
		e3=''
	}
	
}

//	Reverse strand Frame 3	//

for(var i=0;i<f2.length;i++) {
	if(f2[i] == 'TTT' || f2[i] == 'TTC') {
		f3='F'
		f4.push(f3)
	} else if(f2[i] == 'TTA' || f2[i] == 'TTG' || f2[i] == 'CTT' || f2[i] == 'CTC' || f2[i] == 'CTA' || f2[i] == 'CTG') {
		f3='L'
		f4.push(f3)
	} else if(f2[i] == 'ATT' || f2[i] == 'ATC' || f2[i] == 'ATA') {
		f3='I'
		f4.push(f3)
	} else if(f2[i] == 'ATG') {
		f3='M'
		f4.push(f3)
	} else if(f2[i] == 'GTT' || f2[i] == 'GTC' || f2[i] == 'GTA' || f2[i] == 'GTG') {
		f3='V'
		f4.push(f3)
	} else if(f2[i] == 'TCT' || f2[i] == 'TCC' || f2[i] == 'TCA' || f2[i] == 'TCG') {
		f3='S'
		f4.push(f3)
	} else if(f2[i] == 'CCT' || f2[i] == 'CCC' || f2[i] == 'CCA' || f2[i] == 'CCG') {
		f3='P'
		f4.push(f3)
	} else if(f2[i] == 'ACT' || f2[i] == 'ACC' || f2[i] == 'ACA' || f2[i] == 'ACG') {
		f3='T'
		f4.push(f3)
	} else if(f2[i] == 'GCT' || f2[i] == 'GCC' || f2[i] == 'GCA' || f2[i] == 'GCG') {
		f3='A'
		f4.push(f3)
	} else if(f2[i] == 'TAT' || f2[i] == 'TAC') {
		f3='Y'
		f4.push(f3)
	} else if(f2[i] == 'TAA' || f2[i] == 'TAG' || f2[i] == 'TGA') {
		f3='-'
		f4.push(f3)
	} else if(f2[i] == 'CAT' || f2[i] == 'CAC') {
		f3='H'
		f4.push(f3)
	} else if(f2[i] == 'CAA' || f2[i] == 'CAG') {
		f3='Q'
		f4.push(f3)
	} else if(f2[i] == 'AAT' || f2[i] == 'AAC') {
		f3='N'
		f4.push(f3)
	} else if(f2[i] == 'AAA' || f2[i] == 'AAG') {
		f3='K'
		f4.push(f3)
	} else if(f2[i] == 'GAT' || f2[i] == 'GAC') {
		f3='D'
		f4.push(f3)
	} else if(f2[i] == 'GAA' || f2[i] == 'GAG') {
		f3='E'
		f4.push(f3)
	} else if(f2[i] == 'TGT' || f2[i] == 'TGC') {
		f3='C'
		f4.push(f3)
	} else if(f2[i] == 'TGG') {
		f3='W'
		f4.push(f3)
	} else if(f2[i] == 'CGT' || f2[i] == 'CGC' || f2[i] == 'CGA' || f2[i] == 'CGG') {
		f3='R'
		f4.push(f3)
	} else if(f2[i] == 'AGT' || f2[i] == 'AGC') {
		f3='S'
		f4.push(f3)
	} else if(f2[i] == 'AGA' || f2[i] == 'AGG') {
		f3='R'
		f4.push(f3)
	} else if(f2[i] == 'GGT' || f2[i] == 'GGC' || f2[i] == 'GGA' || f2[i] == 'GGG') {
		f3='G'
		f4.push(f3)
	} else if(f2[i] == 'A' || f2[i] == 'T' || f2[i] == 'G' || f2[i] == 'C' || f2[i] == 'AA' || f2[i] == 'AT' || f2[i] == 'AG' || f2[i] == 'AC' || f2[i] == 'TA' || f2[i] == 'TT' || f2[i] == 'TG' || f2[i] == 'TC' || f2[i] == 'GA' || f2[i] == 'GT' || f2[i] == 'GG' || f2[i] == 'GC' || f2[i] == 'CA' || f2[i] == 'CT' || f2[i] == 'CG' || f2[i] == 'CC'){
		f3=''
	}
	
}


// Forward Frame 1 ORF calculation

var a5 = a4.join("");
var a6=[]
var a7=[]
var a8=[]


if(a4[a4.length-1] == 'F' || a4[a4.length-1] == 'L' || a4[a4.length-1] == 'I' || a4[a4.length-1] == 'V' || a4[a4.length-1] == 'S' || a4[a4.length-1] == 'P' || a4[a4.length-1] == 'T' || a4[a4.length-1] == 'A' || a4[a4.length-1] == 'Y' || a4[a4.length-1] == 'H' || a4[a4.length-1] == 'Q' || a4[a4.length-1] == 'N' || a4[a4.length-1] == 'K' || a4[a4.length-1] == 'D' || a4[a4.length-1] == 'E' || a4[a4.length-1] == 'C' || a4[a4.length-1] == 'W' || a4[a4.length-1] == 'R' || a4[a4.length-1] == 'S' || a4[a4.length-1] == 'G' || a4[a4.length-1] == 'M') {
	a4.push('-')
}

for(var i=0;i<a4.length;i++) {

	if(a4[i]=='M') {
		do {
			a6.push(a4[i])
			i++
		}
		while (a4[i]!='-')
		a7=a6.join("")
		a6=[]
		a8.push(a7)
	}

}

var a9=[]
var a10=[]
var a12=[]
var a13=[]
var a14=[]
var a15=[]

for(i=0;i<a8.length;i++) {
	a9=a8[i].length
	a10.push(a9)
	a12=((a8[i].length) + 1)*3 
	a13.push(a12)	
}

for(var i=0;i<a13.length;i++) {
	if(a13[i]>=75) {
		a14.push(a13[i])
	}
}

for(var i=0;i<a14.length;i++) {
	a15.push(a14[i]/file11.length)
}


// Forward Frame 2 ORF calculation

var b5 = b4.join("");
var b6=[]
var b7=[]
var b8=[]

if(b4[b4.length-1] == 'F' || b4[b4.length-1] == 'L' || b4[b4.length-1] == 'I' || b4[b4.length-1] == 'V' || b4[b4.length-1] == 'S' || b4[b4.length-1] == 'P' || b4[b4.length-1] == 'T' || b4[b4.length-1] == 'A' || b4[b4.length-1] == 'Y' || b4[b4.length-1] == 'H' || b4[b4.length-1] == 'Q' || b4[b4.length-1] == 'N' || b4[b4.length-1] == 'K' || b4[b4.length-1] == 'D' || b4[b4.length-1] == 'E' || b4[b4.length-1] == 'C' || b4[b4.length-1] == 'W' || b4[b4.length-1] == 'R' || b4[b4.length-1] == 'S' || b4[b4.length-1] == 'G' || b4[b4.length-1] == 'M') {
	b4.push('-')
}


for(i=0;i<b4.length;i++) {
	if(b4[i]=='M') {
		do {
			b6.push(b4[i])
			i++
		}
		while (b4[i]!='-')
		b7=b6.join("")
		b6=[]
		b8.push(b7)
	}
	
}

var b9=[]
var b10=[]
var b12=[]
var b13=[]
var b14=[]
var b15=[]

for(i=0;i<b8.length;i++) {
	b9=b8[i].length
	b10.push(b9)
	b12=((b8[i].length) + 1)*3 
	b13.push(b12)	
}

for(var i=0;i<b13.length;i++) {
	if(b13[i]>=75) {
		b14.push(b13[i])
	}
}

for(var i=0;i<b14.length;i++) {
	b15.push(b14[i]/file11.length)
}

// Forward Frame 3 ORF calculation

var c5 = c4.join("");
var c6=[]
var c7=[]
var c8=[]


if(c4[c4.length-1] == 'F' || c4[c4.length-1] == 'L' || c4[c4.length-1] == 'I' || c4[c4.length-1] == 'V' || c4[c4.length-1] == 'S' || c4[c4.length-1] == 'P' || c4[c4.length-1] == 'T' || c4[c4.length-1] == 'A' || c4[c4.length-1] == 'Y' || c4[c4.length-1] == 'H' || c4[c4.length-1] == 'Q' || c4[c4.length-1] == 'N' || c4[c4.length-1] == 'K' || c4[c4.length-1] == 'D' || c4[c4.length-1] == 'E' || c4[c4.length-1] == 'C' || c4[c4.length-1] == 'W' || c4[c4.length-1] == 'R' || c4[c4.length-1] == 'S' || c4[c4.length-1] == 'G' || c4[c4.length-1] == 'M') {
	c4.push('-')
}

for(i=0;i<c4.length;i++) {
	if(c4[i]=='M') {
		do {
			c6.push(c4[i])
			i++
		}
		while (c4[i]!='-')
		c7=c6.join("")
		c6=[]
		c8.push(c7)
	}

}

var c9=[]
var c10=[]
var c12=[]
var c13=[]
var c14=[]
var c15=[]

for(i=0;i<c8.length;i++) {
	c9=c8[i].length
	c10.push(c9)
	c12=((c8[i].length) + 1)*3 
	c13.push(c12)	
}

for(var i=0;i<c13.length;i++) {
	if(c13[i]>=75) {
		c14.push(c13[i])
	}
}

for(var i=0;i<c14.length;i++) {
	c15.push(c14[i]/file11.length)
}

// Reverse Frame 1 ORF calculation

var d5 = d4.join("");
var d6=[]
var d7=[]
var d8=[]

if(d4[d4.length-1] == 'F' || d4[d4.length-1] == 'L' || d4[d4.length-1] == 'I' || d4[d4.length-1] == 'V' || d4[d4.length-1] == 'S' || d4[d4.length-1] == 'P' || d4[d4.length-1] == 'T' || d4[d4.length-1] == 'A' || d4[d4.length-1] == 'Y' || d4[d4.length-1] == 'H' || d4[d4.length-1] == 'Q' || d4[d4.length-1] == 'N' || d4[d4.length-1] == 'K' || d4[d4.length-1] == 'D' || d4[d4.length-1] == 'E' || d4[d4.length-1] == 'C' || d4[d4.length-1] == 'W' || d4[d4.length-1] == 'R' || d4[d4.length-1] == 'S' || d4[d4.length-1] == 'G' || d4[d4.length-1] == 'M') {
	d4.push('-')
}

for(i=0;i<d4.length-1;i++) {
	if(d4[i]=='M') {
		do {
			d6.push(d4[i])
			i++
		}
		while (d4[i]!='-')
		d7=d6.join("")
		d6=[]
		d8.push(d7)
	}
	
}

var d9=[]
var d10=[]
var d12=[]
var d13=[]
var d14=[]
var d15=[]

for(i=0;i<d8.length;i++) {
	d9=d8[i].length
	d10.push(d9)
	d12=((d8[i].length) + 1)*3 
	d13.push(d12)	
}

for(var i=0;i<d13.length;i++) {
	if(d13[i]>=75) {
		d14.push(d13[i])
	}
}

for(var i=0;i<d14.length;i++) {
	d15.push(d14[i]/b.length)
}

// Reverse Frame 2 ORF calculation
var e5 = e4.join("");
var e6=[]
var e7=[]
var e8=[]

if(e4[e4.length-1] == 'F' || e4[e4.length-1] == 'L' || e4[e4.length-1] == 'I' || e4[e4.length-1] == 'V' || e4[e4.length-1] == 'S' || e4[e4.length-1] == 'P' || e4[e4.length-1] == 'T' || e4[e4.length-1] == 'A' || e4[e4.length-1] == 'Y' || e4[e4.length-1] == 'H' || e4[e4.length-1] == 'Q' || e4[e4.length-1] == 'N' || e4[e4.length-1] == 'K' || e4[e4.length-1] == 'D' || e4[e4.length-1] == 'E' || e4[e4.length-1] == 'C' || e4[e4.length-1] == 'W' || e4[e4.length-1] == 'R' || e4[e4.length-1] == 'S' || e4[e4.length-1] == 'G' || e4[e4.length-1] == 'M') {
	e4.push('-')
}


for(i=0;i<e4.length-1;i++) {
	if(e4[i]=='M') {
		do {
			e6.push(e4[i])
			i++
		}
		while (e4[i]!='-')
		e7=e6.join("")
		e6=[]
		e8.push(e7)
	}
	
}

var e9=[]
var e10=[]
var e12=[]
var e13=[]
var e14=[]
var e15=[]

for(i=0;i<e8.length;i++) {
	e9=e8[i].length
	e10.push(e9)
	e12=((e8[i].length) + 1)*3 
	e13.push(e12)		
}

for(var i=0;i<e13.length;i++) {
	if(e13[i]>=75) {
		e14.push(e13[i])
	}
}

for(var i=0;i<e14.length;i++) {
	e15.push(e14[i]/b.length)
}

// Reverse Frame 3 ORF calculation
var f5 = f4.join("");
var f6=[]
var f7=[]
var f8=[]

if(f4[f4.length-1] == 'F' || f4[f4.length-1] == 'L' || f4[f4.length-1] == 'I' || f4[f4.length-1] == 'V' || f4[f4.length-1] == 'S' || f4[f4.length-1] == 'P' || f4[f4.length-1] == 'T' || f4[f4.length-1] == 'A' || f4[f4.length-1] == 'Y' || f4[f4.length-1] == 'H' || f4[f4.length-1] == 'Q' || f4[f4.length-1] == 'N' || f4[f4.length-1] == 'K' || f4[f4.length-1] == 'D' || f4[f4.length-1] == 'E' || f4[f4.length-1] == 'C' || f4[f4.length-1] == 'W' || f4[f4.length-1] == 'R' || f4[f4.length-1] == 'S' || f4[f4.length-1] == 'G' || f4[f4.length-1] == 'M') {
	f4.push('-')
}

for(i=0;i<f4.length-1;i++) {
	if(f4[i]=='M') {
		do {
			f6.push(f4[i])
			i++
		}
		while (f4[i]!='-')
		f7=f6.join("")
		f6=[]
		f8.push(f7)
	}
	
}

var f9=[]
var f10=[]
var f12=[]
var f13=[]
var f14=[]
var f15=[]

for(i=0;i<f8.length;i++) {
	f9=f8[i].length
	f10.push(f9)
	f12=((f8[i].length) + 1)*3 
	f13.push(f12)	
}

for(var i=0;i<f13.length;i++) {
	if(f13[i]>=75) {
		f14.push(f13[i])
	}
}

for(var i=0;i<f14.length;i++) {
	f15.push(f14[i]/b.length)
}





var ab=[]
var abc=[]
var abcd=[]
var abcde=[]
var abcdef=[]

var sum;
var coverage;
var coverage1;

ab=a15.concat(b15)
abc=ab.concat(c15)
abcd=abc.concat(d15)
abcde=abcd.concat(e15)
abcdef=abcde.concat(f15)
function getSum(total, num) {
    return total + num;
}
sum = abcdef.reduce(getSum,0)
coverage=sum/abcdef.length
/*
console.log(sum/abcdef.length)


console.log("Forward strand Frame 1: " + a5)
console.log("ORF array Forward Frame 1: "+a8)
console.log("ORF array length: "+a10)

console.log("Forward strand Frame 2: " + b5)
console.log("ORF array Forward Frame 2: "+b8)
console.log("ORF array length: "+b10)

console.log("Forward strand Frame 3: " + c5)
console.log("ORF array Forward Frame 3: "+c8)
console.log("ORF array length: "+c10)

console.log("Reverse strand Frame 1: " + d5)
console.log("ORF array Reverse Frame 1: "+d8)
console.log("ORF array length: "+d10)

console.log("Reverse strand Frame 2: " + e5)
console.log("ORF array Reverse Frame 2: "+e8)
console.log("ORF array length: "+e10)

console.log("Reverse strand Frame 3: " + f5)
console.log("ORF array Reverse Frame 3: "+f8)
console.log("ORF array length: "+f10)

console.log("a10 for " + i + " " + a10)*/

if(a10 == "") {
} else {
	var a11=a10.indexOf(Math.max.apply(null, a10))
}

if(b10 == ""){
} else {
	var b11=b10.indexOf(Math.max.apply(null, b10))
}

if(c10 == ""){
} else {
	var c11=c10.indexOf(Math.max.apply(null, c10))
}

if(d10 == ""){
} else {
	var d11=d10.indexOf(Math.max.apply(null, d10))
}

if(e10 == "") {
} else {
	var e11=e10.indexOf(Math.max.apply(null, e10))
}	

if(f10 == "") {
} else {
	var f11=f10.indexOf(Math.max.apply(null, f10))
}	


var g1=[]
var g2=[]
var g4=[]

if(a10 == "") {
	var a111=0
} else {
	var a111=a8[a11].length
	var a222=a8[a11]
}

if(b10 == "") {
	var b111=0
} else {
	var b111=b8[b11].length
	var b222=b8[b11]
}

if(c10 == "") {
	var c111=0
} else {
	var c111=c8[c11].length
	var c222=c8[c11]
}

if(d10 == "") {
	var d111=0
} else {
	var d111=d8[d11].length
	var d222=d8[d11]
}

if(e10 == "") {
	var e111=0
} else {
	var e111=e8[e11].length
	var e222=e8[e11]
}

if(f10 == "") {
	var f111=0
} else {
	var f111=f8[f11].length
	var f222=f8[f11]
}

g1.push(a111, b111, c111, d111, e111, f111)

g4.push(a222, b222, c222, d222, e222, f222)

var maxValue = Math.max.apply(null, g1)
var g5=g1.indexOf(maxValue)

g2.push('Forward Frame 1', 'Forward Frame 2', 'Forward Frame 3', 'Reverse Frame 1', 'Reverse Frame 2', 'Reverse Frame 3')
var g3=g1.indexOf(Math.max.apply(null, g1))

//console.log("Max value in sequence-" + i + " is " + Math.max.apply(null, g1) + " in " + g2[g3])

coverage1=Math.max.apply(null, g1)/file11.length

//console.log("ORF coverage in sequence-" + i + " is " + coverage1 + " in " + g2[g3])

var orflength=[]

for(var i=0;i<a13.length;i++) {
	orflength.push(Math.max.apply(null, a13))
}

for(var i=0;i<b13.length;i++) {
	orflength.push(Math.max.apply(null, b13))
}

for(var i=0;i<c13.length;i++) {
	orflength.push(Math.max.apply(null, c13))
}

for(var i=0;i<d13.length;i++) {
	orflength.push(Math.max.apply(null, d13))
}

for(var i=0;i<e13.length;i++) {
	orflength.push(Math.max.apply(null, e13))
}

for(var i=0;i<f13.length;i++) {
	orflength.push(Math.max.apply(null, f13))
}

var unique = orflength.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
})

 
//console.log("ORFLength array: "+unique)

var coverage2 = Math.max.apply(null, unique)/file11.length

var count = (file11.match(/GC/g) || []).length;

h2.push(g2[g3])

h3.push(Math.max.apply(null, g1))

h4.push(g4[g5])

h5.push(coverage)

h6.push(coverage2)

h7.push(file11.length)

h8.push(count)

g1=[]
g4=[]



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
       h6,
       h7,
       h8
    ], {headers: true})
   .pipe(ws);

});

