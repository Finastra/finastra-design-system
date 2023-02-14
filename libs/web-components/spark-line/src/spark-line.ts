import * as d3 from 'd3';
import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FdsSparkLineData } from './model';

import { styles } from './styles.css';
/**
 * @attr [data=[]] - Data of the line.
 * @attr [height=0] - Height of chart.
 * @attr [width=0] - Width of chart.
 */
@customElement('fds-spark-line')
export class SparkLine extends LitElement {
  static styles = styles;

  @property({ type: Array<FdsSparkLineData> }) data = [];
  @property({ type: Number }) height = 0;
  @property({ type: Number }) width = 0;

  render() {
    if (this.width === 0) {
      this.width = this.getBoundingClientRect().width;
    }
    if (this.height === 0) {
      this.height = this.getBoundingClientRect().height;
    }
    return html`<svg></svg>`;
  }

  firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    this.updateChart(this.renderRoot);
  }
  updateChart(element) {
    const maxX = Math.max(...this.data.map((o) => o['x']));
    const svg = d3.select(element).select('svg').attr('width', this.width).attr('height', this.height);
    const x = d3.scaleLinear().domain([0, maxX]).range([0, this.width]);
    const y = d3
      .scaleLinear()
      .domain([0, 9999])
      .range([this.height - 5, 0]);

    const line = d3
      .line<FdsSparkLineData>()
      .x((d: FdsSparkLineData) => {
        return x(d.x);
      })
      .y((d: FdsSparkLineData) => y(d.y));

    const dataNum1 = this.data.filter((d) => d['x'] !== undefined);

    svg
      .append('g')
      .attr('transform', 'translate(0,5)')
      .append('path')
      .datum(dataNum1)
      .attr('stroke', '#CCCCCC')
      .attr('class', 'line1')
      .attr('fill', 'rgba(0,0,0,0')
      .attr('stroke-width', 1.5)
      .attr('d', line)
      .transition()
      .duration(2000);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-spark-line': SparkLine;
  }
}
