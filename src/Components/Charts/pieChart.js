import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./for_piechart.scss";
function PieChart({ value, color, title, count, all }) {
  return (
    <div className={"chart col-md-3 col-sm-6 col-xs-12"}>
      <div style={{ width: "100px", height: "100px", margin: "0 auto" }}>
        <CircularProgressbarWithChildren
          value={value || 0}
          strokeWidth={5}
          maxValue={all}
          styles={buildStyles({
            pathTransitionDuration: 0.5,
            pathColor: color || "#623CE7",
            trailColor: "#E6E9FA",
          })}
        >
          <h3 className={"percentage"}>{value}%</h3>
        </CircularProgressbarWithChildren>
      </div>
      <h3 className={"chart-title"} style={{ color: color }}>
        {title}
      </h3>
      <p className={"chart-text"}>
        <span className={"active-text"}>{count} / </span>
        <span className={"total-text"}>{all}</span>
      </p>
    </div>
  );
}

export default PieChart;
