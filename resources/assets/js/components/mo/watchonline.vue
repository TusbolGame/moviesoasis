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
            <div class="row">
                <div class="col-xs-12 col-xs-offset-0 col-sm-12 col-sm-offset-0 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
                    <div class="headings text-center h2" style="margin-top:40px;">
                        <strong> {{ movie.movieDetail.name | ucWords }}</strong>
                    </div>
                    <iframe frameborder="0" :src="embedVideo(movie.movieDetail.youlink)"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import { mo_mixins,  } from '../partials/mixins/mo_mixins'

    export default {
        mixins: [mo_mixins],
        methods: {
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
