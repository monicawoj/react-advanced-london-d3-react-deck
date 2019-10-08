import React from "react";
import * as d3 from "d3";

class BarChartD3Control extends React.Component {
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

    //create a selector and attach data to it
    let bars = d3
      .select(this.svgEl)
      .selectAll("rect")
      .data(data);

    //populate those selected spaces with svg elements (rect in this case)
    bars
      .enter()
      .append("rect")
      .merge(bars)
      .transition()
      .duration(1000)
      .attr("x", d => xScale(d.x))
      .attr("y", d => yScale(d.y)) //we need to start the y at 'height' because 0 of our coord system is at the top
      .attr("width", xScale.bandwidth())
      .attr("height", d => height - yScale(d.y))
      .style("fill", (d, i) => colors[i]);

    //remove bars that are not related to existing data pointsś
    bars.exit().remove();
  };

  render() {
    const { width, height } = this.props;
    return <svg width={width} height={height} ref={el => (this.svgEl = el)} />;
  }
}

export default BarChartD3Control;
