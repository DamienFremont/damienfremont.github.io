---
layout: dev/post
title: "How to Photoshop Script: Export Layers to PNG Files"
tags: assets javascript photoshop tools
thumbnail: "/upload/screenshot006.png"
description: "When you don’t want to do repetitive tasks in Photoshop… This script exports root layers from your current project..."
---

![post-image](/upload/screenshot006.png)

When you don’t want to do repetitive tasks in Photoshop… This script exports root layers from your current project to separate PNG files.

Usage: exporting sketchs to character animation, mock-up, code, etc.

## Scripts

layers-exporter.bat
````bash
"C:\Program Files (x86)\Photoshop\Photoshop.exe" %cd%\layers-exporter.jsx`
````

layers-exporter.jsx
````javascript
var output = $.getenv("USERPROFILE") + "/Documents/";
 
//Get the currently opened Photoshop document
var doc = app.activeDocument;
 
//Show each layer each time and save a snapshot
for (var i = 0; i < doc.layers.length; i++) {
 
  //Hide all the layers
  for (var j = 0; j < doc.layers.length; j++) {
    doc.layers[j].visible = false;
  }
 
  // show layer
  var layerIndex = i;
  doc.layers[layerIndex].visible = true;

  var layerName = doc.layers[layerIndex].name;
  var filename = doc.name;
  filename = filename.slice(0, filename.lastIndexOf(".")); //just add this line to the construction.
 
  // save
  var file = new File(output + filename + "_" + layerName + ".png");
  var saveOptions = new PNGSaveOptions();
  doc.saveAs(file, saveOptions, true, Extension.LOWERCASE);
}
````

## Usage

1.  save these two scipts at the same location on your machine
2.  Open a photoshop file with layers
3.  Execute layers-exporter.bat, from command line or by clicking on it
4.  Get your results from your Documents folder

NOTE: edit output value in layers-exporter.jsx if you want to change the target folder

NOTE: only ‘root’ layers or groups will generate files, you don’t have to worry about a million files from your project tree.

## Example

![post-image](/upload/screenshot000.png)

![post-image](/upload/screenshot002.png)

![post-image](/upload/screenshot003.png)

![post-image](/upload/screenshot005.png)

![post-image](/upload/screenshot006.png)

Source

[https://github.com/DamienFremont/blog/tree/master/20190525-photoshop-script-export-layers-to-png](https://github.com/DamienFremont/blog/tree/master/20190525-photoshop-script-export-layers-to-png)