import Bot from './bot.service'
import Users from './users.service'
import Movies from './movies.service'
// import Dashboard from './dashboard.service'
// import Lga from './lga.service'

export default function (Vue) {
    Vue.bot = Bot
    Vue.users = Users
    Vue.movies = Movies
    // Vue.dashboard = Dashboard
    // Vue.lga = Lga

    Object.defineProperties(Vue.prototype, {
        $bot: {
            get: () => {
                return Vue.bot
            }
        },
        $users: {
            get: () => {
                return Vue.users
            }
        },
        $movies: {
            get: () => {
                return Vue.movies
            }
        },
        // $dashboard: {
        //     get: () => {
        //         return Vue.dashboard
        //     }
        // },
        // $lga: {
        //     get: () => {
        //         return Vue.lga
        //     }
        // }
    })
}