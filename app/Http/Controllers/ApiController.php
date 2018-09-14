<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\MoviesInfo;
use App\MoviesUpload;
use App\PageView;
use App\Bots;
use App\Visitors;
use App\Libraries\EfikasLib;
use App\Libraries\EfikasVisitors;

class ApiController extends Controller{

    public function __construct(){
    	header("Access-Control-Allow-Origin: *");
    }

	/**
	* @name getMovies
	* @return object
	* @description 
	*/
    public function getMovies(Request $request){
    	$pageNumber = $request->num;
    	$category = $request->cat;

        $movies = MoviesUpload::orderBy('id', 'Desc')
                    ->where('category', $category)
                    ->paginate(20, ['*'], 'page', $pageNumber);
        // dd($rooms);
          return response(['data' => $movies]);
    }

	/**
	* @name getMovie
	* @return object
	* @description
	*/
    public function getMovie(Request $request){
    	$movieId = $request->movieId;
        $movie = MoviesUpload::where('enc_id', $movieId)
                    ->first();
        // dd($rooms);
          return response(['movie' => $movie]);;
    }

	/**
	* @name getUpdateMovie
	* @return object
	* @description
	*/
    public function getUpdateMovie(Request $request){
    	$movieId = $request->movieId;
    	$category = '';

        $movie = MoviesUpload::orderBy('id', 'Desc')
                    ->where('category', $category)
                    ->paginate(20);
        // dd($rooms);
          return $movie;
    }



    /*********************************   API  *****************************************************/


    /**
     * @name getBots
     * @return object
     * @description
     */
    public function getBots(Request $request){
        $pageNumber = $request->num;

        $bots = Bots::orderBy('id', 'Desc')
            ->paginate(20, ['*'], 'page', $pageNumber);
        return response(['data' => $bots]);
    }

}
