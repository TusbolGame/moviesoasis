<template>
    <div style="margin:20px 30px 0px 3%;">
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
                <div class="col-md-12">
                    <!-- Line chart -->
                    <vue-highcharts :options="options" ref="lineCharts"></vue-highcharts>

                    <!-- AREA CHART -->
                    <vue-highcharts :options="options" ref="lineCharts"></vue-highcharts>

                </div>

                <div class="col-md-12">
                    <!-- Line chart -->
                    <vue-highcharts :options="options" ref="lineCharts"></vue-highcharts>

                    <!-- BAR CHART -->
                    <vue-highcharts :options="options" ref="lineCharts"></vue-highcharts>

                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import VueHighcharts from 'vue2-highcharts'
    const asyncData = {
        name: 'Tokyo',
        marker: {
            symbol: 'square'
        },
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
            y: 26.5,
            marker: {
                symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)'
            }
        }, 23.3, 18.3, 13.9, 9.6]
    }
    export default {
        components: {
            VueHighcharts
        },
        methods: {
            flag(category) {
                if (category == "christian" || category == "islamic") {
                    return true;
                }
                return false;
            },
            load(){
                let lineCharts = this.$refs.lineCharts;
                lineCharts.delegateMethod('showLoading', 'Loading...');
                setTimeout(() => {
                    lineCharts.addSeries(asyncData);
                    lineCharts.hideLoading();
                }, 2000)
            }
        },
        mounted() {
            this.load();
            // this.$bot.getBots(0)
            //     .then((data) => {
            //         console.log(data.data.data);
            //         this.movies = data.data.data;
            //     })
        },
        data() {
            return {
                visitors: {},
                adminUrl: '',
                options: {
                    chart: {
                        type: 'spline'
                    },
                    title: {
                        text: 'Monthly Average Temperature'
                    },
                    subtitle: {
                        text: 'Source: WorldClimate.com'
                    },
                    xAxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    },
                    yAxis: {
                        title: {
                            text: 'Temperature'
                        },
                        labels: {
                            formatter: function () {
                                return this.value + '°';
                            }
                        }
                    },
                    tooltip: {
                        crosshairs: true,
                        shared: true
                    },
                    credits: {
                        enabled: false
                    },
                    plotOptions: {
                        spline: {
                            marker: {
                                radius: 4,
                                lineColor: '#666666',
                                lineWidth: 1
                            }
                        }
                    },
                    series: []
                }
            }
        },
        computed: {}
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
