import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements OnInit {

  constructor(    private menu: MenuController,) { }

  ngOnInit() {
    this.menu.enable(false,'main-menu');
    this.menu.swipeGesture(false,'main-menu');
  }


  
  ionViewDidEnter() {
    this.plotDynamicSplineChart();
    this.plotSimpleDonutChart();
    this.plotSimpleBarChart();
    // this.plotStackedBarChart();
    // this.plotNegativeBarChart();
    // this.plotVerticalBarChart();

    // this.plotSimplePieChart();
    // 
    // this.plotSemiDonutChart();
  }
  plotDynamicSplineChart() {
    let myChart = HighCharts.chart('dynamicSpline', {
      chart: {
        type: 'spline',
        animation: true, // don't animate in old IE
        marginRight: 10,
        events: {
          load: function () {

            // set up the updating of the chart each second
            var series = this.series[0];
            setInterval(function () {
              var x = (new Date()).getTime(), // current time
                y = Math.random();
              series.addPoint([x, y], true, true);
            }, 1000);
          }
        }
      },

      time: {
        useUTC: false
      },

      title: {
        text: 'APP TRAFFIC'
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
      },
      yAxis: {
        title: {
          text: 'Value'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
      },
      legend: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      series: [{
        name: 'trafic at',
        type: undefined,
        data: (function () {
          // generate an array of random data
          var data = [],
            time = (new Date()).getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 1000,
              y: Math.random()
            });
          }
          return data;
        }())
      }]

    });
  }

  plotSimpleBarChart() {
    let myChart = HighCharts.chart('highcharts', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'patient registered'
      },
      xAxis: {
        categories: ['registrations']
      },
      yAxis: {
        title: {
          text: 'patient number'
        }
      },
      series: [
        {
          name: 'sigout',
          type: undefined,
          data: [1]
        },
        {
          name: 'signin',
          type: undefined,
          data: [5]
        }]
    });
  }

  plotStackedBarChart() {
    let myChart = HighCharts.chart('stacked', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Stacked bar chart'
      },
      xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total fruit consumption'
        }
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series: [{
        name: 'John',
        type: undefined,
        data: [5, 3, 4, 7, 2]
      }, {
        name: 'Jane',
        type: undefined,
        data: [2, 2, 3, 2, 1]
      }, {
        name: 'Joe',
        type: undefined,
        data: [3, 4, 4, 2, 5]
      }]
    });
  }

  plotNegativeBarChart() {
    let myChart = HighCharts.chart('negative', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Column chart with negative values'
      },
      xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'John',
        type: undefined,
        data: [5, 3, 4, 7, 2]
      }, {
        name: 'Jane',
        type: undefined,
        data: [2, -2, -3, 2, 1]
      }, {
        name: 'Joe',
        type: undefined,
        data: [3, 4, 4, -2, 5]
      }]
    });
  }

  plotVerticalBarChart() {
    let myChart = HighCharts.chart('vertical', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [
        {
          name: 'Jane',
          type: undefined,
          data: [1, 0, 4]
        },
        {
          name: 'John',
          type: undefined,
          data: [5, 7, 3]
        }]
    });
  }
 
  plotSimplePieChart() {
    let myChart = HighCharts.chart('simplePie', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Browser market shares in January, 2018'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: 'black'
            }
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        type: undefined,
        data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Internet Explorer',
          y: 11.84
        }, {
          name: 'Firefox',
          y: 10.85
        }, {
          name: 'Edge',
          y: 4.67
        }, {
          name: 'Safari',
          y: 4.18
        }, {
          name: 'Sogou Explorer',
          y: 1.64
        }, {
          name: 'Opera',
          y: 1.6
        }, {
          name: 'QQ',
          y: 1.2
        }, {
          name: 'Other',
          y: 2.61
        }]
      }]
    });
  }

  plotSimpleDonutChart() {
    var colors = HighCharts.getOptions().colors,
      categories = [
        'deaths',
        'birth',

      ],
      data = [
        {
          y: 12.74,
          color: colors[5],
          drilldown: {
            name: 'deaths',
            categories: [
              'maternity',
              'normal',
              'sickness',
              'chirurgical',
            ],
            data: [
              1.1,
              2.3,
              8.02,
              1.4,
 
            ]
          }
        },
        {
          y: 90.57,
          color: colors[4],
          drilldown: {
            name: 'birth',
            categories: [
              'birth'
              
            ],
            data: [
              61.02,

            ]
          }
        },
    
     
      
      ],
      browserData = [],
      versionsData = [],
      i,
      j,
      dataLen = data.length,
      drillDataLen,
      brightness;


    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {

      // add browser data
      browserData.push({
        name: categories[i],
        y: data[i].y,
        color: data[i].color
      });

      // add version data
      drillDataLen = data[i].drilldown.data.length;
      for (j = 0; j < drillDataLen; j += 1) {
        brightness = 0.2 - (j / drillDataLen) / 5;
        versionsData.push({
          name: data[i].drilldown.categories[j],
          y: data[i].drilldown.data[j],
          color: new HighCharts.Color(data[i].color).brighten(brightness).get()
        });
      }
    }

    // Create the chart
    HighCharts.chart('simpleDonut', {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'hospital deaths'
      },
 
      plotOptions: {
        pie: {
          shadow: false,
          center: ['50%', '50%']
        }
      },
      tooltip: {
        valueSuffix: '%'
      },
      series: [{
        name: 'rate',
        type: undefined,
        data: browserData,
        size: '60%',
        dataLabels: {
          formatter: function () {
            return this.y > 5 ? this.point.name : null;
          },
          color: '#ffffff',
          distance: -30
        }
      }, {
        name: 'Versions',
        type: undefined,
        data: versionsData,
        size: '80%',
        innerSize: '60%',
        dataLabels: {
          formatter: function () {
            // display only if larger than 1
            return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
              this.y + '%' : null;
          }
        },
        id: 'versions'
      }],
      responsive: {
        rules: [{
          condition: {
            maxWidth: 400
          },
          chartOptions: {
            series: [{
              type: undefined,
            }, {
              id: 'versions',
              type: undefined,
              dataLabels: {
                enabled: false
              }
            }]
          }
        }]
      }
    });
  }

  plotSemiDonutChart() {
    HighCharts.chart('semi', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
        text: 'Browser<br>shares<br>2017',
        align: 'center',
        verticalAlign: 'middle',
        y: 40
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '110%'
        }
      },
      series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
          ['Chrome', 58.9],
          ['Firefox', 13.29],
          ['Internet Explorer', 13],
          ['Edge', 3.78],
          ['Safari', 3.42],
          {
            name: 'Other',
            y: 7.61,
            dataLabels: {
              enabled: false
            }
          }
        ]
      }]
    });
  }
  

}
