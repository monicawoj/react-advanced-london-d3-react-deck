import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

export const AnimatedCircle = () => {
  const containerRef = useRef(null);
  const [animating, setAnimating] = useState("idle");

  useEffect(() => updateCircle(), [animating]);

  window.addEventListener("keydown", () => setAnimating(false));

  const updateCircle = () => {
    switch (animating) {
      case "forward": {
        d3.select(containerRef.current)
          .select("circle")
          .transition()
          .duration(2000)
          .attr("cx", 450)
          .style("fill", "orange")
          .attr("r", 30);
        break;
      }
      case "backward": {
        d3.select(containerRef.current)
          .select("circle")
          .transition()
          .duration(2000)
          .attr("cx", 10)
          .style("fill", "blue")
          .attr("r", 10);
        break;
      }
      default: {
        d3.select(containerRef.current)
          .select("circle")
          .attr("r", 10)
          .attr("cx", 10)
          .attr("cy", 40)
          .style("fill", "blue");
        break;
      }
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <svg ref={containerRef} width={500} height={100}>
        <circle />
      </svg>
      <button
        style={{ height: "50px" }}
        onClick={() => {
          if (animating === "forward") {
            return setAnimating("backward");
          }
          setAnimating("forward");
        }}
      >
        Run animation
      </button>
    </div>
  );
};

export const Circles = () => (
  <svg width={500} height={100}>
    <circle r={10} cx={10} cy={40} fill={"blue"} />
    <circle r={30} cx={450} cy={40} fill={"orange"} />
  </svg>
);
