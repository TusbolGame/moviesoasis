import axios from 'axios'

export default {
    //Student
    getBots(pageNumber) {
        return new Promise((resolve, reject) => {
            axios.get('/getbots/pagenumber/' + pageNumber)
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
