---
layout: dev/post
tags: unity3d
thumbnail: "/upload/160523003233055.jpg"
description: "This tuturial explains how to build application without using the pro edition of Unity3d editor..."
---




 
![alt text](/upload/160523003233055.jpg)
 
This tuturial explains how to build application without using the pro edition of Unity3d editor, wich integrates buildpipeline functionalities. Simply by using command line script.
 

 
Warning : This tutorial is not useful if you own the Pro Edition of Unity3d, wich already contains a buildpipeline system using Unity3d scriptting (Javascript or CSharp). In this case, go see :
 
[http://docs.unity3d.com/Manual/BuildPlayerPipeline.html](http://docs.unity3d.com/Manual/BuildPlayerPipeline.html)
http://docs.unity3d.com/Manual/BuildPlayerPipeline.html
 
# Step 1 : Create Project
 
So create a new project.
 
![alt text](/upload/160523003230492.jpg)
 

 
![alt text](/upload/160523003230748.jpg)
 

 
Save your project !
 
![alt text](/upload/160523003231028.jpg)
 

 
# Step 2 : Close Unity3d !
 
This an important step because Unity3d only allows a single running instance of Unity3d.
 
![alt text](/upload/160523003231286.jpg)
 

 
## Step 2 : Create Script
 
Create a new file named build.bat at the project root folder, next to Assets folder.
 
![alt text](/upload/160523003231536.jpg)
 

 
build.bat
 
```
"C:\Program Files\Unity\Editor\Unity.exe" -quit -batchmode  -logFile stdout.log -buildWindowsPlayer "builds\build.exe"
```
 
## Details :
 
execute unity3d in batchmode / command line :
 
```
"C:\Program Files\Unity\Editor\Unity.exe" -quit -batchmode
```
 
create a log file containning build console output :
 
```
-logFile stdout.log
```
 
build the gameproject for windows plateforme :
 
```
-buildWindowsPlayer "builds\build.exe"
```
 
# Demo
 
Launch build.bat via command line for console output result, or just click on build.bat.
 
![alt text](/upload/160523003231796.jpg)
 

 
A new window pops.
 
![alt text](/upload/160523003232055.jpg)
 

 
After a while (30 sec), the window closes itself. The build is finished !
 
Go open the newly created build folder.
 
![alt text](/upload/160523003232309.jpg)
 

 
It contains your game executable.
 
Click on build.exe
 
![alt text](/upload/160523003232544.jpg)
 

 
The game launcher appears. Click on Play!
 
![alt text](/upload/160523003232794.jpg)
 

 
Then your game launchs.
 
![alt text](/upload/160523003233055.jpg)
 

 
![alt text](/upload/160523003233309.jpg)
 

 
(it’s an empty scene here)
 
Build console output is in stdout.log file, next to build.bat file.
 
![alt text](/upload/160523003233615.jpg)
 

 
![alt text](/upload/160523003233876.jpg)
 

 
# Error (first use only)
 
Unity3d needs to link your project folder.
 
Then you need to open your project with Unity3d a first time before building it by command line. For duplicate or moved project folder, you’ll need to reopen the folder with unity3d.
 
# Conclusion
 
This approach is more developper friendly than the unity3d IDE. You can use your own text editor like SublimeText and build with an automatic task.
 
Unity3d web site is poorly documented on this usage.
 
# Sources
 
[https://github.com/DamienFremont/damienfremont.com-blog-labs/tree/master/20150625-unity3d-build_command](https://github.com/DamienFremont/damienfremont.com-blog-labs/tree/master/20150625-unity3d-build_command)
https://github.com/DamienFremont/damienfremont.com-blog-labs/tree/master/20150625-unity3d-build_command
 
# References
 
[http://docs.unity3d.com/Manual/CommandLineArguments.html](http://docs.unity3d.com/Manual/CommandLineArguments.html)
http://docs.unity3d.com/Manual/CommandLineArguments.html
 
 
## Origin
[https://damienfremont.com/2015/06/25/how-to-unity3d-command-build-without-build-pipeline/](https://damienfremont.com/2015/06/25/how-to-unity3d-command-build-without-build-pipeline/)
 
