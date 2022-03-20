// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './assets/js/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import App from './App'
Vue.use(ElementUI)




Vue.use(Vuex)


import axios from 'axios'
Vue.prototype.axios = axios
Vue.config.productionTip = false
    //axios.defaults.baseURL = '/api'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})