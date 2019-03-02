// 导入vue
import Vue from 'vue';
// 导入app组件
import app from './App.vue';

import './lib/mui/css/mui.min.css';
// 导入mint-ui
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


var vm = new Vue({
	el:'#app',
	render:c=>c(app)  //将app组件挂载至VM中
});