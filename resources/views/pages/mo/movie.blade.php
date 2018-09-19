  @extends('layouts.base')

  
  @section('title', $title)

  @section('content')
   
    <div id="app">
        <movie-info myvalues="{{ $myvalues }}"></movie-info>
        <!-- Advert row -->

        <!-- End Advert row -->
        <movie-options myvalues="{{ $myvalues }}" movieId="{{$movie_id}}"></movie-options>
    </div>  
  @endsection('content')

<!-- Push a style dynamically from a view -->
  @push('sider')
    <div class="contact-box text-center" style="margin-top:50px; margin-left:5px;">
      <div class="topic-row-height topic-header">
        Related Videos
      </div>
      @foreach($catSider as $video)
        @if($loop->index % 2 == 1)
          <div class="topic-row-height text-center">
       <a href="{{'/movie/' . $video->enc_id }}">{{ ucwords(strtolower($video->name)) }}</a>  
    </div> 
        @else
        <div class="topic-row-height text-center row-even">
          <a href="{{'/movie/' . $video->enc_id }}">{{ ucwords(strtolower($video->name)) }}</a> 
        </div> 
        @endif
        
    @endforeach
     </div>
   @endpush