import Vue from 'vue';
import VueRouter from 'vue-router';

import home from './components/home'
import users from './components/users'

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: home, name: 'home'},
        {path: '/users', component: users},
        {
            path: '*', redirect: '/'
        }
    ]
});

export default router
