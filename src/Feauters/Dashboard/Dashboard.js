import React, { lazy, Suspense, useEffect, useState } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { IoNotifications, IoPersonCircle, IoSettings } from "react-icons/io5";
import { Offcanvas } from "reactstrap";
import Loader from "../../Components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn, getUserImage } from "../Login/loginSlice";
import { AnimatePresence, motion } from "framer-motion";
import jwt_decode from "jwt-decode";
import "./for_dashboard.scss";
import AddTasks from "../AddTasks/AddTasks";

const Home = lazy(() => import("../Home/Home"));
const Problems = lazy(() => import("../Problems/Problems"));
const Contests = lazy(() => import("../Contests/Contests"));
const Leaderboard = lazy(() => import("../LeaderBoard/leaderBoard"));
const Problem = lazy(() => import("../Problem/Problem"));
const Attempts = lazy(() => import("../Attempts/Attempts"));
const Education = lazy(() => import("../Education/Education"));
const EducationTasks = lazy(() => import("../Education/Education_Tasks"));
const About = lazy(() => import("../About/About"));
const Profile = lazy(() => import("../Profile/Profile"));
const News = lazy(() => import("../../Components/News/News"));

export default function Dashboard() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const activePath = pathname.split("/")[2]
    ? pathname.split("/")[2]
    : "Welcome to Algorithmic.Uz";
  const [activeProblem, setActiveProblem] = useState(false);
  const [offCanvasVisible, setOffCanvasVisible] = useState(false);
  const { isLoggedIn, user } = useSelector((state) => state.login);
  const toogleOffCanvas = () => {
    setOffCanvasVisible(!offCanvasVisible);
  };
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decoded = jwt_decode(token);
      if (decoded) {
        if (decoded.exp < Date.now() / 1000) {
          localStorage.removeItem("accessToken");
        } else {
          dispatch(
            setIsLoggedIn({
              isLoggedIn: true,
              user: decoded,
            })
          );
          dispatch(getUserImage(decoded.nameid));
        }
      } else {
        localStorage.removeItem("accessToken");
      }
    }
  }, [dispatch]);
  useEffect(() => {
    const problemPage = pathname.split("/")[3] === "p";
    if (problemPage) {
      setActiveProblem(true);
    } else {
      setActiveProblem(false);
    }
    setOffCanvasVisible(false);
  }, [pathname]);

  const pageTransition = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };
  return (
    <motion.div
      initial={"out"}
      animate={"in"}
      exit={"out"}
      transition={{ duration: 0.5 }}
      variants={pageTransition}
      className={`${activeProblem ? "container-fluid" : "container-xxl"}`}
    >
      <div className="row">
        <div className={`${activeProblem ? "d-none" : "col-3"} h-100vh p-0`}>
          <Offcanvas
            isOpen={offCanvasVisible}
            toggle={toogleOffCanvas}
            style={{ width: "320px" }}
          >
            <Navbar user={isLoggedIn && user && user} />
          </Offcanvas>
          <Navbar user={isLoggedIn && user && user} />
        </div>
        <div className={`${activeProblem ? "col-12" : "col-9 ps-0"} h-100vh`}>
          <div className="d-flex flex-column flex-nowrap h-100">
            <div className="conf-nav d-flex align-items-center justify-content-between">
              <h3 className={"breadcrumb text-capitalize"}>{activePath}</h3>
              <div className="conf-profile d-flex align-items-end">
                {activePath === "profile" && (
                  <Link to={`${pathname}/edit`} className={"breadcrumb-btn"}>
                    <IoSettings className="breadcrumb-icon profile-icon" />
                  </Link>
                )}
                {!isLoggedIn && (
                  <Link to="/signin" className={"breadcrumb-btn"}>
                    <IoPersonCircle className="breadcrumb-icon profile-icon" />
                    <span className={"link-name"}>Sign In</span>
                  </Link>
                )}
                <div className="notifications">
                  <div className={"notif-counter"}>
                    <span>99</span>
                  </div>
                  <IoNotifications className="notif-icon" />
                </div>
              </div>
            </div>
            <Suspense fallback={<Loader />}>
              <AnimatePresence exitBeforeEnter={true}>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/profile/:id/*" element={<Profile />} />
                  <Route exact path="/problems" element={<Problems />} />
                  <Route
                    exact
                    path="/problems/p/:id/*"
                    element={<Problem toogleOffCanvas={toogleOffCanvas} />}
                  />
                  <Route exact path="/contests" element={<Contests />} />
                  <Route exact path="/leaderboard" element={<Leaderboard />} />
                  <Route exact path="/attempts" element={<Attempts />} />
                  <Route exact path="/education" element={<Education />} />
                  <Route exact path={"/news/*"} element={<News />} />
                  <Route
                    exact
                    path="/education/:title/:problem_index"
                    element={<EducationTasks />}
                  />
                  <Route exact path={"/usage"} element={<AddTasks />} />
                  <Route exact path="/about" element={<About />} />
                  <Route path="*" element={<Navigate to={"/404"} />} />
                </Routes>
              </AnimatePresence>
            </Suspense>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
