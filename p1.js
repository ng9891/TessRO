/*
David Ng - P1 - RO-MVP

	Project with the objective of registering the time when a MVP dies in a Google Spreadsheet; since TRO 
doesn't provide the time in the chat box, we needed to build something so it helps us hunt MVP's more
efficiently.

Requirements:
	a. Optical Character Recognition (OCR)
		1. Tesseract OCR	(Train enough): https://github.com/tesseract-ocr/tesseract
		2. Tesseract for node.js: https://github.com/desmondmorris/node-tesseract
		
	b. Image processing
		1. GraphicsMagick for node: https://github.com/aheckmann/gm
		2. RobotJS: https://github.com/octalmage/robotjs
		
	c. Screenshot
		1. ScreenCapture: https://github.com/npocmaka/batch.scripts/blob/master/hybrids/.net/c/screenCapture.bat
*/

/*
Run screenCapture.bat to take a screenshot of the whole screen and output it in a file called test.tiff

*/
function screenshot(){
	const exec = require('child_process').exec;
	exec('screenCapture.bat test.png', (error, stdout, stderr) => {
		if (error) {
			console.error(`exec error: ${error}`);
			return;
		}
		else{
			console.log(`stdout: ${stdout}`);
			//resize();
		}	
	});
}

/*
Not working yet
*/
function resize(){
	var fs = require('fs');
	var gm = require('gm');
	
	gm('11.tif')				//Input
	.resize(240, 240, '!')
	.write('test2.tif', function (err) {		//Output
		if (!err) console.log('done');
		else {
			console.log ('there is an error');
			//tess();
		}
	});
}

/*
Tesseract OCR should be train fairly enough.
*/
function tess(){
	var tesseract = require('node-tesseract');

	tesseract.process('11.tif',function(err, text) { 	//Input
		if(err) {
			console.error(err);
		} else {
			console.log(text);
			var word = text; //Contains the image messages.
			
			//	-	What to do with the Text?												-	//
			//	-	Probably interpret the text using the spreadsheet as comparison			-	//
			//	-	Get current time and update spreadsheet to respective MVP				-	//
		}
	});
}

//screenshot();
resize();
//tess();