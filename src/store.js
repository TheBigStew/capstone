//jshint esversion: 6

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        test: 'test'
    },
    getters: {

    },
    mutations: {
        changeValue: (state, value) => {
            state.test = value;
        }
    },
    actions: {

    }
});