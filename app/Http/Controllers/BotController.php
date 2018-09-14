<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Goutte\Client;
use App\MoviesUpload;
use App\MoviesInfo;
use App\Libraries\EfikasLib;

class BotController extends Controller
{

    public function start (){
        $dbVideos = [];         //hold the video link from the database
        $pulloutCounter = 0;    //Use to pull out of the for loop
        $numVideoUploaded = 0;
        date_default_timezone_set('Africa/Lagos');
        //get latest 2500 from the control table
        $latest = MoviesUpload::orderBy('id', 'desc')->take(1000)->get(['youlink']);
        foreach ($latest as $late){
            array_push($dbVideos, $late->youlink);
        }

        $categories = [
//            'comedy',
            'yoruba',
//            'yoruba',
//            'yoruba',
//            'yoruba',
//            'yoruba',
//            'english',
//            'english',
//            'english',
//            'english',
//            'english',
//            'english',
//            'english',
//            'english',
//            'english',
//            'english',
//            'ghanaian',
//            'english',
//            'hausa',
//            'ghanaian'
        ];

        $categoryLinks = [
//            'https://www.youtube.com/channel/UCiodaA8ksQTXSDwBYbP3NRQ/videos',
//            'https://www.youtube.com/channel/UCeAH89bVuCLxp7MPOBZFZNQ/videos',
            'https://www.youtube.com/user/Yorubac/videos',
//            'https://www.youtube.com/channel/UC83tx3zGcvQ_rXzsZigTnEA/videos',
//            'https://www.youtube.com/user/Yoruba5star/videos?pbjreload=10',
//            'https://www.youtube.com/channel/UCdUth5xByWogqrnjKmTAlIw/videos',
//            'https://www.youtube.com/user/BestOfNgoziEzeonu/videos',
//            'https://www.youtube.com/channel/UCcLy9rQmvnM58SsKyH1PBUQ/videos',
//            'https://www.youtube.com/user/realnollywoodclips/videos',
//            'https://www.youtube.com/user/BestOfNkemOwoh/videos',
//            'https://www.youtube.com/user/BestOfYulEdochie/videos',
//            'https://www.youtube.com/channel/UCxqYR3IYtcNzggn5iFuJOqQ/videos',
//            'https://www.youtube.com/user/BestOfTontoDikeh/videos',
//            'https://www.youtube.com/channel/UCvG9pZyZRCAF-Cvt6EJozSA/videos',
//            'https://www.youtube.com/channel/UC1RcwW8j1YPDV-x-vmvk-Jg/videos',
//            'https://www.youtube.com/channel/UCslPrFHWzIuHagy3BszaB2w/videos',
//            'https://www.youtube.com/channel/UC_PnsBvo7XrCvVfspRETVDw/videos',
//            'https://www.youtube.com/user/Nollywood5ive/videos'
        ];

        $selector = 'body div#body-container div#page-container div#page div#content div.branded-page-v2-container div.branded-page-v2-col-container div.branded-page-v2-col-container-inner div.branded-page-v2-primary-col div div ul li ul.channels-browse-content-grid li div div.yt-lockup-dismissable';

        foreach($categoryLinks as $key => $catLink){
            $client = new Client();
            $crawler = $client->request('GET', $catLink);

            $crawler->filter($selector)->each(function($node)use($dbVideos, $categories, $key, &$numVideoUploaded){
                $link = $node->filter('div.yt-lockup-thumbnail span a.yt-uix-sessionlink')->link()->getUri();

                if(strpos($link, '/watch') & !in_array($link, $dbVideos)) {
                    $duration = $node->filter('div.yt-lockup-thumbnail span span.video-time span')->text();
                    $title = $node->filter('div.yt-lockup-content h3 a')->text();
                    array_push($dbVideos, $link);

                    $name = explode('-', $title)[0];
                    $replace2 = ['LATEST NOLLYWOOD MOVIES ||' => '',
                                'Latest Nollywood Movies ||' => ''];
                    $name = EfikasLib::strReplaceAssoc($replace2, $name);

                    //insert into database
                    $response = null;
                    $movieUpload = new MoviesUpload();
                    $movieUpload->name = trim($name);
                    $movieUpload->movies_details = ucwords(strtolower(trim($title)));
                    $movieUpload->category = $categories[$key];
                    $movieUpload->category2 = '';
                    $movieUpload->released_date = date('Y');
                    $movieUpload->genre = 'drama';
                    $movieUpload->duration = trim($duration);
                    $movieUpload->youlink = trim($link);
                    $movieUpload->save();

                    //increment number of uploads
                   $numVideoUploaded++;
                }
            });
        }
        echo $numVideoUploaded . ' movies uploaded';
    }
}
