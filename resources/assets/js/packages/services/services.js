import Bot from './bot.service'
import Users from './users.service'
import Movies from './movies.service'
import Visitors from './visitors.service'
import Main from './main.service'

export default function (Vue) {
    Vue.bots = Bot
    Vue.users = Users
    Vue.movies = Movies
    Vue.visitors = Visitors
    Vue.main = Main

    Object.defineProperties(Vue.prototype, {
        $bots: {
            get: () => {
                return Vue.bots
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
        $visitors: {
            get: () => {
                return Vue.visitors
            }
        },
        $main: {
            get: () => {
                return Vue.main
            }
        },
    })
}