import axios from 'axios'

export default {
    getVisitors() {
        return new Promise((resolve, reject) => {
            axios.get('/visitors/')
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    }
}
