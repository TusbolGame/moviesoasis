import axios from 'axios'

export default {
    /**
     *
     * @returns {Promise}
     */
   getMovies() {
        return new Promise((resolve, reject) => {
            axios.get('/getmovies/category/yoruba/pagenumber/1')
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },
    /**
     *
     * @param category
     * @returns {Promise}
     */
    getMoviesByCategory(category) {
        return new Promise((resolve, reject) => {
            axios.get('/movies/category/' + category)
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },
    /**
     *
     * @param movieinfo
     * @returns {Promise}
     * @constructor
     */
    StoreMovie(movieinfo) {
        return new Promise((resolve, reject) => {
            axios.get('/add-movies' + category)
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },
    /**
     *
     * @param movieId
     * @param movieInfo
     * @returns {Promise}
     */
    updateMovie(movieId, movieInfo) {
        return new Promise((resolve, reject) => {
            axios.get('/movies/category/' + category)
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },
    /**
     *
     * @param movieId
     * @returns {Promise}
     */
    deleteMovie(movieId) {
        return new Promise((resolve, reject) => {
            axios.get('/movies/category/' + category)
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },
    /**
     *
     * @param movieName
     * @returns {Promise}
     */
    searchMovie(movieName) {
        return new Promise((resolve, reject) => {
            axios.get('/movies/category/' + category)
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },


    studentProfile(studentId) {
        return new Promise((resolve, reject) => {
            axios.get('/student/' + studentId)
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },
    getStudentsPerLga() {
        return new Promise((resolve, reject) => {
            axios.get('lga/students')
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },

    //POSTS
    addStudent(studentInfo){
        return new Promise((resolve, reject) => {
            axios.post('students', studentInfo)
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    }
}
