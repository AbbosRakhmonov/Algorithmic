import React from "react";
import { motion } from "framer-motion";
// import Profile from "../../Components/PrivateProfile/privateProfile";
import PieChart from "../../Components/Charts/pieChart";
import Abbos from "../../icons/Team/Abbos.png";
import { Outlet } from "react-router-dom";

import "./for_overview.scss";
import {
  FaFacebookF,
  FaGithub,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";
import SmallProblems from "../../Components/smallProblems/smallProblems";
import Heatmap from "../../Components/Heatmap/heatmap";

function Overview(props) {
  const user = {
    id: 2,
    name: "Abbos Rakhmonov",
    username: "dragon_warrior",
    job: "Frontend Developer",
    img: Abbos,
    networks: [
      {
        id: 2,
        name: "Facebook",
        link: "https://www.facebook.com/abbos.rakhmonov",
        icon: <FaFacebookF />,
      },
      {
        id: 3,
        name: "Instagram",
        link: "https://www.instagram.com/abbos_rakhmonov/",
        icon: <FaInstagram />,
      },
      {
        id: 1,
        name: "Telegram",
        link: "https://t.me/abbos_rakhmonov",
        icon: <FaTelegramPlane />,
      },
      {
        id: 4,
        name: "Github",
        link: "github.com/abbos-rakhmonov",
        icon: <FaGithub />,
      },
    ],
  };
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
  const problems = [
    {
      id: 1,
      title: "Problem 1",
    },
    {
      id: 2,
      title: "Problem 2",
    },
    {
      id: 3,
      title: "Problem 3",
    },
    {
      id: 4,
      title: "Problem 4",
    },
    {
      id: 5,
      title: "Problem 5",
    },
    {
      id: 6,
      title: "Problem 6",
    },
    {
      id: 7,
      title: "Problem 7",
    },
    {
      id: 8,
      title: "Problem 8",
    },
    {
      id: 9,
      title: "Problem 9",
    },
    {
      id: 10,
      title: "Problem 10",
    },
    {
      id: 11,
      title: "Problem 11",
    },
    {
      id: 12,
      title: "Problem 12",
    },
    {
      id: 13,
      title: "Problem 13",
    },
    {
      id: 14,
      title: "Problem 14",
    },
    {
      id: 15,
      title: "Problem 15",
    },
    {
      id: 16,
      title: "Problem 16",
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
  return (
    <motion.div
      initial={"inital"}
      animate={"in"}
      exit={"out"}
      transition={{ duration: 0.5, type: "tween", ease: "anticipate" }}
      variants={pageTransition}
      className={"user-overview h-100"}
    >
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          {/*<Profile user={user} />*/}
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
          <SmallProblems data={problems} />
        </div>
        {/*<div className="col-md-12">*/}
        {/*  <Heatmap />*/}
        {/*</div>*/}
      </div>
      <Outlet />
    </motion.div>
  );
}

export default Overview;
