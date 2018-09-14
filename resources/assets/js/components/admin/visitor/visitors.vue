<template>
    <div class="wrapper-div">
        <section class="content-header">
            <h1>
                <small>&nbsp;</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> Admin</a></li>
                <li class="active">Visitors</li>
            </ol>
        </section>
        <div class="box box-primary">
            <div class="box-header with-border">
                <h3 class="box-title">All Visitors</h3>
                <div class="box-tools pull-right">
                    <div class="has-feedback">
                        <input class="form-control input-sm" placeholder="Search Mail" type="text">
                        <span class="glyphicon glyphicon-search form-control-feedback"></span>
                    </div>
                </div><!-- /.box-tools -->
            </div><!-- /.box-header -->
            <div class="box-body no-padding">
                <div class="mailbox-controls">
                    <div class="btn-group">
                        <button class="btn btn-default btn-sm"><i class="fa fa-trash-o"></i></button>
                        <button class="btn btn-default btn-sm"><i class="fa fa-reply"></i></button>
                        <button class="btn btn-default btn-sm"><i class="fa fa-share"></i></button>
                    </div><!-- /.btn-group -->
                    <button class="btn btn-default btn-sm reload"><i class="fa fa-refresh"></i></button>
                    <div class="pull-right">
                        pagination
                    </div><!-- /.pull-right -->
                </div>
                <div class="table-responsive mailbox-messages" style="width:100%">
                    <table class="table table-hover table-striped">
                        <thead>
                        <tr class="text-center">
                            <th class="text-center">id</th>
                            <th style="width: 70px" class="text-center">Ip Address</th>
                            <th class="text-center">Remote Host</th>
                            <th class="text-center">User Agent</th>
                            <th class="text-center">Referrer</th>
                            <th class="text-center">Date</th>
                            <th class="text-center">Time</th>
                        </tr>
                        </thead>
                        <tbody>


                        <tr style="height:10px; overflow: hidden;">
                            <td class="text-center">{{ 1 }}</td>
                            <td class="text-center">
                                <div class="truncate" style="width:200px">{{ 'visitor ip' }}</div>
                            </td>
                            <td class="text-center">{{ 'remotehost' }}</td>
                            <td class="text-center">{{ 'useragent' }}</td>
                            <td class="text-center">{{ 'referrer' }}</td>
                            <td class="text-center">
                                <div class="truncate">{{ 'date' }}</div>
                            </td>
                            <td class="text-center">{{ 'time' }}</td>
                        </tr>


                        </tbody>
                    </table><!-- /.table -->
                </div><!-- /.mail-box-messages -->
            </div><!-- /.box-body -->
            <div class="box-footer no-padding">
                <div class="mailbox-controls">
                    <div class="btn-group">
                        <button class="btn btn-default btn-sm"><i class="fa fa-trash-o"></i></button>
                        <button class="btn btn-default btn-sm"><i class="fa fa-reply"></i></button>
                        <button class="btn btn-default btn-sm"><i class="fa fa-share"></i></button>
                    </div><!-- /.btn-group -->
                    <button class="btn btn-default btn-sm reload"><i class="fa fa-refresh"></i></button>
                    <div class="pull-right">
                        {pagination
                    </div><!-- /.pull-right -->
                </div><!-- /.pull-right -->
            </div>

        </div><!-- /. box -->
    </div>
</template>

<script>
    export default {
        name: "visitors"
    }
</script>

<style scoped>
    .wrapper-div {
        margin: 0px 5% 0px 5%;
    }
</style>