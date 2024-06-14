---
layout: dev/post
tags: bdd cucumber java junit test
thumbnail: "/upload/160523003309729.jpg"
description: "It is often useful to show the results of our tests to others people who are not developers, like managers or executive..."
---
 
![alt text](/upload/160523003309729.jpg)
 
 
It is often useful to show the results of our tests to others people who are not developers, like managers or executive. This tutorial shows how to integrate a Cucumber reporting a Java plugin in Maven project. The result is a simple web page, which does not require a special tool to be read.
 

 
[How to Cucumber : Test Report Plugin 2 with Maven and Java](https://damienfremont.com/2016/05/09/how-to-cucumber-test-report-plugin-2-with-maven-and-java/)
EDIT: this post is deprecated. There is a better version of Cucumber Report plugin. Please read the new post here:
How to Cucumber : Test Report Plugin 2 with Maven and Java
 
This tutorial will cover 3 reports plugins : JSON, HTML Pretty and HTML Reports.
 
![alt text](/upload/160523003309374.jpg)
 
![alt text](/upload/160523003309396.jpg)
 
![alt text](/upload/160523003309419.jpg)
 
  
 
# Native JSON Result
 
![alt text](/upload/160523003309447.jpg)
 

 
## How to:
 
pom.xml
 
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.damienfremont.blog</groupId>
    <artifactId>20150730-test-cucumber_plugin_reporting</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <packaging>jar</packaging>
    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>info.cukes</groupId>
            <artifactId>cucumber-junit</artifactId>
            <version>1.2.3</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>info.cukes</groupId>
            <artifactId>cucumber-java8</artifactId>
            <version>1.2.3</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```
 
RunBDDTest.java
 
```java
@RunWith(Cucumber.class)
@CucumberOptions(strict = false, features = &quot;features&quot;, format = { &quot;pretty&quot;,
        &quot;json:target/cucumber.json&quot; }, tags = { &quot;~@ignore&quot; })
public class RunBDDTest {
 
}
```
 
## Demo:
 
Launch with JUnit or
 
```
&gt;mvn test
```
 
The result is at /target/cucumber.json
 
![alt text](/upload/160523003309614.jpg)
 

 
# Native HTML Plugin
 
![alt text](/upload/160523003309645.jpg)
 

 
## How to:
 
RunBDDTest.java
 
```java
@RunWith(Cucumber.class)
@CucumberOptions(strict = false, features = &quot;features&quot;, format = { &quot;pretty&quot;,
        &quot;html:target/site/cucumber-pretty&quot;,
        &quot;json:target/cucumber.json&quot; }, tags = { &quot;~@ignore&quot; })
public class RunBDDTest {
 
}
```
 
## Demo:
 
Launch with JUnit or
 
```
&gt;mvn test
```
 
The result is at /target/site/cucumber-pretty/index.html
 
![alt text](/upload/160523003309700.jpg)
 

 
# Cucumber-Reports HTML Plugin
 
![alt text](/upload/160523003309729.jpg)
 

 
![alt text](/upload/160523003309760.jpg)
 

 
## How to:
 
pom.xml
 
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.damienfremont.blog</groupId>
    <artifactId>20150730-test-cucumber_plugin_reporting</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <packaging>jar</packaging>
    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>info.cukes</groupId>
            <artifactId>cucumber-junit</artifactId>
            <version>1.2.3</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>info.cukes</groupId>
            <artifactId>cucumber-java8</artifactId>
            <version>1.2.3</version>
            <scope>test</scope>
        </dependency>
  
        <!-- REPORTING -->
        <dependency>
            <groupId>com.googlecode.totallylazy</groupId>
            <artifactId>totallylazy</artifactId>
            <version>1.20</version>
            <scope>system</scope>
            <systemPath>${project.basedir}/lib/totallylazy-1.20.jar</systemPath>
        </dependency>
        <dependency>
            <groupId>net.masterthought</groupId>
            <artifactId>cucumber-reporting</artifactId>
            <version>0.0.24</version>
        </dependency>
  
    </dependencies>
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.3</version>
                <configuration>
                    <source>1.8</source>
                    <target>1.8</target>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>2.18.1</version>
                <configuration>
                    <testFailureIgnore>true</testFailureIgnore>
                    <includes>
                        <exclude>**/*BDDTest.java</exclude>
                    </includes>
                </configuration>
            </plugin>
            <plugin>
                <groupId>net.masterthought</groupId>
                <artifactId>maven-cucumber-reporting</artifactId>
                <version>0.0.5</version>
                <dependencies>
                    <dependency>
                        <groupId>com.googlecode.totallylazy</groupId>
                        <artifactId>totallylazy</artifactId>
                        <version>991</version>
                        <scope>system</scope>
                        <systemPath>${project.basedir}/lib/totallylazy-991.jar</systemPath>
                    </dependency>
                </dependencies>
                <executions>
                    <execution>
                        <id>execution</id>
                        <phase>verify</phase>
                        <goals>
                            <goal>generate</goal>
                        </goals>
                        <configuration>
                            <projectName>cucumber-jvm-example</projectName>
                            <outputDirectory>${project.build.directory}/site/cucumber-reports</outputDirectory>
                            <cucumberOutput>${project.build.directory}/cucumber.json</cucumberOutput>
                            <enableFlashCharts>false</enableFlashCharts>
                            <skippedFails>true</skippedFails>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
  
        </plugins>
    </build>
</project>
```
 
And two libs (external to Maven repositories)
 
[https://code.google.com/p/totallylazy/downloads/list](https://code.google.com/p/totallylazy/downloads/list)
https://code.google.com/p/totallylazy/downloads/list
 
![alt text](/upload/160523003310048.jpg)
 

 
RunBDDTest.java
 
```java
@RunWith(Cucumber.class)
@CucumberOptions(strict = false, features = &quot;features&quot;, format = { &quot;pretty&quot;,
        &quot;html:target/site/cucumber-pretty&quot;,
        &quot;json:target/cucumber.json&quot; }, tags = { &quot;~@ignore&quot; })
public class RunBDDTest {
 
}
```
 
## Demo:
 
Launch with
 
```
mvn clean install
```
 
The result is at /target/site/cucumber-reports/feature-overview.html
 
![alt text](/upload/160523003310105.jpg)
 

 
# Conclusion
 
JSON is OK for integration with other tools (jenkins plugin, reports, etc).
 
Pretty HTML is OK during development phase (like a JUnit or Surefire report for versionning).
 
Cucumber-Reports is good for reporting outside of the dev team (like managers).
 
# Source
 
[https://github.com/DamienFremont/damienfremont.com-blog-labs/tree/master/20150730-test-cucumber_plugin_reporting](https://github.com/DamienFremont/damienfremont.com-blog-labs/tree/master/20150730-test-cucumber_plugin_reporting)
https://github.com/DamienFremont/damienfremont.com-blog-labs/tree/master/20150730-test-cucumber_plugin_reporting
 
# References
 
[https://cucumber.io/docs/reference/jvm](https://cucumber.io/docs/reference/jvm)
https://cucumber.io/docs/reference/jvm
 
[https://github.com/masterthought/cucumber-reporting](https://github.com/masterthought/cucumber-reporting)
https://github.com/masterthought/cucumber-reporting
 
[http://www.masterthought.net/section/cucumber-reporting](http://www.masterthought.net/section/cucumber-reporting)
http://www.masterthought.net/section/cucumber-reporting
 
 
## Origin
[https://damienfremont.com/2015/07/30/how-to-cucumber-test-reporting-plugin-with-maven-and-java/](https://damienfremont.com/2015/07/30/how-to-cucumber-test-reporting-plugin-with-maven-and-java/)
 
