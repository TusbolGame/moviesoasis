  @extends('layouts.admin')

  
  @section('title', $title)

  @section('content')
   <!-- Content Header (Page header) -->
    <div style="margin:20px 30px 0px 3%;">

            <section class="content-header">
              <h1>
                &nbsp;
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
                         {!! $visitors->links() !!}
                        </div><!-- /.pull-right -->
                      </div>
                      <div class="table-responsive mailbox-messages"style="width:100%">
                        <table class="table table-hover table-striped">
                            <thead >
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

                            @foreach($visitors as $visitor)
                              <tr style="height:10px; overflow: hidden;">
                              <td class="text-center">{{ ($visitors->perPage() * ($visitors->currentPage() - 1) ) + ($loop->index + 1) }}</td>
                              <td class="text-center"><div class="truncate" style="width:200px">{{ $visitor->ip }}</div></td>
                              <td class="text-center">{{ $visitor->remotehost }}</td>
                              <td class="text-center">{{ $visitor->useragent }}</td>
                              <td class="text-center">{{ $visitor->referrer }}</td>
                              <td class="text-center"><div class="truncate">{{ $visitor->date }}</div></td>
                              <td class="text-center">{{ $visitor->time }}</td>
                            @endforeach

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
                          {!! $visitors->links() !!}
                        </div><!-- /.pull-right -->
                        </div><!-- /.pull-right -->
                      </div>

                  </div><!-- /. box -->      
    </div>
  @endsection('content')

  <!-- Push a style dynamically from a view -->
  @push('scripts')
	 <script>
     $(function () {
        //Enable iCheck plugin for checkboxes
        //iCheck for checkbox and radio inputs
        $('.mailbox-messages input[type="checkbox"]').iCheck({
          checkboxClass: 'icheckbox_flat-blue',
          radioClass: 'iradio_flat-blue'
        });

        //Enable check and uncheck all functionality
        $(".checkbox-toggle").click(function () {
          var clicks = $(this).data('clicks');
          if (clicks) {
            //Uncheck all checkboxes
            $(".mailbox-messages input[type='checkbox']").iCheck("uncheck");
            $(".fa", this).removeClass("fa-check-square-o").addClass('fa-square-o');
          } else {
            //Check all checkboxes
            $(".mailbox-messages input[type='checkbox']").iCheck("check");
            $(".fa", this).removeClass("fa-square-o").addClass('fa-check-square-o');
          }
          $(this).data("clicks", !clicks);
        });

        //Handle starring for glyphicon and font awesome
        $(".mailbox-star").click(function (e) {
          e.preventDefault();
          //detect type
          var $this = $(this).find("a > i");
          var glyph = $this.hasClass("glyphicon");
          var fa = $this.hasClass("fa");

          //Switch states
          if (glyph) {
            $this.toggleClass("glyphicon-star");
            $this.toggleClass("glyphicon-star-empty");
          }

          if (fa) {
            $this.toggleClass("fa-star");
            $this.toggleClass("fa-star-o");
          }
        });
      });
            
    </script>
  @endpush