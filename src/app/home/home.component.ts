import { Component, OnInit, OnDestroy } from '@angular/core';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import { interval, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
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

  private dataSub: Subscription;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Initial static setup (optional, can be empty or loading state)
    this.iocChartType = ChartType.Pie;
    //this.iocChartType = 'Pie';
    this.iocChartData = { labels: [], series: [] };
    this.iocChartLegendItems = [
      { title: 'Malware', imageClass: 'fa fa-circle text-danger' },
      { title: 'Phishing', imageClass: 'fa fa-circle text-warning' },
      { title: 'Botnet', imageClass: 'fa fa-circle text-info' }
    ];

    this.nodeChartType = ChartType.Line;
    this.nodeChartData = { labels: [], series: [] };
    this.nodeChartOptions = {
      low: 0,
      high: 80,
      showArea: true,
      height: '245px',
      axisX: { showGrid: false },
      lineSmooth: Chartist.Interpolation.simple({ divisor: 3 }),
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

    this.alertChartType = ChartType.Bar;
    this.alertChartData = { labels: [], series: [] };
    this.alertChartOptions = {
      seriesBarDistance: 15,
      axisX: { showGrid: false },
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

    // Fetch live data every 10 seconds
    this.dataSub = interval(10000).pipe(
      switchMap(() => this.http.get<any>('http://localhost:5000/auth/dashboard-data'))
    ).subscribe(data => {
      if (data) {
        this.iocChartData = data.iocChartData || this.iocChartData;
        this.nodeChartData = data.nodeChartData || this.nodeChartData;
        this.alertChartData = data.alertChartData || this.alertChartData;
      }
    });

    // Fetch once immediately
    this.http.get<any>('http://localhost:5000/auth/dashboard-data').subscribe(data => {
      if (data) {
        this.iocChartData = data.iocChartData || this.iocChartData;
        this.nodeChartData = data.nodeChartData || this.nodeChartData;
        this.alertChartData = data.alertChartData || this.alertChartData;
      }
    });
  }

  ngOnDestroy() {
    if (this.dataSub) {
      this.dataSub.unsubscribe();
    }
  }
}