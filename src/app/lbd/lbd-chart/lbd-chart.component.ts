import {Component, Input, OnInit, AfterViewInit, OnChanges, SimpleChanges, ChangeDetectionStrategy} from '@angular/core';
import * as Chartist from 'chartist';

export interface LegendItem {
  title: string;
  imageClass: string;
}

export enum ChartType {
  // Pie,
  // Line,
  // Bar
  Pie = 'Pie',
  Line = 'Line',
  Bar = 'Bar'
}

@Component({
  selector: 'lbd-chart',
  templateUrl: './lbd-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LbdChartComponent implements OnInit, AfterViewInit, OnChanges {
  static currentId = 1;
 // public chartId: string;

  @Input()
  public title: string;

  @Input()
  public subtitle: string;

  @Input()
  public chartClass: string;

  @Input()
  public chartType: ChartType;

  @Input()
  public chartData: any;

  @Input()
  public chartOptions: any;

  @Input()
  public chartResponsive: any[];

  @Input()
  public footerIconClass: string;

  @Input()
  public footerText: string;

  @Input()
  public legendItems: LegendItem[];

  @Input()
  public withHr: boolean;

  public chartId: string;

  constructor() {
  }
  private chart: any;

  public ngOnInit(): void {
    this.chartId = `lbd-chart-${LbdChartComponent.currentId++}`;
  }

  // public ngAfterViewInit(): void {

  //   switch (this.chartType) {
  //     case ChartType.Pie:
  //       new Chartist.Pie(`#${this.chartId}`, this.chartData, this.chartOptions, this.chartResponsive);
  //       break;
  //     case ChartType.Line:
  //       new Chartist.Line(`#${this.chartId}`, this.chartData, this.chartOptions, this.chartResponsive);
  //       break;
  //     case ChartType.Bar:
  //       new Chartist.Bar(`#${this.chartId}`, this.chartData, this.chartOptions, this.chartResponsive);
  //       break;
  //   }
  // }
  public ngAfterViewInit(): void {
    this.renderChart();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartData'] && !changes['chartData'].isFirstChange()) {
      this.renderChart();
    }
  }

  private renderChart(): void {
    if (!this.chartData || !this.chartType) return;

    switch (this.chartType) {
      case ChartType.Pie:
        this.chart = new Chartist.Pie(`#${this.chartId}`, this.chartData, this.chartOptions, this.chartResponsive);
        break;
      case ChartType.Line:
        this.chart = new Chartist.Line(`#${this.chartId}`, this.chartData, this.chartOptions, this.chartResponsive);
        break;
      case ChartType.Bar:
        this.chart = new Chartist.Bar(`#${this.chartId}`, this.chartData, this.chartOptions, this.chartResponsive);
        break;
    }
  }
}
