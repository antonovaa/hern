// import axios from 'axios'
import BootstrapVue from "bootstrap-vue"
import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueRouter from 'vue-router'
Vue.use(VueRouter);
Vue.use(BootstrapVue);


export const bus=new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
});
