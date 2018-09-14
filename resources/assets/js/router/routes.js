import AdminLayout from '../components/layouts/adminLayout.vue';

export const routes = [
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
                path: 'crawlers/',
                name: 'crawlers',
                component: resolve => require(['../components/admin/crawler/crawlers.vue'], resolve).default,
                meta: {
                    menu: 6,
                    title: "Crawlers",
                    guard: true
                }
            },
            {
                path: 'tools/',
                name: 'tools',
                component: resolve => require(['../components/admin/tool/tools.vue'], resolve).default,
                meta: {
                    menu: 7,
                    title: "Tools",
                    guard: true
                }
            }
        ]
    },
    // { path: '/b', component: resolve => require(['../components/admin/results.vue'], resolve).default
    // },
];