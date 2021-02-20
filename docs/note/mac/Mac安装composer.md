---
title: Mac安装composer
date: 2020-09-12
tags:
 - composer
categories:
 - php
---

## 第一步：下载安装脚本

```shell
php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"
```

![image-20201024105419722](http://phpmianshiwang-s2.test.upcdn.net/PicGo/image-20201024105419722.png)

## 第二步：执行安装过程

```shell
php composer-setup.php
```

![image-20201024105520](http://phpmianshiwang-s2.test.upcdn.net/PicGo/20201024105520.png)

## 第三步：删除安装脚本（非必须删除）

```bash
php -r "unlink('composer-setup.php');"
```

![image-20201024105737681](http://phpmianshiwang-s2.test.upcdn.net/PicGo/image-20201024105737681.png)

# 第四步：将 composer 安装到全局

```bash
sudo mv composer.phar /usr/local/bin/composer
```

![image-20201024105957636](http://phpmianshiwang-s2.test.upcdn.net/PicGo/image-20201024105957636.png)



## 备注：保持Composer为最新版本的命令：

```shell
composer selfupdate
```



参考资料：

https://pkg.phpcomposer.com/#how-to-install-composer