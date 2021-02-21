# 问题 网页中会出现各种各样的静态资源
 ## 导致发起多次二次请求 网页加载速度慢
 ## 处理错综复杂的依赖关系（例：bootstrap依赖jq）

# 什么是webpack
 ## webpack是前端的一种项目构建工具，他是基于Node.js开发出来的一个前端工具

# Gulp webpack作用
 ##Gulp 是基于task任务的
 ##webpack 是基于整个项目进行构建
  ###借助于webpack这个前端自动化构建工具，可以完美实现资源的合并，打包，压缩，混淆等诸多功能。

#webpack安装的俩种方式
 ##运行'npm u webpack -g'全局安装webpack，这样就能在全局使用webpack的命令
 ##在项目根目录中运行'npm i webpack -save-dev'安装到项目依赖中
 
#使用webpack-dev-server 这个工具，实现自动打包编译的功能
 ##运行'npm i webpack-dev-server -D' 把这个工具安装到项目的本地开发依赖，【要求webpack也安装到本地】
 ##安装完毕后，这个工具的用法和webpack命令的用法，完全一样，但需要在package.json里面配置
 ##打包生成的文件，并没有实际存放到物理磁盘上，托管在了电脑内存中
 ##参数
  --open：自动打开路径
  --prot 3000：端口号3000
  --contentBase src：已src作为根路
  --hot：热更新__实习浏览器无刷新 并减少不必要的代码更新
  
#使用html-webpack-plugin 之后，我们不再需要手动处理bundle.js的引用路径了，自动创建了一个合适的script标签，并引用了正确的路径

#webpack，默认只能打包处理 js类型 的的文件，无法处理其他的 非js类型文件，如果要处理 非js类型的文件，我们需要手动安装一些 合适的第三方 loader 加载器；
 ##如果想要打包处理css文件，需要安装'npm i style-loader css-loader -D'
 ##打开webpack.config.js 这个配置文件，在里面新增一个配置节点，叫做module，他是一个配置对象，在module对象上，有一个rules属性，这个rules数组中存放了第三方文件的匹配和处理规则；
 ##调用loader的时候 ，是从后往前调用的。
  ###less使用 安装'npm i less-loader -D'和'npm i less -D'
  ###sass使用 安装'npm i sass-loader -D'和'npm i node-sass -D'
  
 #webpack，默认无法处理css文件中的 url地址 ，不管是图片地址还是 字体库，只要是地址都是无法处理的
  ##如果想要打包处理这些url，需要安装'npm i url-loader file-loader -D'
  
 #在webpack中，默认只能处理一部分es6新语法，一些更高级的Es6语法或者es7语法等，webpack是处理不了的；这个时候就需要借助于第三方的loader，来帮助webpack处理这些高级语法，当第三方loader把高级语法转为低级的语法之后，会把结果交给 webpack去打包到bundle.js中
  ##通过Babel， 可以帮我们将高级语法转换为 低级的语法
  ##在webpack中，需安装Babel相关的俩个命令'npm i babel-core babel-loader babel-plugin-transform-runtime -D' 相当于转换工具 和 'npm babel-preset-env babel-preset-stage-0 -D' 相当于语法
  ##打开webpack的配置文件，在module节点下的rules数组中，添加一个新的匹配规则(需要exclude排除掉node_module这个包，因为：1，如果不排除则会吧node-module中所有js文件都打包编译，这样会非常消耗cpu，同时打包速度变慢；2，如果Babel把node-module中转换完毕，也不会正常运行)
  ##在项目的根目录中新建一个 .babelrc 的Babel配置文件，属于json格式，所以在写.babelrc配置的时候需要符合json规范（不能有注释）
  {
	"presets":["env","stage-0"],//语法
	"plugins":["transform-runtime"]
  }
  
  #webpack中构建vue项目使用模板对象
   ##在webpack.config.js 这个配置文件，在里面新增一个配置节点，叫做resolve
   
 #webpack中使用vue
  ##安装vue包'npm i vue -S' 
  ##安装loader 'npm i vue-loader vue-template-complier -D'
  ##在main.js中导入vue模块 import Vue from 'vue'
  ##定义一个.vue结尾的组件，组件有三部分组成 template script style
  ##使用import导入这个组件
  ##创建vm实例 var vm =new Vue（{ el:'#app',render:c=>(app) }）
  ##在页面中创建一个id为app的div元素，作为我们vm实例要控制的区域