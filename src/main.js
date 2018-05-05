// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import 'vue-material/dist/vue-material.min.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/theme/default-dark.css'
import VueSweetalert2 from 'vue-sweetalert2'
import Notifications from 'vue-notification'
import App from './App'
import router from './router'
Vue.config.productionTip = false

Vue.use(VueSweetalert2)
Vue.use(VueMaterial)
Vue.use(Notifications)
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
