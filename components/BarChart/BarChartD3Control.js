import React from "react";
import * as d3 from "d3";

class BarChartD3Control extends React.Component {
  // run the draw function on mount and when props change
  componentDidMount() {
    this.draw();
  }

  componentDidUpdate() {
    this.draw();
  }

  draw = () => {
    // 1. define scales based on data
    const { width, height, data } = this.props;
    const xScale = d3
      .scaleBand()
      .domain(d3.range(0, data.length))
      .range([0, width]);
    const yScale = d3
      .scaleLinear()
      .domain([-3, 3])
      .range([0, height]);

    // 2. create selector and attach data to it
    let bars = d3
      .select(this.svgRef)
      .selectAll("rect")
      .data(data);

    // 3. populate selected spaces with svg elements (rect in this case)
    bars
      .enter()
      .append("rect")
      .merge(bars)
      .transition()
      .duration(1000)
      .attr("x", d => xScale(d.x))
      .attr("y", d => yScale(d.y))
      .attr("width", xScale.bandwidth())
      .attr("height", d => height - yScale(d.y))
      .style("fill", d => d.color);

    // 4. remove bars that are not related to existing data points
    bars.exit().remove();
  };

  render() {
    const { width, height } = this.props;
    return (
      <svg
        width={width}
        height={height}
        ref={el => (this.svgRef = el)}
      />
    );
  }
}

export default BarChartD3Control;
