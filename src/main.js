import Vue from 'vue'
import App from './App'
import ENV from './utils/config.js'
import https from './https/https.js'

Vue.prototype.$ENV = ENV
Vue.prototype.$https = https

Vue.config.productionTip = false

App.mpType = 'app'
console.log(process.env.NODE_ENV)
const app = new Vue({
  ...App
})
app.$mount()
