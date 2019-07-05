import Vue from 'vue'
import App from './App'
import ENV from './utils/config.js'
import https from './https/https.js'
import store from './store/index'

Vue.prototype.$ENV = ENV
Vue.prototype.$https = https
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
