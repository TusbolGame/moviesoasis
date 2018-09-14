  @extends('layouts.admin')

  
  @section('title', $title)

  @section('content')
   
    <div id="app">
       
		<section class="content-header">
          <h1>Dashboard</h1>
 		</section>

		<div class="boxj box-primaryj" style="margin:20px 3% 0px 3%; width: 94%">
           <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="info-box">
                <span class="info-box-icon bg-aqua"><i class="fa fa-envelope-o"></i></span>
                <div class="info-box-content">
                  <span class="info-box-text">Visitors</span>
                  <span class="info-box-number">1,410</span>
                </div><!-- /.info-box-content -->
              </div><!-- /.info-box -->
            </div><!-- /.col -->
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="info-box">
                <span class="info-box-icon bg-green"><i class="fa fa-flag-o"></i></span>
                <div class="info-box-content">
                  <span class="info-box-text">Pageview</span>
                  <span class="info-box-number">410</span>
                </div><!-- /.info-box-content -->
              </div><!-- /.info-box -->
            </div><!-- /.col -->
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="info-box">
                <span class="info-box-icon bg-yellow"><i class="fa fa-files-o"></i></span>
                <div class="info-box-content">
                  <span class="info-box-text">Crawlers</span>
                  <span class="info-box-number">13,648</span>
                </div><!-- /.info-box-content -->
              </div><!-- /.info-box -->
            </div><!-- /.col -->
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="info-box">
                <span class="info-box-icon bg-red"><i class="fa fa-star-o"></i></span>
                <div class="info-box-content">
                  <span class="info-box-text">Online Users</span>
                  <span class="info-box-number">93,139</span>
                </div><!-- /.info-box-content -->
              </div><!-- /.info-box -->
            </div><!-- /.col -->
          </div><!-- /.row -->


		<div class="row">
            <div class="col-md-6">
<!-- Line chart -->
              <div class="box box-primary">
                <div class="box-header with-border">
                  <i class="fa fa-bar-chart-o"></i>
                  <h3 class="box-title">Human View Chart</h3>
                  <div class="box-tools pull-right">
                    <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                  </div>
                </div>
                <div class="box-body">
                  <div id="humanchart" style="height: 300px;"></div>
                </div><!-- /.box-body-->
              </div><!-- /.box -->
              
              <!-- AREA CHART -->
              <div class="box box-success">
                <div class="box-header with-border">
                  <h3 class="box-title">Monthly  Page views</h3>
                  <div class="box-tools pull-right">
                    <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                  </div>
                </div>
                <div class="box-body">
                  <div class="chart">
                    <canvas id="areaChart" style="height:500px"></canvas>
                  </div>
                </div><!-- /.box-body -->
              </div><!-- /.box -->
              
              </div>

            <div class="col-md-6">
			<!-- Line chart -->
              <div class="box box-primary">
                <div class="box-header with-border">
                  <i class="fa fa-bar-chart-o"></i>
                  <h3 class="box-title">Page views</h3>
                  <div class="box-tools pull-right">
                    <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                  </div>
                </div>
                <div class="box-body">
                  <div id="myfirstchart" style="height: 300px;"></div>
                </div><!-- /.box-body-->
              </div><!-- /.box -->
              
              <!-- BAR CHART -->
              <div class="box box-success">
                <div class="box-header with-border">
                  <h3 class="box-title">Monthly Page View</h3>
                  <div class="box-tools pull-right">
                    <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                  </div>
                </div>
                <div class="box-body">
                  <div class="chart">
                    <canvas id="barChart" style="height:500px"></canvas>
                  </div>
                </div><!-- /.box-body -->
              </div><!-- /.box -->
              
              </div>
              </div>
</div>
    </div>  
@endsection('content')

<!-- Push a style dynamically from a view -->
@push('styles')
    <link href="{{asset('assets/css/common-style.css')}}" />
    {!! Html::style('plugins/morris/morris.css') !!}
@endpush

<!-- Push a script dynamically from a view -->
@push('scripts')
{!! Html::script('plugins/morris/morris.min.js') !!}
{!! Html::script('plugins/chartjs/Chart.min.js') !!}

<script type="text/javascript">
( function( $ ) {
    $( document ).ready(function() {
        $(document).ready(function(settings){
            var a = JSON.parse('<?=$dailyView; ?>');
            var nViews = JSON.parse('<?=$mViews; ?>')

            var allViews = [];
            var humanViews = [];
            var monthlyViews = [];
            var monthlyHumanViews = [];

            for (var i = 0; i < a.length; i++){
                     allViews.push({'_day': (i + 1) + ' ' + a[i].dated, 'views': a[i].view });
                     humanViews.push({'_day': (i + 1) + ' ' + a[i].dated, 'humans': a[i].human });
                  }
//             alert(nViews['monthlyViews'][nViews['months'][0]]);
             for(var i = 0; i < nViews['months'].length; i++){
                 monthlyViews.push(nViews['monthlyViews'][nViews['months'][i]]);
                 monthlyHumanViews.push(nViews['monthlyHumanViews'][nViews['months'][i]]);
             } 

              new Morris.Line({
              // ID of the element in which to draw the chart.
              element: 'myfirstchart',
              // Chart data records -- each entry in this array corresponds to a point on
              // the chart.
              
              data: allViews,
              // The name of the data record attribute that contains x-values.
              xkey: '_day',
              // A list of names of data record attributes that contain y-values.
              ykeys: ['views'],
              // Labels for the ykeys -- will be displayed when you hover over the
              // chart.
              labels: ['views']
            });
            
            new Morris.Line({
              // ID of the element in which to draw the chart.
              element: 'humanchart',
              // Chart data records -- each entry in this array corresponds to a point on
              // the chart.
              
              data: humanViews,
              // The name of the data record attribute that contains x-values.
              xkey: '_day',
              // A list of names of data record attributes that contain y-values.
              ykeys: ['humans'],
              // Labels for the ykeys -- will be displayed when you hover over the
              // chart.
              labels: ['humans']
            });
            
            
            //--------------
        //- AREA CHART -
        //--------------

        // Get context with jQuery - using jQuery's .get() method.
        var areaChartCanvas = $("#areaChart").get(0).getContext("2d");
        // This will get the first returned node in the jQuery collection.
        var areaChart = new Chart(areaChartCanvas);

        var areaChartData = {
          labels: nViews['months'],
          datasets: [
            {
              label: "Electronics",
              fillColor: "rgba(210, 214, 222, 1)",
              strokeColor: "rgba(210, 214, 222, 1)",
              pointColor: "rgba(210, 214, 222, 1)",
              pointStrokeColor: "#c1c7d1",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: monthlyViews
            },
            {
              label: "Digital Goods",
              fillColor: "rgba(60,141,188,0.9)",
              strokeColor: "rgba(60,141,188,0.8)",
              pointColor: "#3b8bba",
              pointStrokeColor: "rgba(60,141,188,1)",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(60,141,188,1)",
              data: monthlyHumanViews
            }
          ]
        };

        var areaChartOptions = {
          //Boolean - If we should show the scale at all
          showScale: true,
          //Boolean - Whether grid lines are shown across the chart
          scaleShowGridLines: false,
          //String - Colour of the grid lines
          scaleGridLineColor: "rgba(0,0,0,.05)",
          //Number - Width of the grid lines
          scaleGridLineWidth: 1,
          //Boolean - Whether to show horizontal lines (except X axis)
          scaleShowHorizontalLines: true,
          //Boolean - Whether to show vertical lines (except Y axis)
          scaleShowVerticalLines: true,
          //Boolean - Whether the line is curved between points
          bezierCurve: true,
          //Number - Tension of the bezier curve between points
          bezierCurveTension: 0.3,
          //Boolean - Whether to show a dot for each point
          pointDot: false,
          //Number - Radius of each point dot in pixels
          pointDotRadius: 4,
          //Number - Pixel width of point dot stroke
          pointDotStrokeWidth: 1,
          //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
          pointHitDetectionRadius: 20,
          //Boolean - Whether to show a stroke for datasets
          datasetStroke: true,
          //Number - Pixel width of dataset stroke
          datasetStrokeWidth: 2,
          //Boolean - Whether to fill the dataset with a color
          datasetFill: true,
          //String - A legend template
          legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
          //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
          maintainAspectRatio: true,
          //Boolean - whether to make the chart responsive to window resizing
          responsive: true
        };

        //Create the line chart
        areaChart.Line(areaChartData, areaChartOptions);

        
        //-------------
        //- BAR CHART -
        //-------------
        var barChartCanvas = $("#barChart").get(0).getContext("2d");
        var barChart = new Chart(barChartCanvas);
        var barChartData = areaChartData;
        barChartData.datasets[1].fillColor = "#00a65a";
        barChartData.datasets[1].strokeColor = "#00a65a";
        barChartData.datasets[1].pointColor = "#00a65a";
        var barChartOptions = {
          //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
          scaleBeginAtZero: true,
          //Boolean - Whether grid lines are shown across the chart
          scaleShowGridLines: true,
          //String - Colour of the grid lines
          scaleGridLineColor: "rgba(0,0,0,.05)",
          //Number - Width of the grid lines
          scaleGridLineWidth: 1,
          //Boolean - Whether to show horizontal lines (except X axis)
          scaleShowHorizontalLines: true,
          //Boolean - Whether to show vertical lines (except Y axis)
          scaleShowVerticalLines: true,
          //Boolean - If there is a stroke on each bar
          barShowStroke: true,
          //Number - Pixel width of the bar stroke
          barStrokeWidth: 2,
          //Number - Spacing between each of the X value sets
          barValueSpacing: 5,
          //Number - Spacing between data sets within X values
          barDatasetSpacing: 1,
          //String - A legend template
          legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
          //Boolean - whether to make the chart responsive
          responsive: true,
          maintainAspectRatio: true
        };

        barChartOptions.datasetFill = false;
        barChart.Bar(barChartData, barChartOptions);

    });

    });
})( jQuery );
</script>

@endpush