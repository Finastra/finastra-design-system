import { Component, OnInit, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

export interface DataModel {
  year: number;
  amount: number;
}

@Component({
  selector: 'ffdc-repeater-card-chart-example',
  templateUrl: './repeater-card-chart-example.component.html',
  styleUrls: ['./repeater-card-chart-example.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class RepeaterCardChartExampleComponent implements OnInit {

  @ViewChild('chart', { static: true })
  private chartContainer: ElementRef;

  @Input() data: any;
  @Input() columnsMatcher: Object = {};

  margin = {top: 20, right: 0, bottom: 0, left: 0};

  constructor() { }

  ngOnInit() {
  
    let year =0;
    let historic: Array<DataModel> = [];
    this.data.historic.forEach(element => {
      historic.push({'year':year, amount: element});
      year++;
    });

    const element = this.chartContainer.nativeElement;

   
    let svg = d3.select(element).select('svg')
        .attr('width', 150)
        .attr('height', 150);

      var x = d3.scaleLinear().domain([0,9]).range([0, 150]);
      var y = d3.scaleLinear().domain([0,9999]).range([130, 0]);


      var area = d3.area()
      .x(d =>{
        return x(d['year'])
      })
      .y0(y(0))
      .y1(d => y(d['amount']))


      
      var gradient = svg.append("linearGradient")
      .attr("id", "svgGradient")
      .attr("y1", "0%")
      .attr("y2", "100%");
   gradient.append("stop")
      .attr('class', 'start')
      .attr("offset", "0%")
      .attr("stop-color", "white")
      .attr("stop-opacity", 0.5);
   gradient.append("stop")
      .attr('class', 'end')
      .attr("offset", "100%")
      .attr("stop-color", "rgb(15,85,159)")
      .attr("stop-opacity", 1);

    const g = svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')')
      .append("path")
      .data([historic])     
      .attr("class", "area")
      .attr("stroke", "#FFFFFF")      
      .attr("fill", "url(#svgGradient)")
      .attr("stroke-width", 1.5)
      .attr("d", <any>area);


 
}
  

}
