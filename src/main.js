import 'bootstrap'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faYoutube, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueFullPage from 'vue-fullpage.js'

if (screen.width > 768) {
  Vue.use(VueFullPage)
}

AOS.init()

library.add(faYoutube, faInstagram, faFacebookF)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
