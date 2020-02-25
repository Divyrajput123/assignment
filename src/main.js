import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './styles/my-styles.scss'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

export const globalStore = new Vue({
  data: {
    count: 0
  }
})