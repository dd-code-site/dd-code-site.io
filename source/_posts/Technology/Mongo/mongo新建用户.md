---
title: mongo新建用户
categories: [技术开发,数据库,Mongo]
---

连接 mongo之后

第一步：切换到 admin 库，mongo 默认库用来保存操作用户信息：

```shell
use admin
```

第二步：创建一个用户名是root，密码是root123的管理员身份用户

```shell
db.createUser({user:'root',pwd:'root123',roles:['userAdminAnyDatabase']})
```

第三步：切换到业务库

```shell
use TestDemo
```

第四步：赋予新创建的用户TestDemo业务库的读写权限

```shell
db.createUser({user:'root',pwd:'root123',roles:['readWrite']})
```

创建超极用户root

```shell
use admin
db.createUser(
  {
    user: "root",
    pwd: "root",
    roles: [ { role: "root", db: "admin" } ]
  }
);
```

删除用户

```
db.removeUser('XXX')            
```

