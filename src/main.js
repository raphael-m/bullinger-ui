import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLongArrowAltLeft, faLongArrowAltRight, faPlus, faMinus, faExpand } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faLongArrowAltLeft)
library.add(faLongArrowAltRight)
library.add(faPlus)
library.add(faMinus)
library.add(faExpand)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Localization support
import VueI18n from 'vue-i18n'
import * as locales from './locales'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'de',
  messages: locales.default
})

new Vue({
  render: h => h(App),
  i18n
}).$mount('#app')
