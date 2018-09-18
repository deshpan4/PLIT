var fs = require('fs'); 
var csv = require("fast-csv");
const argv = require('yargs').usage('Usage: $0 --input Input_filename --output1 Output_filename1 --output2 Output_filename2 ')
    .demandOption(['input','output1','output2'])
    .argv;
const spawn = require('child_process').spawn;



var h1=['file']
var h2=['Fickett Score']
var x1=0

var fileName=argv.input
var output1=argv.output1
var output2=argv.output2
var file1 = fs.readFileSync(fileName,'utf8').toString().split("\n");

var ws = fs.createWriteStream(output1);

for(var i=0;i<file1.length+1;i++) {
	var h11='sequence-' + (i+1)
	h1.push(h11)
}

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream(argv.input)
});

lineReader.on('line', function (line) {

x1 = x1+1
process.stdout.clearLine();
process.stdout.cursorTo(0);
process.stdout.write("Finished processing FASTA sequences " + x1);

var file11=line

//	Forward Frame 1
var a1=[]
var a2=[]
var a3=[]
var a4=[]

var b1=[]
var b2=[]
var b3=[]
var b4=[]

var c1=[]
var c2=[]
var c3=[]
var c4=[]

var aArr=[]
var tArr=[]
var gArr=[]
var cArr=[]


for(var i=0;i<file11.length;i+=3) {
	if(file11[i]=='A') {
		a1.push(file11[i])
	}
}

for(var i=0;i<file11.length;i+=3) {
	if(file11[i]=='T') {
		a2.push(file11[i])
	}
}

for(var i=0;i<file11.length;i+=3) {
	if(file11[i]=='G') {
		a3.push(file11[i])
	}
}

for(var i=0;i<file11.length;i+=3) {
	if(file11[i]=='C') {
		a4.push(file11[i])
	}
}

aArr.push(a1.length)
tArr.push(a2.length)
gArr.push(a3.length)
cArr.push(a4.length)


for(var i=1;i<file11.length;i+=3) {
	if(file11[i]=='A') {
		b1.push(file11[i])
	}
}

for(var i=1;i<file11.length;i+=3) {
	if(file11[i]=='T') {
		b2.push(file11[i])
	}
}

for(var i=1;i<file11.length;i+=3) {
	if(file11[i]=='G') {
		b3.push(file11[i])
	}
}

for(var i=1;i<file11.length;i+=3) {
	if(file11[i]=='C') {
		b4.push(file11[i])
	}
}

aArr.push(b1.length)
tArr.push(b2.length)
gArr.push(b3.length)
cArr.push(b4.length)

for(var i=2;i<file11.length;i+=3) {
	if(file11[i]=='A') {
		c1.push(file11[i])
	}
}

for(var i=2;i<file11.length;i+=3) {
	if(file11[i]=='T') {
		c2.push(file11[i])
	}
}

for(var i=2;i<file11.length;i+=3) {
	if(file11[i]=='G') {
		c3.push(file11[i])
	}
}

for(var i=2;i<file11.length;i+=3) {
	if(file11[i]=='C') {
		c4.push(file11[i])
	}
}

aArr.push(c1.length)
tArr.push(c2.length)
gArr.push(c3.length)
cArr.push(c4.length)


var aPos;
var tPos;
var gPos;
var cPos;

aPos = (Math.max.apply(null, aArr)) / (Math.min.apply(null, aArr) + 1)
tPos = (Math.max.apply(null, tArr)) / (Math.min.apply(null, tArr) + 1)
gPos = (Math.max.apply(null, gArr)) / (Math.min.apply(null, gArr) + 1)
cPos = (Math.max.apply(null, cArr)) / (Math.min.apply(null, cArr) + 1)

var aSum = aArr.reduce(add, 0);
var tSum = tArr.reduce(add, 0);
var gSum = gArr.reduce(add, 0);
var cSum = cArr.reduce(add, 0);

function add(a, b) {
    return a + b;
}

var aPer;
aPer = (aSum/file11.length)

var tPer;
tPer = (tSum/file11.length)

var gPer;
gPer = (gSum/file11.length)

var cPer;
cPer = (cSum/file11.length)

var aProbPos
var tProbPos
var gProbPos
var cProbPos

if(aPos >= 0.0 && aPos < 1.1) {
	aProbPos = 0.22 * 0.26
} else if(aPos >= 1.1 && aPos < 1.2) {
	aProbPos = 0.20 * 0.26
} else if(aPos >= 1.2 && aPos < 1.3) {
	aProbPos = 0.34 * 0.26
} else if(aPos >= 1.3 && aPos < 1.4) {
	aProbPos = 0.45 * 0.26
} else if(aPos >= 1.4 && aPos < 1.5) {
	aProbPos = 0.68 * 0.26
} else if(aPos >= 1.5 && aPos < 1.6) {
	aProbPos = 0.58 * 0.26
} else if(aPos >= 1.6 && aPos < 1.7) {
	aProbPos = 0.93 * 0.26
} else if(aPos >= 1.7 && aPos < 1.8) {
	aProbPos = 0.84 * 0.26
} else if(aPos >= 1.8 && aPos < 1.9) {
	aProbPos = 0.68 * 0.26
} else if(aPos >= 1.9) {
	aProbPos = 0.94 * 0.26
}


if(tPos >= 0.0 && tPos < 1.1) {
	tProbPos = 0.09 * 0.33
} else if(tPos >= 1.1 && tPos < 1.2) {
	tProbPos = 0.09 * 0.33
} else if(tPos >= 1.2 && tPos < 1.3) {
	tProbPos = 0.20 * 0.33
} else if(tPos >= 1.3 && tPos < 1.4) {
	tProbPos = 0.54 * 0.33
} else if(tPos >= 1.4 && tPos < 1.5) {
	tProbPos = 0.44 * 0.33
} else if(tPos >= 1.5 && tPos < 1.6) {
	tProbPos = 0.69 * 0.33
} else if(tPos >= 1.6 && tPos < 1.7) {
	tProbPos = 0.68 * 0.33
} else if(tPos >= 1.7 && tPos < 1.8) {
	tProbPos = 0.91 * 0.33
} else if(tPos >= 1.8 && tPos < 1.9) {
	tProbPos = 0.97 * 0.33
} else if(tPos >= 1.9) {
	tProbPos = 0.97 * 0.33
}


if(gPos >= 0.0 && gPos < 1.1) {
	gProbPos = 0.08 * 0.31
} else if(gPos >= 1.1 && gPos < 1.2) {
	gProbPos = 0.08 * 0.31
} else if(gPos >= 1.2 && gPos < 1.3) {
	gProbPos = 0.16 * 0.31
} else if(gPos >= 1.3 && gPos < 1.4) {
	gProbPos = 0.27 * 0.31
} else if(gPos >= 1.4 && gPos < 1.5) {
	gProbPos = 0.48 * 0.31
} else if(gPos >= 1.5 && gPos < 1.6) {
	gProbPos = 0.53 * 0.31
} else if(gPos >= 1.6 && gPos < 1.7) {
	gProbPos = 0.64 * 0.31
} else if(gPos >= 1.7 && gPos < 1.8) {
	gProbPos = 0.74 * 0.31
} else if(gPos >= 1.8 && gPos < 1.9) {
	gProbPos = 0.88 * 0.31
} else if(gPos >= 1.9) {
	gProbPos = 0.90 * 0.31
}


if(cPos >= 0.0 && cPos < 1.1) {
	cProbPos = 0.23 * 0.18
} else if(cPos >= 1.1 && cPos < 1.2) {
	cProbPos = 0.30 * 0.18
} else if(cPos >= 1.2 && cPos < 1.3) {
	cProbPos = 0.33 * 0.18	
} else if(cPos >= 1.3 && cPos < 1.4) {
	cProbPos = 0.51 * 0.18	
} else if(cPos >= 1.4 && cPos < 1.5) {
	cProbPos = 0.48 * 0.18	
} else if(cPos >= 1.5 && cPos < 1.6) {
	cProbPos = 0.66 * 0.18	
} else if(cPos >= 1.6 && cPos < 1.7) {
	cProbPos = 0.81 * 0.18	
} else if(cPos >= 1.7 && cPos < 1.8) {
	cProbPos = 0.70 * 0.18	
} else if(cPos >= 1.8 && cPos < 1.9) {
	cProbPos = 0.70 * 0.18	
} else if(cPos >= 1.9) {
	cProbPos = 0.80 * 0.18	
}


var aProbCont
var tProbCont
var gProbCont
var cProbCont

if(aPer >= 0.00 && aPer < 0.17) {
	aProbCont = 0.21 * 0.11
} else if(aPer >= 0.17 && aPer < 0.19) {
	aProbCont = 0.81 * 0.11
} else if(aPer >= 0.19 && aPer < 0.21) {
	aProbCont = 0.65 * 0.11
} else if(aPer >= 0.21 && aPer < 0.23) {
	aProbCont = 0.67 * 0.11
} else if(aPer >= 0.23 && aPer < 0.25) {
	aProbCont = 0.49 * 0.11
} else if(aPer >= 0.25 && aPer < 0.27) {
	aProbCont = 0.62 * 0.11
} else if(aPer >= 0.27 && aPer < 0.29) {
	aProbCont = 0.55 * 0.11
} else if(aPer >= 0.29 && aPer < 0.31) {
	aProbCont = 0.44 * 0.11
} else if(aPer >= 0.31 && aPer < 0.33) {
	aProbCont = 0.49 * 0.11
} else if(aPer >= 0.33 && aPer <= 0.99) {
	aProbCont = 0.28 * 0.11
}


if(tPer >= 0.00 && tPer < 0.17) {
	tProbCont = 0.58 * 0.14
} else if(tPer >= 0.17 && tPer < 0.19) {
	tProbCont = 0.51 * 0.14
} else if(tPer >= 0.19 && tPer < 0.21) {
	tProbCont = 0.69 * 0.14
} else if(tPer >= 0.21 && tPer < 0.23) {
	tProbCont = 0.56 * 0.14
} else if(tPer >= 0.23 && tPer < 0.25) {
	tProbCont = 0.75 * 0.14
} else if(tPer >= 0.25 && tPer < 0.27) {
	tProbCont = 0.55 * 0.14
} else if(tPer >= 0.27 && tPer < 0.29) {
	tProbCont = 0.40 * 0.14
} else if(tPer >= 0.29 && tPer < 0.31) {
	tProbCont = 0.39 * 0.14
} else if(tPer >= 0.31 && tPer < 0.33) {
	tProbCont = 0.24 * 0.14
} else if(tPer >= 0.33 && tPer <= 0.99) {
	tProbCont = 0.28 * 0.14
}


if(gPer >= 0.00 && gPer < 0.17) {
	gProbCont = 0.29 * 0.15
} else if(gPer >= 0.17 && gPer < 0.19) {
	gProbCont = 0.33 * 0.15
} else if(gPer >= 0.19 && gPer < 0.21) {
	gProbCont = 0.41 * 0.15
} else if(gPer >= 0.21 && gPer < 0.23) {
	gProbCont = 0.41 * 0.15
} else if(gPer >= 0.23 && gPer < 0.25) {
	gProbCont = 0.73 * 0.15
} else if(gPer >= 0.25 && gPer < 0.27) {
	gProbCont = 0.64 * 0.15
} else if(gPer >= 0.27 && gPer < 0.29) {
	gProbCont = 0.64 * 0.15
} else if(gPer >= 0.29 && gPer < 0.31) {
	gProbCont = 0.47 * 0.15
} else if(gPer >= 0.31 && gPer < 0.33) {
	gProbCont = 0.54 * 0.15
} else if(gPer >= 0.33 && gPer <= 0.99) {
	gProbCont = 0.40 * 0.15
}


if(cPer >= 0.00 && cPer < 0.17) {
	cProbCont = 0.31 * 0.12
} else if(cPer >= 0.17 && cPer < 0.19) {
	cProbCont = 0.39 * 0.12
} else if(cPer >= 0.19 && cPer < 0.21) {
	cProbCont = 0.44 * 0.12	
} else if(cPer >= 0.21 && cPer < 0.23) {
	cProbCont = 0.43 * 0.12	
} else if(cPer >= 0.23 && cPer < 0.25) {
	cProbCont = 0.59 * 0.12	
} else if(cPer >= 0.25 && cPer < 0.27) {
	cProbCont = 0.59 * 0.12	
} else if(cPer >= 0.27 && cPer < 0.29) {
	cProbCont = 0.64 * 0.12	
} else if(cPer >= 0.29 && cPer < 0.31) {
	cProbCont = 0.51 * 0.12	
} else if(cPer >= 0.31 && cPer < 0.33) {
	cProbCont = 0.64 * 0.12	
} else if(cPer >= 0.33 && cPer <= 0.99) {
	cProbCont = 0.82 * 0.12	
}

var fickettScore=aProbPos+tProbPos+gProbPos+cProbPos+aProbCont+tProbCont+gProbCont+cProbCont

//console.log(aProbPos+" "+aProbCont)


//console.log("Fickett Score: "+fickettScore.toFixed(4))

h2.push(fickettScore.toFixed(4))
//console.log("************************************************")

});

lineReader.on('close', function (line) {
	process.stdout.write("\n");
	csv
   .write([
       h1,
       h2
    ], {headers: true})
   .pipe(ws);	
const ls = spawn('bash', ['transpose1.sh',''+output1,''+output2]);
});