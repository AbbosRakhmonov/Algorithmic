import React from "react";
import ProblemsRow from "./problems_row";
import LeaderBoardRow from "./leaderBoard_row";
import ExamplesRow from "./examples_row";
import AttemptsRow from "./attempts_row";

function Tbody({ data, fields, page }) {
  const renderRow = (pageName) => {
    switch (page) {
      case "problems":
        return (
          <ProblemsRow data={data} fields={fields} dataAos={"fade-right"} />
        );
      case "leaderboard":
        return (
          <LeaderBoardRow data={data} fields={fields} dataAos={"fade-right"} />
        );
      case "examples":
        return <ExamplesRow data={data} fields={fields} dataAos={"fade-up"} />;
      case "attempts":
      case "education":
        return (
          <AttemptsRow data={data} fields={fields} dataAos={"fade-right"} />
        );
      default:
        return null;
    }
  };
  return <tbody className={"table-body"}>{renderRow(page)}</tbody>;
}

export default Tbody;
