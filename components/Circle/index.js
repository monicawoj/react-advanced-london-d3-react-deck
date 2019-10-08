import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

import Button from "@material/react-button";
import "@material/react-button/dist/button.min.css";

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
          .attr("cx", 750)
          .style("fill", "orange")
          .attr("r", 50);
        break;
      }
      case "backward": {
        d3.select(containerRef.current)
          .select("circle")
          .transition()
          .duration(2000)
          .attr("cx", 30)
          .style("fill", "blue")
          .attr("r", 30);
        break;
      }
      default: {
        d3.select(containerRef.current)
          .select("circle")
          .attr("r", 30)
          .attr("cx", 30)
          .attr("cy", 60)
          .style("fill", "blue");
        break;
      }
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <svg ref={containerRef} width={800} height={130}>
        <circle />
      </svg>
      <Button
        style={{ height: "50px", fontSize: "32px" }}
        onClick={() => {
          if (animating === "forward") {
            return setAnimating("backward");
          }
          setAnimating("forward");
        }}
      >
        Run animation
      </Button>
    </div>
  );
};

export const Circles = () => (
  <svg width={800} height={130}>
    <circle r={30} cx={30} cy={60} fill={"blue"} />
    <circle r={50} cx={750} cy={60} fill={"orange"} />
  </svg>
);
