<template>     
    <div class="">    
        <p align="center"><strong>List of available formats for download:</strong></p>
        <div class="text-center" style="color:red">
            <strong>NOTE:</strong> If you find it difficult downloading this video with Opera on your mobile phone, try  using UC Browser, Ucweb, Mozilla or the phone default browser.<br /><br />
        </div>

        <div class=" topic-row-height row-even text-center">
            <strong> movie type </strong>
            <span class="size" style="color:blue;">200MB</span>
        </div>

        <a class="rnd-link text-center mime" href="" style="width:auto; padding:10px; font-size:15px; font-weight:bold;">Download Link 1</a>
        <a class="rnd-link text-center mime" href="" style="width:auto; padding:10px; font-size:15px; font-weight:bold;">Download Link 2</a>        
    </div>
</template>

<script>
    export default {
        props: [
            'myvalues'
        ],
        methods: {
            
        },
        created() {
            console.log("created");
        }
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
