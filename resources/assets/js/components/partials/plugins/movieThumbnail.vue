<template>
    <div>
        <div class="headings text-center h2" style="margin-top:80px;">
            <strong>{{ title }}</strong>
        </div>
        <div style="border:0px !important; width:200px;  height: 300px; margin-left: auto; margin-right: auto"
             border="0" class="img profile-user-img img-responsive img-rounded movie-image" align="center">
            <img class="profile-user-img img-responsive img-rounded movie-image text-center" id="carimage4"
                 :src="thumbnail" border="0" hspace="0" vspace="0"
                 style="height:300px;">
        </div>
    </div>
</template>

<script>
    export default {
        name: "movieThumbnail",
        props: [
            'title',
            'thumbnail'
        ]
    }
</script>

<style scoped>

</style>