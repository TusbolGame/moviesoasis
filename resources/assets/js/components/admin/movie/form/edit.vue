<template>
  <div>
      <div class="body-container">
          <section class="content-header">
              <h1>
                  Edit Video
              </h1>
          </section>
          <div class="box box-primary" style="margin:20px 3% 0px 3%;">

              <div class="box-body box-profile student-leftbox">
                  <div class="tab-pane" id="settings">
                      <div class="form-group">
                          <label for="movie_title" class="col-sm-2 control-label">Movie Title</label>
                          <div class="col-sm-10">
                              <input type="text" class="form-control" id="movie_title" name="movie_title"
                                     placeholder="Movie Title" required/>
                          </div>
                      </div>
                      <div class="form-group">
                          <label for="category" class="col-sm-2 control-label">Category</label>
                          <div class="col-sm-4">
                              <select class="form-control" id="category" name="category"
                                      style="font-weight: bold; width: 150px;" required>
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
                          <div class="col-sm-6">
                              <select class="form-control" id="religions" name="religions"
                                      style="font-weight: bold; width: 150px; display: none">
                                  <option value="">Religion Type</option>
                                  <option value="christian">Christian</option>
                                  <option value="muslim">Muslim</option>
                                  <option value="hindu">Hindu</option>
                                  <option value="others">Others</option>
                              </select>
                          </div>
                      </div>
                      <div class="form-group">
                          <label for="date" class="col-sm-2 control-label">Released Date</label>
                          <div class="col-sm-10">
                              <input type="text" class="form-control" id="date" name="date" placeholder="Released Date"
                                     required/>
                          </div>
                      </div>
                      <div class="form-group">
                          <label for="genre" class="col-sm-2 control-label">Genre</label>
                          <div class="col-sm-10">
                              <input type="text" class="form-control" id="genre" name="genre" placeholder="Genre"/>
                          </div>
                      </div>
                      <div class="form-group">
                          <label for="duration" class="col-sm-2 control-label">Duration</label>
                          <div class="col-sm-10">
                              <input type="text" class="form-control" id="duration" name="duration" placeholder="Duration"
                                     required/>
                          </div>
                      </div>

                      <div class="form-group">
                          <label for="youlink" class="col-sm-2 control-label">Youtube Link</label>
                          <div class="col-sm-10">
                              <input type="text" class="form-control" id="youlink" name="youlink"
                                     placeholder="https://youtube.com/embed/WnIZ3faURYE"/>
                          </div>
                      </div>
                      <div class="form-group">
                          <label for="subtitle" class="col-sm-2 control-label">Subtitle name</label>
                          <div class="col-sm-10">
                              <input type="text" class="form-control" id="subtitle" name="subtitle"
                                     placeholder="subtitle"/>
                          </div>
                      </div>
                      <br/>
                      <div class="form-group">
                          <strong>Subtitle Upload: <span
                                  class="text-red"> File size should not be greater than 200KB.</span></strong>
                          <label for="subtitlefile" class="col-sm-2 control-label">&nbsp;</label>
                          <div class="col-xs-10" style="overflow:hidden">
                              <input class="rnd-link" type="file" id="subtitlefile" name="subtitlefile"/>
                          </div>
                      </div>
                      <br/>
                      <div class="form-group">
                          <div class="col-sm-offset-2 col-sm-10">
                              <button class="btn btn-danger" name="submit">Submit</button>
                          </div>
                      </div>
                  </div><!-- /.tab-pane -->
              </div><!-- /.box-body -->
              <!-- </div><!-- /.box -->
          </div><!-- /.box -->
      </div>
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
        mounted() {
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

