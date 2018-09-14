<template>
    <div class="">
        <div class="topic-row-height text-center" v-for="(movie, key) in JSON.parse(movies)"
             :class="(key % 2 == 1) ? '' : 'row-even'">
            <a :href="'/movie/' + movie.enc_id">{{ $root.ucWords(movie.name) }}</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'movies'
        ],
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
