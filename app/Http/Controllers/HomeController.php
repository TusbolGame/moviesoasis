<?php 

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\MoviesInfo;
use App\PageView;
use App\Crawlers;
use App\Visitors;
use App\Libraries\EfikasLib;
use App\Libraries\EfikasVisitors;
use App\Libraries\MisleanousLib;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // EfikasVisitors::visitorsLog();
        // $this->middleware('auth');
    }

    /**
     * Method for the home links page.
     *
     * @return void
     */
    public function home() {
    
        $data = [
                'menu' =>  1, 
                'title' => "Home",
                'yoruba' => MisleanousLib::siderVideos('any', 'yoruba'),
                'hausa' => MisleanousLib::siderVideos('any', 'hausa'),
                'nollywood' => MisleanousLib::siderVideos('any', 'english'), 
                'ghanaian' => MisleanousLib::siderVideos('any', 'ghanaian'),
            ];

        return view('pages.home')
                ->with($data);
    }

    /**
     * Method for the contact page
     *
     * @return void
     */
    public function contact(){
        $data = [
            'menu' =>  1,
            'title' => "Home",
            'success' => "",
            'error' => "",
            'yoruba' => MisleanousLib::siderVideos('any', 'yoruba'),
            'hausa' => MisleanousLib::siderVideos('any', 'hausa'),
            'nollywood' => MisleanousLib::siderVideos('any', 'english'),
            'ghanaian' => MisleanousLib::siderVideos('any', 'ghanaian'),
        ];

        return view('pages.contact')->with($data);
    }

    /**
     * Method for the privacy page
     *
     * @return void
     */
    public function privacy(){
        $data = [
            'menu' =>  1,
            'title' => "Home",
            'yoruba' => MisleanousLib::siderVideos('any', 'yoruba'),
            'hausa' => MisleanousLib::siderVideos('any', 'hausa'),
            'nollywood' => MisleanousLib::siderVideos('any', 'english'),
            'ghanaian' => MisleanousLib::siderVideos('any', 'ghanaian'),
        ];

        return view('pages.privacy')->with($data);
    }

    /**
     * Method for the logout links page.
     *
     * @return void
     */
    public function logout() {
    
        Auth:logout();
        return Redirect::to('/login');
    }


}
