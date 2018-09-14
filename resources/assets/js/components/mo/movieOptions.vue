<template>
    <div class="">
        <!-- watch online -->

        <div class=" topic-row-height row-even text-center download-div h3" style="color:white">
            <strong> Watch video Online</strong>
        </div>

        <div class="topic-row-height text-center no-padding">
            <ul class="pager no-padding">
                <li class="pager-next no-padding">
                    <a class="page-link"
                       :href="'/playonline/' + JSON.parse(JSON.parse(myvalues).movieDetail).enc_id"
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
                       :href="'/download/' + JSON.parse(JSON.parse(myvalues).movieDetail).enc_id"
                       aria-label="Read More..." style="border-color: red">
                        Download Video
                    </a>
                </li>
            </ul>
        </div>

        <div class="topic-row-height text-center no-padding"
             v-if="JSON.parse(JSON.parse(myvalues).movieDetail).subtitle">
            <ul class="pager no-padding">
                <li class="pager-next no-padding danger">
                    <a class="page-link"
                       :href="'/subtitle/' + JSON.parse(JSON.parse(myvalues).movieDetail).enc_id"
                       aria-label="Read More..." style="border-color: red">
                        Download Subtitle
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'myvalues'
        ],
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
