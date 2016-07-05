# TessRO

Summary

Reading MvP announcement and write it on a google spreadsheet.
Will be using Node.Js environment together with open source modules.

A decently trained Tesseract OCR to read the chatbox is needed.

Objective

Project with the objective of registering the time when a MVP dies in a Google Spreadsheet; since TRO 
doesn't provide the time in the chat box, we needed to build something so it helps us hunt MVP's more
efficiently.

Requirements

	a. Optical Character Recognition (OCR)
		1. Tesseract OCR	(Train enough): https://github.com/tesseract-ocr/tesseract
		2. Tesseract for node.js: https://github.com/desmondmorris/node-tesseract
	
	b. Image processing
		1. GraphicsMagick for node: https://github.com/aheckmann/gm
		2. RobotJS: https://github.com/octalmage/robotjs

	c. Screenshot
		1. ScreenCapture: https://github.com/npocmaka/batch.scripts/blob/master/hybrids/.net/c/screenCapture.bat

Installation 

	1. Run screenCapture.bat to take a screenshot of the whole screen and output it in a file called test.tiff
