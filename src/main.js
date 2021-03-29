import Vue from 'vue';

import Cookies from 'js-cookie'; //操作cookie的库

import 'normalize.css/normalize.css'; // 兼容不同浏览器样式

import Element from 'element-ui'; //element组件库
import './styles/element-variables.scss'; //element主题样式配置
import '@/styles/index.scss'; //全局样式

import App from './App';
import store from './store';
import router from './router';

import './icons'; //图标
import './permission'; // 权限控制文件
import './utils/error-log'; // 错误日志

import * as filters from './filters'; // 全局过滤器
Vue.use (Element, {
  size: Cookies.get ('size') || 'medium', //设置element组件尺寸
});

// 注册全局过滤器
Object.keys (filters).forEach (key => {
  Vue.filter (key, filters[key]);
});

Vue.config.productionTip = false; //阻止启动生产消息

new Vue ({
  el: '#app',
  router,
  store,
  render: h => h (App),
});
