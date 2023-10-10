import VueSmartCascader from './App.vue'
import './style/common.css'

const install = v => {
  if (install.installed) return
  v.component('VueSmartCascader', VueSmartCascader)
}

export default install

export const component = {
  VueSmartCascader
}