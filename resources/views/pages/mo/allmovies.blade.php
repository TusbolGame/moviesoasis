  @extends('layouts.base')

  
  @section('title', $title)

  @section('content')
   
    <div id="app">
        
        <section class="content-headerf" style="float: left !important; width: 100%; margin-top: 20px;">
          <ol class="breadcrumb" >
            <li><a href="/"><i class="glyphicon glyphicon-home"></i> Home</a></li>
            <li><a href="{{ 'category/' . $category }}"><i class="glyphicon glyphicon-expand"></i>{{ ucfirst($category) }} Movies</a></li>
            <li class="active">All Movies</li>
          </ol>
        </section>
        <div class="headings text-center h2" style="margin-top:80px;">
              {{ ucfirst($category) }} Movies
        </div>
        <div class="row">
           <!-- content div -->
           <div class="col-xs-12 col-sm-12 text-center">

            <div class="topic-row-height text-center" style="color:red">
                <a href="{{ 'category/' . $category }}" style="color: red">
                    <strong>Latest 50 Movies here</strong>
            </a>
            </div>
            
            <div class=" topic-row-height row-even">
            <a href="{{ '/' . $category.'/movies/A' }}">A</a>
            </div>
            <div class="topic-row-height text-center">
            <a href="{{ '/' . $category.'/movies/B' }}">B</a>
            </div>
            <div class=" topic-row-height row-even">
            <a href="{{ '/' . $category.'movie' }}">C</a>
            </div>
            <div class="topic-row-height text-center">
            <a href="{{ '/' . $category.'/movies/D' }}">D</a>
            </div>
            <div class=" topic-row-height row-even">
            <a href="{{ '/' . $category.'/movies/E' }}">E</a>
            </div>
            <div class="topic-row-height text-center">
            <a href="{{ '/' . $category.'/movies/F' }}">F</a>
            </div>
            <div class=" topic-row-height row-even">
            <a href="{{ '/' . $category.'/movies/G' }}">G</a>
            </div>
            <div class="topic-row-height text-center">
            <a href="{{ '/' . $category.'/movies/H' }}">H</a>
            </div>
            <div class=" topic-row-height row-even">
            <a href="{{ '/' . $category.'/movies/I' }}">I</a>
            </div>
            <div class="topic-row-height text-center">
            <a href="{{ '/' . $category.'/movies/J' }}">J</a>
            </div>
            <div class=" topic-row-height row-even">
            <a href="{{ '/' . $category.'/movies/K' }}">K</a>
            </div>
            <div class="topic-row-height text-center">
            <a href="{{ '/' . $category.'movie' }}">L</a>
            </div>
            <div class=" topic-row-height row-even">
            <a href="{{ '/' . $category.'/movies/M' }}">M</a>
            </div>
            <div class="topic-row-height text-center">
            <a href="{{ '/' . $category.'/movies/N' }}">N</a>
            </div>
            <div class=" topic-row-height row-even">
            <a href="{{ '/' . $category.'/movies/O' }}">O</a>
            </div>
            <div class="topic-row-height text-center">
            <a href="{{ '/' . $category.'/movies/P' }}">P</a>
            </div>
            <div class=" topic-row-height row-even">
            <a href="{{ '/' . $category.'/movies/Q' }}">Q</a>
            </div>
            <div class="topic-row-height text-center">
            <a href="{{ '/' . $category.'/movies/R' }}">R</a>
            </div>
            <div class=" topic-row-height row-even">
            <a href="{{ '/' . $category.'/movies/S' }}">S</a>
            </div>
            <div class="topic-row-height text-center">
            <a href="{{ '/' . $category.'/movies/T' }}">T</a>
            </div>
            <div class=" topic-row-height row-even">
            <a href="{{ '/' . $category.'/movies/U' }}">U</a>
            </div>
            <div class="topic-row-height text-center">
            <a href="{{ '/' . $category.'/movies/V' }}">V</a>
            </div>
            <div class=" topic-row-height row-even">
            <a href="{{ '/' . $category.'/movies/W' }}">W</a>
            </div>
            <div class="topic-row-height text-center">
            <a href="{{ '/' . $category.'/movies/X' }}">X</a>
            </div>
            <div class=" topic-row-height row-even">
            <a href="{{ '/' . $category.'/movies/Y' }}">Y</a>
            </div>
            <div class="topic-row-height text-center">
            <a href="{{ '/' . $category.'/movies/Z' }}">Z</a>
            </div>
            <div class=" topic-row-height row-even">
            <a href="{{ '/' . $category.'/movies/0_9' }}">0-9</a>
            </div>
            

             </div>
      </div>     



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

