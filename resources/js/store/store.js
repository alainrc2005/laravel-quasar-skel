import Vue from 'vue';
import Vuex from 'vuex';

import main from "./main";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        main,
    },
    strict: true
});

export default store;
