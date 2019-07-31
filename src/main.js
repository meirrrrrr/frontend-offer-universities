import 'bootstrap'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './main.scss'
import AOS from 'aos'
import VueFullPage from 'vue-fullpage.js'

if (screen.width > 768) {
  Vue.use(VueFullPage)
  require('aos/dist/aos.css')
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  el: '#app',
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
