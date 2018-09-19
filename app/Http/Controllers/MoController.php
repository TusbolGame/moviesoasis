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

class MoController extends Controller
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
     * Method for the download2 links page.
     *
     * @return void
     */
    public static function vdownload()
    {
        $config['ThumbnailImageMode'] = 2;    // show thumbnail image by proxy from this server
        $config['VideoLinkMode'] = 'both'; // show both direct and by proxy download links
        /**********|| features ||***************/
        $config['feature']['browserExtensions'] = true; // show links for install browser extensions? true or false
        $config['multipleIPs'] = false; // enable multiple IPs support to bypass Youtube IP limit? true or false
        $config['IPs'] = [];
        date_default_timezone_set("Asia/Tehran");

        // Debug mode
        #$debug=true; // debug mode on
        $debug = false; // debug mode off

        if ($config['multipleIPs'] === true) {
            // randomly select an ip from the $config['IPs'] array
            $outgoing_ip = $config['IPs'][mt_rand(0, count($config['IPs']) - 1)];
        }

        // Check download token
        if (empty($_GET['mime']) OR empty($_GET['token'])) {
            exit('Invalid download token');
        }

        // Set operation params
        $mime = filter_var($_GET['mime']);
        $ext = str_replace(array('/', 'x-'), '', strstr($mime, '/'));
        $url = base64_decode(filter_var($_GET['token']));
        $name = urldecode($_GET['title']) . '.' . $ext;

        // Fetch and serve
        if ($url) {
            $size = EfikasLib::get_size($url);
            // Generate the server headers
            if (strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== FALSE) {
                header('Content-Type: "' . $mime . '"');
                header('Content-Disposition: attachment; filename="' . $name . '"');
                header('Expires: 0');
                header('Content-Length: ' . $size);
                header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
                header("Content-Transfer-Encoding: binary");
                header('Pragma: public');
            } else {
                header('Content-Type: "' . $mime . '"');
                header('Content-Disposition: attachment; filename="' . $name . '"');
                header("Content-Transfer-Encoding: binary");
                header('Expires: 0');
                header('Content-Length: ' . $size);
                header('Pragma: no-cache');
            }

            readfile($url);
            exit;
        }

        // Not found
        exit('File not found 8{');
    }

    /**
     * Method for the Movies Category page.
     * @param  $cat : String - Category value from the url
     * @return void
     */
    public function category($cat)
    {
        $category = $cat; //Get category from the URL
        $movies = NULL;

        $movies = MoviesInfo::where('category', $category)
            ->orderBy('id', 'Desc')
            ->offset(0)
            ->limit(50)
            ->get()
            ->toJson();

        //if hashId did not exist, 404 Page
        if ($movies == NULL) {
            return MoController::call404();
        }
        //Value to pass to the page
        $data = [
            'menu' => 1,
            'title' => ucwords($category),
            'category' => $category,
            'movies' => $movies,
            'yoruba' => MisleanousLib::siderVideos('any', 'yoruba'),
            'hausa' => MisleanousLib::siderVideos('any', 'hausa'),
            'nollywood' => MisleanousLib::siderVideos('any', 'english'),
            'ghanaian' => MisleanousLib::siderVideos('any', 'ghanaian'),
        ];

        return view('pages.mo.category')
            ->with($data);
    }

    /**
     * Method for the 404 page.
     *
     * @return void
     */
    private function call404()
    {
        $data = ['menu' => 1, 'title' => '404 Page'];
        return view('errors.404')
            ->with($data);
    }

    /**
     * Method for the hMovies Category page.
     * @param  $cat : String - Category value from the url
     * @return void
     */
    public function religion()
    {
        //Value to pass to the page
        $data = [
            'menu' => 1,
            'title' => "Religious",
            'yoruba' => MisleanousLib::siderVideos('any', 'yoruba'),
            'hausa' => MisleanousLib::siderVideos('any', 'hausa'),
            'nollywood' => MisleanousLib::siderVideos('any', 'english'),
            'ghanaian' => MisleanousLib::siderVideos('any', 'ghanaian'),
        ];

        return view('pages.mo.religious')
            ->with($data);
    }

    /**
     * Method for the hMovies Category page.
     * @param  $cat : String - Category value from the url
     * @return void
     */
    public function religious($cat = NuLL)
    {
        $category = $cat; //Get category from the URL
        $movies = NULL;

        //check for category religious
        if ($category != NULL) {
            $rel = 'christian';
            if ($category == 'islamic') {
                $rel = 'muslim';
            }
            $movies = MoviesInfo::where('category', 'religious__' . $rel)
                ->orWhere('category2', $rel)
                ->orderBy('id', 'Desc')
                ->offset(0)
                ->limit(50)
                ->get()
                ->toJson();


            //if hashId did not exist, 404 Page
            if ($movies == NULL) {
                return MoController::call404();
            }

            //Value to pass to the page
            $data = [
                'menu' => 1,
                'title' => ucwords($category),
                'category' => $category,
                'movies' => $movies,
                'yoruba' => MisleanousLib::siderVideos('any', 'yoruba'),
                'hausa' => MisleanousLib::siderVideos('any', 'hausa'),
                'nollywood' => MisleanousLib::siderVideos('any', 'english'),
                'ghanaian' => MisleanousLib::siderVideos('any', 'ghanaian'),
            ];

        } else {
            //Value to pass to the page
            $data = [
                'menu' => 1,
                'title' => "Religious",
                'yoruba' => MisleanousLib::siderVideos('any', 'yoruba'),
                'hausa' => MisleanousLib::siderVideos('any', 'hausa'),
                'nollywood' => MisleanousLib::siderVideos('any', 'english'),
                'ghanaian' => MisleanousLib::siderVideos('any', 'ghanaian'),
            ];
        }


        return view('pages.mo.religious')
            ->with($data);
    }

    /**
     * Method for the movie detail page.
     * @param hashId: string - video enc_id
     * @return void
     */
    public function movie($hashId)
    {
        $hashId = $hashId; //movie enc_id
        $movieDetail = MoviesInfo::where('enc_id', $hashId)
            ->first();
        // ->get();
        // ->toJson();

        //if hashId did not exist, 404 Page
        if ($movieDetail == NULL) {
            return MoController::call404();
        }

        $myvalues = [
            'category' => ucwords($movieDetail->category),
            'thumbnail' => EfikasLib::getThumbnail($movieDetail->youlink),
            'movieDetail' => $movieDetail->toJson()
        ];

        $data = [
            'menu' => 1,
            'title' => ucwords($movieDetail->name),
            'myvalues' => json_encode($myvalues),
            'catSider' => MisleanousLib::siderVideos('any', $movieDetail->category, $movieDetail->name),
            'movie_id' => $hashId,
        ];

        return view('pages.mo.movie')
            ->with($data);
    }

    /**
     * Method for the download links page.
     *
     * @return void
     */
    public function download($hashId)
    {
        $hashId = $hashId; //movie enc_id
        $movieDetail = MoviesInfo::where('enc_id', $hashId)
            ->first();

        //if hashId did not exist, 404 Page
        if ($movieDetail == NULL) {
            return MoController::call404();
        }

        $myvalues = [
            'category' => ucwords($movieDetail->category),
            'thumbnail' => EfikasLib::getThumbnail($movieDetail->youlink),
            'movieDetail' => $movieDetail->toJson()
        ];

        $data = [
            'menu' => 1,
            'title' => ucwords($movieDetail->name),
            'myvalues' => json_encode($myvalues),
            'downloadLinks' => EfikasLib::getDownloadLinks($movieDetail->youlink),
            'catSider' => MisleanousLib::siderVideos('any', $movieDetail->category, $movieDetail->name)
        ];

        return view('pages.mo.download')
            ->with($data);
    }

    /**
     * Method for the subtitle links page.
     *
     * @return void
     */
    public function subtitle($hashId)
    {
        $hashId = $hashId; //movie enc_id
        date_default_timezone_set('Africa/Lagos');
        $date1 = date('F-d-Y');

        $movieDetail = MoviesInfo::where('enc_id', $hashId)
            ->first();

        //if hashId did not exist, 404 Page
        if ($movieDetail == NULL) {
            return MoController::call404();
        }

        $myvalues = [
            'category' => ucwords($movieDetail->category),
            // 'thumbnail' => EfikasLib::getThumbnail($movieDetail->youlink),
            'movieDetail' => $movieDetail->toJson()
        ];

        $data = [
            'menu' => 1,
            'title' => ucwords($movieDetail->name),
            'myvalues' => json_encode($myvalues),
            // 'downloadLinks' =>  EfikasLib::getDownloadLinks($movieDetail->youlink),
            'moviesDetail' => $movieDetail,
            'hash' => md5($date1 . '_efikas'),
            'catSider' => MisleanousLib::siderVideos('any', $movieDetail->category, $movieDetail->name)
        ];

        return view('pages.mo.subtitle')
            ->with($data);
    }

    /**
     * Method for the subtitle links page.
     *
     * @return void
     */
    public function getsubtitle($hashId, $hash)
    {
        date_default_timezone_set('Africa/Lagos');
        $date1 = date('F-d-Y');

        if (md5($date1 . '_efikas') != $hash) {
            return MoController::call404();
        }

        $movieDetail = MoviesInfo::where('enc_id', $hashId)
            ->first();

        //if hashId did not exist, 404 Page
        if ($movieDetail == NULL || $movieDetail->subtitle == "") {
            return MoController::call404();
        }


        header("Content-type: application/force-download");
        header("Cache-Control: public");
        // header("Content-Description: File Transfer");
        $filename = $movieDetail->subtitle . '.srt';
        header("Content-Disposition: attachment; filename=$filename");
        header("Content-Type: application/x-subrip");
        // header("Content-Transfer-Encoding: binary");
        // if($subtitle != ''){
        // readfile(url('subtitle/' . $filename));
        readfile('http://www.moviesoasis.com.ng/assets/subtitle/' . $filename);
        // }
        exit;

        // return
    }

    /**
     * Method for the watch online links page.
     *
     * @return void
     */
    public function watchmovie($hashId)
    {
        $hashId = $hashId; //movie enc_id
        $movieDetail = MoviesInfo::where('enc_id', $hashId)
            ->select('name', 'youlink')
            ->first();

        //if hashId did not exist, 404 Page
        if ($movieDetail == NULL) {
            return MoController::call404();
        }

        $data = [
            'menu' => 1,
            'title' => ucwords($movieDetail->name),
            'name' => $movieDetail->name,
            'youlink' => EfikasLib::strReplaceAssoc(
                ['watch?v=' => 'embed/'], $movieDetail->youlink
            )
        ];

        return view('pages.mo.watchmovie')
            ->with($data);
    }

    /**
     * Method for the Movies AllMovies page.
     * @param  $cat : String - Category value from the url
     * @return void
     */
    public function allmovies($cat)
    {
        $category = $cat; //Get category from the URL

        //Value to pass to the page
        $data = [
            'menu' => 1,
            'title' => ucwords($category),
            'category' => $category,
            'yoruba' => MisleanousLib::siderVideos('any', 'yoruba'),
            'hausa' => MisleanousLib::siderVideos('any', 'hausa'),
            'nollywood' => MisleanousLib::siderVideos('any', 'english'),
            'ghanaian' => MisleanousLib::siderVideos('any', 'ghanaian'),
        ];

        return view('pages.mo.allmovies')
            ->with($data);
    }

    /**
     * Method for the movies  page.
     * @param hashId: string - video enc_id
     * @return void
     */
    public function movies($cat, $alphabet)
    {
        $category = $cat; //movies category
        $movies = null;

        if ($alphabet == '0_9') {
            $movies = MoviesInfo::where('category', $category)
                ->where(function ($query) {
                    $query->where('name', 'like', "1%")
                        ->orWhere('name', 'like', "2%")
                        ->orWhere('name', 'like', "3%")
                        ->orWhere('name', 'like', "4%")
                        ->orWhere('name', 'like', "5%")
                        ->orWhere('name', 'like', "6%")
                        ->orWhere('name', 'like', "7%")
                        ->orWhere('name', 'like', "8%")
                        ->orWhere('name', 'like', "9%")
                        ->orWhere('name', 'like', "0%");
                })
                ->orderBy('id', 'Desc')
                ->paginate(50);
        } else {
            $movies = MoviesInfo::where('category', $category)
                ->where('name', 'like', "{$alphabet}%")
                ->orderBy('id', 'Desc')
                ->paginate(50);
        }

        //if hashId did not exist, 404 Page
        if ($movies == NULL) {
            return MoController::call404();
        }

        //Value to pass to the page
        $data = [
            'menu' => 1,
            'title' => ucwords($category),
            'category' => $category,
            'alphabet' => $alphabet,
            'movies' => $movies->toJson(),
            'paginate' => $movies,
            'yoruba' => MisleanousLib::siderVideos('any', 'yoruba'),
            'hausa' => MisleanousLib::siderVideos('any', 'hausa'),
            'nollywood' => MisleanousLib::siderVideos('any', 'english'),
            'ghanaian' => MisleanousLib::siderVideos('any', 'ghanaian'),
        ];
        return view('pages.mo.movies')
            ->with($data);
    }

    /**
     * Method for the search page.
     *
     * @return void
     */
    public function search(Request $request)
    {
        $search = $request->input('search'); //Get search key words
        if ($search == "" | $search == NULL) {
            //check f search exixt in session()
            if ($request->session()->exists('search')) {
                $search = $request->session()->get('search');
            } else {
                return redirect('/');
            }
        } else {
            $request->session()->put(['search', $search]);
        }

        $movies = [];

        //Videos of the keyword search
        $movies1 = MoviesInfo::where('name', 'like', "{$search}%")
            ->select('name', 'enc_id')
            ->orderBy('id', 'Desc')
            ->offset(0)
            ->limit(50)
            ->get();
        foreach ($movies1 as $value) {
            array_push($movies, $value);
        }

        //Suplement movies
        $movies2 = MoviesInfo::where('name', 'not like', $search)
            ->inRandomOrder()
            ->offset(0)
            ->limit(50 - sizeof($movies1))
            ->get();

        foreach ($movies2 as $value) {
            array_push($movies, $value);
        }

        //Value to pass to the page
        $data = [
            'menu' => 1,
            'title' => ucwords($search),
            'movies' => json_encode($movies),
            'yoruba' => MisleanousLib::siderVideos('any', 'yoruba'),
            'hausa' => MisleanousLib::siderVideos('any', 'hausa'),
            'nollywood' => MisleanousLib::siderVideos('any', 'english'),
            'ghanaian' => MisleanousLib::siderVideos('any', 'ghanaian'),
        ];

        return view('pages.mo.search')
            ->with($data);
    }

}
