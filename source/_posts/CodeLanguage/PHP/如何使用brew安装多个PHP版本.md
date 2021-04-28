---
title: 如何使用brew安装多个PHP版本
categories: [程序语言,PHP]
---

一 安装7.1

1. 安装PHP7.1

```
brew install php@7.1
```

2. 修改配置 php-fpm.conf,一般在/usr/local/etc/php下(如果php-fpm.conf中不存在，则查找php-fpm.d目录)

```
vim php-fpm.conf` `listen = 127.0.0.1:9000
```

3. 启动PHP7.1

```
brew services start php@7.1
```

4. 这时php-fpm会监听9000端口，修改nginx的配置文件改为端口为9000(一般在/usr/local/etc/nginx/下面)

```
vim nginx.conf` `fastcgi_pass  127.0.0.1:9000
```

5. 启动nginx服务

```
#启动 brew services start nginx` `#重启 brew services restart nginx
```

6. 查看当前版本

```
php -v
```

 

二 安装并切换7.2

1. 清除PHP7.1的软链

```
brew unlink php@7.1
```

2. 安装PHP7.2 

```
brew install php@7.2
```

3. 添加PHP7.2的软链

```
brew link php@7.2
```

4. 修改配置 php-fpm.conf

```
vim php-fpm.conf` `listen = 127.0.0.1:9001
```

5. 启动PHP7.2

```
brew services start php@7.2
```

6. 修改nginx配置

```
vim nginx.conf` `fastcgi_pass  127.0.0.1:9001
```

7. 重启nginx服务

```
brew services restart nginx
```

8. 查看当前版本

```
php -v
```

9.修改环境变量

```
vi ~/.bash_profile
```

10.重新刷新环境变量

```
source ~/.bash_profile
```

 

以上就是这次的全部内容 ！

​                                                                                                                                                                  