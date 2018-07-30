# 企业管理后台

> 项目基于[create-react-app](https://github.com/facebook/create-react-app)项目


### 依赖模块
<span style="color: rgb(184,49,47);">项目是用create-react-app创建的，主要还是列出新加的功能依赖包</span>

<span style="color: rgb(184,49,47);">点击名称可跳转相关网站😄😄</span>

- [react@15.5.0](https://facebook.github.io/react/)
- [react-router@3.0.2](https://react-guide.github.io/react-router-cn/)(<span style="color: rgb(243,121,52);">react路由,4.x的差异还是比较大，暂时还是3.x的版本</span>)
- [antd@3.6.2](https://ant.design/index-cn)(<span style="color: rgb(243,121,52);">蚂蚁金服开源的react ui组件框架</span>)
- [axios@0.16.1](https://github.com/mzabriskie/axios)(<span style="color: rgb(243,121,52);">http请求模块，可用于前端任何场景，很强大👍</span>)
- [echarts-for-react@1.2.0](https://github.com/hustcc/echarts-for-react)(<span style="color: rgb(243,121,52);">可视化图表，别人基于react对echarts的封装，足够用了</span>)
- [recharts@0.22.3](http://recharts.org/#/zh-CN/)(<span style="color: rgb(243,121,52);">另一个基于react封装的图表，个人觉得是没有echarts好用</span>)
- [nprogress@0.2.0](https://github.com/rstacruz/nprogress)(<span style="color: rgb(243,121,52);">顶部加载条，蛮好用👍</span>)
- [react-draft-wysiwyg@1.9.6](https://github.com/jpuri/react-draft-wysiwyg)(<span style="color: rgb(243,121,52);">别人基于react的富文本封装，如果找到其他更好的可以替换</span>)
- [react-draggable@2.2.4](https://github.com/mzabriskie/react-draggable)(<span style="color: rgb(243,121,52);">拖拽模块，找了个简单版的</span>)
- [screenfull@3.2.0](https://github.com/sindresorhus/screenfull.js/)(<span style="color: rgb(243,121,52);">全屏插件</span>)
- [photoswipe@4.1.2](https://github.com/dimsemenov/photoswipe)(<span style="color: rgb(243,121,52);">图片弹层查看插件，不依赖jQuery，还是蛮好用👍</span>)
- [animate.css@3.5.1](http://daneden.me/animate)(<span style="color: rgb(243,121,52);">css动画库</span>)
- 其他小细节省略

### 功能模块
<!--more-->

- 企业管理
    - 基本信息
    - 人才信息
    - 住宿信息
- 数据直报
- 账单明细
- 报修反馈

### 代码目录
```js
+-- build/                                  ---打包的文件目录
+-- config/                                 ---npm run eject 后的配置文件目录
+-- public/                                 
|   --- index.html							---首页入口html文件
|   --- favicon.ico							---网页图标
|   --- manifest.json						---项目基本信息
+-- scripts/                                 
|   --- index.html							---首页入口html文件
|   --- favicon.ico							---网页图标
|   --- manifest.json						---项目基本信息
+-- src/                                    ---核心代码目录
|   +-- axios                               ---http请求存放目录
|   |    --- tools.js
|   +-- components                          ---业务组件存放目录
|   |    +-- business                       ---企业信息组件
|   |    |    --- ...   
|   |    +-- check                          ---图表组件
|   |    |    --- ...   
|   |    +-- maintain                       ---首页组件
|   |    |    --- ...   
|   |    +-- modules                        ---公共组件
|   |    |    --- ...   
|   |    +-- pages                          ---页面组件
|   |    |    --- ...  
|   |    +-- report                         ---表格组件
|   |    |    --- ...   
|   |    --- BreadcrumbCustom.jsx           ---面包屑组件
|   |    --- HeaderCustom.jsx               ---顶部导航组件
|   |    --- Page.jsx                       ---页面容器
|   |    --- SiderCustom.jsx                ---左边菜单组件
|   +-- constants                           ---目录路由文件
|   |   --- menus.js
|   +-- mock                                ---mock数据信息
|   |   --- ...
|   +-- routes                              ---路由配置信息
|   |   --- ...
|   --- App.js                              ---组件入口文件
|   --- index.js                            ---项目的整体js入口文件，包括路由配置等
--- .env                                    ---启动项目自定义端口配置文件
--- .eslintrc                               ---自定义eslint配置文件，包括增加的react jsx语法限制
--- package.json                                    
```
### 安装运行
##### 1.下载或克隆项目源码
##### 2.npm安装相关包文件(国内建议增加淘宝镜像源，不然很慢，你懂的😁)
```js
npm i
```
##### 3.启动项目
```js
npm start
```
##### 4.打包项目
```js
npm run build
```
