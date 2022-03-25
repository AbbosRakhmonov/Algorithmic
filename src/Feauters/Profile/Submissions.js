import React from "react";
import { motion } from "framer-motion";
import Table from "../../Components/Table/Table";
import { Outlet } from "react-router-dom";

function Submissions(props) {
  const propForTable = {
    page: "attempts",
    data: [
      {
        id: 1,
        problem: "Problem 1",
        status: "accepted",
        runTime: "1 ms",
        memory: "1 KB",
        language: "C++",
        date: "01.01.2020",
      },
    ],
    headers: {
      titles: [
        "#",
        "Problem",
        "Status",
        "Runtime",
        "Memory",
        "Language",
        "Date",
      ],
      fields: [
        "id",
        "problem",
        "status",
        "runTime",
        "memory",
        "language",
        "date",
      ],
    },
  };
  const pageTransition = {
    initial: {
      opacity: 0,
      x: -100,
    },
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 100,
    },
  };
  return (
    <motion.div
      initial={"initial"}
      animate={"in"}
      exit={"out"}
      transition={{ duration: 0.5, type: "tween", ease: "anticipate" }}
      variants={pageTransition}
      className={"user-submissions h-100"}
    >
      <Table propForTable={propForTable} />
      <Outlet />
    </motion.div>
  );
}

export default Submissions;
