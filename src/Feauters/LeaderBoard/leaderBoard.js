import React, { useState } from "react";
import SearchBox from "../../Components/SearchBox/searchBox";
import Table from "../../Components/Table/Table";
import Pagination from "../../Components/Pagination/Pagination";
import "./for_leaderboard.scss";
import { motion } from "framer-motion";

function LeaderBoard() {
  const [searchVal, setSearchVal] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [user, setUser] = useState([]);
  const onSearchChange = (e) => {
    const str = e.target.value;
    setSearchVal(str);
    const filteredData = filteredUsers.filter((user) => {
      return user.name.toLowerCase().includes(str.toLowerCase());
    });
  };
  const propForTable = {
    page: "leaderboard",
    data: [
      {
        id: 1,
        img: "https://via.placeholder.com/35",
        fullName: "Nguyễn Văn A",
        userName: "nguyenvana",
        score: "100",
      },
      {
        id: 2,
        img: "https://via.placeholder.com/35",
        fullName: "Nguyễn Văn B",
        userName: "nguyenvana",
        score: "90",
      },
      {
        id: 3,
        img: "https://via.placeholder.com/35",
        fullName: "Nguyễn Văn C",
        userName: "nguyenvana",
        score: "80",
      },
      {
        id: 4,
        img: "https://via.placeholder.com/35",
        fullName: "Nguyễn Văn D",
        userName: "nguyenvana",
        score: "70",
      },
      {
        id: 5,
        img: "https://via.placeholder.com/35",
        fullName: "Nguyễn Văn E",
        userName: "nguyenvana",
        score: "60",
      },
      {
        id: 6,
        img: "https://via.placeholder.com/35",
        fullName: "Nguyễn Văn F",
        userName: "nguyenvana",
        score: "50",
      },
      {
        id: 7,
        img: "https://via.placeholder.com/35",
        fullName: "Nguyễn Văn G",
        userName: "nguyenvana",
        score: "40",
      },
      {
        id: 8,
        img: "https://via.placeholder.com/35",
        fullName: "Nguyễn Văn H",
        userName: "nguyenvana",
        score: "30",
      },
      {
        id: 9,
        img: "https://via.placeholder.com/35",
        fullName: "Nguyễn Văn I",
        userName: "nguyenvana",
        score: "20",
      },
      {
        id: 10,
        img: "https://via.placeholder.com/35",
        fullName: "Nguyễn Văn J",
        userName: "nguyenvana",
        score: "10",
      },
    ],
    user: {
      id: 120,
      img: "https://via.placeholder.com/35",
      fullName: "Abbos Rakhmonov",
      userName: "abbos",
      score: "1200",
    },
    headers: {
      titles: ["Nth", "", "Full Name", "Score"],
      fields: ["id", "img", "fullName", "score"],
    },
  };
  const pageTransition = {
    inital: {
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
      className={"h-100 leader-board"}
    >
      <div className="d-flex h-100 flex-column flex-nowrap">
        <div className="search-bar">
          <SearchBox value={searchVal} onChange={onSearchChange} />
        </div>
        <Table propForTable={propForTable} />
        <Pagination />
      </div>
    </motion.section>
  );
}

export default LeaderBoard;
