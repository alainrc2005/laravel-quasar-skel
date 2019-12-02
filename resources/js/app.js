import Vue from 'vue';
import Vuex from 'vuex';
import Quasar from 'quasar';
import langQ from 'quasar/lang/es';
import axios from 'axios';
import App from './app.vue'
import router from './router'
import store from './store/store'

window._ = require('lodash');

Vue.use(Quasar, {
    lang: langQ,
    brand: {
        primary: '#027BE3',
        secondary: '#26A69A',
        accent: '#9C27B0',

        positive: '#21BA45',
        negative: '#C10015',
        info: '#31CCEC',
        warning: '#F2C037'
    }
});

const axiosContext = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'http://www.qopsia.com' : 'http://www.qopsia.cu',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content
    }
});

Vue.prototype.$axios = axiosContext;
Vuex.Store.prototype.$axios = axiosContext;

window.app = new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
});
