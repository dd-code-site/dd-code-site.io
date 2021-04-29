---
title: docker安装oracle19c
categories:
  - 技术开发
  - 数据库
  - Oracle
abbrlink: 3032572741
---

## 拉取镜像

```shell
docker pull registry.cn-hangzhou.aliyuncs.com/zhuyijun/oracle:19c
```

## 启动

```sh
docker run -p 1521:1521 -p 5500:5500 \
-e ORACLE_SID=orcl \
-e ORACLE_PDB=orclpdb1 \
-e ORACLE_PWD=123456 \
-e ORACLE_CHARACTERSET=zhs16gbk \
-e ORACLE_BASE=/opt/oracle \
-e ORACLE_HOME=/opt/oracle/product/19c/dbhome_1 \
-e PATH=/opt/oracle/product/19c/dbhome_1/bin:/opt/oracle/product/19c/dbhome_1/OPatch/:/usr/sbin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin \
-v /Users/liudandan/homedata/oradata:/opt/oracle/oradata \
--name myoracle \
registry.cn-hangzhou.aliyuncs.com/zhuyijun/oracle:19c
```

注意1：

> 1、注意使用之前请修改启动参数   
>
> 2、修改/Users/liudandan/homedata/oradata为自己创建的orcale数据存储目录
>
> 3、<container name>请填写镜像的容器id或者容器名

注意2：

> 1、出现DATABASE IS READY TO USE 代表者成功了
>
> 2、这时先不要关闭终端，另外开启一个
>
> 3、进入环境修改oracle密码

## 启动成功之后的界面

启动需要一定时间，这是正在启动的画面

![image-20210401213336943](https://cdn.dd-code.site/PicGo/20210401213339.png)

![image-20210401213725696](https://cdn.dd-code.site/PicGo/20210401213728.png)

![](https://cdn.dd-code.site/PicGo/20210402000212.png)

## 修改Oralce数据库密码 

```shell
docker exec  myoracle ./setPassword.sh 123456
```

> ！修改完密码后可以关闭之前终端了，出现 DATABASE IS READY TO USE之后，后边都是显示的日志，可以关闭终端，关闭终端不会导致它停止运行

## 进入Oracle Enterprise Manager Database Express页面

```
https://localhost:5500/em
```

> ！注意输入网址是采用的是https，http无法访问。

| 账号   | system/sys/等 |
| ------ | ------------- |
| 密码   | 123456        |
| 容器名 | orclpdb1      |

