import Vue from 'vue'
import Vuex from 'vuex'
import {createSecurity} from './security'

Vue.use(Vuex);

export function createStore() {
    return new Vuex.Store({
        modules: {
            security: createSecurity(),
        }
    });
}