import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLongArrowAltLeft, faLongArrowAltRight, faPlus, faMinus, faExpand, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faLongArrowAltLeft)
library.add(faLongArrowAltRight)
library.add(faPlus)
library.add(faMinus)
library.add(faExpand)
library.add(faQuestionCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Localization support
import VueI18n from 'vue-i18n'
import * as locales from './locales'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'de',
  messages: locales.default
})

// Toasted
import Toasted from 'vue-toasted';
Vue.use(Toasted, {
  containerClass:'bu-toast-container',
  className: 'bu-toast',
  duration: 5000
})

// Import vue-textarea-autosize
import TextareaAutosize from 'vue-textarea-autosize'
Vue.use(TextareaAutosize)

// Use tooltip directive
import VTooltip from 'v-tooltip'
Vue.use(VTooltip)
import './assets/tooltips.scss'

new Vue({
  render: h => h(App),
  i18n
}).$mount('#app')
