// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'

import './assets/mui/css/mui.css'
import './assets/mui/css/icons-extra.css'
import router from './router/router'
import moment from 'moment'
Vue.filter('dateFormat', function (dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  // eslint-disable-next-line no-undef
  return moment(dateStr).format(pattern)
})
// import App from './App.vue'
Vue.use(MintUI)
Vue.use(VueRouter)
// 为了能够在其他页面使用
// Vue.prototype.axios = axios

axios.defaults.baseURL = 'http://027xin.com:8899/'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
