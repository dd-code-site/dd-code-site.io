---
title: mongo常用命令
date: 2021-03-31
categories:
 - Mongo

---

```shell
show dbs  #显示数据库列表 
show collections  #显示当前数据库中的集合（类似关系数据库中的表）
show users  #显示用户
use <db name>  #切换当前数据库，如果数据库不存在则创建数据库。 
db.help()  #显示数据库操作命令，里面有很多的命令 
db.foo.help()  #显示集合操作命令，同样有很多的命令，foo指的是当前数据库下，一个叫foo的集合，并非真正意义上的命令 
db.foo.find()  #对于当前数据库中的foo集合进行数据查找（由于没有条件，会列出所有数据） 
db.foo.find( { a : 1 } )  #对于当前数据库中的foo集合进行查找，条件是数据中有一个属性叫a，且a的值为1
db.dropDatabase()  #删除当前使用数据库
db.cloneDatabase("127.0.0.1")   #将指定机器上的数据库的数据克隆到当前数据库
db.copyDatabase("mydb", "temp", "127.0.0.1")  #将本机的mydb的数据复制到temp数据库中
db.repairDatabase()  #修复当前数据库
db.getName()  #查看当前使用的数据库，也可以直接用db
db.stats()  #显示当前db状态
db.version()  #当前db版本
db.getMongo()  ＃查看当前db的链接机器地址
db.serverStatus()  #查看数据库服务器的状态
```

