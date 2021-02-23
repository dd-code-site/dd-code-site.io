---
title:PHP 中self、static、$this的区别&后期静态绑定详解
date: 2021-02-23
tags:
 - self
 - static
 - this
categories:
 - 面试
---

为了更好地理解 self、static 和 $this 的区别，先来看一个示例：

```php
<?php
class A {

    protected $name = 'A';
    static $alias = 'a';
    const HASH = 'md5';

    public function dd() {
        echo $this->name; echo '--';
        echo static::$alias; echo '--';     // 后期静态绑定
        echo static::HASH; echo '--';     // 后期静态绑定
        echo self::$alias; echo '--';
        echo self::HASH; echo '--';

        var_dump(new self); echo '--';
        var_dump($this); echo '--';
        var_dump(new static); echo '<br>';   // 后期静态绑定
    }

    public static function who() {
        echo __CLASS__;
        echo ' [ This is A ]'; echo '<br>';
    }

    public static function test() {
        self::who();
    }

    public static function test2() {
        static::who();  // 后期静态绑定
    }

    public static function getInstance() {
        var_dump(new self); echo '--';
        var_dump(new static); echo '<br>';  // 后期静态绑定
    }
}

class B extends A {
    protected $name = 'B';
    static $alias = 'b';
    const HASH = 'sha1';

    public static function who() {
        echo __CLASS__;
        echo ' [ This is B ]'; echo '<br>';
    }
}

class C extends B {
    public static function who() {
        echo __CLASS__;
        echo ' [ This is C]'; echo '<br>';
    }
}


(new A)->dd();  // A--a--md5--a--md5--object(A)#2 (1) { ["name":protected]=> string(1) "A" } --object(A)#1 (1) { ["name":protected]=> string(1) "A" } --object(A)#2 (1) { ["name":protected]=> string(1) "A" }
(new B)->dd();  // B--b--sha1--a--md5--object(A)#2 (1) { ["name":protected]=> string(1) "A" } --object(B)#1 (1) { ["name":protected]=> string(1) "B" } --object(B)#2 (1) { ["name":protected]=> string(1) "B" }

A::who();  // A [ This is A ]
B::who();  // B [ This is B ]

A::test();  // A [ This is A ]
B::test();  // A [ This is A ]

A::test2(); // A [ This is A ]
B::test2(); // B [ This is B ]
C::test2(); // C [ This is C]

A::getInstance();   //object(A)#1 (1) { ["name":protected]=> string(1) "A" } --object(A)#1 (1) { ["name":protected]=> string(1) "A" }
B::getInstance();   //object(A)#1 (1) { ["name":protected]=> string(1) "A" } --object(B)#1 (1) { ["name":protected]=> string(1) "B" }
```

**总结说明**

- self 和 __CLASS__，都是对当前类的静态引用，取决于定义当前方法所在的类。也就是说，self 写在哪个类里面， 它引用的就是谁。
- $this 指向的是实际调用时的对象，也就是说，实际运行过程中，谁调用了类的属性或方法，$this 指向的就是哪个对象。但 $this 不能访问类的静态属性和常量，且 $this 不能存在于静态方法中。
- static 关键字除了可以声明类的静态成员（属性和方法）外，还有一个非常重要的作用就是后期静态绑定。

- self 可以用于访问类的静态属性、静态方法和常量，但 self 指向的是当前定义所在的类，这是 self 的限制。

- $this 指向的对象所属的类和 static 指向的类相同。

- static 可以用于静态或非静态方法中，也可以访问类的静态属性、静态方法、常量和非静态方法，但不能访问非静态属性。

- 静态调用时，static 指向的是实际调用时的类；非静态调用时，static 指向的是实际调用时的对象所属的类。

## **后期静态绑定**

后期静态绑定（也叫延迟静态绑定），可用于在继承范围内引用静态调用的类，也就是代码运行时最初调用的类。

后期静态绑定本想通过引入一个新的关键字来表示，但最终还是沿用了 static 关键字。

### 工作原理

确切地说，static 后期静态绑定的工作原理是存储了上一个非转发调用（non-forwarding call）的类名。

当进行静态方法调用时，该类名（static指向的类名）为明确指定的那个（通常是 :: 运算符的左侧部分），即实际调用时的类。

如上述示例中的：

```
A::test2(); 
B::test2();
```

**static 和 self 的区别：**

self 可以用于访问类的静态属性、静态方法和常量，但 self 指向的是当前定义所在的类，这是 self 的限制。

static 也可以用于访问类的静态属性、静态方法和常量，static 指向的是实际调用时的类。

当进行非静态方法调用时，该类名（static指向的类名）为该对象所属的类，即实际调用时的对象所属的类。

如上述示例中的：

```php
(new A)->dd(); 
(new B)->dd();
```

static 和 $this 有点类似，但又有区别：

- $this 指向的对象所属的类和 static 指向的类相同
- $this 不能用于静态方法中，也不能访问类的静态属性和常量
- $this 指向的是实际调用的对象
- static 可以用于静态或非静态方法中，也可以访问类的静态属性、静态方法、常量和非静态方法，但不能访问非静态属性
- static 指向的是实际调用时的对象所属的类

#### 转发调用（forwarding call）

所谓的转发调用（forwarding call）指的是通过以下几种方式进行的静态调用：self::，parent::，static:: 以及 forward_static_call() 。

可用 get_called_class() 函数来获取被调用的方法所在的类名。

以下四种形式的调用，都是转发调用：

```
self::
parent::
static::
forward_static_call()
```

除此之外的调用，就是非转发调用。

#### 非转发调用（non-forwarding call）

后期静态绑定的工作原理是存储了上一个非转发调用（non-forwarding call）的类名。

通过具体的类名或具体的对象进行的调用都是非转发调用。

比如：

```php
A::test2(); 
B::test2(); 

(new A)->dd(); 
(new B)->dd();
```

### **注意事项**

#### 非静态环境下的私有方法的查找顺序。

在非静态环境下，在类的非静态方法中，使用 $this 和 static 调用类的私有方法时，执行方式有所不同。

- $this 会优先寻找所在定义范围（父类）中的私有方法，如果存在就调用

- static 是先到它指向的类（子类）中寻找私有方法，如果找到了就会报错，因为私有方法只能在它所定义的类内部调用；如果没找到，再去所在定义范围（父类）中寻找该私有方法，如果存在就调用

具体来说，$this 会先到所在定义范围内寻找私有方法，再到它指向的对象所属的类中寻找私有方法，然后寻找公有方法，最后到所在定义范围内寻找公共方法。只要找到了匹配的方法，就调用，并停止查找。

而 static 则是先到它指向的类中寻找私有方法，再寻找共有方法；然后到所在定义范围内寻找私有方法，再寻找共有方法。只要找到了匹配的方法，就调用，并停止查找。

下面是一个例子：

```php
<?php
 class  A  {
    private function  foo () {
        var_dump($this); echo '--';
        var_dump(new static); echo '--';

        echo __CLASS__; echo '--';
        echo get_called_class();
        echo '<br>';
    }

    public function  test () {
        $this -> foo ();
        static:: foo ();
        echo '<br>';
    }
}

class  B  extends  A  { }

class  C  extends  A  {
    private function foo () {
        echo 'this is C';
    }
}

(new  B())->test();
(new  C())->test();
```

输出结果为：

```php
object(B)#1 (0) { } --object(B)#2 (0) { } --A--B
object(B)#1 (0) { } --object(B)#2 (0) { } --A--B

object(C)#1 (0) { } --object(C)#2 (0) { } --A--C

Fatal error: Uncaught Error: Call to private method C::foo() from context 'A'
```

#### 关于后期静态绑定的解析

后期静态绑定的解析会一直到取得一个完全解析了的静态调用为止。如果静态调用使用了 parent:: 或者 self:: 等转发调用的形式，将会转发调用信息。

```php
<?php
class  A  {
    public static function  foo () {
        static:: who ();
    }

    public static function  who () {
        echo  __CLASS__ . "\n" ;
    }
}

class  B  extends  A  {
    public static function  test () {
        A :: foo ();
        parent :: foo ();
        self :: foo ();
        static::foo();
        forward_static_call(['A', 'foo']);
        echo '<br>';
    }

    public static function  who () {
        echo  __CLASS__ . "\n" ;
    }
}

class  C  extends  B  {
    public static function  who () {
        echo  __CLASS__ . "\n" ;
    }

    public static function test2() {
        self::test();
    }
}

class  D  extends  C  {
    public static function  who () {
        echo  __CLASS__ . "\n" ;
    }
}

B::foo();
B::test();

C::foo();
C::test();

D::foo();
D::test2();
```

以上的输出结果为：

```php
B A B B B B 
C A C C C C 
D A D D D D
```

static 后期静态绑定的工作原理是存储了上一个非转发调用（non-forwarding call）的类名。请记住这句话。

下面的例子是非转发调用。

```php
A::foo();  // 输出 A

B::foo();   // 输出 B

C::foo();   // 输出 C
```

后期静态绑定 static ，是定义在了 foo() 方法中，哪个类通过非转发调用的形式调用 foo() 方法， foo() 方法中的 static 指向的就是哪个类。

但是，如果通过转发调用的形式，调用 foo() 方法，如：

```php
parent :: foo ();
self :: foo ();
static::foo();
forward_static_call(['A', 'foo']);
```

那么，就以转发调用代码所在的方法 test() 为准，哪个类通过非转发调用的形式调用 test() 方法， foo() 方法中的 static 指向的就是哪个类。

假如调用 test() 方法时，也采用了转发调用的形式，如：

```php
public static function test2() {
    self::test();
}
```

那么，就以 test2() 方法为准 ... 依次类推。

也就是说，在使用了后期静态绑定的基类中，后期静态绑定所在的方法如果被转发调用，则 static 的指向，会一直向上追溯，直到遇到非转发调用的形式。