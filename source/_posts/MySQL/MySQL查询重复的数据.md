---
title: MySQL查询重复的数据
categories: [MySQL]
---

查询字段 fund_id 重复的数据

```mysql
SELECT * FROM fund a WHERE (a.fund_id) IN (
SELECT fund_id FROM fund GROUP BY fund_id HAVING count(*)> 1);
```


