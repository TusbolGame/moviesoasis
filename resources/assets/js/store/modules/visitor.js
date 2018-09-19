import * as types from '../types';

const state = {
    visitors: {},
}

const getters = {
    [types.GET_VISITORS]: state => {
        return state.visitors;
    },
};

const mutations = {
    [types.MUTATE_FETCH_VISITORS]: (state, payload) => {
        state.visitors = payload;
    }
};

const actions = {
    [types.FETCH_VISITORS]: ({ commit }) => {
        Vue.visitors.getVisitors()
            .then((data) => {
                commit(types.MUTATE_FETCH_VISITORS, data.data.data);
            })

    }
};

export default {
    state,
    mutations,
    getters,
    actions
}