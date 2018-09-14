<template>
    <div class="">
        <section class="content-headerf" style="float: left !important; width: 100%; margin-top: 20px;">
            <ol class="breadcrumb">
                <li><a href="/"><i class="glyphicon glyphicon-home"></i> Home</a></li>
                <li>
                    <a :href="'/category/' + videoCategoryLink(JSON.parse(JSON.parse(myvalues).movieDetail).category).toLowerCase()">
                        <i class="glyphicon glyphicon-expand"></i>
                        {{ videoCategory(JSON.parse(myvalues).category.toLowerCase()) }} Movies
                    </a>
                </li>
                <li class="active">{{ $root.ucWords(JSON.parse(JSON.parse(myvalues).movieDetail).name) }}</li>
            </ol>
        </section>
        <div class="headings text-center h2" style="margin-top:80px;">
            <strong>{{ $root.ucWords(JSON.parse(JSON.parse(myvalues).movieDetail).name) }}</strong>
        </div>
        <div style="border:0px !important; width:200px;  height: 300px; margin-left: auto; margin-right: auto"
             border="0" class="img profile-user-img img-responsive img-rounded movie-image" align="center">
            <img class="profile-user-img img-responsive img-rounded movie-image text-center" id="carimage4"
                 :src="JSON.parse(myvalues).thumbnail.thumbnail_url" border="0" hspace="0" vspace="0"
                 style="height:300px;">
        </div>


        <div class="row">
            <div class="col-xs-6 text-right row-even">
                Released Date:
            </div>
            <div class="col-xs-6 blue row-even">
                {{ JSON.parse(JSON.parse(myvalues).movieDetail).released_date }}
            </div>
            <div class="col-xs-6 text-right">
                Duration:
            </div>
            <div class="col-xs-6">
                {{ JSON.parse(JSON.parse(myvalues).movieDetail).duration }}
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props: [
            'myvalues'
        ],
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
        mounted() {
            console.log("mounted");

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
