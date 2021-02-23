(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{527:function(s,a,n){"use strict";n.r(a);var t=n(6),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"什么是ssdb"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是ssdb"}},[s._v("#")]),s._v(" 什么是SSDB")]),s._v(" "),n("p",[s._v("一个高性能的支持丰富数据结构的 NoSQL 数据库, 用于替代 Redis.")]),s._v(" "),n("h2",{attrs:{id:"特性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[s._v("#")]),s._v(" 特性")]),s._v(" "),n("ul",[n("li",[s._v("替代 Redis 数据库, Redis 的 100 倍容量")]),s._v(" "),n("li",[s._v("LevelDB 网络支持, 使用 C/C++ 开发")]),s._v(" "),n("li",[s._v("Redis API 兼容, 支持 Redis 客户端")]),s._v(" "),n("li",[s._v("适合存储集合数据, 如 list, hash, zset...")]),s._v(" "),n("li",[s._v("客户端 API 支持的语言包括: "),n("a",{attrs:{href:"http://ssdb.io/docs/cpp/",target:"_blank",rel:"noopener noreferrer"}},[s._v("C++"),n("OutboundLink")],1),s._v(", "),n("a",{attrs:{href:"http://ssdb.io/docs/zh_cn/php/",target:"_blank",rel:"noopener noreferrer"}},[s._v("PHP"),n("OutboundLink")],1),s._v(", Python, "),n("a",{attrs:{href:"http://ssdb.io/docs/java/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Java"),n("OutboundLink")],1),s._v(", Go")]),s._v(" "),n("li",[s._v("持久化的队列服务")]),s._v(" "),n("li",[n("strong",[s._v("主从复制, 负载均衡")])])]),s._v(" "),n("p",[s._v("强烈推荐你把 SSDB 部署在 "),n("strong",[s._v("Linux 操作系统")]),s._v("上.")]),s._v(" "),n("p",[s._v("不要在生产环境中使用 Windows 操作系统来运行 SSDB 服务器. 如果你确实必须使用 Windows 操作系统, 请在上面运行一个 Linux 虚拟机, 然后再让 SSDB 运行于这个虚拟机之中.")]),s._v(" "),n("h2",{attrs:{id:"编译和安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编译和安装"}},[s._v("#")]),s._v(" 编译和安装")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" --no-check-certificate https://github.com/ideawu/ssdb/archive/master.zip\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" master\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ssdb-master\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将安装在 /usr/local/ssdb 目录下")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("如果你想安装 ssdb 在其它的目录, 不在 "),n("code",[s._v("/usr/local")]),s._v(" 目录下, 可以这样")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PREFIX")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/your/direcotry\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"问题解决"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题解决"}},[s._v("#")]),s._v(" 问题解决")]),s._v(" "),n("p",[s._v("如果出现如下错误:")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("g++ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".deps/snappy-1.1.0/.libs/libsnappy.a: No such "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\nmake"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": *** "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("all"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Error "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("或者")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("g++ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".deps/jemalloc-3.3.1/lib/libjemalloc.a: No such "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\nmake"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": *** "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("all"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Error "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("这是因为 Snappy 或者 Jemalloc 没有编译成功, 这一般是因为你的系统时钟有问题. 可以这样解决:")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" deps/snappy-1.1.0\nautoreconf --force --install\n./configure\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("或者")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" deps/jemalloc-3.3.1\nautoreconf --force --install\n./configure\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"启动和停止"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动和停止"}},[s._v("#")]),s._v(" 启动和停止")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动主库, 此命令会阻塞住命令行")]),s._v("\n./ssdb-server ssdb.conf\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者启动为后台进程(不阻塞命令行)")]),s._v("\n./ssdb-server -d ssdb.conf\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止 ssdb-server")]),s._v("\n./ssdb-server ssdb.conf -s stop\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对于旧版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ./var/ssdb.pid"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\n./ssdb-server ssdb.conf -s restart\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("到目前为止, 你需要手动管理 "),n("code",[s._v("ssdb-server")]),s._v(" 进程, 如果你希望在操作系统启动和停止时自动地管理, 请按下面的说明进行.")]),s._v(" "),n("h2",{attrs:{id:"ssdb-启动脚本-随操作系统自启动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ssdb-启动脚本-随操作系统自启动"}},[s._v("#")]),s._v(" SSDB 启动脚本(随操作系统自启动)")]),s._v(" "),n("p",[s._v("假设你已经安装 SSDB 在默认的 "),n("code",[s._v("/usr/local/ssdb")]),s._v(" 目录, 把 "),n("code",[s._v("tools/ssdb.sh")]),s._v(" 脚本放到 "),n("code",[s._v("/etc/init.d")]),s._v(" 目录下.")]),s._v(" "),n("p",[s._v("注意: 对于 CentOS 用户, 请将 "),n("code",[s._v("ssdb.sh")]),s._v(" 重命名为 "),n("code",[s._v("ssdb")]),s._v(".")]),s._v(" "),n("p",[s._v("编辑下面的内容:")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# each config file for one instance")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("configs")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/data/ssdb_data/test/ssdb.conf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("将 "),n("code",[s._v("/data/ssdb_data/test/ssdb.conf")]),s._v(" 修改为你的 SSDB 配置文件的路径. 如果你有多个 SSDB 实例, 那么把它们写在一行, 用空格来分隔, 例如:")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# each config file for one instance")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("configs")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/data/ssdb_data/test/ssdb.conf /data/ssdb_data/demo/ssdb.conf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("CentOS")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" --add ssdb\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" ssdb on\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("Ubuntu")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" a+x /etc/init.d/ssdb.sh\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" update-rc.d ssdb.sh defaults\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#资料"}},[s._v("#")]),s._v(" 资料:")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"http://ssdb.io/zh_cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("中文官网"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"http://ssdb.io/docs/zh_cn/redis-to-ssdb.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("从 Redis 迁移到 SSDB"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);