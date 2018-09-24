
export const setMoviesByCategory = (state, payload) => {
    state.MO_moviesByCategory = payload;
};

export const setMovieInfo = (state, payload) => {
    state.MO_movie = payload;
};

export const setDownloadMovieInfo = (state, payload) => {
    state.MO_download_movie = payload;
};