<template>
    <div class="">
        <section class="content-headerf" style="float: left !important; width: 100%; margin-top: 20px;">
            <ol class="breadcrumb">
                <li><a href="/"><i class="glyphicon glyphicon-home"></i> Home</a></li>

                <!-- <li><a href="category/religious"><i class="glyphicon glyphicon-star"></i> Religious</a></li> -->

                <li class="active">{{ $root.ucWords(category) }} Movies</li>
                <li class="active">{{ $root.ucWords(alphabet) }}</li>
            </ol>
        </section>

        <div class="headings text-center h2" style="margin-top:80px;">
            {{ $root.ucWords(category) }}
        </div>

        <div class="topic-row-height text-center">
            <a :href="'/' + category + '/allmovies'" style="color:red !important; font-weight: bold;">All {{
                $root.ucWords(category) }} Movies here</a>
        </div>
        <div class="topic-row-height text-center" v-for="(movie, key) in JSON.parse(movies).data"
             :class="(key % 2 == 1) ? '' : 'row-even'">
            <a :href="'/movie/' + movie.enc_id">{{ $root.ucWords(movie.name) }}</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'movies',
            'category',
            'alphabet'
        ],
        mounted() {
            console.log('Component mounted.')
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
