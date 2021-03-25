---
title: MySQL查询重复的数据
date: 2020-03-17
categories:
 - MySql

---

查询字段 fund_id 重复的数据

```mysql
SELECT * FROM fund a WHERE (a.fund_id) IN (
SELECT fund_id FROM fund GROUP BY fund_id HAVING count(*)> 1);
```


