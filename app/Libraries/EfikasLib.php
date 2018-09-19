<?php

namespace App\Libraries;

class EfikasLib
{

    public function __construct()
    {
    }

    public static function getMovieId($youLink)
    {
        $videoUrl = $youLink;
        if (isset($videoUrl)) {
            $my_id = $videoUrl;
            if (strlen($my_id) > 11) {
                $url = parse_url($my_id);
                $my_id = NULL;
                if (is_array($url) && count($url) > 0 && isset($url['query']) && !empty($url['query'])) {
                    $parts = explode('&', $url['query']);
                    if (is_array($parts) && count($parts) > 0) {
                        foreach ($parts as $p) {
                            $pattern = '/^v\=/';
                            if (preg_match($pattern, $p)) {
                                $my_id = preg_replace($pattern, '', $p);
                                break;
                            }
                        }
                    }
                    if (!$my_id) {
                        echo '<p>No video id passed in</p>';
                        exit;
                    }
                } else {
                    echo '<p>Invalid url</p>';
                    exit;
                }
            }
        } else {
            echo '<p>No video id passed in</p>';
            exit;
        }
        return $my_id;
    }

    public static function getThumbnail($youLink)
    {
        $config['ThumbnailImageMode'] = 2;    // show thumbnail image by proxy from this server

        $videoUrl = $youLink;
        if (isset($videoUrl)) {
            $my_id = $videoUrl;
            if (strlen($my_id) > 11) {
                $url = parse_url($my_id);
                $my_id = NULL;
                if (is_array($url) && count($url) > 0 && isset($url['query']) && !empty($url['query'])) {
                    $parts = explode('&', $url['query']);
                    if (is_array($parts) && count($parts) > 0) {
                        foreach ($parts as $p) {
                            $pattern = '/^v\=/';
                            if (preg_match($pattern, $p)) {
                                $my_id = preg_replace($pattern, '', $p);
                                break;
                            }
                        }
                    }
                    if (!$my_id) {
                        echo '<p>No video id passed in</p>';
                        exit;
                    }
                } else {
                    echo '<p>Invalid url</p>';
                    exit;
                }
            }
        } else {
            echo '<p>No video id passed in</p>';
            exit;
        }
        // https://ytimg.googleusercontent.com/vi/cwQgjq0mCdE/mqdefault.jpg
        //$thumbnail_url = "https://ytimg.googleusercontent.com/vi/" . $my_id . "/hqdefault.jpg";
        //header("Content-Type: image/jpeg"); // set headers

//        return array('my_id' => $my_id, 'thumbnail_url' => $thumbnail_url); // make image link
        return response(['movie_id' => $my_id]);
    }

    public static function getDownloadLinks($youLink)
    {
        $status = '';

        $config['ThumbnailImageMode'] = 2;    // show thumbnail image by proxy from this server
        $config['VideoLinkMode'] = 'both'; // show both direct and by proxy download links

        /**********|| features ||***************/
        $config['feature']['browserExtensions'] = true; // show links for install browser extensions? true or false

        $config['multipleIPs'] = false; // enable multiple IPs support to bypass Youtube IP limit? true or false
        $config['IPs'] = [];

        date_default_timezone_set('Africa/Lagos');

        /**********|| Don't edit below ||***************/

        //curl
        /*
        * If multipleIPs mode is enabled, select randomly one IP from
        * the config IPs array and put it in $outgoing_ip variable.
        */
        if ($config['multipleIPs'] === true) {
            // randomly select an ip from the $config['IPs'] array
            $outgoing_ip = $config['IPs'][mt_rand(0, count($config['IPs']) - 1)];
        }

        // Debug mode
        #$debug=true; // debug mode on
        $debug = false; // debug mode off

        ob_start();// if not, some servers will show this php warning: header is already set in line 46...

        $videoUrl = $youLink;
        // $my_id = "";

        if (isset($videoUrl)) {
            $my_id = $videoUrl;
            if (strlen($my_id) > 11) {
                $url = parse_url($my_id);
                if (is_array($url) && count($url) > 0 && isset($url['query']) && !empty($url['query'])) {
                    $parts = explode('&', $url['query']);
                    if (is_array($parts) && count($parts) > 0) {
                        foreach ($parts as $p) {
                            $pattern = '/^v\=/';
                            if (preg_match($pattern, $p)) {
                                $my_id = preg_replace($pattern, '', $p);
                                break;
                            }
                        }
                    }
                    if (!$my_id) {
                        echo '<p>No video id passed in 1</p>';
                        exit;
                    }
                } else {
                    echo '<p>Invalid url</p>';
                    exit;
                }
            }
        } else {
            echo '<p>No video id passed in 2</p>';
            exit;
        }

        $thumbnail_url = "https://ytimg.googleusercontent.com/vi/" . $my_id . "/default.jpg"; // make image link
        //header("Content-Type: image/jpeg"); // set headers
        //readfile($thumbnail_url); // show image

        $my_type = 'Download';
        if ($my_type == 'Download') {

        }

        /* First get the video info page for this video id */
        $my_video_info = 'http://www.youtube.com/get_video_info?&video_id=' . $my_id;

        $options = array('http' => array('user_agent' => 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36'));

        $context = stream_context_create($options);
        $my_video_info = file_get_contents($my_video_info, false, $context, 0);
//		$my_video_info = EfikasLib::curlGet($my_video_info);

        /* TODO: Check return from curl for status code */
        $thumbnail_url = $title = $url_encoded_fmt_stream_map = $type = $url = '';

        @parse_str($my_video_info);

        if ($status == 'fail' || $status == '') {
            //	echo '<p>Error in video ID</p>';
            //    redirect(site_url('404page'));
            //exit();
        }

        $my_title = $title;
        $cleanedtitle = EfikasLib::clean($title);

        if (isset($url_encoded_fmt_stream_map)) {
            /* Now get the url_encoded_fmt_stream_map, and explode on comma */
            $my_formats_array = explode(',', $url_encoded_fmt_stream_map);
            if ($debug) {
                if ($config['multipleIPs'] === true) {
                    // echo '<pre>Outgoing IP: ';
                    // print_r($outgoing_ip);
                    // echo '</pre>';
                }
                // echo '<pre>';
                // print_r($my_formats_array);
                // echo '</pre>';
            }
        } else {
            // echo '<p>No encoded format stream found.</p>';
            // echo '<p>Here is what we got from YouTube:</p>';
            // echo $my_video_info;
        }
        if (count($my_formats_array) == 0) {
            // echo '<p>No format stream map found - was the video id correct?</p>';
            exit;
        }

        /* create an array of available download formats */
        $avail_formats = [];
        $ipbits = $ip = $itag = $sig = $quality = '';
        $expire = time();
        $i = 0;

        foreach ($my_formats_array as $format) {
            @parse_str($format);
            $avail_formats[$i]['itag'] = $itag;
            $avail_formats[$i]['quality'] = $quality;
            $type = explode(';', $type);
            $avail_formats[$i]['type'] = $type[0];
            $avail_formats[$i]['url'] = urldecode($url) . '&signature=' . $sig;
            @parse_str(urldecode($url));
            $avail_formats[$i]['expires'] = date("G:i:s T", $expire);
            $avail_formats[$i]['ipbits'] = $ipbits;
            $avail_formats[$i]['ip'] = $ip;
            $i++;
        }

        $videoDetails = [];
        $videoConfig = [];

        if ($debug) {
            $videoConfig['expiry'] = $avail_formats[0]['expires'];
            $videoConfig['ip'] = $avail_formats[0]['ip'];
            $videoConfig['ipbits'] = $avail_formats[0]['ipbits'];
        }

        $my_type = 'Download';
        if ($my_type == 'Download') {

            /* now that we have the array, print the options */
            for ($i = 0; $i < count($avail_formats); $i++) {
                $formatVideo = []; //holdes each video format

                if (@$avail_formats[$i]['type']) {

                    if ($config['VideoLinkMode'] == 'direct' || $config['VideoLinkMode'] == 'both') {

                        $directlink = explode('.googlevideo.com/', $avail_formats[$i]['url']);
                        $directlink = 'https://redirector.googlevideo.com/' . @$directlink[1] . '';

                        $formatVideo['format'] = $avail_formats[$i]['type'];
                        $formatVideo['size'] = EfikasLib::formatBytes(EfikasLib::get_size($avail_formats[$i]['url']));
                        $formatVideo['link1'] = $directlink . '&title=' . $cleanedtitle;
                    }

                    if ($config['VideoLinkMode'] == 'proxy' || $config['VideoLinkMode'] == 'both') {
                        $formatVideo['link2'] = '/vdownload?mime=' . $avail_formats[$i]['type'] . '&title=' . urlencode($my_title) . '&token=' . base64_encode($avail_formats[$i]['url']);
                    }
                }

                array_push($videoDetails, $formatVideo);
            }
        }

        // echo json_encode($videoDetails);
        // exit;
        return $videoDetails;
    }

    private static function clean($string)
    {
        $string = str_replace(' ', '-', $string); // Replaces all spaces with hyphens.
        return preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.
    }


    /* Function for replacing a srting
    *
    */

    private static function formatBytes($bytes, $precision = 2)
    {
        $units = array('B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB');
        $bytes = max($bytes, 0);
        $pow = floor(($bytes ? log($bytes) : 0) / log(1024));
        $pow = min($pow, count($units) - 1);
        $bytes /= pow(1024, $pow);
        return round($bytes, $precision) . '' . $units[$pow];
    }


    /*############################################################################################################*/

    public static function get_size($url)
    {
        global $config;
        $my_ch = @curl_init();
        if ($config['multipleIPs'] === true) {
            global $outgoing_ip;
            curl_setopt($my_ch, CURLOPT_INTERFACE, $outgoing_ip);
        }
        curl_setopt($my_ch, CURLOPT_URL, $url);
        curl_setopt($my_ch, CURLOPT_HEADER, true);
        curl_setopt($my_ch, CURLOPT_NOBODY, true);
        curl_setopt($my_ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($my_ch, CURLOPT_TIMEOUT, 10);
        $r = curl_exec($my_ch);
        foreach (explode("\n", $r) as $header) {
            if (strpos($header, 'Content-Length:') === 0) {
                return trim(substr($header, 16));
            }
        }
        return '';
    }

    /*
    * function to use cUrl to get the headers of the file
    */

    public static function checkDeletedVideos()
    {

    }

    public static function strReplaceAssoc(array $replace, $subject)
    {
        return str_replace(array_keys($replace), array_values($replace), $subject);
    }

    private static function curlGet($URL)
    {
        $config['ThumbnailImageMode'] = 2;    // show thumbnail image by proxy from this server
        $config['VideoLinkMode'] = 'both'; // show both direct and by proxy download links

        /**********|| features ||***************/
        $config['feature']['browserExtensions'] = true; // show links for install browser extensions? true or false

        $config['multipleIPs'] = false; // enable multiple IPs support to bypass Youtube IP limit? true or false
        $config['IPs'] = [];

        date_default_timezone_set('Africa/Lagos');

        /**********|| Don't edit below ||***************/

        //curl
        /*
        * If multipleIPs mode is enabled, select randomly one IP from
        * the config IPs array and put it in $outgoing_ip variable.
        */
        if ($config['multipleIPs'] === true) {
            // randomly select an ip from the $config['IPs'] array
            $outgoing_ip = $config['IPs'][mt_rand(0, count($config['IPs']) - 1)];
        }

        global $config; // get global $config to know if $config['multipleIPs'] is true
        $ch = curl_init();
        $timeout = 3;
        if ($config['multipleIPs'] === true) {
            // if $config['multipleIPs'] is true set outgoing ip to $outgoing_ip
            global $outgoing_ip;
            curl_setopt($ch, CURLOPT_INTERFACE, $outgoing_ip);
        }
        $config['useragent'] = 'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:17.0) Gecko/20100101 Firefox/17.0';

        curl_setopt($ch, CURLOPT_USERAGENT, $config['useragent']);
        curl_setopt($ch, CURLOPT_REFERER, 'www.google.com');
        curl_setopt($ch, CURLOPT_URL, $URL);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        /* if you want to force to ipv6, uncomment the following line */
        //curl_setopt( $ch , CURLOPT_IPRESOLVE , 'CURLOPT_IPRESOLVE_V6');
        $tmp = curl_exec($ch);
        curl_close($ch);
        return $tmp;
    }

    private static function get_location($url)
    {
        global $config;
        $my_ch = curl_init();
        if ($config['multipleIPs'] === true) {
            global $outgoing_ip;
            curl_setopt($my_ch, CURLOPT_INTERFACE, $outgoing_ip);
        }
        curl_setopt($my_ch, CURLOPT_URL, $url);
        curl_setopt($my_ch, CURLOPT_HEADER, true);
        curl_setopt($my_ch, CURLOPT_NOBODY, true);
        curl_setopt($my_ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($my_ch, CURLOPT_TIMEOUT, 10);
        $r = curl_exec($my_ch);
        foreach (explode("\n", $r) as $header) {
            if (strpos($header, 'Location: ') === 0) {
                return trim(substr($header, 10));
            }
        }
        return '';
    }

    private static function get_description($url)
    {
        $fullpage = curlGet($url);
        $dom = new DOMDocument();
        @$dom->loadHTML($fullpage);
        $xpath = new DOMXPath($dom);
        $tags = $xpath->query('//div[@class="info-description-body"]');
        $my_description = "";
        foreach ($tags as $tag) {
            $my_description .= (trim($tag->nodeValue));
        }

        return utf8_decode($my_description);
    }

    private static function is_chrome()
    {
        $agent = $_SERVER['HTTP_USER_AGENT'];
        if (preg_match("/like\sGecko\)\sChrome\//", $agent)) {    // if user agent is google chrome
            if (!strstr($agent, 'Iron')) // but not Iron
                return true;
        }
        return false;    // if isn't chrome return false
    }


}