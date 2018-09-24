<template>
    <div class="">
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

            <div class="row">
                <div class="col-xs-6 text-right row-even">
                    Released Date:
                </div>
                <div class="col-xs-6 blue row-even">
                    {{ movie.movieDetail.released_date }}
                </div>
                <div class="col-xs-6 text-right">
                    Duration:
                </div>
                <div class="col-xs-6">
                    {{ movie.movieDetail.duration }}
                </div>
            </div>
        </div>

        <slot></slot>

        <div class="" v-if="!isObjectEmpty(movie)">
            <!-- watch online -->

            <div class=" topic-row-height row-even text-center download-div h3" style="color:white">
                <strong> Watch video Online</strong>
            </div>

            <div class="topic-row-height text-center no-padding">
                <ul class="pager no-padding">
                    <li class="pager-next no-padding">
                        <router-link tag="a" :class="'page-link'" :to="{name: 'playonline', params: { movie_is: movie.movieDetail.enc_id }}">
                            Watch Here
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class=" topic-row-height row-even text-center download-div h3" style="color:white">
                <strong> Download</strong>
            </div>
            <div class="topic-row-height text-center no-padding">
                <ul class="pager no-padding">
                    <li class="pager-next no-padding danger">
                        <router-link tag="a" :class="'page-link'" :to="{name: 'download', params: { movie_is: movie.movieDetail.enc_id }}">
                            Download Video
                        </router-link>
                    </li>
                </ul>
            </div>

            <div class="topic-row-height text-center no-padding"
                 v-if="movie.movieDetail.subtitle">
                <ul class="pager no-padding">
                    <li class="pager-next no-padding danger">
                        <a class="page-link"
                           :href="'/subtitle/' + movie.movieDetail.enc_id"
                           aria-label="Read More..." style="border-color: red">
                            Download Subtitle
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import { mo_mixins } from '../partials/mixins/mo_mixins'
    import movieThumbnail from '../partials/plugins/movieThumbnail';

    export default {
        mixins: [mo_mixins],
        components: { movieThumbnail },
        methods: {

        },
        created() {
            this.$store.dispatch('fetchMovieInfo', this.movieId);
        },
        data() {
            return {
                movieId: this.$route.params.movie_id,
            }
        },
        computed: mapGetters({
            movie: 'getMovie',
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
