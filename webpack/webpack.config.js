//node获取根目录path
const path = require('path')
//启用热更新第二步
const webpack = require('webpack')
//导入内存中生成html的插件并自动把打包好的bundle.js追到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')

//配置文件,起始就是一个js文件,通过Node中的模块操作,向外暴露了一个 配置对象
module.exports = {
	//入口文件的相关配置
	entry:path.jojn(__dirname,'./src/main.js'),//表示要使用webpack 打包哪个文件
	
	//输出文件的相关配置
	output:{
		path:path.join(__dirname,'./dist'),//指定 打包好的文件,输出到哪个目录中去
		filename:'bundle.js',//指定 打包好的文件的名称
	},
	
	//dev-server命令参数的第二种形式,相对来说麻烦一点
	DevServer:{
		open:true,//自动打开浏览器
		prot:3000,//设置端口号
		contentBase:'src',//指定托管根目录
		hot:true//指定热更新 第一步
	},
	
	//插件配置的节点
	plugins:[
		new webpack.HotModuleReplacementPlugin(), //初始化热更新模块对象,热更新第三步
		new htmlWebpackPlugin({//创建一个内存中生成html的插件
			template:path.join(__dirname,'./src/index.html'),//指定模板页面,根据内存中指定页面路径,去生成内存中的页面
			filename:'index.html'//指定生成的页面的名称
		})
	],
	
	//这个节点,用于配置 所有的第三方模块加载器
	module:{
		rules:[//所有第三方匹配规则
			{ test: /\.css$/, use:['style-loader','css-loader'] },//配置处理.css文件的第三方loader规则
			{ test: /\.less$/, use:['style-loader','css-loader','less-loader'] },
			{ test: /\.scss$/, use:['style-loader','css-loader','sass-loader'] },
			{ test: /\.(jpg|png|bmp|jpeg)$/, use:'url-loader?limit=7500$name=[hash:8]-[name].[ext]' },//处理图片路径的loader只需要这一个loader  limit代表传参 7500字节(byte)以下大小的图片转为base64格式   name代表图片名字格式 默认一般哈希处理了 防止重名 [name].[ext]可以让名字不被哈希处理!!!不推荐使用 会导致重名 可以加[hash:num(需要小于32)]
			{ test: /\.(ttf|eot|svg|woff|woff2)$/, use:'url-loader' },//处理字体文件的loader
			{ test: /\.js$/, use:'babel-loader', exclude:/node_modules/ },//配置Babel处理es6或更高级语法
			{ test: /\.vue$/, use:'vue-loader' },
		]
	},
	resolve{
		alias:{//设置vue被导入包的路径
			"vue$":"vue/dist/vue.js"
		},
	}
}