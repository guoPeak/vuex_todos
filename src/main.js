// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 导入样式
import './assets/base.css'
import './assets/index.css'

// 导入vuex
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 将 Vuex 与 Vue实例关联到一起，那么，所有组件中
  // 都可以通过 this.$store 来直接访问到 store
  store,
  components: { App },
  template: '<App/>'
})
