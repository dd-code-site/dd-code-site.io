---
title: Git强制拉取覆盖本地
date: 2020-08-20
tags:
 - git
categories:
 - other
---

## 多条执行

```shell
git fetch --all  
git reset --hard origin/master 
git pull
```

## 单条执行

```shell
git fetch --all && git reset --hard origin/master && git pull
```