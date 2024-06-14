---
layout: dev/post
tags: csharp unity3d tools
thumbnail: "/upload/170603170836847.png"
description: "In this tutorial, you’ll see a project configured with VisualStudio. And how to run and debug it..."
---

 
![post-image](/upload/170603170836847.png)
 
In this tutorial, you’ll see a project configured with VisualStudio. And how to run and debug it.
 

 
 

 
## Steps
 
* Open the ‘Example’ project
* Choose a Script Editor
* Add breakpoint in source code
* Attach Script Editor to Unity3D
* Debug
 
## 1. Open the ‘Example’ project
 
In Unity3D:
 
* Projects > Open > ‘Example’ > (wait) > Open Scene > ‘Sample Scenes Scenes/car.unity’
* Edit > Play > (test it) > Play (or click Play button, or press Ctrl+P)
 
![post-image](/upload/170603170837836.png)
 

 
![post-image](/upload/170603170838032.png)
 

 
![post-image](/upload/170603170838087.png)
 

 
![post-image](/upload/170603170838274.png)
 

 
![post-image](/upload/170603170838627.png)
 

 
![post-image](/upload/170603170838718.png)
 

 
![post-image](/upload/170603170838874.png)
 

 
![post-image](/upload/170603170838973.png)
 

 
## 2. Choose a Script Editor
 
In Unity3d:
 
* Edit > Preferences > External Tools > ExternalScriptEditor: ‘MonoDevelop’
* Assets > Open C# Project
 
![post-image](/upload/170603170839149.png)
 

 
![post-image](/upload/170603170839443.png)
 

 
![post-image](/upload/170603170839718.png)
 

 
![post-image](/upload/170603170840077.png)
 

 
## 3. Add Breakpoint in source code
 
In VisualStudio:
 
* Open ‘SampleScenes/Menu/Scripts/MenuSceneLoader.cs’
* Add a breakpoint to line 14
 
![post-image](/upload/170603170840619.png)
 

 
## 4. Attach Script Editor to Unity3D
 
In VisualStudio:
 
* Click the little show button next to ‘Attach to Unity’ > Select ‘Attach to Unity and Play’
 
![post-image](/upload/170603170841237.png)
 

 
## 5. Debug
 
In VisualStudio:
 
* Click ‘Attach to Unity and Play’
* (it’s in pause now, stopped at the breakpoint line)
* Click Continue (or press F5)
 
In Unity3d:
 
* (play with it)
 
In VisualStudio:
 
* Click Stop (or press Shift+F5)
 
![post-image](/upload/170603170841488.png)
 

 
![post-image](/upload/170603170841654.png)
 

 
![post-image](/upload/170603170842494.png)
 

 
![post-image](/upload/170603170842652.png)
 

 
![post-image](/upload/170603170843678.png)
 

 
## Conclusion
 
Pros: More productive than MonoDevelop  (you don’t have to switch beetwen Editor and Unity3D to run a debug). Dark Them is nice too!
 
![post-image](/upload/170603170843876.png)
 
Cons: More heavy on CPU/RAM than MonoDevelop. And it’s a Microsoft product
 
 
 
Here is the same project opened on VisualStudio, MonoDevelop and a text Editor.
 
![post-image](/upload/170603170844000.png)
 

 
 
 
## Source
 
[https://github.com/DamienFremont/damienfremont.com-blog-labs/tree/master/20170603-unity3d-use-visualstudio-script-editor-and-debug/](https://github.com/DamienFremont/damienfremont.com-blog-labs/tree/master/20170603-unity3d-use-visualstudio-script-editor-and-debug/)
https://github.com/DamienFremont/damienfremont.com-blog-labs/tree/master/20170603-unity3d-use-visualstudio-script-editor-and-debug/
 
## References
 
[https://unity3d.com/fr/learn/tutorials/topics/scripting/debugging-unity-games-visual-studio](https://unity3d.com/fr/learn/tutorials/topics/scripting/debugging-unity-games-visual-studio)
https://unity3d.com/fr/learn/tutorials/topics/scripting/debugging-unity-games-visual-studio
 
 
## Origin
[https://damienfremont.com/2017/06/03/how-to-unity3d-use-visualstudio-script-editor-and-debug-project/](https://damienfremont.com/2017/06/03/how-to-unity3d-use-visualstudio-script-editor-and-debug-project/)
 
