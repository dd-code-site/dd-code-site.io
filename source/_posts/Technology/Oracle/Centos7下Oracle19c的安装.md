---
title: Centos7下Oracle19c的安装
categories:
  - 技术开发
  - 数据库
  - Oracle
abbrlink: 1452475922
---

## 第一步：检查Linux系统版本

执行命令 lsb_release -a 查看系统版本

```shell
lsb_release -a
```

用yum更新升级自己的系统到当前最新。

```shell
yum -y clean all
```

```shell
yum -y update
```

## 第二步：下载Oracle19c的安装包

下载地址：https://www.oracle.com/database/technologies/oracle-database-software-downloads.html#19c

![image-20210408225643282](https://cdn.dd-code.site/PicGo/20210408225753.png)

## 第三步：下载Oracle19c的预安装包

下载地址：http://yum.oracle.com/repo/OracleLinux/OL7/latest/x86_64/getPackage/oracle-database-preinstall-19c-1.0-1.el7.x86_64.rpm

## 第四步：安装包全部上传到Linux

```shell
scp oracle-database-ee-19c-1.0-1.x86_64.rpm root@39.107.245.19:/root
```

