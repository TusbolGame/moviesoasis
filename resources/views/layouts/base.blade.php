<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" class="no-js">
<head>
    <link rel="shortcut icon" href="{{asset('images/header.png')}}">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <meta name="description" content=""/>
    <meta name="keywords" content=""/>
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta property="fb:app_id" content="1541543019490341"/>
    <meta property="og:url" content=""/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content=""/>
    <meta property="og:image" content=""/>

    <title>MO | @yield('title')</title>
    <!-- Bootstrap 3.3.5 -->
    <link rel="stylesheet" href="{{ asset('bootstrap/css/bootstrap.min.css') }}">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Styles -->
    <link href="{{asset('css/main.css')}}" rel="stylesheet" type="text/css">
    <style>
        a:active {
            decoration: none;
        }
    </style>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body style="background-color: white; font-size: 1.6em; margin: 0px; padding: 0px;">
<div class="container" style="margin: 0px; padding: 0px; width: 100%; background-color: white">
    <header style="color:#FFF; background-color:#204d74; height:60px;">
        <a href="/" style="margin-left: 1%;">
            <img src="{{ url('images/logo.png') }}" style="width:120px; height: 50px; margin: 5px;" alt="moviesonline"/>
        </a>
        @if (Auth::guest())
            <div class="pull-right">
                <ol class="breadcrumb" style="background-color: transparent; margin-bottom: 0px; margin-top: 5px;">
                    <li><a href="login" style="color: white !important"><i class="glyphicon glyphicon-log-in"></i> Login</a>
                    </li>
                    <li><a href="register" style="color: white !important"><i
                                    class="glyphicon glyphicon-registration-mark"></i> Register</a></li>
                </ol>
            </div>
        @else
            <div class="btn-group pull-right" style="margin: 15px 25px 15px 0px; ">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"
                        style="color: white; font-weight: bold; background-color: transparent; border-color: transparent; font-size: 1.0em;">
                    <i class="glyphicon glyphicon-user"></i> {{ ucfirst(Auth::user()->username) }}
                </button>
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"
                        style="color: white; font-weight: bold; background-color: transparent; border-color: transparent;">
                    <span class="caret" style="font-size: 1.5em"></span>
                    <!--<span class="sr-only">Toggle Dropdown</span>-->
                </button>
                <ul class="dropdown-menu" role="menu">
                    <li><a href="profile/@ {{ Auth::user()->username }}"><i class="glyphicon glyphicon-list"></i>
                            Profile</a></li>
                    <li><a href="#"><i class="glyphicon glyphicon-wrench"></i> Settings</a></li>
                    <li class="divider"></li>
                    <li><a href="{{ url('/logout') }}"><i class="glyphicon glyphicon-remove-sign"></i> logout</a></li>
                </ul>
            </div>
        @endif

    </header>
    <article style="min-height:700px; margin: 0px; padding: 0px;">
        <div class="row contact-box" style="margin: 0px; padding: 0px;">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding word-wrap ">
                <a href="http://c.jumia.io/?a=2643&c=79&p=r&E=kkYNyk2M4sk%3d&ckmrdr=https%3A%2F%2Fwww.jumia.com.ng%2Finnjoo%2F&utm_source=cake&utm_medium=affiliation&utm_campaign=2643&utm_term=">
                    <img src="http://eu1-ap2.ckcdnassets.com/1199/creatives/79/728x90.jpg"
                         style="height: 80px; width:100%"/>
                </a>

            </div>

            <!-- add 2 -->
            <div class="col-md-6 col-lg-6 hidden-xs hidden-sm no-padding word-wrap">

            </div>
        </div>
        <div class="row" style="margin: 0px; padding: 0px;">

            <!-- content div -->
            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 content-div no-padding">
                <div class="welcome-banner">
                    <div align="center" class="headings h2">
                        WELCOME TO MOVIESOASIS
                    </div>
                </div>
                <!-- SERACH -->
                <form method="POST" action="/search" style="padding: 20px; padding-bottom: 50px">
                    <div class="input-group input-group-sm">
                        {!! csrf_field() !!}
                        <input type="text" class="form-control" placeholder="search" name="search">
                        <span class="input-group-btn">
                      <input type="submit" value="Search" class="btn btn-info btn-flat">
                  </span>
                    </div><!-- /input-group -->
                </form>
                <!-- END SEARCH -->

                <?php
                if(isset($user)){
                ?>

                <div class="img-rounded hidden-md hidden-lg"
                     style="border: 2px solid #204d74; margin-bottom: 50px; padding: 10px;">
                    <ol class="myMenu" style="background-color: white; margin-bottom: 0px">

                        <li>
                            Welcome <a><?=$user; ?></a>
                        </li>
                        <li>
                            &nbsp;&nbsp;&nbsp;(<a href="logout">logout</a>)
                        </li>
                    </ol>
                </div>
                <?php
                }
                else {
                ?>
                <div class="img-rounded hidden-md hidden-lg"
                     style="border: 2px solid #204d74; margin-bottom: 50px; padding: 10px;">
                    <ol class="myMenu" style="background-color: white; margin-bottom: 0px">

                        <li>
                            <strong>Welcome Guest!</strong>
                        </li>
                        <li>
                            <a href="login">login</a> &nbsp;<a href="register">Register</a>
                        </li>
                    </ol>
                </div>
                <?php
                }
                ?>

                <div class="img-rounded" style="border: 2px solid #204d74; margin-bottom: 50px; padding: 10px;">
                    <ol class="myMenu no-padding" style="background-color: white; margin-bottom: 0px">

                        <li class="<?php if ($menu == 1) {
                            echo 'active';
                        } ?>">
                            <?php if($menu != 1){?><a href="/"><i class="glyphicon glyphicon-home"></i> Home</a>
                            <?php }else{ ?> <i class="glyphicon glyphicon-home"></i> Home <?php } ?>
                        </li>
                        <li class="<?php if ($menu == 2) {
                            echo 'active';
                        } ?>">
                            <?php if($menu != 2){?><a href="/"><i class="glyphicon glyphicon-phone"></i> Forum</a>
                            <?php }else{ ?> <i class="glyphicon glyphicon-phone"></i> Forum <?php } ?>
                        </li>
                        <li class="<?php if ($menu == 3) {
                            echo 'active';
                        } ?>">
                            <?php if($menu != 3){?><a href="/"><i class="glyphicon glyphicon-folder-open"></i> Deck</a>
                            <?php }else{ ?> <i class="glyphicon glyphicon-folder-open"></i> Deck <?php } ?>
                        </li>
                        <li class="<?php if ($menu == 4) {
                            echo 'active';
                        } ?>">
                            <?php if($menu != 4){?><a href="/"><i class="glyphicon glyphicon-user"></i> About Us</a>
                            <?php }else{ ?> <i class="glyphicon glyphicon-user"></i> About Us <?php } ?>
                        </li>
                        <li class="<?php if ($menu == 5) {
                            echo 'active';
                        } ?>">
                            <?php if($menu != 5){?><a href="/contact"><i class="glyphicon glyphicon-envelope"></i>
                                Contact Us</a>
                            <?php }else{ ?> <i class="glyphicon glyphicon-envelope"></i> Contact Us <?php } ?>
                        </li>
                        <li class="<?php if ($menu == 6) {
                            echo 'active';
                        } ?>">
                            <?php if($menu != 6){?><a href="/privacy"><i class="glyphicon glyphicon-file"></i>
                                Privacy</a>
                            <?php }else{ ?> <i class="glyphicon glyphicon-file"></i> Privacy<?php } ?>
                        </li>
                        <li class="<?php if ($menu == 7) {
                            echo 'active';
                        } ?>">
                            <?php if($menu != 7){?><a href="/mosearch"><i class="glyphicon glyphicon-search"></i>
                                MOSearch</a>
                            <?php }else{ ?> <i class="glyphicon glyphicon-search"></i> MOSearch<?php } ?>
                        </li>
                    </ol>
                </div>


                @yield('content')

                <br/>
                <!-- <div class="hidden-xs col-sm-4" >&nbsp;</div>
                 <div class="col-xs-12 col-sm-4" >
                 <script type="text/javascript" src="http://feedjit.com/serve/?vv=1515&amp;tft=3&amp;dd=0&amp;wid=&amp;pid=0&amp;proid=0&amp;bc=FFFFFF&amp;tc=000000&amp;brd1=012B6B&amp;lnk=135D9E&amp;hc=FFFFFF&amp;hfc=2853A8&amp;btn=C99700&amp;ww=250&amp;wne=10&amp;srefs=1"></script>
                 <noscript><a href="http://feedjit.com/">Live Traffic Stats</a></noscript>
               </div>
                <div class="hidden-xs col-sm-4" >&nbsp;</div>
                <br/>
                <br/> -->
                <br/>
                <div style="height: 100px; width: 100%; overflow: hidden" class="text-center">
                    <script type="text/javascript"
                            src="http://konga.postaffiliatepro.com/scripts/banner.php?k_id=lateef01&k_bid=6e7d3ac7"></script>
                </div>
            </div>


            <!-- right sider -->
            <aside class="col-md-3 col-lg-3 hidden-xs hidden-sm no-padding word-wrap text-center"
                   style="margin: 0px; padding: 0px;">

                @stack('sider')

            </aside>
        </div>

    </article>
    <footer class="maintable"
            style="color:#FFF; background-color:#204d74; height: 180px; margin: 20px 0px 0px 0px; padding: 15px 0px 30px 0px;">

        <div class="text-center"> Copyright &copy; 2017 MoviesOasis</div>
        <br/>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" style="">
            <strong><a href="contact">Contact Us</a></strong><br>
            <strong><a href="">About Us</a></strong><br>
            <strong><a href="">Advertisement</a></strong><br>
            <strong><a href="">Our Apps</a></strong>
        </div>

    </footer>
</div><!-- ./container -->
<script src="{{asset('js/app.js')}}"></script>
<!-- jQuery 2.1.4 -->
<script src="{{asset('plugins/jQuery/jQuery-2.1.4.min.js')}}"></script>
<!-- Bootstrap 3.3.5 -->
<script src="{{asset('bootstrap/js/bootstrap.min.js')}}"></script>
</body>
</html>
