import 'bootstrap'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './main.scss'
import AOS from 'aos'
import VueFullPage from 'vue-fullpage.js'
import 'aos/dist/aos.css'
window.axios = require('axios')

if (screen.width > 768) {
  Vue.use(VueFullPage)
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  el: '#app',
  created () {
    AOS.init({
      mirror: true,
      disable: 'mobile'
    })
  },
  render: h => h(App)
}).$mount('#app')
