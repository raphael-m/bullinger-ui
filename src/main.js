import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faLongArrowAltLeft)
library.add(faLongArrowAltRight)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Import v-dragged
import VDragged from 'v-dragged'
Vue.use(VDragged) 

new Vue({
  render: h => h(App),
}).$mount('#app')
