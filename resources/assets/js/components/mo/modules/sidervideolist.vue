<template>    
    <div class=""> 
       <div class="contact-box text-center" style="margin-top:50px; margin-left:5px;">
          <div class="topic-row-height topic-header">
            Yoruba Movies
          </div>
         
          <div class="topic-row-height text-center" v-for="(movie, key) in JSON.parse(movies)" :class="(key % 2 == 1) ? '' : 'row-even'">
             <a :href="'/movie/' + movie.enc_id">{{ $root.ucWords(movie.name) }}</a> 
        </div> 
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'movies'
        ],
        methods: {
          
        },
        mounted() {
            console.log('Component mounted.')
        },
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
