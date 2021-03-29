---
title: 在Mac上使用Homebrew升级到PHP7.4
date: 2020-09-12
tags:
 - Homebrew
categories:
 - php
---

## 用brew升级

首先要确保 Brew 是最新的：

```shell
brew update
```

接下来，升级 PHP：

```shell
brew upgrade php
```

通过运行`php -v`以下命令检查当前版本：

```shell
php -v
```

重新启动 Nginx 或 Apache：

```shell
sudo nginx -s reload
sudo apachectl restart
```

并通过访问以下脚本确保本地 Web 服务器也使用 PHP 7.4：

```shell
# index.php, accessible to your web server
phpinfo(); die();
```

版本应显示`7.4.x`。

注意：如果您使用的是 Laravel Valet，请继续阅读，您需要一些额外的步骤才能使Web服务器正常工作。

## [＃](https://stitcher.io/blog/php-74-upgrade-mac#valet)Valet

如果您使用的是 Laravel Valet，则应执行以下步骤对其进行升级：

```shell
composer global update
```

现在运行`valet install`：

```shell
valet install
```

## [＃](https://stitcher.io/blog/php-74-upgrade-mac#extensions)pecl

Homebrew 不再支持 PHP 扩展的安装，您应该使用 pecl 代替。我个人使用 Imagick，Redis 和 Xdebug。

它们可以像这样安装：

```shell
pecl install imagick
pecl install redis
pecl install xdebug
```

您可以运行`pecl list`以查看安装了哪些扩展：

```shell
pecl list
# Installed packages, channel pecl.php.net:
# =========================================
# Package Version State
# imagick 3.4.4   stable
# redis   5.1.1   stable
# xdebug  2.8.0   stable
```

您可以使用来搜索其他扩展名`pecl search`：

```shell
pecl search pdf
# Retrieving data...0%
# ..
# Matched packages, channel pecl.php.net:
# =======================================
# Package Stable/(Latest) Local
# pdflib  4.1.2 (stable)        Creating PDF on the fly with the PDFlib library
```

安装新软件包后，请确保重新启动Web服务器：

```shell
sudo nginx -s reload
sudo apachectl restart
```

如果您使用的是 Laravel Valet，则也应重新启动它。

```shell
valet restart
```

通过检查 PHP Web 服务器和 CLI 安装，确保正确安装和加载了所有扩展：

```shell
php -i | grep redis
var_dump(extension_loaded('redis'));
```

如果扩展未正确加载，则有两个简单的修复程序。

首先，请确保将扩展名添加到正确的 ini 文件中。您可以运行`php --ini`以了解加载了哪个文件：

```shell
Configuration File (php.ini) Path: /usr/local/etc/php/7.4
Loaded Configuration File:         /usr/local/etc/php/7.4/php.ini
Scan for additional .ini files in: /usr/local/etc/php/7.4/conf.d
Additional .ini files parsed:      /usr/local/etc/php/7.4/conf.d/ext-opcache.ini,
/usr/local/etc/php/7.4/conf.d/php-memory-limits.ini
```

现在检查 ini 文件：

```shell
extension="redis.so"
extension="imagick.so"
extension="xdebug.so"
```

请注意，如果您正在通过 CLI 测试已安装的扩展，则无需重新启动 nginx，apache 或 Valet。

如果要从也使用 pecl 安装扩展程序的旧 PHP 版本进行更新，则可以做第二件事。是分别重新安装每个扩展。

```shell
pecl uninstall imagick
pecl install imagick
```

## [＃](https://stitcher.io/blog/php-74-upgrade-mac#last-step)最后一步

最后，您应该测试和升级项目以实现 [PHP 7.4兼容性](https://stitcher.io/blog/new-in-php-74)。

> **本文摘录自：**[**https://stitcher.io/blog/php-74-upgrade-mac**](https://stitcher.io/blog/php-74-upgrade-mac)



​                                                                                                                                                                  