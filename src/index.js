// 导入vue
import Vue from 'vue';

// 导入app组件
import app from './App.vue';
import router from './router.js';
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css'
// 导入mint-ui
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
// 这是焦点图 swiper
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

var vm = new Vue({
	el:'#app',
	render:c=>c(app),  //将app组件挂载至VM中
	// 挂载路由
	router:router
});