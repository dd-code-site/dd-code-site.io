---
title: 缓存Memcache和Redis的区别
categories: [技术开发,数据库,Redis]
---

- Redis 和 Memcache 都是将数据存放在内存中，都是内存数据库。不过 memcache 还可用于缓存其他东西，例如图片、视频等等
- Redis 不仅仅支持简单的 k/v 类型的数据，同时还提供 list，set，hash 等数据结构的存储
- 虚拟内存：Redis 当物理内存用完时，可以将一些很久没用到的 value 交换到磁盘
- 过期策略：memcache 在 set 时就指定，例如 set key1 0 0 8，即永不过期。Redis 可以通过例如 expire 设定，例如 expire name 10
- 分布式：设定 memcache 集群，利用 magent 做一主多从；redis 可以做一主多从。都可以一主一从
- 存储数据安全：memcache 挂掉后，数据没了；redis 可以定期保存到磁盘（持久化）
- 灾难恢复：memcache 挂掉后，数据不可恢复; redis 数据丢失后可以通过 aof 恢复
- Redis支持数据的备份，即 master-slave 模式的数据备份

