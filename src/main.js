import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-awesome/icons/home'
import 'vue-awesome/icons/cog'
import Icon from 'vue-awesome/components/Icon'
import Fubuki from './model/fubuki'

Vue.prototype.$fubuki = new Fubuki()

Vue.component('icon', Icon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
