import React from "react";
import { motion } from "framer-motion";
import Profile from "../../Components/PrivateProfile/privateProfile";
import PieChart from "../../Components/Charts/pieChart";
import { Outlet, useLocation } from "react-router-dom";
import "./for_overview.scss";
import {
  FaFacebookF,
  FaGithub,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";
import SmallProblems from "../../Components/smallProblems/smallProblems";
// import Heatmap from "../../Components/Heatmap/heatmap";
import { useDispatch, useSelector } from "react-redux";

function Overview() {
  const { profile, loading } = useSelector((state) => state.profile);
  const { solvedProbloems } = profile;
  const { problems } = useSelector((state) => state.problems);
  const data = [
    {
      title: "Total",
      value: 25,
      count: 10,
      all: 150,
      color: "#623CE7",
    },
    {
      title: "Easy",
      value: 10,
      count: 5,
      all: 50,
      color: "#82D616",
    },
    {
      title: "Medium",
      value: 15,
      count: 5,
      all: 50,
      color: "#FFD01D",
    },
    {
      title: "Hard",
      value: 5,
      count: 5,
      all: 50,
      color: "#BF392C",
    },
  ];
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
  return !loading ? (
    <motion.div
      initial={"inital"}
      animate={"in"}
      exit={"out"}
      transition={{ duration: 0.5, type: "tween", ease: "anticipate" }}
      variants={pageTransition}
      className={"user-overview h-100"}
    >
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex">
          <Profile user={profile} />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 d-flex">
          <div className="problems-statistics w-100 d-flex flex-column">
            <h3 className={"statics-title"}>Problems Solved</h3>
            <div className="row">
              {data.map((item, index) => (
                <PieChart
                  key={index}
                  value={item.value}
                  color={item.color}
                  title={item.title}
                  count={item.count}
                  all={item.all}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <SmallProblems data={problems} solved={solvedProbloems || []} />
        </div>
        {/*<div className="col-md-12">*/}
        {/*  <Heatmap />*/}
        {/*</div>*/}
      </div>
      <Outlet />
    </motion.div>
  ) : (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="spinner-border text-default" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Overview;
