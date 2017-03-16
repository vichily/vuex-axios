## VUE全家桶，都有很牵强的用到

#### vue2

Vue.js（读音 /vjuː/，类似于 view） 是一套构建用户界面的渐进式框架。

[vue.js](http://cn.vuejs.org/)

#### vue-router

应用的路由映射

[router](https://router.vuejs.org/zh-cn/)

#### vuex

Vuex 是一个专为 Vue.js应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

[vuex](https://vuex.vuejs.org/zh-cn/)

#### axios 

基于 Promise 的 HTTP 请求客户端，可同时在浏览器和 node.js 中使用

[axios](https://www.awesomes.cn/repo/mzabriskie/axios)
[axios介绍](https://ykloveyxk.github.io/2017/02/25/axios全攻略/)


#### UI

[muse UI](https://museui.github.io/)
[mint UI](https://mint-ui.github.io/#!/zh-cn)

## 项目图片展示
![](https://github.com/vichily/vuex-axios/blob/master/img/1.png)
![](https://github.com/vichily/vuex-axios/blob/master/img/11.png)
![](https://github.com/vichily/vuex-axios/blob/master/img/22.png)
![](https://github.com/vichily/vuex-axios/blob/master/img/33.png)
![](https://github.com/vichily/vuex-axios/blob/master/img/44.png)
![](https://github.com/vichily/vuex-axios/blob/master/img/55.png)

### [DEMO地址](http://www.vichily.win/#/)

### [源码地址](https://github.com/vichily/vuex-axios)

扫码观看
![](https://github.com/vichily/vuex-axios/blob/master/img/wem.png)

## 目录结构

    |-- build                                  //webpack配置文件
    |-- config                                 // 项目打包路径
    |-- static                                 // 静态文件目录
    |-- src                                    // 源码目录
    |   |-- assets
    |   |   |-- css
    |   |   |   |-- main.scss                  // scss
    |   |-- components                         // 组件
    |   |-- data
    |   |   |-- index.js                       // 请求数据
    |   |-- router
    |   |   |-- index.js                       // 路由配置
    |   |-- store
    |   |   |-- modules                        // vuex模块
    |   |   |-- index.js                       // vuex主文件
    |   |-- App.vue                            // 页面入口
    |   |-- main.js                            // 程序入口
    |-- .babelrc                               // ES6语法编译配置
    |-- .editorconfig                          // 代码编写规格
    |-- .gitignore                             // push忽略文件
    |-- index.html                             // 入口html页面
    |-- package.json                           // 依赖及配置
    |-- README.md                              // 简介

## 使用
```
npm i               // 安装依赖
npm run dev         // 本地开发
npm run build       // 生产部署
```