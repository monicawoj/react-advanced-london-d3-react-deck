import React from "react";
import * as d3 from "d3";

import { getRandomData } from "./utils";

class BarChartShareControl extends React.Component {
  componentDidMount() {
    this.updateChart();
  }

  componentDidUpdate() {
    this.updateChart();
  }

  updateChart = () => {
    const { width, height, data } = this.props;
    let colors = ["#2176ae", "#57b8ff", "#b66d0d", "#fbb13c", "#fe6847"];

    //scales
    const xScale = d3
      .scaleBand()
      .domain(d3.range(0, data.length))
      .range([0, width]);
    const yScale = d3
      .scaleLinear()
      .domain([-3, 3])
      .range([0, height]);

    //grab all elements and add styles / position
    d3.select(this.svgRef)
      .selectAll("rect")
      .data(data)
      .transition()
      .duration(1000)
      .attr("x", d => xScale(d.x))
      .attr("y", d => yScale(d.y))
      .attr("width", xScale.bandwidth())
      .attr("height", d => height - yScale(d.y))
      .style("fill", (d, i) => colors[i]);
  };

  render() {
    const { width, height, data } = this.props;

    //create elements (but without anything special)
    const bars = data.map(d => <rect key={d.x} />);
    return (
      <svg width={width} height={height} ref={el => (this.svgRef = el)}>
        {bars}
      </svg>
    );
  }
}

export default BarChartShareControl;
