// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import URLS from '@/utils/api'
import utils from '@/utils/base'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/common.css'
import vuescroll from 'vuescroll'

//自定义组件名
Vue.use(ElementUI)
Vue.use(vuescroll);
Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.prototype.$ajax = axios
Vue.prototype.URLS = URLS;
Vue.prototype.utils = utils;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
