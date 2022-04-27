import React from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import "./for_small_problems.scss";

function SmallProblems({ data, solved }) {
  const checkSolved = (id) => {
    const found = solved.find((item) => item.id === id);
    if (found) {
      return found.status === "OK";
    }
    return false;
  };
  return (
    <div className={"problems-container"}>
      <h3 className={"title"}>Problems</h3>
      <ul className="buttons">
        {data.length > 0 ? (
          data.map((item, index) => (
            <li key={index}>
              <Link
                to={"/dashboard/problems/p/" + item.id}
                data-tip
                data-for={`problem-${item.id}`}
                className={`btn problems-btn ${
                  checkSolved(item.id) ? "bg-solved" : ""
                }`}
              >
                {item.id}
              </Link>
              <ReactTooltip
                id={`problem-${item.id}`}
                place="top"
                effect="solid"
              >
                {item.title}
              </ReactTooltip>
            </li>
          ))
        ) : (
          <p className={"mx-auto"}>No Data</p>
        )}
      </ul>
    </div>
  );
}

export default SmallProblems;
