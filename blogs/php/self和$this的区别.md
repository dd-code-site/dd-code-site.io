---
title: self和$this的区别
date: 2021-02-23
tags:
 - self
 - $this
categories:
 - PHP
---

最主要的区别是self代表的是类, $this代表的是对象

静态成员是给类调用的, 不是给 $this 调用的

类外部：访问const(常量)或static(静态)修饰的成员, 必须使用 :: 操作符, 除此之外的成员必须使用操作符 ->

类内部：访问const(常量)或static(静态)修饰的成员, 必须使用 self:: 操作符, 除此之外的成员必须使用操作符 $this->

```php
<?php


class Animal
{
    public $name = 'Animal';
    public static $age = 10;


    public function myPrint()
    {
// Animal
        echo $this->name;
// 10
        echo self::$age;
// 10 特殊用法, 允许使用 $this::$age 替代 self::$age
        echo $this::$age;
    }
}


// 类的外部访问
// 10
echo Animal::$age;
$animal = new Animal;
// Animal
echo $animal->name;


// 类的内部访问
// Animal 10 10
$animal->myPrint();
```

