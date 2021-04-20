---
title: Ubuntu防火墙的使用和开放关闭端口
categories: [服务Server]
tags: [技术开发,Ubuntu]
---

查看防火墙状态（Ubuntu系统默认是安装了ufw防火墙）

```shell
sudo ufw status
```

> `inactive`表示防火墙没有开启，并不是没有安装防火墙。

安装防火墙：

```shell
sudo apt-get install ufw
```

开启防火墙

```shell
sudo ufw enable
```

开放22端口：

```shell
sudo ufw allow 22
```

开启完成，需要重启防火墙生效：

```shell
sudo ufw reload
```

查看22端口的监听状态：

```shell
sudo netstat -tunlp | grep 22      
```

防火墙关闭普通端口

```shell
sudo ufw delete allow 21
```

防火墙开放规定协议的端口

```shell
sudo ufw allow 8001/tcp
```

防火墙关闭指定协议端口

```shell
sudo ufw delete allow 8001/tcp 
```

#### 防火墙开放限定ip地址端口

开放指定ip所有操作

```shell
sudo ufw allow from 192.168.1.11
```

关闭指定ip所有操作

```shell
sudo ufw delete allow from 192.168.1.11
```

开放指定ip对应端口操作

```shell
sudo ufw allow from 192.168.1.12 to any port 3306
```

关闭指定ip对应端口操作

```shell
sudo ufw delete allow from 192.168.1.12 to any port 3306
```

关闭防火墙

```shell
sudo ufw disable
```



## 参考资料

- https://blog.csdn.net/willingtolove/article/details/109863064

