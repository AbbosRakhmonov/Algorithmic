import React, { useEffect, useState } from "react";
import Table from "../../Components/Table/Table";
import Pagination from "../../Components/Pagination/Pagination";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getAttempts } from "./attemptsSlice";

function Attempts() {
  const dispatch = useDispatch();
  const { attempts, loading } = useSelector((state) => state.attempts);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const propForTable = {
    page: "attempts",
    data: data,
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
        "solver",
        "problem",
        "status",
        "time",
        "memory",
        "lang",
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
  useEffect(() => {
    dispatch(getAttempts());
  }, [dispatch]);
  useEffect(() => {
    setData(attempts);
  }, [attempts]);
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
        <Table propForTable={propForTable} isLoading={loading} />
        <Pagination />
      </div>
    </motion.section>
  );
}

export default Attempts;
