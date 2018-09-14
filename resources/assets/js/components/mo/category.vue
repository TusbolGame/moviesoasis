<template>
    <div class="">
        <section class="content-headerf" style="float: left !important; width: 100%; margin-top: 20px;">
            <ol class="breadcrumb">
                <li><a href="/"><i class="glyphicon glyphicon-home"></i> Home</a></li>

                <li v-if="flag(category.toLowerCase())"><a href="/category/religious"><i
                        class="glyphicon glyphicon-star"></i> Religious</a></li>

                <li class="active">{{ $root.ucWords(category) }} Movies</li>
            </ol>
        </section>

        <div class="headings text-center h2" style="margin-top:80px;">
            {{ $root.ucWords(category) }}
        </div>

        <div class="topic-row-height text-center">
            <a :href="'/' + category + '/allmovies'" style="color:red !important; font-weight: bold;">All {{
                $root.ucWords(category) }} Movies here</a>
        </div>

        <div class="topic-row-height text-center" v-for="(movie, key) in JSON.parse(movies)"
             :class="(key % 2 == 1) ? '' : 'row-even'">
            <a :href="'/movie/' + movie.enc_id">{{ $root.ucWords(movie.name) }}</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'movies',
            'category'
        ],
        methods: {
            flag(category) {
                if (category == "christian" || category == "islamic") {
                    return true;
                }
                return false;
            }
        },
        created() {
            console.log('Component created.')
        },
        data() {
            return {}
        },
        computed: {}
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
