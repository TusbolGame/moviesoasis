  <template>
      <!-- Content Header (Page header) -->
      <div style="margin:20px 30px 0px 3%;">

          <section class="content-header">
              <h1>
                  &nbsp;
                  <small>&nbsp;</small>
              </h1>
              <ol class="breadcrumb">
                  <li><a href="#"><i class="fa fa-dashboard"></i> Admin</a></li>
                  <li class="active">Bots</li>
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
                          visitors->links()
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

                          <tr style="height:10px; overflow: hidden;" v-for="(visitor, index) in visitors">
                              <td class="text-center">{{ (index + 1) }}</td>
                              <td class="text-center"><div class="truncate" style="width:200px">{{ visitor.ip }}</div></td>
                              <td class="text-center">{{ visitor.remotehost }}</td>
                              <td class="text-center">{{ visitor.useragent }}</td>
                              <td class="text-center">{{ visitor.referrer }}</td>
                              <td class="text-center"><div class="truncate">{{ visitor.date }}</div></td>
                              <td class="text-center">{{ visitor.time }}</td>
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
                          visitors->links()
                      </div><!-- /.pull-right -->
                  </div><!-- /.pull-right -->
              </div>

          </div><!-- /. box -->
      </div>
  </template>


  <script type="text/javascript">
      export default {
          props: [

          ],
          methods: {
              flag(category){
                  if(category == "christian" || category == "islamic"){
                      return true;
                  }
                  return false;
              }
          },
          mounted() {
              this.$bot.getBots(0)
                  .then((data) => {
                      console.log(data.data.data);
                      this.movies = data.data.data;
                  })
          },
          data() {
              return {
                  visitors: {},
                  adminUrl: '',
              }
          },
          computed: {

          }
      }
  </script>

  <style scoped>
      .wrapper {
          margin-top: 10%;
          background-color: transparent;
      }

      img {
          height: 200px;
          width: 200px;
      }
  </style>
