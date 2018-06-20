import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import util from './components/util/util' //引入公共方法

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.util = util

Vue.use(Mint)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
