import Vue from 'vue';
import Vuex from 'vuex';
import movie from './modules/movie';
import bots from './modules/bots';
import visitor from './modules/visitor';

import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        movies: {},
        bots: {},
        visitors: {},

        // client side
        MO_moviesByCategory:{},
        MO_moviesByAlphabet:{},
        MO_movie:{},
        MO_page: 0,


    },
    getters,
    mutations,
    actions,
    modules: {
        movie,
        bots,
        visitor
    }
});

