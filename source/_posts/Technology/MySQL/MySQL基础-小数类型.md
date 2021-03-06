---
title: MySQL基础-小数类型
categories:
  - 技术开发
  - 数据库
  - MySQL
abbrlink: 1724192415
---

MySQL 中使用浮点数和定点数来表示小数。

浮点类型有两种，分别是单精度浮点数 `float` 和双精度浮点数 `double ` ；定点类型只有一种，就是 `decimal` 。

| 类型名称            | 说明               | 存储需求   |
| ------------------- | ------------------ | ---------- |
| FLOAT               | 单精度浮点数       | 4 个字节   |
| DOUBLE              | 双精度浮点数       | 8 个字节   |
| DECIMAL (M, D)，DEC | 压缩的“严格”定点数 | M+2 个字节 |

`decimal` 类型不同于 `float` 和 `double `。`double ` 实际上是以字符串的形式存放的，`decimal` 可能的最大取值范围与 `double ` 相同，但是有效的取值范围由 `M` 和 `D` 决定。如果改变 `M` 而固定 `D`，则取值范围将随 `M` 的变大而变大。

从上表中可以看到，`decimal` 的存储空间并不是固定的，而由精度值 `M` 决定，占用 `M+2` 个字节。

`float` 类型的取值范围如下：

- 有符号的取值范围：`-3.402823466E+38 ～ -1.175494351E-38`。
- 无符号的取值范围：`0 和 -1.175494351E-38 ～ -3.402823466E+38`。

`double ` 类型的取值范围如下：

- 有符号的取值范围：`-1.7976931348623157E+308 ～ -2.2250738585072014E-308`。
- 无符号的取值范围：`0 和 -2.2250738585072014E-308 ～ -1.7976931348623157E+308`。

> 提示：不论是定点还是浮点类型，如果用户指定的精度超出精度范围，则会四舍五入进行处理。

`float` 和 `double` 在不指定精度时，默认会按照实际的精度（由计算机硬件和操作系统决定），`decimal` 如果不指定精度，默认为  `（10，0）`。

浮点数相对于定点数的优点是在长度一定的情况下，浮点数能够表示更大的范围；缺点是会引起精度问题。

> 在 MySQL 中，定点数以字符串形式存储，在对精度要求比较高的时候（如货币、科学数据），使用 DECIMAL 的类型比较好，另外两个浮点数进行减法和比较运算时也容易出问题，所以在使用浮点数时需要注意，并尽量避免做浮点数比较。