// 导入vue
import Vue from 'vue';

// 导入路由 vue-router
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import home from './components/tabbar/home.vue';
import member from './components/tabbar/member.vue';
import cart from './components/tabbar/cart.vue';
import search from './components/tabbar/search.vue';
var router = new VueRouter({
	routes:[
		{path:'/home',component:home},
		{path:'/member',component:member},
		{path:'/cart',component:cart},
		{path:'/search',component:search},
	]
})
// 导入app组件
import app from './App.vue';


import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css'
// 导入mint-ui
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


var vm = new Vue({
	el:'#app',
	render:c=>c(app),  //将app组件挂载至VM中
	// 挂载路由
	router:router
});