# webpackcli

> 一个 Vue.js 项目

## 运行项目

``` bash
# install dependencies
npm install

# serve with hot reload at http://localhost:8080/#/home
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

目录结构介绍

```
|-webpackcli
  |-.git
  |-build					//webpack打包
  |  |-build.js
  |  |-check-versions.js
  |  |-logo.png
  |  |-utils.js
  |  |-vue-loader.conf.js
  |  |-webpack.base.conf.js
  |  |-webpack.dev.conf.js
  |  |-webpack.prod.conf.js
  |-config					
  |  |-dev.env.js
  |  |-index.js	
  |  |-prod.env.js	
  |-index.html					// 入口html文件	
  |-package.json				// 项目及工具的依赖配置文件
  |-README.md					//项目介绍文档
  |-src							// 源码目录
  |  |-App.vue					// 页面入口文件
  |  |-assets					// 静态资源目录
  |  |  |-1.jpg
  |  |  |-2.jpg
  |  |  |-3.jpg
  |  |  |-images
  |  |  |  |-menu1.png
  |  |  |  |-menu2.png
  |  |  |  |-menu3.png
  |  |  |  |-menu4.png
  |  |  |  |-menu5.png
  |  |  |  |-menu6.png
  |  |  |-logo.png
  |  |  |-mui					//mui框架依赖文件
  |  |  |  |-css
  |  |  |  |  |-icons-extra.css
  |  |  |  |  |-mui.css
  |  |  |  |  |-mui.min.css
  |  |  |  |-fonts
  |  |  |  |  |-mui-icons-extra.ttf
  |  |  |  |  |-mui.ttf
  |  |  |  |-js
  |  |  |  |  |-mui.js
  |  |  |  |  |-mui.min.js
  |  |-components				    //组件
  |  |  |-tabbar
  |  |  |  |-comment.vue		    //评论
  |  |  |  |-HomeContainer.vue		//主页
  |  |  |  |-MemberContainer.vue	
  |  |  |  |-NewsInfoContainer.vue	//新闻详情
  |  |  |  |-NewsListContainer.vue	//新闻列表
  |  |  |  |-SearchContainer.vue
  |  |  |  |-ShopCarContainer.vue
  |  |-main.js					   // 程序入口文件，加载各种公共组件
  |  |-router					   //路由配置文件
  |  |  |-router.js
  |-static

```

