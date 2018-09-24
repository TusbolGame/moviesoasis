
export const fetchMoviesByCategory = ({ commit }, category) => {
    Vue.main.getMoviesByCategory(category)
        .then((data) => {
            commit('setMoviesByCategory', data.data);
        })
}

export const fetchMovieInfo = ({ commit }, movieId) => {
    Vue.main.getMovieinfo(movieId)
        .then((data) => {
            // console.log(data);
            commit('setMovieInfo', data);
        })
}

export const fetchDownloadMovieInfo = ({ commit }, movieId) => {
    Vue.main.getDownloadMovieinfo(movieId)
        .then((data) => {
            // console.log(data);
            commit('setDownloadMovieInfo', data);
        })
}