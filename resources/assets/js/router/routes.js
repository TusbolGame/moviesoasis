import AdminLayout from '../components/layouts/adminLayout.vue';
import MainLayout from '../components/layouts/mainLayout.vue';

export const routes = [
    { path: '/',
        component: MainLayout,
        children: [
            {
                path: '',
                name: 'home',
                component: resolve => require(['../components/mo/home'], resolve).default,
                meta: {
                    menu: 1,
                    title: "Home",
                    guard: true
                }
            },
            {
                path: 'category/:category_name',
                name: 'category',
                component: resolve => require(['../components/mo/category'], resolve).default,
                meta: {
                    menu: 2,
                    title: "Category",
                    guard: true
                }
            },
            {
                path: 'movie/:movie_id',
                name: 'movie',
                component: resolve => require(['../components/mo/movie'], resolve).default,
                meta: {
                    menu: 3,
                    title: "Movie",
                    guard: true
                }
            },
            {
                path: 'allmovies/:category_name',
                name: 'allmovies',
                component: resolve => require(['../components/admin/bot/bots.vue'], resolve).default,
                meta: {
                    menu: 6,
                    title: "Movies",
                    guard: true
                }
            },
            {
                path: 'playonline/:movie_id',
                name: 'playonline',
                component: resolve => require(['../components/mo/watchonline'], resolve).default,
                meta: {
                    menu: 4,
                    title: "Movie",
                    guard: true
                }
            },
            {
                path: 'download/:movie_id',
                name: 'download',
                component: resolve => require(['../components/admin/visitor/visitors.vue'], resolve).default,
                meta: {
                    menu: 5,
                    title: "Download",
                    guard: true
                }
            },
        ]
    },
    { path: '/admin/',
        component: AdminLayout,
        children: [
            {
                path: 'dashboard/',
                name: 'dashboard',
                component: resolve => require(['../components/admin/dashboard.vue'], resolve).default,
                meta: {
                    menu: 1,
                    title: "Dashboard",
                    guard: true
                }
            },
            {
                path: 'movies/',
                name: 'movies',
                component: resolve => require(['../components/admin/movie/movies.vue'], resolve).default,
                meta: {
                    menu: 2,
                    title: "Movies",
                    guard: true
                }
            },
            {
                path: 'blog/',
                name: 'blog',
                component: resolve => require(['../components/admin/blog/blog.vue'], resolve).default,
                meta: {
                    menu: 3,
                    title: "Blog",
                    guard: true
                }
            },
            {
                path: 'users/',
                name: 'users',
                component: resolve => require(['../components/admin/user/users.vue'], resolve).default,
                meta: {
                    menu: 4,
                    title: "Users",
                    guard: true
                }
            },
            {
                path: 'visitors/',
                name: 'visitors',
                component: resolve => require(['../components/admin/visitor/visitors.vue'], resolve).default,
                meta: {
                    menu: 5,
                    title: "Visitors",
                    guard: true
                }
            },
            {
                path: 'bots/',
                name: 'bots',
                component: resolve => require(['../components/admin/bot/bots.vue'], resolve).default,
                meta: {
                    menu: 6,
                    title: "Bots",
                    guard: true
                }
            },
            {
                path: 'crawlers/',
                name: 'crawlers',
                component: resolve => require(['../components/admin/crawler/crawlers.vue'], resolve).default,
                meta: {
                    menu: 7,
                    title: "Crawlers",
                    guard: true
                }
            },
            {
                path: 'tools/',
                name: 'tools',
                component: resolve => require(['../components/admin/tool/tools.vue'], resolve).default,
                meta: {
                    menu: 8,
                    title: "Tools",
                    guard: true
                }
            }
        ]
    },
];