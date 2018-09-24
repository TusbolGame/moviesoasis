import axios from 'axios'

export default {
    getMoviesByCategory(categoryName) {
        return new Promise((resolve, reject) => {
            axios.get('/movies/category/' + categoryName)
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },
    getMovieinfo(movieId) {
        return new Promise((resolve, reject) => {
            axios.get('/movie/' + movieId)
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },
    getDownloadMovieinfo(movieId) {
        return new Promise((resolve, reject) => {
            axios.get('/download/' + movieId)
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    }
}
