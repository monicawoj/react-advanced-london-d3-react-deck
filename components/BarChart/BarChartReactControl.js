import React from "react";
import * as d3 from "d3";

// 1. setup (dimensions, data, scales)
const BarChartReactControl = ({ width, height, data }) => {
  const xScale = d3
    .scaleBand()
    .domain(d3.range(0, data.length))
    .range([0, width]);
  const yScale = d3
    .scaleLinear()
    .domain([-3, 3])
    .range([0, height]);

  // 2. map data to elements with attributes
  const bars = data.map(d => (
    <rect
      key={d.x}
      x={xScale(d.x)}
      y={yScale(d.y)}
      width={xScale.bandwidth()}
      height={height - yScale(d.y)}
      fill={d.color}
    />
  ));

  // 3. render elements within svg container
  return (
    <svg width={width} height={height}>
      {bars}
    </svg>
  );
};

export default BarChartReactControl;
