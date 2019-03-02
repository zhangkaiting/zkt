let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
// let CleanWebpackPlugin = require('clean-webpack-plugin');
let webpack = require('webpack');
let VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
	//入口
	entry:'./src/index.js',
	//出口
	output:{
		filename:'build.js',
		path:path.resolve('./dist')
	},
	devServer:{ //开发服务器
		contentBase:'./dist',
		port:'8888',
		compress:true,
		open:true,
		hot:true
	},
	module:{
		rules:[
			{test:/\.css$/,use:['style-loader','css-loader']},
			{test:/\.less$/,use:['style-loader','css-loader','less-loader']},
			{test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
			{test:/\.(jpg|gif|png|bmp|jpeg)$/,use:['url-loader']},
			{test:/\.(eot|svg|ttf|woff|woff2)/,use:'url-loader'},
			{test:/\.js$/,use:'babel-loader',exclude:'/node-modules/'},
			{test:/\.vue$/,use:'vue-loader'}
		]
	} ,
	mode:'development',
	plugins:[
		new VueLoaderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		// new CleanWebpackPlugin('./dist'),
		new htmlWebpackPlugin({
			title:"vue",
			template:'./src/index.html',
			minify:{
				removeAttributeQuotes:true,  //去除双引号
        collapseWhitespace:true  //去除空格  代码一行显示
			}
			
		})
	],
    resolve:{
		alias:{
			"vue$":"vue/dist/vue.js"
		}
	},//配置解析
}