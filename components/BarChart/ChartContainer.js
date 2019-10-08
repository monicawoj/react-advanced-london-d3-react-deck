import React, { useState } from "react";

import { getRandomData } from "./utils";

const ChartContainer = ({ renderChart }) => {
  const [data, setData] = useState(getRandomData());
  return (
    <div
      style={{
        width: "50vw",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {renderChart(data)}
      <button
        style={{
          width: "200px",
          margin: "2em",
          background: "#011627",
          color: "white",
          fontSize: "1em"
        }}
        onClick={() => setData(getRandomData())}
      >
        get new data
      </button>
    </div>
  );
};

export default ChartContainer;
