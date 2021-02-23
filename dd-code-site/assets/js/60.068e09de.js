(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{552:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("integer 是集合 ℤ = {..., -2, -1, 0, 1, 2, ...} 中的某个数。")])]),s._v(" "),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("p",[s._v("整型值可以使用十进制，十六进制，八进制或二进制表示，前面可以加上可选的符号（- 或者 +）。 可以用 "),a("a",{attrs:{href:"https://www.php.net/manual/zh/language.operators.arithmetic.php",target:"_blank",rel:"noopener noreferrer"}},[s._v("负运算符"),a("OutboundLink")],1),s._v(" 来表示一个负的integer。")]),s._v(" "),a("p",[s._v("二进制表达的 integer 自 PHP 5.4.0 起可用。")]),s._v(" "),a("p",[s._v("要使用八进制表达，数字前必须加上 "),a("code",[s._v("0")]),s._v("（零）。要使用十六进制表达，数字前必须加上 "),a("code",[s._v("0x")]),s._v("。要使用二进制表达，数字前必须加上 "),a("code",[s._v("0b")]),s._v("。")]),s._v(" "),a("p",[s._v("从 PHP 7.4.0 开始，整型数值可能会包含下划线 ("),a("code",[s._v("_")]),s._v(")，为了更好的阅读体验，这些下划线在展示的时候，会被 PHP 过滤掉。")]),s._v(" "),a("h3",{attrs:{id:"example-1-整数文字表达"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-1-整数文字表达"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Example #1 整数文字表达")])]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1234")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 十进制数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 八进制数 (等于十进制 83)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x1A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 十六进制数 (等于十进制 26)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0b11111111")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 二进制数字 (等于十进制 255)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1_234_567")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 整型数值 (PHP 7.4.0 以后)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"整数溢出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整数溢出"}},[s._v("#")]),s._v(" 整数溢出")]),s._v(" "),a("p",[s._v("如果给定的一个数超出了 integer 的范围，将会被解释为 float。同样如果执行的运算结果超出了 integer 范围，也会返回 float。")]),s._v(" "),a("h3",{attrs:{id:"example-2-32-位系统下的整数溢出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-2-32-位系统下的整数溢出"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Example #2 32 位系统下的整数溢出")])]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$large_number")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2147483647")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("var_dump")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$large_number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// int(2147483647)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$large_number")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2147483648")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("var_dump")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$large_number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// float(2147483648)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$million")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$large_number")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$million")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("var_dump")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$large_number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// float(50000000000)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[a("strong",[s._v("Example #3 64 位系统下的整数溢出")])]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$large_number")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9223372036854775807")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("var_dump")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$large_number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// int(9223372036854775807)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$large_number")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9223372036854775808")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("var_dump")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$large_number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// float(9.2233720368548E+18)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$million")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$large_number")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000000000000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$million")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("var_dump")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$large_number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// float(5.0E+19)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("blockquote",[a("p",[s._v("PHP 中没有整除的运算符。"),a("code",[s._v("1/2")]),s._v(" 产生出 float "),a("code",[s._v("0.5")]),s._v("。 值可以舍弃小数部分，强制转换为 integer，或者使用 "),a("a",{attrs:{href:"https://www.php.net/manual/zh/function.round.php",target:"_blank",rel:"noopener noreferrer"}},[s._v("round()"),a("OutboundLink")],1),s._v(" 函数可以更好地进行四舍五入。")]),s._v(" "),a("p",[s._v("从 PHP 7.0.0 开始，函数 "),a("a",{attrs:{href:"https://www.php.net/manual/zh/function.intdiv.php",target:"_blank",rel:"noopener noreferrer"}},[s._v("intdiv()"),a("OutboundLink")],1),s._v(" 可以用于整数除法。")])]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("var_dump")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// float(3.5714285714286) ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("var_dump")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword type-casting"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// int(3)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("var_dump")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("round")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// float(4) ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"转换为整形"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转换为整形"}},[s._v("#")]),s._v(" 转换为整形")]),s._v(" "),a("p",[s._v("要明确地将一个值转换为 integer，用 "),a("code",[s._v("(int)")]),s._v(" 或 "),a("code",[s._v("(integer)")]),s._v(" 强制转换。不过大多数情况下都不需要强制转换，因为当运算符，函数或流程控制需要一个 integer 参数时，值会自动转换。还可以通过函数 "),a("a",{attrs:{href:"https://www.php.net/manual/zh/function.intval.php",target:"_blank",rel:"noopener noreferrer"}},[s._v("intval()"),a("OutboundLink")],1),s._v(" 来将一个值转换成整型。")]),s._v(" "),a("p",[s._v("将 resource 转换成 integer 时， 结果会是 PHP 运行时为 resource 分配的唯一资源号。")]),s._v(" "),a("h3",{attrs:{id:"从布尔值转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从布尔值转换"}},[s._v("#")]),s._v(" 从布尔值转换")]),s._v(" "),a("p",[a("strong",[a("code",[s._v("FALSE")])]),s._v(" 将产生出 "),a("code",[s._v("0")]),s._v("（零），"),a("strong",[a("code",[s._v("TRUE")])]),s._v(" 将产生出 "),a("code",[s._v("1")]),s._v("（壹）。")]),s._v(" "),a("h3",{attrs:{id:"从浮点型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从浮点型转换"}},[s._v("#")]),s._v(" 从浮点型转换")]),s._v(" "),a("p",[s._v("当从浮点数转换成整数时，将向下取整。")]),s._v(" "),a("blockquote",[a("p",[s._v("PHP 7.0.0 起，NaN 和 Infinity 在转换成 integer 时，不再是 undefined 或者依赖于平台，而是都会变成零。")]),s._v(" "),a("p",[s._v("绝不要将未知的分数强制转换为 integer，这样有时会导致不可预料的结果，比如：")])]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword type-casting"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 显示 7!")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"从字符串转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从字符串转换"}},[s._v("#")]),s._v(" 从字符串转换")]),s._v(" "),a("p",[s._v("当一个字符串被当作一个数值来取值，其结果和类型如下：")]),s._v(" "),a("p",[s._v("如果该字符串没有包含 '.'，'e' 或 'E' 并且其数字值在整型的范围之内（由 "),a("strong",[a("code",[s._v("PHP_INT_MAX")])]),s._v(" 所定义），该字符串将被当成 integer 来取值。其它所有情况下都被作为 float 来取值。")]),s._v(" "),a("p",[s._v("该字符串的开始部分决定了它的值。如果该字符串以合法的数值开始，则使用该数值。否则其值为 0（零）。合法数值由可选的正负号，后面跟着一个或多个数字（可能有小数点），再跟着可选的指数部分。指数部分由 'e' 或 'E' 后面跟着一个或多个数字构成。")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$foo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"10.5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// $foo is float (11.5)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$foo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"-1.3e3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// $foo is float (-1299)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$foo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"bob-1.3e3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// $foo is integer (1)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$foo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"bob3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// $foo is integer (1)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$foo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"10 Small Pigs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// $foo is integer (11)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$foo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"10.2 Little Piggies"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// $foo is float (14.2)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$foo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"10.0 pigs "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// $foo is float (11)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$foo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"10.0 pigs "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// $foo is float (11)     ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"从null转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从null转换"}},[s._v("#")]),s._v(" 从NULL转换")]),s._v(" "),a("p",[s._v("NULL 会转换为零 ("),a("code",[s._v("0")]),s._v(")")]),s._v(" "),a("h3",{attrs:{id:"从其它类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从其它类型转换"}},[s._v("#")]),s._v(" 从其它类型转换")]),s._v(" "),a("p",[s._v("Caution 没有定义从其它类型转换为整型的行为。"),a("em",[s._v("不要")]),s._v("依赖任何现有的行为，因为它会未加通知地改变")])])}),[],!1,null,null,null);t.default=e.exports}}]);