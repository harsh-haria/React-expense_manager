import React from "react";

import ChartBar from "./ChartBar";

import "./chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            value={dataPoint.value}
            maxValue={null}
            label={dataPoint.label}
            key={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
