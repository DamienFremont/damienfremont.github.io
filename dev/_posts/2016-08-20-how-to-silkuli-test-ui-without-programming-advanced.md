---
layout: dev/post
tags: python test
thumbnail: "/upload/20160820-ScreenShot025.png"
description: "This tutorial show how to organize UI tests and reuse most of your existing usecases elements..."
---

![alt text](/upload/20160820-ScreenShot025.png)

This tutorial show how to organize UI tests and reuse most of your existing usecases elements, like comments and screenshots.

Note: see the previous post 'How to Silkuli - Test UI without programming' for a quick start.

https://damienfremont.com/2016/08/19/how-to-silkuli-test-ui-without-programming/

## Demo

![alt text](/upload/demo.gif)

## Steps

We will create a two usecase project

1. Define usecases
2. Create projects
3. Create usecase A test
4. Reuse elements for usecase B
5. Create usecase B test
6. Run tests

### 1. Define usecases

![alt text](/upload/20160820-ScreenShot001.png)

![alt text](/upload/20160820-ScreenShot002.png)

![alt text](/upload/20160820-ScreenShot003.png)

![alt text](/upload/20160820-ScreenShot004.png)

![alt text](/upload/20160820-ScreenShot005.png)

### 2. Create projects

![alt text](/upload/20160820-ScreenShot006.png)

![alt text](/upload/20160820-ScreenShot007.png)

![alt text](/upload/20160820-ScreenShot008.png)

![alt text](/upload/20160820-ScreenShot009.png)

![alt text](/upload/20160820-ScreenShot010.png)

![alt text](/upload/20160820-ScreenShot011.png)

### 3. Create usecase A test

![alt text](/upload/20160820-ScreenShot012.png)

![alt text](/upload/20160820-ScreenShot013.png)

### 4. Reuse elements for usecase B

![alt text](/upload/20160820-ScreenShot014.png)

![alt text](/upload/20160820-ScreenShot015.png)

![alt text](/upload/20160820-ScreenShot016.png)

![alt text](/upload/20160820-ScreenShot017.png)

![alt text](/upload/20160820-ScreenShot018.png)

![alt text](/upload/20160820-ScreenShot019.png)

### 5. Create usecase B test

![alt text](/upload/20160820-ScreenShot020.png)

![alt text](/upload/20160820-ScreenShot021.png)

![alt text](/upload/20160820-ScreenShot022.png)

![alt text](/upload/20160820-ScreenShot023.png)

![alt text](/upload/20160820-ScreenShot024.png)

![alt text](/upload/20160820-ScreenShot025.png)

![alt text](/upload/20160820-ScreenShot026.png)

![alt text](/upload/20160820-ScreenShot027.png)

### 6. Run tests

![alt text](/upload/20160820-ScreenShot028.png)

![alt text](/upload/20160820-ScreenShot029.png)

![alt text](/upload/20160820-ScreenShot030.png)

![alt text](/upload/20160820-ScreenShot031.png)

## Final Word

The element reuse is not a direct reference to the original screenshot. If you change a button, you'll need to update all the usecases.

![alt text](/upload/20160820-ScreenShot032.png)

Next step will be automation with scripts. Like running all tests at once, using properties and 

## Project

https://github.com/DamienFremont/blog/tree/master/20160820-test-silkuli-ide-advanced

## References

http://doc.sikuli.org/keys.html

## Origin

https://damienfremont.com/2016/08/20/how-to-silkuli-test-ui-without-programming-advanced/
