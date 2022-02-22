import React, { useEffect, useState } from "react";
import Table from "../../Components/Table/Table";
import SearchBox from "../../Components/SearchBox/searchBox";
import "./for_problems.scss";
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import { IoChevronDown } from "react-icons/io5";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getProblems } from "./problemsSlice";

function Problems(props) {
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState("");
  const [tagsSearchVal, setTagsSearchVal] = useState("");
  const [statusBadgeVisible, setStatusBadgeVisible] = useState(false);
  const [difficultyBadgeVisible, setDifficultyBadgeVisible] = useState(false);
  const [tagsBadgeVisible, setTagsBadgeVisible] = useState(false);
  const [statusDefault, setStatusDefault] = useState(true);
  const [statusTodo, setStatusTodo] = useState(false);
  const [statusSolved, setStatusSolved] = useState(false);
  const [statusAttempted, setStatusAttempted] = useState(false);
  const [difficultyDefault, setDifficultyDefault] = useState(true);
  const [difficultyEasy, setDifficultyEasy] = useState(false);
  const [difficultyMedium, setDifficultyMedium] = useState(false);
  const [difficultyHard, setDifficultyHard] = useState(false);
  const [filteredProblems, setFilteredProblems] = useState([]);
  const { problems } = useSelector((state) => state.problems);

  const onSearch = (e) => {
    const val = e.target.value;
    setSearchVal(val);
    const filteredData = problems.filter((problem) => {
      return problem.title.toLowerCase().includes(val.toLowerCase());
    });
    setFilteredProblems(filteredProblems.length > 0 ? filteredData : problems);
  };
  const onTagsSearch = (e) => {
    const val = e.target.value;
    setTagsSearchVal(val);
  };
  const handleClickStatusBadge = (e) => {
    setStatusBadgeVisible(!statusBadgeVisible);
    setDifficultyBadgeVisible(false);
    setTagsBadgeVisible(false);
  };
  const handleClickDifficultyBadge = () => {
    setDifficultyBadgeVisible(!difficultyBadgeVisible);
    setStatusBadgeVisible(false);
    setTagsBadgeVisible(false);
  };
  const handleClickTagsBadge = () => {
    setTagsBadgeVisible(!tagsBadgeVisible);
    setStatusBadgeVisible(false);
    setDifficultyBadgeVisible(false);
  };
  const handleClickStatusDefault = () => {
    setStatusDefault(true);
    setStatusTodo(false);
    setStatusSolved(false);
    setStatusAttempted(false);
    setSearchVal("");
  };
  const handleClickTodo = () => {
    setStatusDefault(false);
    setStatusTodo(true);
    setStatusSolved(false);
    setStatusAttempted(false);
    setSearchVal("");
  };
  const handleClickSolved = () => {
    setStatusDefault(false);
    setStatusTodo(false);
    setStatusSolved(true);
    setStatusAttempted(false);
    setSearchVal("");
  };
  const handleClickAttempted = () => {
    setStatusDefault(false);
    setStatusTodo(false);
    setStatusSolved(false);
    setStatusAttempted(true);
    setSearchVal("");
  };
  const handleClickDifficultyDefault = () => {
    setDifficultyDefault(true);
    setDifficultyEasy(false);
    setDifficultyMedium(false);
    setDifficultyHard(false);
    setSearchVal("");
  };
  const handleClickEasy = () => {
    setDifficultyDefault(false);
    setDifficultyEasy(true);
    setDifficultyMedium(false);
    setDifficultyHard(false);
    setSearchVal("");
  };
  const handleClickMedium = () => {
    setDifficultyDefault(false);
    setDifficultyEasy(false);
    setDifficultyMedium(true);
    setDifficultyHard(false);
    setSearchVal("");
  };
  const handleClickHard = () => {
    setDifficultyDefault(false);
    setDifficultyEasy(false);
    setDifficultyMedium(false);
    setDifficultyHard(true);
    setSearchVal("");
  };
  useEffect(() => {
    dispatch(getProblems());
  }, [dispatch]);
  useEffect(() => {
    setFilteredProblems(problems);
  }, [problems]);
  const propForTable = {
    page: "problems",
    data: filteredProblems,
    headers: {
      titles: ["Status", "Id", "Title", "Difficulty", "Accepted", "Author"],
      fields: ["stat", "id", "title", "difficulty", "rank", "author"],
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
      className={"h-100"}
    >
      <div className={"d-flex h-100 flex-column flex-nowrap"}>
        <div className={"row problems-header"}>
          <div className="col-12 col-md-6">
            <SearchBox value={searchVal} onChange={onSearch} />
          </div>
          <div className="col-12 col-md-6">
            <div className="filter-badge">
              <div className="filter-btns">
                <Dropdown
                  isOpen={statusBadgeVisible}
                  toggle={handleClickStatusBadge}
                >
                  <DropdownToggle
                    className={`filter-btn ${
                      statusBadgeVisible ? "clicked-filter-btn" : ""
                    }`}
                  >
                    Status
                    <span className={"filter-btn-icon"}>
                      <IoChevronDown />
                    </span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem
                      onClick={handleClickStatusDefault}
                      className={`default ${
                        statusDefault ? "active-item" : null
                      }`}
                    >
                      All
                    </DropdownItem>
                    <DropdownItem
                      onClick={handleClickTodo}
                      className={`status-easy ${
                        statusTodo ? "active-item" : null
                      }`}
                    >
                      Todo
                    </DropdownItem>
                    <DropdownItem
                      onClick={handleClickSolved}
                      className={`status-medium ${
                        statusSolved ? "active-item" : null
                      }`}
                    >
                      Solved
                    </DropdownItem>
                    <DropdownItem
                      onClick={handleClickAttempted}
                      className={`status-hard ${
                        statusAttempted ? "active-item" : null
                      }`}
                    >
                      Attempted
                    </DropdownItem>{" "}
                  </DropdownMenu>
                </Dropdown>
                <Dropdown
                  isOpen={difficultyBadgeVisible}
                  toggle={handleClickDifficultyBadge}
                >
                  <DropdownToggle
                    className={`filter-btn ${
                      difficultyBadgeVisible ? "clicked-filter-btn" : ""
                    }`}
                  >
                    Difficulty
                    <span className={"filter-btn-icon"}>
                      <IoChevronDown />
                    </span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem
                      onClick={handleClickDifficultyDefault}
                      className={`default ${
                        difficultyDefault ? "active-item" : null
                      }`}
                    >
                      All
                    </DropdownItem>
                    <DropdownItem
                      onClick={handleClickEasy}
                      className={`difficulty-easy ${
                        difficultyEasy ? "active-item" : null
                      }`}
                    >
                      Easy
                    </DropdownItem>
                    <DropdownItem
                      onClick={handleClickMedium}
                      className={`difficulty-medium ${
                        difficultyMedium ? "active-item" : null
                      }`}
                    >
                      Medium
                    </DropdownItem>
                    <DropdownItem
                      onClick={handleClickHard}
                      className={`difficulty-hard ${
                        difficultyHard ? "active-item" : null
                      }`}
                    >
                      Hard
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown
                  isOpen={tagsBadgeVisible}
                  toggle={handleClickTagsBadge}
                  className={"tags-dropdown"}
                >
                  <DropdownToggle
                    className={`filter-btn btn disabled ${
                      tagsBadgeVisible ? "clicked-filter-btn" : ""
                    }`}
                    disabled={true}
                  >
                    Tags
                    <span className={"filter-btn-icon"}>
                      <IoChevronDown />
                    </span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <SearchBox value={tagsSearchVal} onChange={onTagsSearch} />
                    {/*<div*/}
                    {/*  className={"tags-container d-flex align-items-center"}*/}
                    {/*></div>*/}
                  </DropdownMenu>
                </Dropdown>
                <Dropdown isOpen={false} toggle={() => {}}>
                  <DropdownToggle
                    className={"filter-btn btn disabled"}
                    disabled={true}
                  >
                    Author
                    <span className={"filter-btn-icon"}>
                      <IoChevronDown />
                    </span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <SearchBox value={tagsSearchVal} onChange={onTagsSearch} />
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <Table propForTable={propForTable} />
      </div>
    </motion.section>
  );
}

export default Problems;
