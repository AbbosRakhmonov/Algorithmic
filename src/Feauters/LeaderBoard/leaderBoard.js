import React, { useEffect, useState } from "react";
import SearchBox from "../../Components/SearchBox/searchBox";
import Table from "../../Components/Table/Table";
import Pagination from "../../Components/Pagination/Pagination";
import "./for_leaderboard.scss";
import { motion } from "framer-motion";
import { getLeaders } from "./leaderboardSlice";
import { useDispatch, useSelector } from "react-redux";

function LeaderBoard() {
  const dispatch = useDispatch();
  const { leaders, numberOfUsers, currentUser, isLoading } = useSelector(
    (state) => state.leaderboard
  );
  const [searchVal, setSearchVal] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const onSearchChange = (e) => {
    const str = e.target.value;
    setSearchVal(str);
  };
  const onPageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };
  const propForTable = {
    page: "leaderboard",
    data: leaders,
    user: {
      id: 120,
      fullName: "Abbos Rakhmonov",
      userName: "abbos",
      rank: "1200",
    },
    headers: {
      titles: ["Nth", "", "Full Name", "Score"],
      fields: ["id", "img", "fullName", "rank"],
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
  useEffect(() => {
    dispatch(getLeaders(currentPage));
  }, [dispatch, currentPage]);
  return (
    <motion.section
      initial={"initial"}
      animate={"in"}
      exit={"out"}
      transition={{ duration: 0.5, type: "tween", ease: "anticipate" }}
      variants={pageTransition}
      className={"h-100 leader-board"}
    >
      <div className="d-flex h-100 flex-column flex-nowrap">
        <div className="search-bar">
          <SearchBox value={searchVal} onChange={onSearchChange} />
        </div>
        <Table propForTable={propForTable} isLoading={isLoading} />
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(numberOfUsers / 10)}
          onPageChange={onPageChange}
        />
      </div>
    </motion.section>
  );
}

export default LeaderBoard;
