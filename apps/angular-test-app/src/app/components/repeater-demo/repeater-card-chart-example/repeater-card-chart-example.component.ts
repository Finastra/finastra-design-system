import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import * as d3 from 'd3';

export interface DataModel {
  year: number;
  amount: string;
}

@Component({
  selector: 'ffdc-repeater-card-chart-example',
  templateUrl: './repeater-card-chart-example.component.html',
  styleUrls: ['./repeater-card-chart-example.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RepeaterCardChartExampleComponent implements OnInit {
  @ViewChild('chart', { static: true })
  private chartContainer!: ElementRef;

  @Input() data: any;
  @Input() columnsMatcher: any = {};

  margin = { top: 0, right: 0, bottom: 0, left: 10 };

  isDown = Math.random() >= 0.5;
  sell = this.randomIntFromInterval(1000, 2000);
  buy = this.randomIntFromInterval(1000, 2000);

  highest = this.randomIntFromInterval(1000, 2000);
  lowest = this.randomIntFromInterval(1000, 2000);

  element: any;
  line: any;
  dataNum1: any[] = [];
  dataNum2: any[] = [];
  dataNum3: any[] = [];

  constructor() {}

  ngOnInit() {
    let year = 0;
    const historic: Array<DataModel> = [];

    for (let i = 0; i < 50; i++) {
      historic.push({ year: year, amount: this.randomIntFromInterval(0, 9999) });
      year++;
    }
    this.element = this.chartContainer.nativeElement;

    const svg = d3.select(this.element).select('svg').attr('width', 280).attr('height', 30);

    const x = d3.scaleLinear().domain([0, 50]).range([0, 260]);
    const y = d3.scaleLinear().domain([0, 9999]).range([30, 0]);

    this.line = d3
      .line()
      .x((d: any) => {
        return x(d.year);
      })
      .y((d: any) => y(d.amount));

    this.dataNum1 = historic.filter((d) => d.year <= 10);
    this.dataNum2 = historic.filter((d) => d.year >= 10);
    this.dataNum3 = historic;

    const g = svg
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')')

      .append('path')
      .datum(this.dataNum1)
      .attr('stroke', '#CCCCCC')
      .attr('class', 'line1')
      .attr('fill', 'rgba(0,0,0,0')
      .attr('stroke-width', 1.5)
      .attr('d', <any>this.line)
      .transition()
      .duration(2000);

    svg
      .select('g')
      .append('path')
      .datum(this.dataNum2)
      .attr('stroke', '#30c296')
      .attr('class', 'line2')
      .attr('fill', 'rgba(0,0,0,0')
      .attr('stroke-width', 1.5)
      .attr('d', <any>this.line)
      .transition()
      .duration(2000);

    setInterval(() => {
      this.updateData();
    }, this.randomIntFromIntervalInt(1000, 5000));
  }

  updateData() {
    const dataNum1Bis: any[] = [];
    this.dataNum1.forEach((element) => {
      element.amount = this.randomIntFromInterval(0, 9999);
      dataNum1Bis.push(element);
    });

    const dataNum2Bis: any[] = [];
    this.dataNum2.forEach((element) => {
      element.amount = this.randomIntFromInterval(0, 9999);
      dataNum2Bis.push(element);
    });

    const svg = d3.select(this.element).select('svg').transition();
    svg.select('.line1').duration(750).attr('d', this.line(dataNum1Bis));
    svg.select('.line2').duration(750).attr('d', this.line(dataNum2Bis));
  }

  randomIntFromInterval(min: number, max: number) {
    // min and max included
    return (Math.random() * (max - min + 1) + min).toFixed(2);
  }
  randomIntFromIntervalInt(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
