(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{589:function(s,a,e){s.exports=e.p+"assets/img/Redis_集群hash.09a36565.png"},590:function(s,a,e){s.exports=e.p+"assets/img/Redis_create-cluster-1.1af19694.png"},591:function(s,a,e){s.exports=e.p+"assets/img/Redis_create-cluster-create.9ba08b49.png"},685:function(s,a,e){"use strict";e.r(a);var t=e(3),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"redis集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis集群"}},[s._v("#")]),s._v(" Redis集群")]),s._v(" "),t("h2",{attrs:{id:"集群介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群介绍"}},[s._v("#")]),s._v(" 集群介绍")]),s._v(" "),t("blockquote",[t("p",[s._v("Redis 集群是一个提供在"),t("strong",[s._v("多个Redis间节点间共享数据")]),s._v("的程序集。")]),s._v(" "),t("p",[s._v("Redis集群并不支持处理多个keys的命令,因为这需要在不同的节点间移动数据,从而达不到像Redis那样的性能,在高负载的情况下可能会导致不可预料的错误.")]),s._v(" "),t("p",[s._v("Redis 集群通过分区来提供"),t("strong",[s._v("一定程度的可用性")]),s._v(",在实际环境中当某个节点宕机或者不可达的情况下继续处理命令.")]),s._v(" "),t("p",[s._v("Redis 集群的优势:")]),s._v(" "),t("ul",[t("li",[s._v("自动分割数据到不同的节点上。")]),s._v(" "),t("li",[s._v("整个集群的部分节点失败或者不可达的情况下能够继续处理命令。")])])]),s._v(" "),t("h2",{attrs:{id:"数据分片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据分片"}},[s._v("#")]),s._v(" 数据分片")]),s._v(" "),t("p",[s._v("Redis 集群没有使用一致性hash, 而是引入了 "),t("strong",[s._v("哈希槽")]),s._v("的概念.")]),s._v(" "),t("p",[t("img",{attrs:{src:e(589),alt:"image-20210714165213581"}})]),s._v(" "),t("p",[s._v("Redis 集群有16384个哈希槽,每个key通过CRC16校验后对16384取模来决定放置哪个槽.集群的每个节点负责一部分hash槽,举个例子,比如当前集群有3个节点,那么:")]),s._v(" "),t("ul",[t("li",[s._v("节点 1 包含 0 到 5500号哈希槽.")]),s._v(" "),t("li",[s._v("节点 2 包含5501 到 11000 号哈希槽.")]),s._v(" "),t("li",[s._v("节点 3 包含11001 到 16384号哈希槽.")])]),s._v(" "),t("p",[s._v("这种结构很容易添加或者删除节点. 比如如果我想新添加一个节点D, 我需要从节点 A, B, C中得部分槽到D上. 如果我想移除节点A,需要将A中的槽移到B和C节点上,然后将没有任何槽的A节点从集群中移除即可. 由于从一个节点将哈希槽移动到另一个节点并不会停止服务,所以无论添加删除或者改变某个节点的哈希槽的数量都不会造成集群不可用的状态.")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("无主模型")])]),s._v(" "),t("li",[t("p",[s._v("客户端请求任意一个节点，hash之后如果是映射到自己就直接返回数据，如果映射到不是自己就将实际存储数据的节点id返回给客户端，让客户端重定向到对应的节点取数据")])]),s._v(" "),t("li",[t("p",[s._v("每个节点都需要存储hash算法和所有节点的映射关系")])]),s._v(" "),t("li",[t("p",[s._v("数据分治很难实现事务")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("hashtag")]),s._v(" "),t("p",[s._v("{ooo}k1")]),s._v(" "),t("p",[s._v("{ooo}k2")])])])])]),s._v(" "),t("h2",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),t("h2",{attrs:{id:"主从复制模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主从复制模型"}},[s._v("#")]),s._v(" 主从复制模型")]),s._v(" "),t("p",[s._v("为了使在部分节点失败或者大部分节点无法通信的情况下集群仍然可用，所以集群使用了主从复制模型,每个节点都会有N-1个复制品.")]),s._v(" "),t("h2",{attrs:{id:"redis一致性保证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis一致性保证"}},[s._v("#")]),s._v(" Redis一致性保证")]),s._v(" "),t("p",[s._v("Redis 并不能保证数据的"),t("strong",[s._v("强一致性")]),s._v(". 这意味这在实际中集群在特定的条件下可能会丢失写操作，原因有如下两点")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("集群是用了异步复制，写操作的过程如下")]),s._v(" "),t("ul",[t("li",[s._v("客户端向主节点B写入一条命令.")]),s._v(" "),t("li",[s._v("主节点B向客户端回复命令状态.")]),s._v(" "),t("li",[s._v("主节点将写操作复制给他得从节点 B1, B2 和 B3")])])]),s._v(" "),t("li",[t("p",[s._v("集群出现了网络分区")]),s._v(" "),t("p",[s._v("客户端写入的节点由于网络分区已经被认为是掉线了，重新选择了主节点，从而丢失数据")])])]),s._v(" "),t("h2",{attrs:{id:"集群的弊端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群的弊端"}},[s._v("#")]),s._v(" 集群的弊端")]),s._v(" "),t("ul",[t("li",[s._v("部分命令不可用（keys、watch）")])]),s._v(" "),t("h2",{attrs:{id:"集群搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群搭建"}},[s._v("#")]),s._v(" 集群搭建")]),s._v(" "),t("h3",{attrs:{id:"官方集群支持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#官方集群支持"}},[s._v("#")]),s._v(" 官方集群支持")]),s._v(" "),t("h4",{attrs:{id:"命令创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令创建"}},[s._v("#")]),s._v(" 命令创建")]),s._v(" "),t("h5",{attrs:{id:"创建实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建实例"}},[s._v("#")]),s._v(" 创建实例")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("集群的最小选项配置文件")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("port 7000\ncluster-enabled yes\ncluster-config-file nodes.conf\ncluster-node-timeout 5000\nappendonly yes\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("cluster-enabled 选项用于开实例的集群模式")]),s._v(" "),t("p",[s._v("cluster-conf-file 选项则设定了保存节点配置文件的路径， 默认值为 nodes.conf.节点配置文件无须人为修改， 它由 Redis 集群在启动时创建， 并在有需要时自动进行更新")])]),s._v(" "),t("li",[t("p",[s._v("添加配置文件")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mkdir cluster-test\ncd cluster-test\nmkdir 7000 7001 7002 7003 7004 7005\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("在文件夹 7000 至 7005 中， 各创建一个 redis.conf 文件， 文件的内容可以使用上面示例的最少选项配置， 但记得将配置中的端口号从 7000 改为与文件夹名字相同的号码。")])]),s._v(" "),t("li",[t("p",[s._v("开启实例")]),s._v(" "),t("p",[t("img",{attrs:{src:e(590),alt:"image-20211009145112321"}})]),s._v(" "),t("p",[s._v("实例打印的日志显示， 因为 nodes.conf 文件不存在， 所以每个节点都为它自身指定了一个新的 ID ：")]),s._v(" "),t("p",[t("code",[s._v("59834:M 09 Oct 2021 14:50:17.008 * No cluster configuration found, I'm 87dab917a8fc09c47d2582ac450c8365a40aecee")])]),s._v(" "),t("p",[s._v("实例会一直使用同一个 ID ， 从而在集群中保持一个独一无二（unique）的名字。")]),s._v(" "),t("p",[s._v("按照同样的方法开启剩余的5个实例")])])]),s._v(" "),t("h5",{attrs:{id:"创建集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建集群"}},[s._v("#")]),s._v(" 创建集群")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("通过redis-trib.rb创建集群（v5以前）")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./redis-trib.rb create --replicas "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:7000 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:7001 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:7002 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:7003 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:7004 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:7005\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --replicas 1 表示我们希望为集群中的每个主节点创建一个从节点")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("blockquote",[t("p",[s._v("redis-trib 位于 Redis 源码的 src 文件夹中， 它是一个 Ruby 程序， 这个程序通过向实例发送特殊命令来完成创建新集群， 检查集群， 或者对集群进行重新分片（reshared）等工作")])])]),s._v(" "),t("li",[t("p",[s._v("通过redis-cli创建集群（v5及higher）")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("redis-cli --cluster create "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:7000 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:7001 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:7002 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:7003 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:7004 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:7005 --cluster-replicas "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --cluster-replicas 1 表示我们希望为集群中的每个主节点创建一个从节点")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])]),s._v(" "),t("p",[s._v("执行过程中会展示槽位分配方案，让你选择是否按照这个方案分配，选择yes后 执行结果如下")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("➜  ~ redis-cli --cluster create 127.0.0.1:7000 127.0.0.1:7001 127.0.0.1:7002 127.0.0.1:7003 127.0.0.1:7004 127.0.0.1:7005 --cluster-replicas 1\n>>> Performing hash slots allocation on 6 nodes...\nMaster[0] -> Slots 0 - 5460\nMaster[1] -> Slots 5461 - 10922\nMaster[2] -> Slots 10923 - 16383\nAdding replica 127.0.0.1:7004 to 127.0.0.1:7000\nAdding replica 127.0.0.1:7005 to 127.0.0.1:7001\nAdding replica 127.0.0.1:7003 to 127.0.0.1:7002\n>>> Trying to optimize slaves allocation for anti-affinity\n[WARNING] Some slaves are in the same host as their master\nM: fd116c19cd332d72c4025f80eb8bbac90868cc9c 127.0.0.1:7000\n   slots:[0-5460] (5461 slots) master\nM: 87dab917a8fc09c47d2582ac450c8365a40aecee 127.0.0.1:7001\n   slots:[5461-10922] (5462 slots) master\nM: 7356a44bf9141527e851b7b447fdfc204c05774a 127.0.0.1:7002\n   slots:[10923-16383] (5461 slots) master\nS: 06101da098ae8d52ab31b63de44fb9c4af07e216 127.0.0.1:7003\n   replicates 7356a44bf9141527e851b7b447fdfc204c05774a\nS: e9a610f702cde191f99484dc170fd48c5626a19e 127.0.0.1:7004\n   replicates fd116c19cd332d72c4025f80eb8bbac90868cc9c\nS: c9d23b834961984f22e6e199afadeb0a08691a22 127.0.0.1:7005\n   replicates 87dab917a8fc09c47d2582ac450c8365a40aecee\nCan I set the above configuration? (type 'yes' to accept): yes\n>>> Nodes configuration updated\n>>> Assign a different config epoch to each node\n>>> Sending CLUSTER MEET messages to join the cluster\nWaiting for the cluster to join\n..\n>>> Performing Cluster Check (using node 127.0.0.1:7000)\nM: fd116c19cd332d72c4025f80eb8bbac90868cc9c 127.0.0.1:7000\n   slots:[0-5460] (5461 slots) master\n   1 additional replica(s)\nS: c9d23b834961984f22e6e199afadeb0a08691a22 127.0.0.1:7005\n   slots: (0 slots) slave\n   replicates 87dab917a8fc09c47d2582ac450c8365a40aecee\nS: e9a610f702cde191f99484dc170fd48c5626a19e 127.0.0.1:7004\n   slots: (0 slots) slave\n   replicates fd116c19cd332d72c4025f80eb8bbac90868cc9c\nS: 06101da098ae8d52ab31b63de44fb9c4af07e216 127.0.0.1:7003\n   slots: (0 slots) slave\n   replicates 7356a44bf9141527e851b7b447fdfc204c05774a\nM: 87dab917a8fc09c47d2582ac450c8365a40aecee 127.0.0.1:7001\n   slots:[5461-10922] (5462 slots) master\n   1 additional replica(s)\nM: 7356a44bf9141527e851b7b447fdfc204c05774a 127.0.0.1:7002\n   slots:[10923-16383] (5461 slots) master\n   1 additional replica(s)\n[OK] All nodes agree about slots configuration.\n>>> Check for open slots...\n>>> Check slots coverage...\n[OK] All 16384 slots covered.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br")])]),t("h4",{attrs:{id:"utils-create-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#utils-create-cluster"}},[s._v("#")]),s._v(" utils/create-cluster")]),s._v(" "),t("h3",{attrs:{id:"-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[s._v("#")])]),s._v(" "),t("p",[s._v("无主模型，多节点的cluster")]),s._v(" "),t("p",[s._v("官方脚本：utils/create-cluster/")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("配置&搭建")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("修改配置启动脚本")]),s._v(" "),t("p",[s._v("vi ./create-cluster")])]),s._v(" "),t("li",[t("p",[s._v("启动")]),s._v(" "),t("p",[s._v("./create-cluster start")]),s._v(" "),t("img",{staticStyle:{zoom:"67%"},attrs:{src:e(591),alt:"image-20210715100758179"}})]),s._v(" "),t("li",[t("p",[s._v("分槽位")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("脚本自动分槽位")]),s._v(" "),t("p",[s._v("./create-cluster create")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("➜  create-cluster ./create-cluster create\n>>> Performing hash slots allocation on 6 nodes...\nMaster[0] -> Slots 0 - 5460\nMaster[1] -> Slots 5461 - 10922\nMaster[2] -> Slots 10923 - 16383\nAdding replica 127.0.0.1:30005 to 127.0.0.1:30001\nAdding replica 127.0.0.1:30006 to 127.0.0.1:30002\nAdding replica 127.0.0.1:30004 to 127.0.0.1:30003\n>>> Trying to optimize slaves allocation for anti-affinity\n[WARNING] Some slaves are in the same host as their master\nM: 2d552911484d6f5954f240457d876a6b5fa1b274 127.0.0.1:30001\n   slots:[0-5460] (5461 slots) master\nM: 616223b6cc540e0d25649a22b84d98b04cc0af31 127.0.0.1:30002\n   slots:[5461-10922] (5462 slots) master\nM: 1c74e104764f70555293efe4b66020e679b06eb0 127.0.0.1:30003\n   slots:[10923-16383] (5461 slots) master\nS: b7ce6fcf77fc6625c3d7d90b39e4c8e346595731 127.0.0.1:30004\n   replicates 616223b6cc540e0d25649a22b84d98b04cc0af31\nS: 7fbcb7abf5308680549519d6c531dfee8e873685 127.0.0.1:30005\n   replicates 1c74e104764f70555293efe4b66020e679b06eb0\nS: 13b1a1acc9ef359b72a4fd9026bb8127d3f20870 127.0.0.1:30006\n   replicates 2d552911484d6f5954f240457d876a6b5fa1b274\nCan I set the above configuration? (type 'yes' to accept): yes\n>>> Nodes configuration updated\n>>> Assign a different config epoch to each node\n>>> Sending CLUSTER MEET messages to join the cluster\nWaiting for the cluster to join\n..\n>>> Performing Cluster Check (using node 127.0.0.1:30001)\nM: 2d552911484d6f5954f240457d876a6b5fa1b274 127.0.0.1:30001\n   slots:[0-5460] (5461 slots) master\n   1 additional replica(s)\nS: 13b1a1acc9ef359b72a4fd9026bb8127d3f20870 127.0.0.1:30006\n   slots: (0 slots) slave\n   replicates 2d552911484d6f5954f240457d876a6b5fa1b274\nM: 616223b6cc540e0d25649a22b84d98b04cc0af31 127.0.0.1:30002\n   slots:[5461-10922] (5462 slots) master\n   1 additional replica(s)\nS: b7ce6fcf77fc6625c3d7d90b39e4c8e346595731 127.0.0.1:30004\n   slots: (0 slots) slave\n   replicates 616223b6cc540e0d25649a22b84d98b04cc0af31\nM: 1c74e104764f70555293efe4b66020e679b06eb0 127.0.0.1:30003\n   slots:[10923-16383] (5461 slots) master\n   1 additional replica(s)\nS: 7fbcb7abf5308680549519d6c531dfee8e873685 127.0.0.1:30005\n   slots: (0 slots) slave\n   replicates 1c74e104764f70555293efe4b66020e679b06eb0\n[OK] All nodes agree about slots configuration.\n>>> Check for open slots...\n>>> Check slots coverage...\n[OK] All 16384 slots covered.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("手动分")]),s._v(" "),t("p",[s._v("redis-cli --cluster create 127.0.0.1:30001 127.0.0.1:30002 127.0.0.1:30003 127.0.0.1:30004 127.0.0.1:30005 127.0.0.1:30006 --cluster-replicas")])])])]),s._v(" "),t("li",[t("p",[s._v("客户端连接")]),s._v(" "),t("p",[s._v("redis-cli -c -p 30001")])]),s._v(" "),t("li",[t("p",[s._v("关闭节点")]),s._v(" "),t("p",[s._v("./create-cluster stop")])]),s._v(" "),t("li",[t("p",[s._v("清理")]),s._v(" "),t("p",[s._v("./create-cluster clean")])]),s._v(" "),t("li",[t("p",[s._v("其他命令")]),s._v(" "),t("p",[s._v("redis-cli --cluster help")])])])]),s._v(" "),t("li",[t("p",[s._v("测试")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("直接连接端口redis-cli -p 30001")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("操作的key不在当前节点的槽位中时会报错")]),s._v(" "),t("p",[t("code",[s._v("(error) MOVED 449 127.0.0.1:30001")])])]),s._v(" "),t("li",[t("p",[s._v("可以正常开启事务，如果事务中操作的key都在同一个槽位可以成功，否则失败")]),s._v(" "),t("p",[t("code",[s._v("(error) CROSSSLOT Keys in request don't hash to the same slot")])])]),s._v(" "),t("li",[t("p",[s._v("在匹配槽位的实例上操作支持hasttag事务，但需要在指定的槽位端口上")])])])]),s._v(" "),t("li",[t("p",[s._v("集群方式连接redis-cli -c -p 30001")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("开启事务操作不同的key")]),s._v(" "),t("p",[s._v("操作不同端口槽位的数据时会重定向到对应的端口，再执行exec时会提示没有开启事务")]),s._v(" "),t("p",[t("code",[s._v("(error) ERR EXEC without MULTI")])])]),s._v(" "),t("li",[t("p",[s._v("支持")])])])])])])]),s._v(" "),t("h3",{attrs:{id:"第三方代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三方代理"}},[s._v("#")]),s._v(" 第三方代理")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/rebaic/article/details/76384028",target:"_blank",rel:"noopener noreferrer"}},[s._v("常见几个代理的对比"),t("OutboundLink")],1)])]),s._v(" "),t("h4",{attrs:{id:"predixy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#predixy"}},[s._v("#")]),s._v(" predixy")]),s._v(" "),t("h5",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),t("ul",[t("li",[s._v("github:"),t("a",{attrs:{href:"https://github.com/joyieldInc/predixy",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/joyieldInc/predixy"),t("OutboundLink")],1)])]),s._v(" "),t("h5",{attrs:{id:"环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[s._v("#")]),s._v(" 环境搭建")]),s._v(" "),t("h4",{attrs:{id:"twemproxy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#twemproxy"}},[s._v("#")]),s._v(" twemproxy")]),s._v(" "),t("h5",{attrs:{id:"概述-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述-2"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),t("ul",[t("li",[s._v("github:"),t("a",{attrs:{href:"https://github.com/twitter/twemproxy",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/twitter/twemproxy"),t("OutboundLink")],1)])]),s._v(" "),t("h5",{attrs:{id:"环境搭建-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建-2"}},[s._v("#")]),s._v(" 环境搭建")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("通过源码构建twemproxy")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@github.com:twitter/twemproxy.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" twemproxy\nautoreconf -fvi\n./configure --enable-debug"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("full\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\nsrc/nutcracker -h\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("将twemproxy配置成服务")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/twemproxy\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将官方准备的脚本拷贝到/etc/init.d中")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" scripts/nutcracker.init /etc/init.d/twemproxy\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/init.d\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 增加可执行权限")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x twemproxy\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/twemproxy\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /etc/nutcracker\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" conf/* /etc/nutcracker\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("修改配置conf/nutcracker.yml")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("alpha")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("listen")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 127.0.0.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22121")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" fnv1a_64\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("distribution")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ketama\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("auto_eject_hosts")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("redis")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server_retry_timeout")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server_failure_limit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("servers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 127.0.0.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("6379"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 127.0.0.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("6380"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("启动需要代理的Redis实例")]),s._v(" "),t("p",[s._v("参考Redis安装与配置启动需要代理的Redis实例，如：redis_6379,redis_6380")])]),s._v(" "),t("li",[t("p",[s._v("启动twemproxy")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" twemproxy start \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 也可以不用将twemproxy配置成服务，直接通过可执行程序制定配置文件启动")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./src/nutcracker -c conf/nutcracker.yml")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"集群使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群使用"}},[s._v("#")]),s._v(" 集群使用")]),s._v(" "),t("h3",{attrs:{id:"redis-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-cli"}},[s._v("#")]),s._v(" redis-cli")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('$ redis-cli -c -p 7000\nredis 127.0.0.1:7000> set foo bar\n-> Redirected to slot [12182] located at 127.0.0.1:7002\nOK\nredis 127.0.0.1:7002> set hello world\n-> Redirected to slot [866] located at 127.0.0.1:7000\nOK\nredis 127.0.0.1:7000> get foo\n-> Redirected to slot [12182] located at 127.0.0.1:7002\n"bar"\nredis 127.0.0.1:7002> get hello\n-> Redirected to slot [866] located at 127.0.0.1:7000\n"world"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h3",{attrs:{id:"redis-rb-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-rb-cluster"}},[s._v("#")]),s._v(" redis-rb-cluster")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("github:"),t("a",{attrs:{href:"https://github.com/antirez/redis-rb-cluster",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/antirez/redis-rb-cluster"),t("OutboundLink")],1)])]),s._v(" "),t("li",[t("p",[s._v("运行example")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git clone https://github.com/antirez/redis-rb-cluster\ncd redis-rb-cluster\nruby example.rb\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("执行脚本报错")]),s._v(" "),t("p",[t("code",[s._v("<internal:/usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/rubygems/core_ext/kernel_require.rb>:85:in")]),s._v("require': cannot load such file -- redis (LoadError)`")]),s._v(" "),t("blockquote",[t("p",[s._v("原因：ruby环境未安装Redis")]),s._v(" "),t("p",[s._v("解决方案：gem install redis")])])])]),s._v(" "),t("h2",{attrs:{id:"集群重新分片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群重新分片"}},[s._v("#")]),s._v(" 集群重新分片")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("redis-trib.rb")])]),s._v(" "),t("li",[t("p",[s._v("redis-cli")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("redis-cli --cluster reshard <host>:<port> --cluster-from <node-id> --cluster-to <node-id> --cluster-slots <number of slots> --cluster-yes\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("redis-")])])]),s._v(" "),t("h2",{attrs:{id:"测试故障转移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试故障转移"}},[s._v("#")]),s._v(" 测试故障转移")]),s._v(" "),t("h2",{attrs:{id:"手动故障转移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动故障转移"}},[s._v("#")]),s._v(" 手动故障转移")]),s._v(" "),t("h2",{attrs:{id:"添加一个新节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加一个新节点"}},[s._v("#")]),s._v(" 添加一个新节点")]),s._v(" "),t("h2",{attrs:{id:"添加一个从节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加一个从节点"}},[s._v("#")]),s._v(" 添加一个从节点")]),s._v(" "),t("h2",{attrs:{id:"移除一个节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移除一个节点"}},[s._v("#")]),s._v(" 移除一个节点")]),s._v(" "),t("h2",{attrs:{id:"从节点迁移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从节点迁移"}},[s._v("#")]),s._v(" 从节点迁移")])])}),[],!1,null,null,null);a.default=n.exports}}]);