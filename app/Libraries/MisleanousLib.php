<?php
namespace App\Libraries;

use App\MoviesInfo;

class MisleanousLib {

	public function __construct(){}

  /**
   * Method for the search page.
   * @param $type : type of result [any, like] 
   * @param $category : video category name
   * @param $videoName : name of video
   * @return void
   */
  public static function siderVideos($type, $category, $videoName = NULL){
    $movies = [];

	  if($type == 'like' && $videoName != NULL){
      $movies1 = MoviesInfo::where('name', 'like',  "{$videoName}%")
                ->where('category', $category)
                ->inRandomOrder()
                ->offset(0)
                ->limit(5)
                ->get();
      foreach ($movies1 as $value) {
          array_push($movies, $value);   
      }

      //suplimentary lists
      if(sizeof($movies) < 5){
        $movies1 = MoviesInfo::where('name', 'like',  "{$videoName}%")
                ->where('category', $category)
                ->inRandomOrder()
                ->offset(0)
                ->limit(5 - sizeof($movies))
                ->get();
        foreach ($movies1 as $value) {
            array_push($movies, $value);   
        }
      }

      if(sizeof($movies) < 5){
        $movies1 = MoviesInfo::where('name', 'not like',  $videoName)
                ->where('category', $category)
                ->inRandomOrder()
                ->offset(0)
                ->limit(5 - sizeof($movies))
                ->get();
        foreach ($movies1 as $value) {
            array_push($movies, $value);   
        }
      }

    }
    else{
      $movies1 = MoviesInfo::where('category', $category)
                ->inRandomOrder()
                ->offset(0)
                ->limit(5)
                ->get();
      foreach ($movies1 as $value) {
          array_push($movies, $value);   
      }
    }

    return $movies;
  }

   
    private function _strpos ($stg, $ary){
         foreach ($ary as $value) {
             if(strpos($stg, $value)  === true)
                return true;
         }
        return false;
    }
	
}