(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{663:function(s,t,a){"use strict";a.r(t);var r=a(3),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"会话管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#会话管理"}},[s._v("#")]),s._v(" 会话管理")]),s._v(" "),a("h2",{attrs:{id:"什么是会话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是会话"}},[s._v("#")]),s._v(" 什么是会话")]),s._v(" "),a("h3",{attrs:{id:"session"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session"}},[s._v("#")]),s._v(" Session")]),s._v(" "),a("h3",{attrs:{id:"cookies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookies"}},[s._v("#")]),s._v(" Cookies")]),s._v(" "),a("h3",{attrs:{id:"token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token"}},[s._v("#")]),s._v(" Token")]),s._v(" "),a("h2",{attrs:{id:"浏览器同源策略与跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器同源策略与跨域"}},[s._v("#")]),s._v(" 浏览器同源策略与跨域")]),s._v(" "),a("h3",{attrs:{id:"同源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同源"}},[s._v("#")]),s._v(" 同源")]),s._v(" "),a("blockquote",[a("p",[s._v("浏览器的同源策略是一种安全功能，同源策略限制了从同一个源加载的文档或脚本与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。所以a.com下的js脚本采用ajax读取b.com里面的文件数据是会报错的。")])]),s._v(" "),a("p",[a("strong",[s._v("域名、协议、端口都会造成不同源")])]),s._v(" "),a("h3",{attrs:{id:"跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域"}},[s._v("#")]),s._v(" 跨域")]),s._v(" "),a("p",[a("code",[s._v("<script>、<img> 、<iframe>、<link>、<video>这些标签都可以发起跨域请求")])]),s._v(" "),a("p",[s._v("解决跨域访问的问题常见的有两种：一种是jsonp，一种是CORS")]),s._v(" "),a("h4",{attrs:{id:"jsonp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsonp"}},[s._v("#")]),s._v(" jsonp")]),s._v(" "),a("p",[s._v("此方法只能发起GET请求，通过jsonp发送的请求，会随带 cookie 一起发送。")]),s._v(" "),a("h5",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),a("p",[s._v("通过利用script标签的src属性去请求跨域的接口返回一个js文件，浏览器拿到之后会执行这个js，并且调用定义在当前页面的一个回调函数从而把返回的数据传入")]),s._v(" "),a("p",[a("code",[s._v('<script type="text/javascript" src="跨域的url"><\/script>')])]),s._v(" "),a("h5",{attrs:{id:"jquery-jsonp的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-jsonp的实现"}},[s._v("#")]),s._v(" Jquery jsonp的实现")]),s._v(" "),a("p",[a("strong",[s._v("Jquery的jsonp用法")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    data"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" reqData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    dataType"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jsonp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    contentType"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'application/json;charset=UTF-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    jsonp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'callback'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    async"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("success")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("resp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("通过浏览器开发者工具查看具体请求信息可以发现")]),s._v(" "),a("p",[a("strong",[s._v("发送的请求url")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://xxx.com/user/info?callback=jQuery21109365228251203845_1632809145711&name=xxx&&_=1632809145714\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("请求返回结果")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('jQuery21109365228251203845_1632809145711({"id":1001,"name":"xxx"})\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("可以看出jQuery在发送请求的时候定义了一个方法，名为“jQuery21109365228251203845_1632809145711”，并将方法名以callback为方法名传给了服务端，服务端返回一段js，调用之前定义的方法，并把参数传递过来从而实现跨域访问")]),s._v(" "),a("h4",{attrs:{id:"cors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[s._v("#")]),s._v(" CORS")]),s._v(" "),a("p",[s._v("在浏览器中指定Origin来源，如果在服务器接受范围，请求则成功")]),s._v(" "),a("p",[s._v("CORS与JSONP的使用目的相同，但是比JSONP更强大。")]),s._v(" "),a("p",[s._v("JSONP只支持"),a("code",[s._v("GET")]),s._v("请求，CORS支持所有类型的HTTP请求。JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据。")]),s._v(" "),a("h2",{attrs:{id:"会话管理的框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#会话管理的框架"}},[s._v("#")]),s._v(" 会话管理的框架")]),s._v(" "),a("h3",{attrs:{id:"shiro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shiro"}},[s._v("#")]),s._v(" Shiro")]),s._v(" "),a("blockquote",[a("p",[s._v("Shiro 是 Java 的一个安全框架。目前，使用 Apache Shiro 的人越来越多，因为它相 当简单，对比 Spring\nSecurity，可能没有 Spring Security 做的功能强大，但是在实际工作时 可能并不需要那么复杂的东西，所以使用小而简单的Shiro 就足够了。")])]),s._v(" "),a("h4",{attrs:{id:"核心功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心功能"}},[s._v("#")]),s._v(" 核心功能")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("Authentication")])]),s._v(" "),a("p",[s._v("身份认证/登录，验证用户是不是拥有相应的身份；")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("Authorization")])]),s._v(" "),a("p",[s._v("授权，即权限验证，验证某个已认证的用户是否拥有某个权限；即判断用户是否能做事情，常见的如：验证某个用户是否拥有某个角色。或者细粒度的验证某个用户对某个资源是否具有某个权限；")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("Session Manager")])]),s._v(" "),a("p",[s._v("会话管理，即用户登录后就是一次会话，在没有退出之前，它的所有信息都在会话中；会话可以是普通JavaSE环境的，也可以是如Web环境的；")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("Cryptography")])]),s._v(" "),a("p",[s._v("加密（解密 摘要算法），保护数据的安全性，如密码加密存储到数据库，而不是明文存储；")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("Web Support")])]),s._v(" "),a("p",[s._v("Web支持，可以非常容易的集成到Web环境；")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("Caching")])]),s._v(" "),a("p",[s._v("缓存，比如用户登录后，其用户信息、拥有的角色/权限不必每次去查，这样可以提高效率；")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("Concurrency")])]),s._v(" "),a("p",[s._v("shiro支持多线程应用的并发验证，即如在一个线程中开启另一个线程，能把权限自动传播过去；")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("Testing")])]),s._v(" "),a("p",[s._v("提供测试支持；")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("Run As")])]),s._v(" "),a("p",[s._v("允许一个用户假装为另一个用户（如果他们允许）的身份进行访问；")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("Remember Me")])]),s._v(" "),a("p",[s._v("记住我，这个是非常常见的功能，即一次登录后，下次再来的话不用登录了。")])])]),s._v(" "),a("h4",{attrs:{id:"组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[s._v("#")]),s._v(" 组件")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("Subject")])]),s._v(" "),a("p",[s._v("主体，代表了当前“用户”，这个用户不一定是一个具体的人，与当前应用交互的任何东西都是Subject，如网络爬虫，机器人等；即一个抽象概念；所有Subject都绑定到SecurityManager，与Subject的所有交互都会委托给SecurityManager；可以把Subject认为是一个门面；SecurityManager才是实际的执行者；")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("SecurityManager")])]),s._v(" "),a("p",[s._v("安全管理器；即所有与安全有关的操作都会与SecurityManager交互；且它管理着所有Subject；可以看出它是Shiro的核心，它负责与后边介绍的其他组件进行交互，如果学习过SpringMVC，你可以把它看成DispatcherServlet前端控制器；")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("Realm")])]),s._v(" "),a("p",[s._v("域，Shiro从从Realm获取安全数据（如用户、角色、权限），就是说SecurityManager要验证用户身份，那么它需要从Realm获取相应的用户进行比较以确定用户身份是否合法；也需要从Realm得到用户相应的角色/权限进行验证用户是否能进行操作；可以把Realm看成DataSource，即安全数据源。")])])]),s._v(" "),a("h3",{attrs:{id:"spring-security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-security"}},[s._v("#")]),s._v(" Spring security")]),s._v(" "),a("blockquote",[a("p",[s._v("Spring Security是一个能够为基于Spring的企业应用系统提供声明式的安全访问控制解决方案的安全框架。它提供了一组可以在Spring应用上下文中配置的Bean，充分利用了Spring IoC，DI（控制反转Inversion of Control ,DI:Dependency Injection 依赖注入）和AOP（面向切面编程）功能，为应用系统提供声明式的安全访问控制功能，减少了为企业系统安全控制编写大量重复代码的工作。")]),s._v(" "),a("ul",[a("li",[s._v("它是一个轻量级的安全框架，它确保基于Spring的应用程序提供身份验证和授权支持。")]),s._v(" "),a("li",[s._v("它与Spring MVC有很好地集成，并配备了流行的安全算法实现捆绑在一起。安全主要包括两个操作“认证”与“验证”（有时候也会叫做权限控制）。")]),s._v(" "),a("li",[s._v("“认证”是为用户建立一个其声明的角色的过程，这个角色可以一个用户、一个设备或者一个系统。“验证”指的是一个用户在你的应用中能够执行某个操作。在到达授权判断之前，角色已经在身份认证过程中建立了。")]),s._v(" "),a("li",[s._v("Spring Security 前身是Acegi Security")])])]),s._v(" "),a("h3",{attrs:{id:"sso"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sso"}},[s._v("#")]),s._v(" SSO")]),s._v(" "),a("blockquote",[a("p",[s._v("SSO 是英文 Single Sign On 的缩写，翻译过来就是单点登录")])]),s._v(" "),a("h3",{attrs:{id:"session共享"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session共享"}},[s._v("#")]),s._v(" Session共享")]),s._v(" "),a("h3",{attrs:{id:"oauth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oauth"}},[s._v("#")]),s._v(" Oauth")]),s._v(" "),a("blockquote",[a("p",[s._v("OAuth在”客户端”与”服务提供商”之间，设置了一个授权层（authorization layer）。”客户端”不能直接登录”服务提供商”，只能登录授权层，以此将用户与客户端区分开来。”客户端”登录授权层所用的令牌（token），与用户的密码不同。用户可以在登录的时候，指定授权层令牌的权限范围和有效期。")]),s._v(" "),a("p",[s._v("“客户端”登录授权层以后，”服务提供商”根据令牌的权限范围和有效期，向”客户端”开放用户储存的资料。")]),s._v(" "),a("ul",[a("li",[s._v("Spring Social")]),s._v(" "),a("li",[s._v("Spring Session")]),s._v(" "),a("li",[s._v("JWT")])])]),s._v(" "),a("h3",{attrs:{id:"openid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#openid"}},[s._v("#")]),s._v(" OpenID")]),s._v(" "),a("blockquote",[a("p",[s._v("系统的第一部分是身份验证，即如何通过 URI 来认证用户身份。目前的网站都是依靠用户名和密码来登录认证，这就意味着大家在每个网站都需要注册用户名和密码，即便你使用的是同样的密码。如果使用 OpenID ，你的网站地址（URI）就是你的用户名，而你的密码安全的存储在一个 OpenID 服务网站上（你可以自己建立一个 OpenID 服务网站，也可以选择一个可信任的 OpenID 服务网站来完成注册）。")])]),s._v(" "),a("h3",{attrs:{id:"cas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cas"}},[s._v("#")]),s._v(" CAS")]),s._v(" "),a("blockquote",[a("p",[s._v("中心认证服务（Central Authentication Service）SSO 仅仅是一种架构，一种设计，而 CAS 则是实现 SSO 的一种手段")])]),s._v(" "),a("h2",{attrs:{id:"安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全"}},[s._v("#")]),s._v(" 安全")]),s._v(" "),a("h3",{attrs:{id:"csrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[s._v("#")]),s._v(" CSRF")]),s._v(" "),a("blockquote",[a("p",[s._v("CSRF (Cross Site Request Forgery)攻击，中文名：跨站请求伪造。其原理是攻击者构造网站后台某个功能接口的请求地址，诱导用户去点击或者用特殊方法让该请求地址自动加载。用户在登录状态下这个请求被服务端接收后会被误以为是用户合法的操作。对于 GET 形式的接口地址可轻易被攻击，对于 POST 形式的接口地址也不是百分百安全，攻击者可诱导用户进入带 Form 表单可用POST方式提交参数的页面。")])]),s._v(" "),a("h4",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),a("ul",[a("li",[s._v("验证码（图形验证）")]),s._v(" "),a("li",[s._v("尽量全站用post请求")]),s._v(" "),a("li",[s._v("第一次登陆之后增加一个hash值，下次请求的时候带上hash值")]),s._v(" "),a("li",[s._v("Spring Security内置了解决CSRF的机制")])]),s._v(" "),a("h3",{attrs:{id:"xss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss"}},[s._v("#")]),s._v(" XSS")])])}),[],!1,null,null,null);t.default=e.exports}}]);