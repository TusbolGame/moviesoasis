<?php

namespace App\Http\Controllers\Movies;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\MoviesInfo;
use App\Crawlers;
use App\Libraries\EfikasLib;
use App\Libraries\MisleanousLib;

class MoviesController extends Controller
{

    /**
     * Method for the Movies Category page.
     * @param  $category : String - Category value from the url
     * @return response
     */
    public function category($category)
    {
        $movies = MoviesInfo::where('category', $category)
            ->orderBy('id', 'Desc')
            ->paginate(100);

        return response($movies);
    }


    /**
     * Method for the movie detail page.
     * @param hashId: string - video enc_id
     * @return void
     */
    public function movie($movie_id)
    {
        $movieDetail = MoviesInfo::where('enc_id', $movie_id)
            ->first();

        $data = [
            'menu' => 1,
            'title' => ucwords($movieDetail->name),
            'category' => ucwords($movieDetail->category),
            'movieId' => EfikasLib::getMovieId($movieDetail->youlink),
            'movieDetail' => $movieDetail
        ];

       return response($data);
    }
}
