  @extends('layouts.base')

  
  @section('title', $title)

  @section('content')
   
    <div id="app">
       @if(!isset($category))
          <religious></religious>
        @else
          <category movies="{{ $movies }}" category="{{ $category }}"></category>
      @endif
    </div>
  @endsection('content')
  <!-- Push a style dynamically from a view -->
  @push('sider')
  

   <div class="contact-box text-center" style="margin-top:50px; margin-left:5px;">
          <div class="topic-row-height topic-header">
            Yoruba Movies
          </div>
          @foreach($yoruba as $video)
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
      <div class="contact-box text-center" style="margin-top:50px; margin-left:5px;">
          <div class="topic-row-height topic-header">
            Nollywood Movies
          </div>
          @foreach($nollywood as $video)
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
      <div class="contact-box text-center" style="margin-top:50px; margin-left:5px;">
          <div class="topic-row-height topic-header">
            Hausa Movies
          </div>
          @foreach($hausa as $video)
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
      <div class="contact-box text-center" style="margin-top:50px; margin-left:5px;">
          <div class="topic-row-height topic-header">
            Ghanaian Movies
          </div>
          @foreach($ghanaian as $video)
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

