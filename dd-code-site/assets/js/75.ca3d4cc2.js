(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{571:function(s,a,e){"use strict";e.r(a);var t=e(6),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"用brew升级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用brew升级"}},[s._v("#")]),s._v(" 用brew升级")]),s._v(" "),e("p",[s._v("首先要确保 Brew 是最新的：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("brew update\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("接下来，升级 PHP：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("brew upgrade php\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("通过运行"),e("code",[s._v("php -v")]),s._v("以下命令检查当前版本：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("php -v\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("重新启动 Nginx 或 Apache：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" nginx -s reload\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apachectl restart\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("并通过访问以下脚本确保本地 Web 服务器也使用 PHP 7.4：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# index.php, accessible to your web server")]),s._v("\nphpinfo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" die"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("版本应显示"),e("code",[s._v("7.4.x")]),s._v("。")]),s._v(" "),e("p",[s._v("注意：如果您使用的是 Laravel Valet，请继续阅读，您需要一些额外的步骤才能使Web服务器正常工作。")]),s._v(" "),e("h2",{attrs:{id:"valet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#valet"}},[s._v("#")]),s._v(" "),e("a",{attrs:{href:"https://stitcher.io/blog/php-74-upgrade-mac#valet",target:"_blank",rel:"noopener noreferrer"}},[s._v("＃"),e("OutboundLink")],1),s._v("Valet")]),s._v(" "),e("p",[s._v("如果您使用的是 Laravel Valet，则应执行以下步骤对其进行升级：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" global update\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("现在运行"),e("code",[s._v("valet install")]),s._v("：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("valet "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"pecl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pecl"}},[s._v("#")]),s._v(" "),e("a",{attrs:{href:"https://stitcher.io/blog/php-74-upgrade-mac#extensions",target:"_blank",rel:"noopener noreferrer"}},[s._v("＃"),e("OutboundLink")],1),s._v("pecl")]),s._v(" "),e("p",[s._v("Homebrew 不再支持 PHP 扩展的安装，您应该使用 pecl 代替。我个人使用 Imagick，Redis 和 Xdebug。")]),s._v(" "),e("p",[s._v("它们可以像这样安装：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("pecl "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" imagick\npecl "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" redis\npecl "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" xdebug\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("您可以运行"),e("code",[s._v("pecl list")]),s._v("以查看安装了哪些扩展：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("pecl list\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Installed packages, channel pecl.php.net:")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# =========================================")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Package Version State")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# imagick 3.4.4   stable")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis   5.1.1   stable")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# xdebug  2.8.0   stable")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("您可以使用来搜索其他扩展名"),e("code",[s._v("pecl search")]),s._v("：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("pecl search pdf\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Retrieving data...0%")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ..")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Matched packages, channel pecl.php.net:")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# =======================================")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Package Stable/(Latest) Local")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pdflib  4.1.2 (stable)        Creating PDF on the fly with the PDFlib library")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("安装新软件包后，请确保重新启动Web服务器：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" nginx -s reload\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apachectl restart\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("如果您使用的是 Laravel Valet，则也应重新启动它。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("valet restart\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("通过检查 PHP Web 服务器和 CLI 安装，确保正确安装和加载了所有扩展：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("php -i "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" redis\nvar_dump"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("extension_loaded"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'redis'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("如果扩展未正确加载，则有两个简单的修复程序。")]),s._v(" "),e("p",[s._v("首先，请确保将扩展名添加到正确的 ini 文件中。您可以运行"),e("code",[s._v("php --ini")]),s._v("以了解加载了哪个文件：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("Configuration File "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("php.ini"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Path: /usr/local/etc/php/7.4\nLoaded Configuration File:         /usr/local/etc/php/7.4/php.ini\nScan "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" additional .ini files in: /usr/local/etc/php/7.4/conf.d\nAdditional .ini files parsed:      /usr/local/etc/php/7.4/conf.d/ext-opcache.ini,\n/usr/local/etc/php/7.4/conf.d/php-memory-limits.ini\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("现在检查 ini 文件：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("extension")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"redis.so"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("extension")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"imagick.so"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("extension")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xdebug.so"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("请注意，如果您正在通过 CLI 测试已安装的扩展，则无需重新启动 nginx，apache 或 Valet。")]),s._v(" "),e("p",[s._v("如果要从也使用 pecl 安装扩展程序的旧 PHP 版本进行更新，则可以做第二件事。是分别重新安装每个扩展。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("pecl uninstall imagick\npecl "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" imagick\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"最后一步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最后一步"}},[s._v("#")]),s._v(" "),e("a",{attrs:{href:"https://stitcher.io/blog/php-74-upgrade-mac#last-step",target:"_blank",rel:"noopener noreferrer"}},[s._v("＃"),e("OutboundLink")],1),s._v("最后一步")]),s._v(" "),e("p",[s._v("最后，您应该测试和升级项目以实现 "),e("a",{attrs:{href:"https://stitcher.io/blog/new-in-php-74",target:"_blank",rel:"noopener noreferrer"}},[s._v("PHP 7.4兼容性"),e("OutboundLink")],1),s._v("。")]),s._v(" "),e("blockquote",[e("p",[e("strong",[s._v("本文摘录自：")]),e("a",{attrs:{href:"https://stitcher.io/blog/php-74-upgrade-mac",target:"_blank",rel:"noopener noreferrer"}},[e("strong",[s._v("https://stitcher.io/blog/php-74-upgrade-mac")]),e("OutboundLink")],1)])]),s._v(" "),e("p",[s._v("​")])])}),[],!1,null,null,null);a.default=n.exports}}]);