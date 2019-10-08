import React from "react";
import * as d3 from "d3";
class BarChartReactControl extends React.Component {
  render() {
    // setup (dimensions, data, scales)
    const { width, height, data } = this.props;
    const colors = ["#2176ae", "#57b8ff", "#b66d0d", "#fbb13c", "#fe6847"];

    const xScale = d3
      .scaleBand()
      .domain(d3.range(0, data.length))
      .range([0, width]);
    const yScale = d3
      .scaleLinear()
      .domain([-3, 3])
      .range([0, height]);

    // elements with attributes
    const bars = data.map((d, i) => (
      <rect
        key={d.x}
        x={xScale(d.x)}
        y={yScale(d.y)}
        width={xScale.bandwidth()}
        height={height - yScale(d.y)}
        fill={colors[i]}
      />
    ));

    return (
      <svg width={width} height={height}>
        {bars}
      </svg>
    );
  }
}

export default BarChartReactControl;
