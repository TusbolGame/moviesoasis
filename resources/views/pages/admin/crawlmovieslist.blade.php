  @extends('layouts.admin')

  
  @section('title', $title)

  @section('content')
   <div>
      <div style="margin:20px 30px 0px 3%;">

          <section class="content-header">
              <h1>
                &nbsp;
                  <small>&nbsp;</small>
              </h1>
              <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> Admin</a></li>
                <li class="active">Movies</li>
              </ol>
          </section>
          <div class="box box-primary">
              <div class="box-header with-border">
                <h3 class="box-title">All Movies</h3>
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
                       {{ $movies->links() }}
                  </div><!-- /.pull-right -->
                </div>
                <div class="table-responsive mailbox-messages"style="width:100%">
                   <table class="table table-hover table-striped">
                      <thead >
                          <tr class="text-center">
                              <th colspan="3" class="text-center"><--T--></th>
                              <th class="text-center">id</th>
                              <th style="width: 70px" class="text-center">Name</th>
                              <th class="text-center">Category</th>
                              <th class="text-center">Released Date</th>
                              <th class="text-center">Genre</th>
                              <th class="text-center">Duration</th>
                              <th class="text-center">Uploaded Date</th>
                              <th class="text-center">Views</th>
                              <th class="text-center">YouLink</th>
                      </tr>
                      </thead>
                      <tbody>
                        @foreach($movies as $movie)
                        <tr style="height:10px; overflow: hidden;" class="<?php if($movie->available == 0){echo 'border_1'; }else{ echo 'border_2';} ?>">
                              <td><input type="checkbox"></td>
                              <td><a href="/edit_movie/ {{ $movie->enc_id}}"><span class="glyphicon glyphicon-edit">&nbsp;Edit</span></a></td>
                              <td><span id="{{ 'deletee' . ($loop->index + 1) }}" placeholder="/delete_movie/' . {{ $movie->enc_id }}" class="glyphicon glyphicon-trash" style="color: red">&nbsp;Delete</span>
                              </td>
                              <td class="text-center">{{ ($movies->perPage() * ($movies->currentPage() - 1) ) + ($loop->index + 1) }}</td>
                              <td class="text-center"><div class="truncate" style="width:200px">{{ $movie->name }}</div></td>
                              <td class="text-center">{{ $movie->category }}</td>
                              <td class="text-center">{{ $movie->released_date }}</td>
                              <td class="text-center"><div class="truncate">{{ $movie->genre }}</div></td>
                              <td class="text-center">{{ $movie->duration }}</td>
                              <td class="text-center">{{ $movie->uploaded_date }}</td>
                              <td class="text-center">{{ $movie->views }}</td>
                              <td class="text-center"><div class="truncate">{{ $movie->youlink }}</div></td>
                            </tr>
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
                       {{ $movies->links() }}             
                  </div><!-- /.pull-right -->
                 </div><!-- /.pull-right -->
              </div><!-- /.pull-right -->
          
        <div class="example-modal" style="display: none;">
          <div class="modal modal-warning">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 class="modal-title">Modal Warning</h4>
                </div>
                <div class="modal-body">
                  <p><strong>Are You sure you want to deleted the video&hellip;</strong></p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline pull-left" data-dismiss="modal" id="modal-no">&nbsp;&nbsp;&nbsp;No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                  <a href="" id="modal-yes"><button type="button" class="btn btn-outline">&nbsp;&nbsp;&nbsp;Yes&nbsp;&nbsp;&nbsp;</button></a>
                </div>
              </div><!--/.modal-content--> 
            </div><!--/.modal-dialog--> 
          </div><!--/.modal--> 
        </div><!--/.example-modal--> 
      </div><!-- /. box -->
      </div>
    
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