  @extends('layouts.admin')

  
  @section('title', $title)

  @section('content')
   <div class="body-container" >

      <section class="content-header">
        <h1>
          User Profile
        </h1>
       </section>

      <div class="box box-primary" style="margin:20px 3% 0px 3%;" >    

                <div class="box-body box-profile student-leftbox">
                  <div class="tab-pane" id="settings">
                    <form class="form-horizontal" method="post" action="" enctype="multipart/form-data" />
                     {{ csrf_field() }}
                      <div class="form-group">
                        <label for="movie_title" class="col-sm-2 control-label">Movie Title</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="movie_title" name="movie_title" placeholder="Movie Title" value="{{ $movie->name }}"required />
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="category" class="col-sm-2 control-label">Category</label>
                        <div class="col-sm-4">
                         <!-- select -->
                            <select class="form-control" id="category" name="category" style="font-weight: bold; width: 150px;" required>
                            <option value="">Select Category</option>
                              <option value="yoruba" <?php if ($category == 'yoruba'){ echo 'selected = "selected"';} ?> >Yoruba Movie</option>
                              <option value="english" <?php if ($category == 'english'){ echo 'selected = "selected"';} ?> >English Movie</option>
                              <option value="hausa" <?php if ($category == 'hausa'){ echo 'selected = "selected"';} ?> >Hausa Movie</option>
                              <option value="igbo" <?php if ($category == 'igbo'){ echo 'selected = "selected"';} ?> >Igbo Movie</option>
                              <option value="indian" <?php if ($category == 'indian'){ echo 'selected = "selected"';} ?> >Indian Movie</option>
                              <option value="yoruba_durbed" <?php if ($category == 'yoruba_durbed'){ echo 'selected = "selected"';} ?> >Youba Durbed Movie</option>
                              <option value="ghanaian" <?php if ($category == 'ghanaian'){ echo 'selected = "selected"';} ?> >Ghanaian Movie</option>
                              <option value="religious" <?php if ($category == 'religious'){ echo 'selected = "selected"';} ?> >Religious</option> 
                              <option value="comedy" <?php if ($category == 'comedy'){ echo 'selected = "selected"';} ?> >Comedy</option>
                              <option value="wrestling" <?php if ($category == 'wrestling'){ echo 'selected = "selected"';} ?> >Wrestling</option>
                              <option value="how_tos" <?php if ($category == 'how_tos'){ echo 'selected = "selected"';} ?> >How Tos</option>
                              <option value="football" <?php if ($category == 'football'){ echo 'selected = "selected"';} ?> >Football highlight</option>
                              <option value="music" <?php if ($category == 'music'){ echo 'selected = "selected"';} ?> >Music</option>
                              <option value="technology" <?php if ($category == 'technology'){ echo 'selected = "selected"';} ?> >Technology</option>
                              <option value="documentary" <?php if ($category == 'documentary'){ echo 'selected = "selected"';} ?> >Documentary</option>                             
                            </select>
                        </div>
                        <div class="col-sm-6">
                
                     <!--< select -->
                        <select class="form-control" id="religions" name="religions" style="font-weight: bold; width: 150px; display: none">
                          <option value="" <?php if ($religious == ''){ echo 'selected = "selected"';} ?>>Religion Type</option>
                            <option value="christian" <?php if ($religious == 'christian'){ echo 'selected = "selected"';} ?>>Christian</option>
                            <option value="muslim" <?php if ($religious == 'muslim'){ echo 'selected = "selected"';} ?>>Muslim</option> 
                            <option value="hindu" <?php if ($religious == 'hindu'){ echo 'selected = "selected"';} ?>>Hindu</option>
                            <option value="others" <?php if ($religious == 'others'){ echo 'selected = "selected"';} ?>>Others</option> 
                        </select>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="date" class="col-sm-2 control-label">Released Date</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="date" name="date" placeholder="Released Date" value="{{ $movie->released_date }}" required />
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="genre" class="col-sm-2 control-label">Genre</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="genre" name="genre" placeholder="Genre" value="{{ $movie->genre }}" />
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="duration" class="col-sm-2 control-label">Duration</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="duration" name="duration" placeholder="Duration" value="{{ $movie->duration }}"  required />
                        </div>
                      </div>
                        
                      <div class="form-group">
                        <label for="youlink" class="col-sm-2 control-label">Youtube Link</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="youlink" name="youlink" placeholder="https://youtube.com/embed/WnIZ3faURYE"  value="{{ $movie->youlink }}" />
                        </div>
                      </div>
                     <div class="form-group">
                        <label for="subtitle" class="col-sm-2 control-label">Subtitle name</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="subtitle" name="subtitle" placeholder="subtitle"  value="{{ $movie->subtitle }}" />
                        </div>
                      </div>
                        <br/>
                      <div class="form-group">
                        <strong>Subtitle Upload: <span class="text-red"> File size should not be greater than 200KB.</span></strong>
                        <label for="post" class="col-sm-2 control-label">&nbsp;</label>
                        <div class="col-xs-10" style="overflow:hidden">
                        <input class="rnd-link" type="file" id="subtitlefile" name="subtitlefile" />
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
              </form>
             
                <div class="box-body box-profile student-rightbox text-center">
                <div class="preview">
                  <div id="preview" >
                  <img class="profile-user-img img-responsive img-rounded movie-image" id='carimage' src="assets/include/uploads/{{ $movie->photo_id }}.png">
                  </div> 
                 <form class="upload" id="imageform" method="post" action="assets/include/ajaximage.php?imagename={{ $movie->photo_id }}" enctype="multipart/form-data">
                  <div id="drop" class="drop" >
                            <div id='imageloadstatus'>
                            <img src="assets/images/loader.gif" alt="Uploading...."  width="140px" height="25px"/>
                            </div>
                            <div id='imageloadbutton'>
                                <a>Browse</a>
                                <input type="file" id="photoimg" name="photoimg" />
                            </div>

                        </div>
                  </form>
                </div><!-- /.box-body -->
                </div>
              </div><!-- /.box -->
</div>

  @endsection('content')

  <!-- Push a style dynamically from a view -->
  @push('scripts')
	 <script>
    ( function($) {
      $(document).ready(function() {
        $('#religions').hide();
        var value1 = $('#category').find('option:selected').val();
        if (value = "religious"){
            $('#religions').show();
          }
      });
    })(jQuery);
    </script>
  @endpush