module.exports = (function () {
    'use strict';

    // var URL = "http://moviesoasis.dev/"
    // var URL = "http://v2.api.sbemis.online:8000/"
    let URL = "http://127.0.0.1:8000/"

    return {
        baseURL: URL,
        apiURL: URL + "api/",
        authURL: URL + "oauth/token"
    }
}());