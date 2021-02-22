(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{512:function(_,v,t){"use strict";t.r(v);var a=t(6),s=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[_._v("TCP 和 UDP 是传输层的两个协议。")]),_._v(" "),t("h3",{attrs:{id:"tcp-的包头格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的包头格式"}},[_._v("#")]),_._v(" TCP 的包头格式")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/a7/bf/a795461effcce686a43f48e094c9adbf.jpg",alt:"TCP 包头"}})]),_._v(" "),t("h4",{attrs:{id:"tcp-的包头有哪些内容-分别有什么用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的包头有哪些内容-分别有什么用"}},[_._v("#")]),_._v(" TCP 的包头有哪些内容，分别有什么用")]),_._v(" "),t("ul",[t("li",[_._v("源端口和目标端口不可少")]),_._v(" "),t("li",[_._v("包的序号。主要解决乱序问题，否则不知道哪个先到，哪个后到")]),_._v(" "),t("li",[_._v("确认序号。发出去的包应该有确认，这样知道对方是否收到。如果没有收到，那就应该重新发送。解决不丢包问题。")]),_._v(" "),t("li",[_._v("状态位。SYN 是发起一个连接，ACK 是回复，RST 是重新连接，FIN 是结束连接。因为 TCP 是面向连接的，因为需要双方维护连接的状态，这些状态位的包会引起双方的状态变更")]),_._v(" "),t("li",[_._v("窗口大小，TCP 要做流量控制，需要通信双方各声明一个窗口，标识自己的处理能力")])]),_._v(" "),t("p",[_._v("通过对 TCP 头的解析，我们知道要掌握 TCP 协议，应该重点关注以下问题：")]),_._v(" "),t("ul",[t("li",[_._v("顺序问题")]),_._v(" "),t("li",[_._v("丢包问题")]),_._v(" "),t("li",[_._v("连接维护")]),_._v(" "),t("li",[_._v("流量控制")]),_._v(" "),t("li",[_._v("拥塞控制")])]),_._v(" "),t("h3",{attrs:{id:"tcp-的三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的三次握手"}},[_._v("#")]),_._v(" TCP 的三次握手")]),_._v(" "),t("p",[_._v("所有的问题，首先都要建立连接，所以首先是连接维护问题。")]),_._v(" "),t("p",[_._v("TCP 的建立连接称为 "),t("strong",[_._v("三次握手")]),_._v("，可以简单理解为一下这种情况：")]),_._v(" "),t("blockquote",[t("p",[_._v("A：您好，我是 A")]),_._v(" "),t("p",[_._v("B：您好 A，我是 B")]),_._v(" "),t("p",[_._v("A：您好 B")])]),_._v(" "),t("p",[_._v("至于为什么是三次握手，可以理解为通信双方全都是有来有回，这也是 TCP 面向连接的特点。")]),_._v(" "),t("p",[_._v("对于 A 来说它发出请求，并收到了 B 的响应，对于 B 来说它响应了 A 的请求，并且也接收了响应。")]),_._v(" "),t("blockquote",[t("p",[_._v("TCP 的三次握手出了建立连接外，主要还是为了沟通 TCP 包的序号问题。")])]),_._v(" "),t("p",[_._v("A 告诉 B，我发起的包的序号是从哪个号开始的，B 同样也告诉 A ，B 发起的包的序号是从哪个号开始的。")]),_._v(" "),t("p",[_._v("双方建立连接之后需要共同维护一个状态机，在建立连接的过程中，双方的状态时序图如下所示：")]),_._v(" "),t("h4",{attrs:{id:"tcp-状态时序图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-状态时序图"}},[_._v("#")]),_._v(" TCP 状态时序图")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://phpmianshiwang-s2.test.upcdn.net/PicGo/20210222104446.png",alt:""}})]),_._v(" "),t("p",[_._v("这是网上经常见到的一张图，")]),_._v(" "),t("p",[_._v("刚开始的时候，客户端和服务器都处于 closed 的状态，先是服务器主动监听某个端口，处于 listten 状态。")]),_._v(" "),t("p",[_._v("然后客户端主动发起连接 syn ，之后处于 syn-sent 状态。")]),_._v(" "),t("p",[_._v("服务端接收了发起的连接，返回 syn ，并且 ack（确认）客户端的 syn ，之后处于 syn-sent 状态。")]),_._v(" "),t("p",[_._v("客户端接收到服务端发送的 syn 和 ack 之后。发送 ack 的 ack ，之后就处于  ESTABLISHED 状态，因为它一发一收成功了。")]),_._v(" "),t("p",[_._v("服务端收到 ack 的 ack 之后，也处于 ESTABLISHED 状态，因为它也是一发一收了。")]),_._v(" "),t("h3",{attrs:{id:"tcp-四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-四次挥手"}},[_._v("#")]),_._v(" TCP 四次挥手")]),_._v(" "),t("p",[_._v("介绍完建立连接，再说下断开连接，也被称为四次挥手，可以简单理解如下：")]),_._v(" "),t("blockquote",[t("p",[_._v("A：B 啊，我不想玩了")]),_._v(" "),t("p",[_._v("B：哦，你不想玩了啊，我知道了")]),_._v(" "),t("p",[_._v("这个时候，只是 A 不想玩了，即不再发送数据，但是 B 可能还有未发送完的数据，所以需要等待 B 也主动关闭")]),_._v(" "),t("p",[_._v("B：A啊，好吧，我也不玩了，拜拜")]),_._v(" "),t("p",[_._v("A：好的，拜拜")])]),_._v(" "),t("p",[_._v("这样整个协议就关闭了，当然这只是正常的状态，也有非正常的状态（比如 A 说完不玩了，直接跑路， B 发起的结束得不到 A 的回答，不知道该怎么办或者 B 直接跑路 A 不知道该怎么办），TCP 协议专门设计了几个状态来处理这些非正常状态。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://phpmianshiwang-s2.test.upcdn.net/PicGo/20210222114023.png",alt:""}})]),_._v(" "),t("p",[_._v("断开的时候，当 A 说不玩了，就进入 FIN_WAIT_1 的状态，B 收到 A 不玩了的消息后，进入 CLOSE_WAIT 的状态。A 收到 B 说知道了，就进入 FIN_WAIT_2 的状态，如果 B 直接跑路，则 A 永远处与这个状态。TCP 协议里面并没有对这个状态的处理，但 Linux 有，可以调整 tcp_fin_timeout 这个参数，设置一个超时时间。")]),_._v(" "),t("p",[_._v("如果 B 没有跑路，A 接收到 B 的不玩了请求之后，从 FIN_WAIT_2 状态结束，按说 A 可以跑路了，但是如果 B 没有接收到 A 跑路的 ACK 呢，就再也接收不到了，所以这时候 A 需要等待一段时间，因为如果 B 没接收到 A 的 ACK 的话会重新发送给 A，所以 A 的等待时间需要足够长。")]),_._v(" "),t("h3",{attrs:{id:"udp-的包头格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#udp-的包头格式"}},[_._v("#")]),_._v(" UDP 的包头格式")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://phpmianshiwang-s2.test.upcdn.net/PicGo/20210221205627.png",alt:""}})]),_._v(" "),t("p",[_._v("由上图可以看出，UDP 除了端口号，基本啥都没有。如果没有这两个端口号，数据就不知道该发给哪个应用。")]),_._v(" "),t("p",[_._v("所以 UDP 比较简单，有如下三个特点：")]),_._v(" "),t("ul",[t("li",[_._v("沟通简单。不需要大量的数据结构来处理逻辑和包头字段")]),_._v(" "),t("li",[_._v("轻信他人。它不会建立连接，但是会监听这个地方，谁都可以传给它数据，它也可以传给任何人数据，甚至可以同时传给多个人数据。")]),_._v(" "),t("li",[_._v("愣头青。做事不动变通。不会根据网络的情况进行拥塞控制，无论是否丢包，它该怎么发还是怎么发")])]),_._v(" "),t("p",[_._v("因为 UDP 比较简单，处理的是一些没那么难得项目，所以就算失败也能接收。基于此特点，UDP 的主要使用场景有：")]),_._v(" "),t("ul",[t("li",[_._v("需要资源少，网络情况稳定的内网，或者对于丢包不敏感的应用，比如 "),t("a",{attrs:{href:"https://baike.baidu.com/item/DHCP",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[_._v("DHCP")]),t("OutboundLink")],1),_._v(" 就是基于 UDP 协议的")]),_._v(" "),t("li",[_._v("不需要一对一沟通建立连接，而是可以广播的应用。因为它不面向连接，所以可以做到一对多，承担广播或者多播的协议")]),_._v(" "),t("li",[_._v("需要处理速度快，可以容忍丢包，但是即使网络阻塞，也毫不退缩，一往无前的时候")])]),_._v(" "),t("p",[_._v("基于 UDP 的几个例子：")]),_._v(" "),t("ul",[t("li",[_._v("直播：直播对实时性的要求比较高，宁可丢包，也不要卡顿，所以很多直播都基于 UDP 实现了自己的视频传输协议")]),_._v(" "),t("li",[_._v("实时游戏：游戏的特点也是实时性比较高，在这种情况下，采用自定义的可靠的 UDP 协议，自定义重传策略，能够把生产的延迟降到最低，减少网络问题对游戏造成的影响")]),_._v(" "),t("li",[_._v("物联网：一是物联网领域中断资源很少，很可能只是个很小的嵌入式系统，而维护 TCP 协议的代价太大；二是物联网对实时性要求特别高。")])]),_._v(" "),t("h4",{attrs:{id:"示意图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示意图"}},[_._v("#")]),_._v(" 示意图：")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://phpmianshiwang-s2.test.upcdn.net/PicGo/20210221205245.png",alt:""}})]),_._v(" "),t("h3",{attrs:{id:"总结及面试问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结及面试问题"}},[_._v("#")]),_._v(" 总结及面试问题")]),_._v(" "),t("h4",{attrs:{id:"tcp-的-udp-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的-udp-的区别"}},[_._v("#")]),_._v(" TCP 的 UDP 的区别")]),_._v(" "),t("ul",[t("li",[_._v("TCP 是面向连接的，UDP 是面向无连接的")]),_._v(" "),t("li",[_._v("UDP 程序结构较简单")]),_._v(" "),t("li",[_._v("TCP 是面向字节流的，UDP 是基于数据报的")]),_._v(" "),t("li",[_._v("TCP 保证数据正确性，UDP 可能丢包")]),_._v(" "),t("li",[_._v("TCP 保证数据顺序，UDP 不保证")])]),_._v(" "),t("h4",{attrs:{id:"什么是面向连接-什么是面向无连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是面向连接-什么是面向无连接"}},[_._v("#")]),_._v(" 什么是面向连接？什么是面向无连接？")]),_._v(" "),t("p",[_._v("在互通之前，面向连接的协议会先建立连接，如 TCP 有三次握手，而 UDP 不会")]),_._v(" "),t("h4",{attrs:{id:"tcp-为什么是可靠连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-为什么是可靠连接"}},[_._v("#")]),_._v(" TCP 为什么是可靠连接")]),_._v(" "),t("ul",[t("li",[_._v("通过 TCP 连接传输的数据无差错，不丢失，不重复，且按顺序到达")]),_._v(" "),t("li",[_._v("TCP 报文头里边的序号能使 TCP 的数据按时序到达")]),_._v(" "),t("li",[_._v("报文头里边的确认序号能保证不丢包，累计确认及超时重传机制")]),_._v(" "),t("li",[_._v("TCP 拥有流量控制及拥塞控制的机制")])])])}),[],!1,null,null,null);v.default=s.exports}}]);