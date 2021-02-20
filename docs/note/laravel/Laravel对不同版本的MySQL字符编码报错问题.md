---
title: Laravel对不同版本的MySQL字符编码报错问题
date: 2020-10-11
sidebarDepth: 2
categories:
 - laravel
---

Laravel 项目报错 `SQLSTATE[42000]: Syntax error or access violation: 1071 Specified key was too long` 解决方法：

MySql支持的 `utf8` 编码最大字符长度为 3 字节，如果遇到 4 字节的宽字符就会出现插入异常。三个字节 `UTF-8` 最大能编码的 `Unicode` 字符是 `0xffff`，即`Unicode` 中的基本多文种平面（BMP）。因而包括 `Emoji` 表情（`Emoji` 是一种特殊的 `Unicode` 编码）在内的非基本多文种平面的 `Unicode` 字符都无法使用MySql的 `utf8` 字符集存储。

这也应该就是 `Laravel 5.4` 改用 4 字节长度的 `utf8mb4` 字符编码的原因之一。不过要注意的是，只有 `MySql 5.5.3` 版本以后才开始支持 `utf8mb4` 字符编码（查看版本：`selection version()`）。如果 MySql 版本过低，需要进行版本更新。

*注：如果是从Laravel 5.3 **升级到 Laravel 5.4**，不需要对字符编码做切换。*

**解决方案**

1. 升级MySql版本到5.5.3以上。
2. 手动配置迁移命令migrate生成的默认字符串长度，在app\Providers\AppServiceProvider中调用Schema::defaultStringLength方法来实现配置：

```php
use Illuminate\Support\Facades\Schema;
 
/**
* Bootstrap any application services.
*
* @return void
*/
public function boot()
{
   Schema::defaultStringLength(191);
}
```



## 资料:

- [中文官网](http://ssdb.io/zh_cn/)
- [从 Redis 迁移到 SSDB](http://ssdb.io/docs/zh_cn/redis-to-ssdb.html)