<?php 

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\MoviesInfo;
use App\PageView;
use App\Crawlers;
use App\Visitors;
use App\Libraries\EfikasLib;
use App\Libraries\EfikasVisitors;

class AdminController extends Controller
{
   /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(){
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    /**
     * det the dashbord page.
     *
     * @return dashbord view
     */
    public function dashboard(){

    	$pageView = PageView::orderBy('id', 'Desc')
                  ->offset(0)
                  ->limit(30)
                  ->get();

        $_data = PageView::orderBy('id', 'Desc')
                  ->get();

        $monthlyViews = [];
        $dailyViews = [];

        if(sizeof($_data) > 0){
            //Array to return
            $monthlyView = [];
            $monthlyHumanView = [];
            $months = [];

            foreach($_data as $day){
                //Get the Month and Year from avery day and concatenate it
                $_monthYear = explode('-', $day->dated);
                $monthYear  = $_monthYear[0] . '_' . $_monthYear[2];
                
                //Check if the $monthYear exist in the array to return
                if(array_key_exists($monthYear, $monthlyView)){
                    $monthlyView[$monthYear] += $day->view;
                    $monthlyHumanView[$monthYear] += $day->human;
                }
                else{
                    //check to enable the number of month returned ia not more than 12
                    if(sizeof($monthlyView) < 13){
                        $monthlyView[$monthYear] = $day->view;
                        $monthlyHumanView[$monthYear] = $day->human;
                        array_push($months, $monthYear);
                    }
                    else{
                        $monthlyViews = [
                            'monthlyViews' => array_reverse($monthlyView),
                            'monthlyHumanViews' => array_reverse($monthlyHumanView),
                            'months' => array_reverse($months)
                        ];
                    }
                }
            }
                
            $monthlyViews = [
                        'monthlyViews' => array_reverse($monthlyView),
                        'monthlyHumanViews' => array_reverse($monthlyHumanView),
                        'months' => array_reverse($months)
                    ];
        }

		foreach ($pageView as $value){
            array_push($dailyViews, $value);
         }
        
        $data = [
            'menu' =>  1,
            'title' => 'Dashboard',
            'mViews' => json_encode($monthlyViews),
            'dailyView' => json_encode(array_reverse($dailyViews))
        ];

        return view('pages.admin.dashboard')
                ->with($data);
    }

    /**
     * det the dashbord page.
     *
     * @return visitors list view
     */
    public function movieslist(){

      $movies = Moviesinfo::orderBy('id', 'Desc')
                  ->paginate(50);
        
        $data = [
            'menu' =>  1,
            'title' => 'Movies List',
            'movies' => $movies
        ];

        return view('pages.admin.movieslist')
                ->with($data);
    }

    /**
     * det the Edit Movie page.
     *
     * @return visitors list view
     */
    public function editmovie(Request $request, $hashId){
      $hashId = $hashId;

      if($request->input('submit')){

        MoviesInfo::where('enc_id', $hashId)
                    ->update([
                      'name' => trim($request->input('name')),
                      'category' => trim($request->input('category')),
                      'released_date' => trim($request->input('released_date')),
                      'genre' => trim($request->input('genre')),
                      'duration' => trim($request->input('duration')),
                      'youlink' => trim($request->input('youlink')),
                      'subtitle' => trim($request->input('subtitle'))
                    ]);
        
      }
      else{

        $movie = Moviesinfo::where('enc_id', $hashId)
                  ->first();

        // if hashId did not exist, 404 Page
          if($movie == NULL){
            return AdminController::call404();
          }

        $category = $movie->category;
        $religious = "";
        $rel = explode($category, '__');

        if(sizeof($rel) > 1){
          $category = $rel[0];
          $religious = $rel[1];
        }
          
          $data = [
              'menu' =>  1,
              'title' => 'Edit Movie',
              'movie' => $movie,
              'category' => $category,
              'religious' => $religious
          ];

          return view('pages.admin.editmovie')
                  ->with($data);
      }

    }

    /**
     * det the dashbord page.
     *
     * @return visitors list view
     */
    public function visitors(){

      $visitors = Visitors::orderBy('id', 'Desc')
                  ->paginate(50);
        
        $data = [
            'menu' =>  1,
            'title' => 'Visitors List',
            'visitors' => $visitors
        ];

        return view('pages.admin.visitors')
                ->with($data);
    }

     /** det the dashbord page.
     *
     * @return visitors list view
     */
    public function bots(){

      $bots = Crawlers::orderBy('id', 'Desc')
                  ->paginate(50);
        
        $data = [
            'menu' =>  1,
            'title' => 'Bots List',
            'visitors' => $bots
        ];

        return view('pages.admin.bots')
                ->with($data);
    }

    /**
     * Method for the 404 page.
     *
     * @return void
     */
    private function call404() {
        $data = ['menu' =>  1, 'title' => '404 Page'];
        return view('errors.404')
                ->with($data);
    }
}
