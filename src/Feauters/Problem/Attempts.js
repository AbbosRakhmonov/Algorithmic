import React from "react";
import Table from "../../Components/Table/Table";

function Attempts() {
  const propForTable = {
    page: "attempts",
    data: [
      {
        id: 1,
        date: "01.01.2020",
        status: "accepted",
        runTime: "1 ms",
        memory: "1 KB",
        language: "C++",
      },
    ],
    headers: {
      titles: ["#", "Date", "Status", "Runtime", "Memory", "Language"],
      fields: ["id", "date", "status", "runTime", "memory", "language"],
    },
  };
  return <Table propForTable={propForTable} />;
}

export default Attempts;
