---
layout: dev/post
tags: expressjs javascript nodejs tools
thumbnail: "/upload/post-thumbnail-nodejs.jpg"
description: "Visual Studio Code has support for JavaScript and out-of-the-box Node.js debugging. Here’s how..."
---

 
![post-image](/upload/post-thumbnail-nodejs.jpg)
 
Visual Studio Code has support for JavaScript and out-of-the-box Node.js debugging. Here’s how.
 

 
## Steps
 
* open project
* install
* start
* stop
* debug mode start
* debug code
* debug mode stop
 
## Open project
 
Start VSC -> File -> Open Folder -> Select Folder
 
![post-image](/upload/171206223013409.png)
 

 
![post-image](/upload/171206223014507.png)
 

 
![post-image](/upload/171206223015421.png)
 

 
## Install
 
View -> Integrated Terminal -> “npm install”
 
![post-image](/upload/171206223016109.png)
 

 
![post-image](/upload/171206223017336.png)
 

 
![post-image](/upload/171206223018269.png)
 

 
## Start
 
Integrated Terminal -> “npm start”
 
Start Chrome -> type “localhost:3000”
 
![post-image](/upload/171206223019126.png)
 

 
![post-image](/upload/171206223019766.png)
 

 
![post-image](/upload/171206223020505.png)
 

 
## Stop
 
Integrated Terminal -> Ctrl+C  -> “Y”+Return
 
![post-image](/upload/171206223020854.png)
 

 
## Debug Mode Start
 
Debug Icon -> Settings -> NodeJS -> launch.json -> Save -> Debug Start Icon
 
launch.json
 
```javascript
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceFolder}/server.js"
        }
    ]
}
```
 
![post-image](/upload/171206223021545.png)
 

 
![post-image](/upload/171206223022300.png)
 

 
![post-image](/upload/171206223023082.png)
 

 
![post-image](/upload/171206223023841.png)
 

 
![post-image](/upload/171206223025241.png)
 

 
 
 
## Debug Code
 
Explorer Icon -> server.js -> add breakpoitn by double-clicking on line 7
 
Open Browser -> refresh (F5)
 
Open VSC -> Hover on source vars & params -> press Debug Continue Icon (F5)
 
![post-image](/upload/171206223026335.png)
 

 
![post-image](/upload/171206223027446.png)
 

 
![post-image](/upload/171206223028388.png)
 

 
![post-image](/upload/171206223029155.png)
 

 
![post-image](/upload/171206223029688.png)
 

 
![post-image](/upload/171206223029948.png)
 

 
![post-image](/upload/171206223031066.png)
 

 
## Debug Mode Stop
 
Debug Stop Icon
 
![post-image](/upload/171206223031912.png)
 

 
## Source on GitHub
 
[https://github.com/DamienFremont/blog/tree/master/20171206-js-node-debug-visualstudiocode](https://github.com/DamienFremont/blog/tree/master/20171206-js-node-debug-visualstudiocode)
https://github.com/DamienFremont/blog/tree/master/20171206-js-node-debug-visualstudiocode
 
## References
 
[https://code.visualstudio.com/docs/nodejs/nodejs-tutorial](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial)
https://code.visualstudio.com/docs/nodejs/nodejs-tutorial
 
 
 
 
## Origin
[https://damienfremont.com/2017/12/06/howto-js-node-debug-visual-studio-code/](https://damienfremont.com/2017/12/06/howto-js-node-debug-visual-studio-code/)
 
