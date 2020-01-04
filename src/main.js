import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLongArrowAltLeft, faLongArrowAltRight, faPlusSquare, faMinusSquare, faExpand } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faLongArrowAltLeft)
library.add(faLongArrowAltRight)
library.add(faPlusSquare)
library.add(faMinusSquare)
library.add(faExpand)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
