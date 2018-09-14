<?php
namespace App\Libraries;

use App\MoviesInfo;
use App\PageView;
use App\Crawlers;
use App\Visitors;
use App\Libraries\EfikasLib;
use Illuminate\Http\Request;

class EfikasVisitors {

	public function __construct(){}

	public static function visitorsLog(){
		//GET SERVER DATE
        date_default_timezone_set('Africa/Lagos');
        $date1 = date('F-d-Y');
        $date2 = date('h-i-s a');
        EfikasVisitors::pageview($date1);
        EfikasVisitors::visitor($date1, $date2);
    }

    private static function pageview($date){
        
        EfikasVisitors::_views('view', $date);
        $ip = '';
        $location = '';
    
        $request = new Request;
        $useragent = $request->header('User-Agent');
        $ip = $request->ip();
        $remotehost = @getHostByAddr($ip);
        // try{
               
        //     $location = json_decode(file_get_contents("http://ipinfo.io/" . $ip));
        //  }
        //  catch(Exception $ex){
                    
        // }
       
       if($useragent == "Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)"){
            redirect('http://www.yandex.com');
        }
        if($location == "FR : Hauts-de-France : Roubaix : AS16276 OVH SAS" || $useragent == ""){
            redirect('http://www.google.com');
        }
        
       
       $bot = array('bot', 'spider', 'crawler', 'Mediapartners-Google', 'facebookexternalhit/1.1');
        if (strpos($useragent, 'bot') === false && strpos($useragent, 'spider') === false && strpos($useragent, 'crawler') === false && strpos($useragent, 'Mediapartners-Google') === false && strpos($useragent, 'facebookexternalhit/1.1') === false)
        {
            EfikasVisitors::_views('human', $date);

        } 
    }
    
    private static function _views($column, $date){
        $newPageView = new PageView;

        $pageView = PageView::where('dated', $date)
                    ->first();

        $_view = 0;

        if($pageView)
         {
          
           if ($column == 'view'){
               $_view = $pageView->view;
           }
           else{
               $_view = $pageView->human;
           }
            
         /**
         * Update movie info id
         */
           
            PageView::where('dated', $date)
                     ->update([$column => $_view + 1]);
         } 
        else{

            /*
             * Insert the comment to the database
             */
            
            $newPageView->dated = $date;
            $newPageView->$column = 1;
            $newPageView->save(); 

          }
    }

    private static function visitor($date, $time){
        // Getting the information
        // $ipaddress = $_SERVER[‘REMOTE_ADDR’];
        // $page = “http://{$_SERVER[‘HTTP_HOST’]}{$_SERVER[‘PHP_SELF’]}”;
        // $page .= iif(!empty($_SERVER[‘QUERY_STRING’]), “?{$_SERVER[‘QUERY_STRING’]}”, “”);
        // $referrer = $_SERVER[‘HTTP_REFERER’];
        // $datetime = mktime();
        // $useragent = $_SERVER[‘HTTP_USER_AGENT’];
        // $remotehost = @getHostByAddr($ipaddress);
        
        $newVisitor = new Visitors;
        $newCrawler = new Crawlers;
        
        $remotehost = "";
        // $location = [
        //       'country' => '',
        //        'region' => '',
        //         'city' => '',
        //         'org' => ''
        // ];
        $request = new Request;
        $useragent = $request->header('User-Agent');
        $ip = $request->ip();
        $referrer = $request->server('HTTP_REFERER');
        $remotehost = @getHostByAddr($ip);



        $referrer = $referrer == "" ? "Site visited directely" : $referrer;

        //Test if it is a Bot
       $bot = array('bot', 'spider', 'crawler', 'Mediapartners-Google', 'facebookexternalhit/1.1');
        if (strpos($useragent, 'bot') === false && strpos($useragent, 'spider') === false && strpos($useragent, 'crawler') === false && strpos($useragent, 'Mediapartners-Google') === false && strpos($useragent, 'facebookexternalhit/1.1') === false){

            $visitor = Visitors::where('ip', $ip)
                        ->where('useragent', $useragent)
                        // ->where('referrer', $referrer)
                        ->where('date', $date)
                        ->first();

            $_view = 0;

            if(sizeof($visitor) <= 0){
                try{
                  $location = json_decode(file_get_contents("http://ipinfo.io/" . $ip));

                }
                catch(Exception $ex){
                    
                }

                 /* 
             * Insert the comment to the database
               * 
               */
             
                $newVisitor->ip =    $ip;
                $newVisitor->location = $location->country . ' : ' . $location->region . ' : ' . $location->city  . ' : ' . $location->org;
                $newVisitor->remotehost = $remotehost;
                $newVisitor->useragent = $useragent; 
                $newVisitor->referrer = $referrer;
                $newVisitor->date = $date;
                $newVisitor->time = $time;
                $newVisitor->save();
            }
            else{
                //Increase visitor's pageview by 1 for every page viewed
                Visitors::where('id', $visitor->id)
                      ->update(['pageview' => $visitor->pageview + 1]);
                
            }
        }
        else{
            if($useragent == "Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)"){
                redirect('http://www.yandex.com');
            }
            elseif(strpos($useragent, 'MegaIndex.ru')){
                redirect('http://megaindex.ru');
            }

            $crawler = Crawlers::where('useragent', $useragent)
                    ->where('date', $date)
                    ->get();

            $_view = 0;

            if(sizeof($crawler) <= 0){
                try{
              /* 
             * Insert the comment to the database
               * 
               */
              
                $newCrawler->ip =    $ip;
                $newCrawler->remotehost = $remotehost;
                $newCrawler->useragent = $useragent; 
                $newCrawler->referrer = $referrer;
                $newCrawler->date = $date;
                $newCrawler->time = $time;
                $newCrawler->save();
            
                }
                catch(Exception $ex){
                    
                }
            }
            else{ 
                //Increase visitor's pageview by 1 for every page viewed
                Crawlers::where('id', $crawler->id)
                      ->update(['pageview' => $crawler->pageview + 1]);
                
            }
        }

    }

    private function _strpos ($stg, $ary){
         foreach ($ary as $value) {
             if(strpos($stg, $value)  === true)
                return true;
         }
        return false;
    }
	
}