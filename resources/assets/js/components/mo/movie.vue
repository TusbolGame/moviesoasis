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
            <div class="headings text-center h2" style="margin-top:80px;">
                <strong>{{ movie.title }}</strong>
            </div>
            <div style="border:0px !important; width:200px;  height: 300px; margin-left: auto; margin-right: auto"
                 border="0" class="img profile-user-img img-responsive img-rounded movie-image" align="center">
                <img class="profile-user-img img-responsive img-rounded movie-image text-center" id="carimage4"
                     :src="movie.movieId | getThumbnail" border="0" hspace="0" vspace="0"
                     style="height:300px;">
            </div>
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
                        <a class="page-link"
                           :href="'/playonline/' + movie.movieDetail.enc_id"
                           aria-label="Read More..." style="border-color: green">
                            Watch Here
                        </a>
                    </li>
                </ul>
            </div>
            <div class=" topic-row-height row-even text-center download-div h3" style="color:white">
                <strong> Download</strong>
            </div>
            <div class="topic-row-height text-center no-padding">
                <ul class="pager no-padding">
                    <li class="pager-next no-padding danger">
                        <a class="page-link"
                           :href="'/download/' + movie.movieDetail.enc_id"
                           aria-label="Read More..." style="border-color: red">
                            Download Video
                        </a>
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
