<template>     
    <div v-if="!isObjectEmpty(movie)">
        <section class="content-headerf" style="float: left !important; width: 100%; margin-top: 20px;">
            <ol class="breadcrumb">
                <li><a href="/"><i class="glyphicon glyphicon-home"></i> Home</a></li>
                <li>
                    <a :href="'/category/' + videoCategoryLink(movie.movieDetail.category).toLowerCase()">
                        <i class="glyphicon glyphicon-expand"></i>
                        {{ videoCategory(movie.movieDetail.category.toLowerCase()) }} Movies
                    </a>
                </li>
                <li class="active">{{ movie.movieDetail.name | ucWords }}</li>
            </ol>
        </section>

        <movie-thumbnail :title="movie.title" :thumbnail="movie.movieId | getThumbnail" ></movie-thumbnail>

        <p align="center"><strong>List of available formats for download:</strong></p>
        <div class="text-center" style="color:red">
            <strong>NOTE:</strong> If you find it difficult downloading this video with Opera on your mobile phone, try  using UC Browser, Ucweb, Mozilla or the phone default browser.<br /><br />
        </div>

        <div v-for="(video, index) in movie.downloadLinks">
            <div class=" topic-row-height row-even text-center">
                <strong> {{ video.format }} </strong>
                <span class="size" style="color:blue;">{{ video.size }}</span>
            </div>
            <div class="text-center">
                <a class="rnd-link text-center mime" :href="video.link1" style="width:auto; padding:10px; font-size:15px; font-weight:bold;">Download Link 1</a>
            </div>
            <div class="text-center">
                <a class="rnd-link text-center mime" :href="video.link2" style="width:auto; padding:10px; font-size:15px; font-weight:bold;">Download Link 2</a>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import { mo_mixins,  } from '../partials/mixins/mo_mixins';
    import movieThumbnail from '../partials/plugins/movieThumbnail';

    export default {
        mixins: [mo_mixins],
        components: { movieThumbnail },
        methods: {
            
        },
        created() {
            this.$store.dispatch('fetchDownloadMovieInfo', this.movieId);
        },
        data() {
            return {
                movieId: this.$route.params.movie_id,
            }
        },
        computed: mapGetters({
            movie: 'getDownloadMovie',
        })
    }
</script>

<style scoped>
.wrapper {
    margin-top: 10%;
    background-color: transparent;
}

img {
    height: 200px;
    width: 200px;
}
</style>
