  @extends('layouts.base')

  
  @section('title', $title)

  @section('content')
   
    <div id="app">
        <movie1 myvalues="{{ $myvalues }}"></movie1>
        <!-- Advert row -->
	      <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6">
               <div class="panel panel-warning" style="margin-top: 30px">
                  <div class="panel-body">
                      <script placementID = "155" src="http://www.adblabla.com/widgets/placement.js" type="text/javascript"></script>
                       <div id="widget-container_155" style="width:100%; max-height: 200px; overflow:hidden">
                       </div>
                      <!-- <div id="widget-container_155" style="width:100%; max-height: 200px; overflow:hidden">
                         <a href="http://c.jumia.io/?a=2643&c=77&p=r&E=kkYNyk2M4sk%3d&ckmrdr=https%3A%2F%2Fwww.jumia.com.ng%2Finfinix-hot-s%2F&utm_source=cake&utm_medium=affiliation&utm_campaign=2643&utm_term=">
                         <img src="http://eu1-ap2.ckcdnassets.com/1199/creatives/77/300x250.jpg" style="height: 100%; width:100%"/>
                      </a>
                      </div> -->
                  </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6">
             <div class="panel panel-warning" style="margin-top: 30px">
                  <div class="panel-body">
                      <a href="http://www.efikas.net"><img src="ads/efikas_ads.jpg" style="width: 100%;" /></a>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 hidden-xs">
              <div class="panel panel-warning" style="margin-top: 30px">
                  <div class="panel-body">
                      <script placementID = "158" src="http://www.adblabla.com/widgets/placement.js" type="text/javascript">
                      </script>
                      <div id="widget-container_158" style="width:100%; max-height: 200px; overflow:hidden">
                      </div>
                  </div>
              </div>
          </div>
        </div> 
        <!-- End Advert row -->
        <!-- download video code -->
        <div class=" text-center">    
          <p align="center"><strong>List of available formats for download:</strong></p>
          <div class="text-center" style="color:red">
              <strong>NOTE:</strong> If you find it difficult downloading this video with Opera on your mobile phone, try  using UC Browser, Ucweb, Mozilla or the phone default browser.<br /><br />
          </div>

          @foreach ($downloadLinks as $downloadLink)
            <div class=" topic-row-height row-even text-center">
              <strong> {{ $downloadLink['format']}} </strong>
              (<span class="size" style="color:blue;">{{ $downloadLink['size'] }}</span>)
            </div>

            <a class="rnd-link text-center mime btn-info" href="{{ $downloadLink['link2'] }}" style="width:40%; padding:10px; font-size:15px; font-weight:bold;">Download Link 1</a> <br/>
            <a class="rnd-link text-center mime btn-info" href="{{ $downloadLink['link1'] }}" style="width:40%; padding:10px; font-size:15px; font-weight:bold;">Download Link 2</a><br />
        @endforeach

        </div>
        <!-- End download code -->

          
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

