import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const BarChartShareControl = ({
  width,
  height,
  data
}) => {
  let svgRef = useRef(null);

  useEffect(() => draw(), [data]);

  const draw = () => {
    //define scales
    const xScale = d3
      .scaleBand()
      .domain(d3.range(0, data.length))
      .range([0, width]);
    const yScale = d3
      .scaleLinear()
      .domain([-3, 3])
      .range([0, height]);

    //grab elements and style/position
    d3.select(svgRef.current)
      .selectAll("rect")
      .data(data)
      .transition()
      .duration(1000)
      .attr("x", d => xScale(d.x))
      .attr("y", d => yScale(d.y))
      .attr("width", xScale.bandwidth())
      .attr("height", d => height - yScale(d.y))
      .style("fill", d => d.color);
  };

  //create elements (but without anything special)
  const bars = data.map(d => <rect key={d.x} />);

  return (
    <svg
      width={width}
      height={height}
      ref={svgRef}
    >
      {bars}
    </svg>
  );
};

export default BarChartShareControl;
