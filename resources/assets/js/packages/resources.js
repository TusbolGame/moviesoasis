module.exports = (function () {
    'use strict';

    // var URL = "http://moviesoasis.dev/"
    let URL = "http://127.0.0.1:8000/"

    return {
        baseURL: URL,
        apiURL: URL + "api/",
        authURL: URL + "oauth/token"
    }
}());