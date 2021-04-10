---
title: PHP自动加载机制
date: 2021-02-23
tags:
 - 自动加载
categories:
 - PHP
---

类的载入共经历了三个阶段：

- 第一阶段是面向过程式的做法，整个项目里到处都是include或require

- 第二阶段是魔术方法 __autoload ，当new一个类的时候，如果类不存在，则会调用此方法传入类名。autoload机制可以使得PHP程序在使用类时才自动包含文件，而不是一开始就将所有的类文件全部包含，这就是自动加载，

​       问题：如今的项目越做越大，多人开发最终整合，甚至一个项目使用多个框架，这样就导致出现多个 __autoload 函数，函数名报错，函数内容不兼容。

- 第三阶段是目前的做法，PHP推出了spl_autoload_register方法，该方法可以注册一个autoload，并且可以多次注册



详细参考：https://www.cnblogs.com/fengyumeng/p/7749988.html