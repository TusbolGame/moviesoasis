import * as types from '../types';

const state = {
    movies: {},
}

const getters = {
    [types.GET_MOVIES]: state => {
        return state.movies;
    },
};

const mutations = {
    [types.MUTATE_ADD_MOVIE]: (state, payload) => {
        state.movies = payload;
    }
};

const actions = {
    [types.FETCH_MOVIE]: ({ commit }) => {
        Vue.movies.getMovies()
            .then((data) => {
                // console.log(data.data.data);
                commit(types.MUTATE_ADD_MOVIE, data.data.data);
            })

    }
};

export default {
    state,
    mutations,
    getters,
    actions
}