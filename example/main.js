import Vue from 'vue'
import VueSmartCascader from '../src/main'
import App from './App.vue'

Vue.use(VueSmartCascader)

new Vue({
  el: '#app',
  render: h => (h)(App)
})