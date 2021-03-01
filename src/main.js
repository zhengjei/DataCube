import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.config.token = ''
axios.defaults.baseURL = ''
axios.defaults.timeout = 5000
axios.defaults.withCredentials = false

const routerCfg= [
  {
    path: '/', 
    name: '默认页',
    component:()=>import('./components/Root.vue')
  },{
    path: '/dialog', 
    name: '对话框',
    component:()=>import('./components/Dialog.vue')
  },{
    path: '/taskpane', 
    name: '任务窗格',
    component:()=>import('./components/TaskPane.vue')
  }
]

new Vue({
  render: h => h(App),
  router: new VueRouter({routes:routerCfg}),
  created: function () {
    //
  }
}).$mount('#app')
