# 前端开发的概念

## Q1

名词解释，前端开发的语境中，这些东西都是什么？

越精简越好，用一两句话你表现出的理解，例如：`Node.js 是 JS 的一个 runtime`  
（不了解的可以跳过）

请在下面的表格中作答：

| 名词           | 是什么               |
| :------------- | :------------------- |
| Node.js        | 是 一个js运行的环境，某些程度上类似apache或者nginx的这种web服务器（但不能说完全一致，nginx很多时候用来做负载均衡或者反向代理）。我的知识库当中，js的发展有两次质的飞跃，一次是 chrome的v8引擎的出现，还有一次是node的问世，node他让js代码不仅可以运行于客户端（浏览器），也可以运行于服务端。|
| npm            |  包管理工具 |
| npx            | 是 npm的升级版，功能更强大一点                |
| nvm            | 是 node版本管理工具，可以切换环境当中的node版本              |
| nrm            | 是 npm镜像源的管理工具               |
| yarn           | 是 跟npm差不多的包管理工具，特点是比npm快很多，印象中它底层好像用了什么算法做了一定的优化               |
| React          | 是 现流行的三大js框架之一，facebook团队开源项目。提到它，最重要的一点就是数据驱动视图，其次是前端函数式编程，印象很深的就是它底层的diff算法                |
| Vue            | 是 三大js框架之一，作者是尤雨溪大大以及他背后的团队。2.x版本的它有很多地方和react相像，比如说虚拟dom，它和angular 1也有相像的地方，比如说双向绑定，特色应该是它的监听者模式吧，以及computed那些函数。                |
| Flux           | 是 react的一种状态管理方式                |
| Mobx           | 是 react的一种状态管理方式                |
| MVVM           | 是 一种模式，分为三个部分：m（model数据）、v（view视图）、vm（view-model、观察者中间程序）                |
| TDD            | 是 测试驱动开发，单元测试用例               |
| Jest/Mocha     | 是 js单元测试工具                |
| node_modules   | 是 nodejs插件包的目录               |
| package.json   | 是 项目的插件包以及一些针对项目的node指令的配置文件                |
| ECMAScript     | 是 简称es，是js的语法标准，它和dom、bom共同组成了js               |
| Electron       | 是 跨平台桌面端应用开发工具，web技术开发桌面端应用               |
| Babel          | 是 js语法转义插件，es6语法转es5语法常用插件               |
| Webpack        | 是 前端模块打包工具，               |
| SSR            | 是 服务端渲染，相对于单页面应用异步加载渲染更符合seo优化                |
| BFF            | 是 ……                |
| Serverless     | 是 无服务架构               |
| PWA            | 是 渐进式web应用               |
| V8             | 是 chrome的js引擎，也可以说是js解释器                |
| libuv          | 是 ……                |
| Stack Overflow | 是 ……                |
| Deno           | 是 node原开发团队新开源的项目，是node的升级版，解决了一些node的致命短板                |

## Q2

你平时从哪里了解前端的技术生态？
只需列出 3~10 条即可


> - Youtube 的几个频道: Fireship、Traversy Media、DesignCourse …
> - 掘金、知乎

答：掘金、前端群、大佬博客、infoQ、一些程序员的订阅号、bat等大公司的前端开发团队博客、知乎
例如：
