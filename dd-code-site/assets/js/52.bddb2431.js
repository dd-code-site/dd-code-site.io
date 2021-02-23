(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{547:function(s,e,a){"use strict";a.r(e);var n=a(6),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("利用 nginx 本身的特性配置一下负载均衡，在这里服务器本身是宿主机，用 docker 在宿主机上拉两个nginx容器，相当于服务器2和服务器3。")]),s._v(" "),a("p",[s._v("宿主机上边没有任何业务代码，只搭载了 ngixn 服务，作用只是为了为了进行分发，代码在服务器2（容器1）和服务器3（容器2）上边。")]),s._v(" "),a("h2",{attrs:{id:"前提"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提"}},[s._v("#")]),s._v(" 前提")]),s._v(" "),a("p",[s._v("一台 CentOS 的服务器，且服务器上安装了 nginx ，docker")]),s._v(" "),a("p",[s._v("关于 CentOS 下安装 Nginx 和 Docker ，在此不进行操作说明，百度即可，文档颇多。")]),s._v(" "),a("h2",{attrs:{id:"定义宿主机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义宿主机"}},[s._v("#")]),s._v(" 定义宿主机")]),s._v(" "),a("p",[s._v("安装好以上所有项目后，我们需要将宿主机下的 Nginx 默认 Html 内容进行修改，标记为宿主机")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/wwwroot/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f index.html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("重新建 index.html")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" 我是宿主机 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" index.html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这样，访问宿主机的 IP就会出现")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://liudandandear.gitee.io/image/image-20200731113347167.png",alt:"image-20200731113347167"}})]),s._v(" "),a("h2",{attrs:{id:"使用-docker-安装容器1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-安装容器1"}},[s._v("#")]),s._v(" 使用 Docker 安装容器1")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker pull hub.c.163.com/library/nginx:lates\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查看容器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker images\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("根据镜像 ID 启动容器")]),s._v(" "),a("p",[s._v("容器名：nginx_web1  映射容器8080端口到宿主机的80端口上，并且进入该容器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker run -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":80 --name nginx_web1 -it hub.c.163.com/library/nginx /bin/bash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("进入容器1的 ngxin 目录")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/share/nginx/html/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("修改显示的主页面")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" 请求到我①号从主机上来啦 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" index.html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("修改完毕退出该容器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"使用-docker-安装容器2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-安装容器2"}},[s._v("#")]),s._v(" 使用 Docker 安装容器2")]),s._v(" "),a("p",[s._v("容器名：nginx_web2  映射容器8080端口到宿主机的80端口上，并且进入该容器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker run -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),s._v(":80 --name nginx_web2 -it hub.c.163.com/library/nginx /bin/bash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("进入容器1的 ngxin 目录")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/share/nginx/html/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("修改显示的主页面")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" 请求到我②号从主机上来啦 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" index.html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("修改完毕退出该容器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("退出容器后，容器关闭，而且我们修改了容器①和容器②的配置，所以我们要重新启动下")]),s._v(" "),a("p",[s._v("先查询一下容器，根据容器ID重启")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v(" docker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("根据 CONTAINER ID 启动两个容器")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(" docker restart c2de9dbdebb4\n docker restart 14ee73f24ac0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("启动容器中的 Nginx 服务")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -d c2de9dbdebb4  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx start \ndocker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -d 14ee73f24ac0  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx start \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("访问服务地址，连续多次刷新请求，结果会随机变化")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://liudandandear.gitee.io/image/image-20200731165915975.png",alt:"image-20200731165915975"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://liudandandear.gitee.io/image/image-20200731165954369.png",alt:"image-20200731165954369"}})]),s._v(" "),a("p",[s._v("​")])])}),[],!1,null,null,null);e.default=t.exports}}]);