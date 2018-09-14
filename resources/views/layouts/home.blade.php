<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>MO | @yield('title')</title>
        <!-- Bootstrap 3.3.5 -->
        <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css">
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
        <!-- Ionicons -->
        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
        <!-- Theme style -->
        <link rel="stylesheet" href="/dist/css/AdminLTE.min.css">
        <!-- AdminLTE Skins. Choose a skin from the css/skins
            folder instead of downloading all of them to reduce the load. -->
        <link rel="stylesheet" href="/dist/css/skins/_all-skins.min.css">
        <!-- iCheck -->
        <!--<link rel="stylesheet" href="plugins/iCheck/flat/blue.css">-->
        <!-- bootstrap wysihtml5 - text editor -->
        <!--<link rel="stylesheet" href="plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css">-->
        <!-- Styles -->
        <!--<link href="/css/app.css" rel="stylesheet" type="text/css">-->
        <link href="/css/mycss.css" rel="stylesheet" type="text/css">
        <script>
            //rename myToken as you like
            window.myToken = <?php echo json_encode([
                'csrfToken' => csrf_token(),
            ]); 
            ?>
        </script>
        <style>
            a:active {
                decoration: none;
            }
        </style>
    </head>
    <!-- ADD THE CLASS sidedar-collapse TO HIDE THE SIDEBAR PRIOR TO LOADING THE SITE -->
    <body class="hold-transition skin-blue sidebar-collapse sidebar-minih">
        
        <header class="main-header">
            
            <nav class="navbar navbar-static-top" role="navigation" style="margin-left: 0px">
            <!-- Logo -->
            <a href="{{ url('/portal') }}" >
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="">
            <img src="{{ url('images/404 logo.png') }}" class="img-circle" alt="User Image" style="width: 50px; height: 50px;"></span> 
            </a>
            <!-- Header Navbar: style can be found in header.less -->
            
                <div class="company-name"><strong>ADEPENTANE</strong></div>
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                @if (Auth::check())
                <!-- Messages: style can be found in dropdown.less-->
                <li class="dropdown messages-menu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <i class="glyphicon glyphicon-envelope"></i>
                    <span class="label label-success">4</span>
                    </a>
                    <ul class="dropdown-menu">
                    <li class="header">You have 4 messages</li>
                    <li>
                        <!-- inner menu: contains the actual data -->
                        <ul class="menu">
                        <li><!-- start message -->
                            <a href="#">
                            <div class="pull-left">
                                <img src="{{ url('images/avatar3.png') }}" class="img-circle" alt="User Image">
                            </div>
                            <h4>
                                Support Team
                                <small><i class="fa fa-clock-o"></i> 5 mins</small>
                            </h4>
                            <p>Why not buy a new awesome theme?</p>
                            </a>
                        </li><!-- end message -->
                        </ul>
                    </li>
                    <li class="footer"><a href="#">See All Messages</a></li>
                    </ul>
                </li>
                <!-- Notifications: style can be found in dropdown.less -->
                <li class="dropdown notifications-menu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <i class="glyphicon glyphicon-bell"></i>
                    <span class="label label-warning">10</span>
                    </a>
                    <ul class="dropdown-menu">
                    <li class="header">You have 10 notifications</li>
                    <li>
                        <!-- inner menu: contains the actual data -->
                        <ul class="menu">
                        <li>
                            <a href="#">
                            <i class="glyphicon glyphicon-user text-aqua"></i> 5 new members joined today
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li class="footer"><a href="#">View all</a></li>
                    </ul>
                </li>
                <!-- Tasks: style can be found in dropdown.less -->
                <li class="dropdown tasks-menu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <i class="glyphicon glyphicon-flag"></i>
                    <span class="label label-danger">9</span>
                    </a>
                    <ul class="dropdown-menu">
                    <li class="header">You have 9 tasks</li>
                    <li>
                        <!-- inner menu: contains the actual data -->
                        <ul class="menu">
                        <li><!-- Task item -->
                            <a href="#">
                            <h3>
                                Design some buttons
                                <small class="pull-right">20%</small>
                            </h3>
                            <div class="progress xs">
                                <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                <span class="sr-only">20% Complete</span>
                                </div>
                            </div>
                            </a>
                        </li><!-- end task item -->
                        </ul>
                    </li>
                    <li class="footer">
                        <a href="#">View all tasks</a>
                    </li>
                    </ul>
                </li>
                <!-- User Account: style can be found in dropdown.less -->
                
                <li class="dropdown user user-menu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <img src="{{ url('images/avatar3.png') }}" class="user-image" alt="User Image">
                    <span class="hidden-xs">{{ Auth::user()->name }}</span>
                    </a>
                    <ul class="dropdown-menu">
                    <!-- User image -->
                    <li class="user-header">
                        <img src="images/avatar3.png" class="img-circle" alt="User Image">
                        <p>
                        <? //=$user['_surname'] . ' ' . $user['_othernames']; ?> 
                        <small>Username: <strong>{{ Auth::user()->name }}</strong></small>
                        <small>Level: <strong>{{ Auth::user()->name }}</strong></small>
                        </p>
                    </li>
                    <!-- Menu Body -->
                     <li class="user-body">
                        <div class="col-xs-4 text-center">
                        <a href="#">Followers</a>
                        </div>
                        <div class="col-xs-4 text-center">
                        <a href="#">Sales</a>
                        </div>
                        <div class="col-xs-4 text-center">
                        <a href="#">Friends</a>
                        </div>
                    </li>-->
                    <!-- Menu Footer-->
                    <li class="user-footer">
                        <div class="pull-left">
                        <a href="#" class="btn btn-default btn-flat">Page Lock</a>
                        </div>
                        <div class="pull-right">
                        <a href="{{ url('logout') }}" class="btn btn-default btn-flat">Sign out</a>
                        </div>
                    </li>
                    </ul>
                </li>
            @else
                <li>
                    <a href="{{ url('login') }}">
                        <strong>Login/Register</strong>
                    </a>
                </li>
            @endif

                <!-- Control Sidebar Toggle Button -->
               
                </ul>
            </div>
            </nav>
        </header>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            
            
        @yield('content')
        
        </div><!-- /.content-wrapper -->

        <footer class="main-footer text-center">
            <strong>Copyright &copy; 2017 <a href="#">Efikas Technologies</a>.</strong> All rights reserved.
        </footer>
    

        <script src="/js/app.js"></script>
        <!-- jQuery 2.1.4 -->
        <script src="/plugins/jQuery/jQuery-2.1.4.min.js"></script>
        <!-- Bootstrap 3.3.5 -->
        <script src="/twitter_bootstrap/js/bootstrap.min.js'"></script>
        <!-- SlimScroll -->
        <script src="/plugins/slimScroll/jquery.slimscroll.min.js"></script>
        <!-- FastClick -->
        <script src="/plugins/fastclick/fastclick.min.js"></script>
        <!-- AdminLTE App -->
        <script src="/dist/js/app.min.js"></script>
        <!-- AdminLTE for demo purposes -->
        <script src="/dist/js/demo.js"></script>
        <!--<script src="js/_lodash.min.js"></script>
        <script src="js/mainscript.js"></script>-->

    </body>
</html>
