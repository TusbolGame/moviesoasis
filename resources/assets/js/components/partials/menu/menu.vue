<template>
    <div>
        <!-- Left side column. contains the sidebar -->
        <aside class="main-sidebar">
            <!-- sidebar: style can be found in sidebar.less -->
            <section class="sidebar">
                <!-- Sidebar user panel -->
                <div class="user-panel">
                    <div class="pull-left image">
                        <img src="/images/avatar3.png" class="img-circle" alt="User Image">
                    </div>
                    <div class="pull-left info">
                        <p>Lateef</p>
                        <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                    </div>
                </div>
                <!-- sidebar menu: : style can be found in sidebar.less -->
                <ul class="sidebar-menu">
                    <li class="header">MAIN NAVIGATION</li>
                    <li class="treeview">
                        <router-link tag="a" :to="{name: 'dashboard'}">
                            <i class="glyphicon glyphicon-dashboard"></i> <span>Dashboard</span>
                        </router-link>
                    </li>
                    <li class="treeview">
                        <router-link tag="a" :to="{name: 'movies'}">
                            <i class="glyphicon glyphicon-inbox"></i> <span>Movies</span>
                        </router-link>
                    </li>
                    <li class="treeview">
                        <router-link tag="a" :to="{name: 'blog'}">
                            <i class="glyphicon glyphicon-book"></i> <span>Blog</span>
                        </router-link>
                    </li>
                    <li class="treeview">
                        <router-link tag="a" :to="{name: 'users'}">
                            <i class="glyphicon glyphicon-user"></i> <span>Users</span>
                        </router-link>
                    </li>
                    <li class="treeview">
                        <router-link tag="a" :to="{name: 'visitors'}">
                            <i class="fa fa-users"></i> <span>Visitors</span>
                        </router-link>
                    </li>
                    <li class="treeview">
                        <router-link tag="a" :to="{name: 'bots'}">
                            <i class="fa fa-crop"></i> <span>Bots</span>
                        </router-link>
                    </li>
                    <li class="treeview">
                        <router-link tag="a" :to="{name: 'crawlers'}">
                            <i class="fa fa-crop"></i> <span>Crawlers</span>
                        </router-link>
                    </li>
                    <li class="treeview">
                        <router-link tag="a" :to="{name: 'tools'}">
                            <i class="glyphicon glyphicon-wrench"></i> <span>Tools</span>
                        </router-link>
                    </li>
                </ul>
            </section>
            <!-- /.sidebar -->
        </aside>

        <!-- =============================================== -->
    </div>
</template>
<script>
    export default {
        name: "mo-menu",
        created() {
            console.log('Component created.')
        }
    }
</script>