import React from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import "./for_small_problems.scss";

function SmallProblems({ data }) {
  return (
    <div className={"problems-container"}>
      <h3 className={"title"}>Problems</h3>
      <ul className="buttons">
        {data.map((item, index) => (
          <li key={index}>
            <Link
              to={""}
              data-tip
              data-for={`problem-${item.id}`}
              className={"btn problems-btn"}
            >
              {item.id}
            </Link>
            <ReactTooltip id={`problem-${item.id}`} place="top" effect="solid">
              {item.title}
            </ReactTooltip>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SmallProblems;
