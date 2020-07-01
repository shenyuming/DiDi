// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import axios from 'axios'
import api from '@/utils/api'
import utils from '@/utils/base'
import VueI18n from 'vue-i18n'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/common.css'
// 设置语言
Vue.use(VueI18n);
Vue.use(ElementUI);
const i18n = new VueI18n({
  locale: "zh", // 定义默认语言为中文
  messages: {
    zh: require("./assets/languages/zh.json"),
    en: require("./assets/languages/en.json")
  }
});
Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.prototype.$ajax = axios
Vue.prototype.api = api;
Vue.prototype.utils = utils;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
