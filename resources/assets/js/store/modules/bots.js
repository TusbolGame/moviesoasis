import * as types from '../types';

const state = {
    bots: {},
}

const getters = {
    [types.GET_BOTS]: state => {
        return state.bots;
    },
};

const mutations = {
    [types.MUTATE_FETCH_BOT]: (state, payload) => {
        state.bots = payload;
    }
};

const actions = {
    [types.FETCH_BOT]: ({ commit }) => {
        Vue.bots.getBots()
            .then((data) => {
                commit(types.MUTATE_FETCH_BOT, data.data.data);
            })

    }
};

export default {
    state,
    mutations,
    getters,
    actions
}