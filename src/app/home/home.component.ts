// import { Component, OnInit } from '@angular/core';
// import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
// import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
// import * as Chartist from 'chartist';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//     public emailChartType: ChartType;
//     public emailChartData: any;
//     public emailChartLegendItems: LegendItem[];

//     public hoursChartType: ChartType;
//     public hoursChartData: any;
//     public hoursChartOptions: any;
//     public hoursChartResponsive: any[];
//     public hoursChartLegendItems: LegendItem[];

//     public activityChartType: ChartType;
//     public activityChartData: any;
//     public activityChartOptions: any;
//     public activityChartResponsive: any[];
//     public activityChartLegendItems: LegendItem[];
//   constructor() { }

//   ngOnInit() {
//       this.emailChartType = ChartType.Pie;
//       this.emailChartData = {
//         labels: ['62%', '32%', '6%'],
//         series: [62, 32, 6]
//       };
//       this.emailChartLegendItems = [
//         { title: 'Open', imageClass: 'fa fa-circle text-info' },
//         { title: 'Bounce', imageClass: 'fa fa-circle text-danger' },
//         { title: 'Unsubscribe', imageClass: 'fa fa-circle text-warning' }
//       ];

//       this.hoursChartType = ChartType.Line;
//       this.hoursChartData = {
//         labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
//         series: [
//           [287, 385, 490, 492, 554, 586, 698, 695, 752, 788, 846, 944],
//           [67, 152, 143, 240, 287, 335, 435, 437, 539, 542, 544, 647],
//           [23, 113, 67, 108, 190, 239, 307, 308, 439, 410, 410, 509]
//         ]
//       };
//       this.hoursChartOptions = {
//         low: 0,
//         high: 800,
//         showArea: true,
//         height: '245px',
//         axisX: {
//           showGrid: false,
//         },
//         lineSmooth: Chartist.Interpolation.simple({
//           divisor: 3
//         }),
//         showLine: false,
//         showPoint: false,
//       };
//       this.hoursChartResponsive = [
//         ['screen and (max-width: 640px)', {
//           axisX: {
//             labelInterpolationFnc: function (value) {
//               return value[0];
//             }
//           }
//         }]
//       ];
//       this.hoursChartLegendItems = [
//         { title: 'Open', imageClass: 'fa fa-circle text-info' },
//         { title: 'Click', imageClass: 'fa fa-circle text-danger' },
//         { title: 'Click Second Time', imageClass: 'fa fa-circle text-warning' }
//       ];

//       this.activityChartType = ChartType.Bar;
//       this.activityChartData = {
//         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//         series: [
//           [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
//           [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
//         ]
//       };
//       this.activityChartOptions = {
//         seriesBarDistance: 10,
//         axisX: {
//           showGrid: false
//         },
//         height: '245px'
//       };
//       this.activityChartResponsive = [
//         ['screen and (max-width: 640px)', {
//           seriesBarDistance: 5,
//           axisX: {
//             labelInterpolationFnc: function (value) {
//               return value[0];
//             }
//           }
//         }]
//       ];
//       this.activityChartLegendItems = [
//         { title: 'Tesla Model S', imageClass: 'fa fa-circle text-info' },
//         { title: 'BMW 5 Series', imageClass: 'fa fa-circle text-danger' }
//       ];


//     }

// }



import { Component, OnInit } from '@angular/core';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public iocChartType: ChartType;
  public iocChartData: any;
  public iocChartLegendItems: LegendItem[];

  public nodeChartType: ChartType;
  public nodeChartData: any;
  public nodeChartOptions: any;
  public nodeChartResponsive: any[];
  public nodeChartLegendItems: LegendItem[];

  public alertChartType: ChartType;
  public alertChartData: any;
  public alertChartOptions: any;
  public alertChartResponsive: any[];
  public alertChartLegendItems: LegendItem[];

  constructor() {}

  ngOnInit() {
    // Indicator of Compromise Detection Stats
    this.iocChartType = ChartType.Pie;
    this.iocChartData = {
      labels: ['Malware', 'Phishing', 'Botnet'],
      series: [45, 30, 25]
    };
    this.iocChartLegendItems = [
      { title: 'Malware', imageClass: 'fa fa-circle text-danger' },
      { title: 'Phishing', imageClass: 'fa fa-circle text-warning' },
      { title: 'Botnet', imageClass: 'fa fa-circle text-info' }
    ];

    // Node Activity Chart
    this.nodeChartType = ChartType.Line;
    this.nodeChartData = {
      labels: ['12AM', '3AM', '6AM', '9AM', '12PM', '3PM', '6PM', '9PM'],
      series: [
        [15, 30, 45, 40, 60, 70, 55, 65],   // Node 1
        [10, 20, 25, 30, 45, 55, 50, 60],   // Node 2
        [5, 10, 20, 15, 25, 35, 40, 50]     // Node 3
      ]
    };
    this.nodeChartOptions = {
      low: 0,
      high: 80,
      showArea: true,
      height: '245px',
      axisX: {
        showGrid: false,
      },
      lineSmooth: Chartist.Interpolation.simple({
        divisor: 3
      }),
      showLine: true,
      showPoint: true,
    };
    this.nodeChartResponsive = [
      ['screen and (max-width: 640px)', {
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];
    this.nodeChartLegendItems = [
      { title: 'Node A', imageClass: 'fa fa-circle text-info' },
      { title: 'Node B', imageClass: 'fa fa-circle text-warning' },
      { title: 'Node C', imageClass: 'fa fa-circle text-danger' }
    ];

    // Threat Alert Trends
    this.alertChartType = ChartType.Bar;
    this.alertChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [120, 150, 180, 220, 300, 310, 350, 370, 400, 420, 450, 480], // Verified Alerts
        [80, 100, 130, 160, 210, 230, 260, 270, 300, 310, 330, 350]   // Flagged Alerts
      ]
    };
    this.alertChartOptions = {
      seriesBarDistance: 15,
      axisX: {
        showGrid: false
      },
      height: '245px'
    };
    this.alertChartResponsive = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];
    this.alertChartLegendItems = [
      { title: 'Verified Alerts', imageClass: 'fa fa-circle text-success' },
      { title: 'Flagged Alerts', imageClass: 'fa fa-circle text-warning' }
    ];
  }
}
