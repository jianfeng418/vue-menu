// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vMenu from './components/vMenu/index'
Vue.config.productionTip = false

Vue.use(vMenu);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App},
  template: '<App/>'
})
