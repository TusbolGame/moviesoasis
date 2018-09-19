<template>
    <div class="">
        <section class="content-headerf" style="float: left !important; width: 100%; margin-top: 20px;">
            <ol class="breadcrumb">
                <li>
                    <router-link tag="a" :to="{name: 'home'}">
                        <i class="glyphicon glyphicon-home"></i> Home
                    </router-link>
                </li>

                <li v-if="flag(category.toLowerCase())">
                    <router-link tag="a" :to="{name: 'category', params: { religious: movie.enc_id }}">
                        <i class="glyphicon glyphicon-star"></i> Religious
                    </router-link>
                </li>
                    <!--<a href="/category/religious"><i-->
                        <!--class="glyphicon glyphicon-star"></i> Religious</a></li>-->

                <li class="active">{{ category | ucWords }} Movies</li>
            </ol>
        </section>

        <div class="headings text-center h2" style="margin-top:80px;">
            {{ category | ucWords }}
        </div>

        <div class="topic-row-height text-center">
            <a :href="'/' + category + '/allmovies'" style="color:red !important; font-weight: bold;">All {{ category | ucWords }} Movies here</a>
        </div>

        <div class="topic-row-height text-center" v-for="(movie, key) in movies"
             :class="(key % 2 == 1) ? '' : 'row-even'">
            <router-link tag="a" :to="{name: 'movie', params: { movie_id: movie.enc_id }}">
                {{ movie.name | ucWords }}
            </router-link>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import { mo_mixins } from '../partials/mixins/mo_mixins'

    export default {
        mixins: [mo_mixins],
        methods: {
            flag(category) {
                if (category == "christian" || category == "islamic") {
                    return true;
                }
                return false;
            }
        },
        created() {
            this.$store.dispatch('fetchMoviesByCategory', this.category);
        },
        data() {
            return {
                category: this.$route.params.category_name
            }
        },
        computed: mapGetters({
            movies: 'getMoviesByCategory',
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
