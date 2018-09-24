export const mo_mixins = {
    filters: {
        ucWords: (str) => {
            return str.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        },
        getThumbnail: (movieId) => {
            return 'https://ytimg.googleusercontent.com/vi/' + movieId + '/mqdefault.jpg';
        }
    },
    methods: {
        isObjectEmpty: (obj) => {
            for(let key in obj) {
                if(obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        },
        embedVideo: (youlink) => {
            return youlink.replace('watch?v=','embed/') + '?autoplay=1';
        },
        videoCategoryLink(cat) {
            if (cat == 'religious__muslim') {
                return 'religious/islamic'
            }
            else if (cat == 'religious__christian') {
                return 'religious/christian'
            }
            else {
                return cat
            }
        },
        videoCategory(cat) {
            if (cat == 'religious__muslim') {
                return 'Islamic'
            }
            else if (cat == 'religious__christian') {
                return 'Christian'
            }
            else {
                return cat
            }
        }
    }
}