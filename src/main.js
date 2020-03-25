import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'

/**
 * 设置为 false 以阻止 vue 在启动时生成生产提示。
 */
Vue.config.productionTip = false

/**
 * 取消 Vue 所有的日志与警告。
 */
Vue.config.silent = false


Vue.prototype.$bus = Bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
