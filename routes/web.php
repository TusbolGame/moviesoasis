<?php

//Route::get('/', ['as' => 'home', 'uses' => 'HomeController@home']);
//Route::get('/contact', ['as' => 'contact', 'uses' => 'HomeController@contact']);
//Route::get('/about', ['as' => 'about', 'uses' => 'HomeController@about']);
//Route::get('/privacy', ['as' => 'privacy', 'uses' => 'HomeController@privacy']);
//Route::get('/category/religious', ['as' => 'religious', 'uses' => 'MoController@religious']);
//Route::get('/category/religious/{cat}', ['as' => 'religion', 'uses' => 'MoController@religious']);
//Route::get('/category/{cat}', ['as' => 'category', 'uses' => 'MoController@category']);
//Route::get('/movie/{hashId}', ['as' => 'movie', 'uses' => 'MoController@movie']);
//Route::get('/download/{hashId}', ['as' => 'download', 'uses' => 'MoController@download']);
//Route::get('/subtitle/{hashId}', ['as' => 'subtitle', 'uses' => 'MoController@subtitle']);
//Route::get('/getsubtitle/{hashId}/{hash}', ['as' => 'get-subtitle', 'uses' => 'MoController@getsubtitle']);

//Route::get('/playonline/{hashId}', ['as' => 'watch-movies', 'uses' => 'MoController@watchmovie']);
//Route::get('/{cat}/allmovies', ['as' => 'all-movies', 'uses' => 'MoController@allmovies']);
//Route::get('/{cat}/movies/{alphabet}', ['as' => 'movies', 'uses' => 'MoController@movies']);
//Route::get('/search', ['as' => 'get-search', 'uses' => 'MoController@search']);
//Route::post('/search', ['as' => 'post-search', 'uses' => 'MoController@search']);


Route::get('/vdownload', ['as' => 'vdownload', 'uses' => 'MoController@vdownload']);


//API ROUTES
Route::get('/api/getmovies/category/{cat}/pagenumber/{num}', 'ApiController@getMovies');
//Route::get('/bot/start', 'BotController@start');
Route::get('/api/getbots/pagenumber/{num}', 'ApiController@getBots');


Auth::routes();
//Route::group(['middleware'=> ['auth']], function(){

Route::get('/admin/{vue_capture?}', function () {
    return view('admin_template');
})->where('vue_capture', '[\/\w\.-]*');

//});

Route::get('/{vue_capture?}', function () {
    return view('main_template');
})->where('vue_capture', '[\/\w\.-]*');



// Route::get('/portal', 'Portal@portal');
// Route::get('/portal/students', 'Portal@students');
// Route::get('/portal/new_student', 'Portal@new_student');






//Route::get('/admin/{any}', function () {
//    return view('layouts.admin_template');
//})->where('any', '.*');





// Route::get('/home', 'AdminController@index')->name('Dashboard');








//ADMIN
// Route::get('/moadmin', 'AdminController@login');
//Route::get('/moadmin/dashboard', 'AdminController@dashboard');
//Route::get('/moadmin/visitors', 'AdminController@visitors');
//Route::get('/moadmin/bots', 'AdminController@bots');
//Route::get('/moadmin/movieslist', 'AdminController@movieslist');
//Route::get('/moadmin/editmovie/{hashId}', 'AdminController@editmovie');
//Route::post('/moadmin/editmovie/{hashId}', 'AdminController@editmovie');

//Route::get('/login', 'HomeController@login');
//Route::get('/logout', 'HomeController@logout');

