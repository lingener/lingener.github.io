(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{686:function(a,s,i){"use strict";i.r(s);var e=i(3),t=Object(e.a)({},(function(){var a=this,s=a.$createElement,i=a._self._c||s;return i("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[i("h1",{attrs:{id:"redis延伸架构问题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#redis延伸架构问题"}},[a._v("#")]),a._v(" Redis延伸架构问题")]),a._v(" "),i("h2",{attrs:{id:"单机redis"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#单机redis"}},[a._v("#")]),a._v(" 单机Redis")]),a._v(" "),i("p",[a._v("单机Redis存在的问题")]),a._v(" "),i("ul",[i("li",[i("p",[a._v("单点故障")]),a._v(" "),i("ul",[i("li",[a._v("主从、主备")])])]),a._v(" "),i("li",[i("p",[a._v("容量有限")])]),a._v(" "),i("li",[i("p",[a._v("压力")])])]),a._v(" "),i("h2",{attrs:{id:"akf"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#akf"}},[a._v("#")]),a._v(" AKF")]),a._v(" "),i("p",[a._v("分布式拆分原则")]),a._v(" "),i("p",[i("img",{attrs:{src:"/Users/lijinling/Documents/svn/myRepo/Coding/DayDayUp/Middleware/Cache/Redis/images/Redis_AKF.png",alt:"image-20210714160335459"}})]),a._v(" "),i("ul",[i("li",[a._v("X轴 全量、镜像")]),a._v(" "),i("li",[a._v("Y轴 业务、功能")]),a._v(" "),i("li",[a._v("Z轴 优先级、逻辑、可用区")])]),a._v(" "),i("h2",{attrs:{id:"cap"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#cap"}},[a._v("#")]),a._v(" CAP")]),a._v(" "),i("p",[a._v("CAP 原则指的是，一个分布式系统中，一致性（Consistency）、可用性（Availability）、分区容错性（Partition tolerance）这三个要素最多只能同时实现两点，不可能三者兼顾")]),a._v(" "),i("h3",{attrs:{id:"一致性"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#一致性"}},[a._v("#")]),a._v(" 一致性")]),a._v(" "),i("p",[a._v("主从、主备结构数据一致性方案")]),a._v(" "),i("p",[i("img",{attrs:{src:"/Users/lijinling/Documents/svn/myRepo/Coding/DayDayUp/Middleware/Cache/Redis/images/Redis_主从数据一致性问题.png",alt:"image-20210714134245286"}})]),a._v(" "),i("ul",[i("li",[i("p",[a._v("强一致性")]),a._v(" "),i("p",[a._v("会破坏可用性")])]),a._v(" "),i("li",[i("p",[a._v("弱一致性")]),a._v(" "),i("p",[a._v("会丢失数据")])]),a._v(" "),i("li",[i("p",[a._v("最终一致性")])])]),a._v(" "),i("h3",{attrs:{id:"可用性"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#可用性"}},[a._v("#")]),a._v(" 可用性")]),a._v(" "),i("p",[a._v("如何保证“主”的高可用")]),a._v(" "),i("ul",[i("li",[i("p",[a._v("监控，如果“主”出现故障要换下来，判断是否故障需要过半的监控确定故障")]),a._v(" "),i("ul",[i("li",[i("p",[a._v("为什么要过半")]),a._v(" "),i("p",[a._v("推导，如果不过半可能会出现“脑裂”")])])])])]),a._v(" "),i("h3",{attrs:{id:"分区容忍性"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#分区容忍性"}},[a._v("#")]),a._v(" 分区容忍性")]),a._v(" "),i("h2",{attrs:{id:"redis如何解决容量问题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#redis如何解决容量问题"}},[a._v("#")]),a._v(" Redis如何解决容量问题")]),a._v(" "),i("ul",[i("li",[a._v("解决容量问题的方式\n"),i("ul",[i("li",[a._v("业务拆分（数据可以分类）")]),a._v(" "),i("li",[a._v("hash（数据没办法拆分）\n"),i("ul",[i("li",[a._v("modula")]),a._v(" "),i("li",[a._v("random")]),a._v(" "),i("li",[a._v("kemata")])])])])])]),a._v(" "),i("p",[i("img",{attrs:{src:"/Users/lijinling/Documents/svn/myRepo/Coding/DayDayUp/Middleware/Cache/Redis/images/Redis_容量问题.png",alt:"image-20210714154849311"}})]),a._v(" "),i("ul",[i("li",[i("p",[i("strong",[a._v("hash的弊端针对Redis而言就是只能做缓存使用，不能做数据库")])]),a._v(" "),i("p",[a._v("如何解决呢？")]),a._v(" "),i("p",[i("strong",[a._v("预分区")])]),a._v(" "),i("p",[i("img",{attrs:{src:"/Users/lijinling/Documents/svn/myRepo/Coding/DayDayUp/Middleware/Cache/Redis/images/Redis_预分区.png",alt:"image-20210714164624351"}})]),a._v(" "),i("p",[a._v("需要数据迁移，迁移完成之后切换")])])]),a._v(" "),i("h2",{attrs:{id:"redis如何解决连接成本高问题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#redis如何解决连接成本高问题"}},[a._v("#")]),a._v(" Redis如何解决连接成本高问题")]),a._v(" "),i("p",[i("img",{attrs:{src:"/Users/lijinling/Documents/svn/myRepo/Coding/DayDayUp/Middleware/Cache/Redis/images/Redis_连接成本高问题.png",alt:"image-20210714155354549"}})])])}),[],!1,null,null,null);s.default=t.exports}}]);