
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('molayout', require('./components/molayout.vue').default);
Vue.component('home', require('./components/home.vue').default);
Vue.component('category', require('./components/mo/category.vue').default);
Vue.component('religious', require('./components/mo/religious.vue').default);
Vue.component('MovieInfo', require('./components/mo/movie.vue').default);
Vue.component('MovieOptions', require('./components/mo/movieOptions.vue').default);
Vue.component('download', require('./components/mo/download.vue').default);
Vue.component('movies', require('./components/mo/movies.vue').default);
Vue.component('search', require('./components/mo/search.vue').default);
Vue.component('sidervideolist', require('./components/mo/modules/sidervideolist.vue').default);
Vue.component('movieslist', require('./components/admin/movie/movies.vue').default);


// ADMIN
Vue.component('MoMenu', require('./components/partials/menu/menu.vue').default);

Vue.component('AddMovie', require('./components/admin/movie/form/add').default);
// Vue.component('movie1', require('./components/mo/movie1.vue'));
// Vue.component('movie2', require('./components/mo/movie2.vue'));
// Vue.component('download', require('./components/mo/download.vue'));
// Vue.component('movies', require('./components/mo/movies.vue'));
// Vue.component('search', require('./components/mo/search.vue'));
// Vue.component('sidervideolist', require('./components/mo/modules/sidervideolist.vue'));
// Vue.component('movieslist', require('./components/admin/movies.vue'));

// import Vue from "vue";
require('./packages/config')

import Auth from './packages/auth/auth'
import Services from './packages/services/services'
import VueRouter from 'vue-router';
import { routes } from './router/routes';

Vue.use(VueRouter);
Vue.use(Auth);
Vue.use(Services);

const router = new VueRouter({
    routes,
    linkActiveClass: "active",
    mode: 'history',
});

if (document.querySelector('#app')) {
    const app = new Vue({
        el: '#app',
        methods: {
            ucWords: (str) => {
                return str.replace(/\w\S*/g, function (txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                });
            }
        },
        created() {

        }
    });
}

if (document.querySelector('#admin')) {
    const admin = new Vue({
        el: '#admin',
        router,
        methods: {
            ucWords: (str) => {
                return str.replace(/\w\S*/g, function (txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                });
            }
        },
        created() {

        }
    });
}
