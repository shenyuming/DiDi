// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import '@/assets/css/common.css'
import axios from 'axios'
import api from '@/utils/api'
import utils from '@/utils/base'
import Router from 'vue-router'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
// 设置语言
locale.use(lang)
Vue.use(ElementUI);

Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.prototype.$ajax = axios
Vue.prototype.api = api;
Vue.prototype.utils = utils;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
