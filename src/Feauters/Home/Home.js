import React, { useEffect } from "react";
import { IoPeople, IoCodeSlash, IoTrophy } from "react-icons/io5";
import NewsItem from "../../Components/NewsCard/card";
import RewardCard from "../../Components/RewardCard/card";
import Calendar from "../../Components/Calendar/calendar";
import { useDispatch, useSelector } from "react-redux";
import { getHomeData } from "./homeSlice";
import { motion } from "framer-motion";
import {
  HomeCardSkeleton,
  HomeNewsCardSkeleton,
  HomeTopUsersSkeleton,
  HomeCalendarSkeleton,
} from "../../Components/Skeletons/Skeletons";
import "./for_home.scss";
import { Link } from "react-router-dom";

function Home() {
  const { data, error } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(getHomeData());
    }, 1000);
  }, [dispatch]);
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
  return error ? (
    <h1>{error.message}</h1>
  ) : (
    <motion.section
      initial={"inital"}
      animate={"in"}
      exit={"out"}
      transition={{ duration: 0.5, type: "tween", ease: "anticipate" }}
      variants={pageTransition}
      className="home-container h-100"
    >
      <div className="row h-100">
        <div className="col-md-8 h-100">
          <div className="d-flex flex-nowrap flex-column h-100">
            <div className={"row cards-container"}>
              {data ? (
                <>
                  <div data-aos="zoom-in" id={"card-1"} className="col-md-4">
                    <Link to={"leaderboard"}>
                      <div className="statics-card">
                        <div className="card-icon">
                          <IoPeople />
                        </div>
                        <div className="card-text">
                          <h5 className={"statics-header"}>All Users</h5>
                          <p className={"statics-title"}>
                            {data ? data.usersCount : "0"}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    className="col-md-4"
                  >
                    <Link to={"problems"}>
                      <div className="statics-card">
                        <div className="card-icon">
                          <IoCodeSlash />
                        </div>
                        <div className="card-text">
                          <h5 className={"statics-header"}>All Problems</h5>
                          <p className={"statics-title"}>
                            {data ? data.problemsCount : "0"}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="400"
                    className="col-md-4"
                  >
                    <Link to={"contests"}>
                      <div className="statics-card">
                        <div className="card-icon">
                          <IoTrophy />
                        </div>
                        <div className="card-text">
                          <h5 className={"statics-header"}>All Contests</h5>
                          <p className={"statics-title"}>0</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              ) : (
                <HomeCardSkeleton />
              )}
            </div>
            <div className="news-container">
              <ul className={"news-list h-100"}>
                {data ? (
                  <>
                    <NewsItem />
                  </>
                ) : (
                  <HomeNewsCardSkeleton />
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 h-100">
          <div className="position-relative h-100">
            <div className="right-bar h-100 pe-2">
              <h3 className={"reward-title text-capitalize text-center"}>
                Top 3 Users
              </h3>
              <div className="row flex-column flex-nowrap">
                <div className="rewards-container">
                  {data ? (
                    data.topUsers.map((user, idx) => (
                      <RewardCard
                        key={user.id}
                        user={user}
                        index={idx + 1}
                        dataAosDelay={idx * 200}
                      />
                    ))
                  ) : (
                    <HomeTopUsersSkeleton />
                  )}
                </div>
              </div>
              <div className="calendar-container">
                {data ? <Calendar /> : <HomeCalendarSkeleton />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Home;
