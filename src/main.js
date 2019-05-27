import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faCoffee)
library.add(faFacebookSquare)
library.add(faLinkedin)
library.add(faGithubSquare)

Vue.component(FontAwesomeIcon.name, FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
