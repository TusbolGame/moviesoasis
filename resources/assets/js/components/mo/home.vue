<template>

    <div class="text-center">

        <div style="margin: 30px 10%; font-size: 1.4em;">
            <strong>Download latest movies</strong>
        </div>

        <div class="topic-row-height row-even">
            Download all latest Yoruba movies of different format from here for free.
        </div>
        <div class="topic-row-height">
            <router-link tag="a" :to="{name: 'category', params: { category_name: 'yoruba' }}">
                YORUBA MOVIES
            </router-link>
        </div>
        <div class=" topic-row-height row-even">
            Download all latest nigeria nollywood movies of different format from here for free.
        </div>
        <div class="topic-row-height">
            <router-link tag="a" :to="{name: 'category', params: { category_name: 'english' }}">
                NOLLYWOOD MOVIES
            </router-link>
        </div>
        <div class=" topic-row-height row-even">
            Download all latest hausa movies of different format from here for free.
        </div>
        <div class="topic-row-height">
            <router-link tag="a" :to="{name: 'category', params: { category_name: 'hausa' }}">
                HAUSA MOVIES
            </router-link>
        </div>
        <div class=" topic-row-height row-even">
            Download all latest ghanian movies of different format from here for free.
        </div>
        <div class="topic-row-height">
            <router-link tag="a" :to="{name: 'category', params: { category_name: 'ghanaian' }}">
                GHANAIAN MOVIES
            </router-link>
        </div>
        <div class=" topic-row-height row-even">
            Download all latest Indian movies of different format from here for free.
        </div>
        <div class="topic-row-height">
            <router-link tag="a" :to="{name: 'category', params: { category_name: 'indian' }}">
                INDIAN MOVIES <span style="color: red; font-weight: bold;">(new)</span>
            </router-link>
        </div>
        <div class=" topic-row-height row-even">
            Download latest religious preaches of different format from here for free.
        </div>
        <div class="topic-row-height">
            <router-link tag="a" :to="{name: 'category', params: { category_name: 'religious' }}">
                RELIGIOUS PREACHES
            </router-link>
        </div>
        <div class=" topic-row-height row-even">
            Download all latest comedy movies of different format from here for free.
        </div>
        <div class="topic-row-height">
            <router-link tag="a" :to="{name: 'category', params: { category_name: 'comedy' }}">
                COMEDY
            </router-link>
        </div>
        <div class=" topic-row-height row-even">
            Download latest wrestling clips of different format from here for free.
        </div>
        <div class="topic-row-height">
            <router-link tag="a" :to="{name: 'category', params: { category_name: 'wrestling' }}">
                WRESTLING
            </router-link>
        </div>
        <div class=" topic-row-height row-even">
            Download all latest football highlight clips of different format from here for free.
        </div>
        <div class="topic-row-height">
            <router-link tag="a" :to="{name: 'category', params: { category_name: 'football_highlight' }}">
                FOOTBALL HIGHLIGHT
            </router-link>
        </div>
        <div class=" topic-row-height row-even">
            Download all latest documentary of different format from here for free.
        </div>
        <div class="topic-row-height">
            <router-link tag="a" :to="{name: 'category', params: { category_name: 'documentary' }}">
                DOCUMENTARY
            </router-link>
        </div>
        <div class=" topic-row-height row-even">
            Download latest technological discovery clips of different format from here for free.
        </div>
        <div class="topic-row-height">
            <router-link tag="a" :to="{name: 'category', params: { category_name: 'technology' }}">
                TECHNOLOGIES
            </router-link>
        </div>
        <div class=" topic-row-height row-even">
            Download tutorials how how to do things from here for free.
        </div>
        <div class="topic-row-height">
            <router-link tag="a" :to="{name: 'category', params: { category_name: 'how_tos' }}">
                HOW TOs &nbsp;<span style="color: red; font-weight: bold;">(new)</span>
            </router-link>
        </div>
        <div class=" topic-row-height row-even">
            Download latest Yoruba dubbed movies of different format from here for free.
        </div>
        <div class="topic-row-height">
            YORUBA DURBBED MOVIES
        </div>
        <div class=" topic-row-height row-even">
            Download latest music both mp3 & mp4 format for here for free.
        </div>
        <div class="topic-row-height">
            MUSIC
        </div>

    </div>
</template>

<script>
    export default {
        created() {}
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
