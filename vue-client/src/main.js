import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Buefy from 'buefy'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

Vue.use(Buefy)

library.add(faInstagram)
library.add(faPlusCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
