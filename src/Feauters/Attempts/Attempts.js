import React, { useEffect, useState } from "react";
import Table from "../../Components/Table/Table";
import Pagination from "../../Components/Pagination/Pagination";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

function Attempts() {
  const dispatch = useDispatch();
  const { attempts } = useSelector((state) => state.attempts);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const propForTable = {
    page: "attempts",
    data: [
      {
        id: 1,
        fullName: "Abbos Rakhmonov",
        problem: "A+B",
        status: "Accepted",
        runTime: "12 ms",
        memory: "1 KB",
        language: "C++",
        date: "09.05.2020 15:00",
      },
      {
        id: 2,
        fullName: "Abbos Rakhmonov",
        problem: "A+B",
        status: "Wrong Answer",
        runTime: "12 ms",
        memory: "1 KB",
        language: "C++",
        date: "09.05.2020 15:01",
      },
    ],
    headers: {
      titles: [
        "#",
        "Full Name",
        "Problem",
        "Status",
        "Runtime",
        "Memory",
        "Language",
        "Date",
      ],
      fields: [
        "id",
        "fullName",
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
    intial: {
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
    <motion.section
      initial={"inital"}
      animate={"in"}
      exit={"out"}
      transition={{ duration: 0.5, type: "tween", ease: "anticipate" }}
      variants={pageTransition}
      id={"attempts"}
      className={"h-100"}
    >
      <div className="d-flex flex-nowrap flex-column h-100">
        <Table propForTable={propForTable} />
        <Pagination />
      </div>
    </motion.section>
  );
}

export default Attempts;
