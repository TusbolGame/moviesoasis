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
    }
}