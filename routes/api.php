<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/movies/category/{category}', ['as'=> 'category', 'uses'=> 'Movies\MoviesController@category']);
Route::get('/movie/{movieId}', ['as'=> 'movieInfo', 'uses'=> 'Movies\MoviesController@movie']);
Route::get('/download/{movieId}', ['as'=> 'movieDownload', 'uses'=> 'Movies\MoviesController@download']);


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/bots', ['as'=> 'bots', 'uses'=> 'Admin\BotController@movie']);





/*
 * --------------------------------------------------------------------------------------
 *  VISITORS
 * --------------------------------------------------------------------------------------
 */

Route::get('/visitors', ['as'=> 'visitors', 'uses'=> 'Admin\VisitorController@index']);
