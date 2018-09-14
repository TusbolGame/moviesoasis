<template>
    <div>
        <div class="text-left">
            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <label for="movie_title" class="control-label">Movie Title</label>
                        <div>
                            <input type="text" class="form-control" id="movie_title" name="movie_title"
                                   placeholder="Movie Title" required/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <div class="form-group">
                        <label for="category" class="control-label">Category</label>
                        <div>
                            <select class="form-control" id="category" name="category" required>
                                <option value="">Select Category</option>
                                <option value="yoruba">Yoruba Movie</option>
                                <option value="english">English Movie</option>
                                <option value="hausa">Hausa Movie</option>
                                <option value="igbo">Igbo Movie</option>
                                <option value="indian">Indian Movie</option>
                                <option value="yoruba_durbed">Youba Durbed Movie</option>
                                <option value="ghanaian">Ghanaian Movie</option>
                                <option value="religious">Religious</option>
                                <option value="comedy">Comedy</option>
                                <option value="wrestling">Wrestling</option>
                                <option value="how_tos">How Tos</option>
                                <option value="football">Football highlight</option>
                                <option value="music">Music</option>
                                <option value="technology">Technology</option>
                                <option value="documentary">Documentary</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="form-group">
                        <label class="control-label">Category2</label>
                        <div>
                            <select class="form-control" id="religions" name="religions">
                                <option value="">Religion Type</option>
                                <option value="christian">Christian</option>
                                <option value="muslim">Muslim</option>
                                <option value="hindu">Hindu</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row">
                <div class="col-sm-12 col-md-4">
                    <div class="form-group">
                        <label for="genre" class="control-label">Genre</label>
                        <div>
                            <input type="text" class="form-control" id="genre" name="genre" placeholder="Genre"/>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4">
                    <div class="form-group">
                        <label for="date" class="control-label">Released Date</label>
                        <div>
                            <input type="text" class="form-control" id="date" name="date" placeholder="Released Date"
                                   required/>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4">
                    <div class="form-group">
                        <label for="duration" class="control-label">Duration</label>
                        <div>
                            <input type="text" class="form-control" id="duration" name="duration" placeholder="Duration"
                                   required/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <label for="youlink" class="control-label">Youtube Link</label>
                        <div class="">
                            <input type="text" class="form-control" id="youlink" name="youlink"
                                   placeholder="https://youtube.com/embed/WnIZ3faURYE"/>
                        </div>
                    </div>
                </div>
            </div>
            <!--<div class="row">-->
                <!--<div class="col-sm-12 col-md-6">-->
                    <!--<div class="form-group">-->
                        <!--<label for="subtitle" class="control-label">Subtitle name</label>-->
                        <!--<div>-->
                            <!--<input type="text" class="form-control" id="subtitle" name="subtitle"-->
                                   <!--placeholder="subtitle"/>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="col-sm-12 col-md-6">-->
                    <!--<div class="form-group">-->
                        <!--<label><strong>Subtitle Upload: <span class="text-red"> File size should not be greater than 200KB.</span></strong></label>-->
                        <!--<div style="overflow:hidden">-->
                            <!--<input class="rnd-link" type="file" id="subtitlefile" name="subtitlefile"/>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
            <div class="row">
                <div class="col-12 text-center">
                    <button class="btn btn-primary mt-2" @click="submit">Submit</button>
                </div>
            </div>
        </div><!-- /.tab-pane -->
    </div>
</template>


<script>
    export default {
        methods: {
            flag(category) {
                if (category == "christian" || category == "islamic") {
                    return true;
                }
                return false;
            }
        },
        created() {
            // this.$movies.getMovies()
            //     .then((data) => {
            //         console.log(data.data.data);
            //         this.movies = data.data.data;
            //     })
        },
        data() {
            return {
                movie: {
                    name: '',
                    released_date: '',
                    genre: '',
                    duration: '',
                    youlink: '',
                    subtitle: ''
                },
                adminUrl: '',
            }
        },
        methods: {
            submit() {
                this.$emit('closeDialog');
            }
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

    label {
        font-size: 0.7em !important;
    }

    .mt-2 {
        margin-top: 20px !important;
    }
</style>
