import React, { useEffect } from "react";
import { profileLinks } from "../../Components/Navbar/Path";
import {
  NavLink,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Overview from "./Overview";
import Submissions from "./Submissions";
import Problems from "./Problems_Solved";
import { motion } from "framer-motion";
import "./for_profile.scss";
import Main from "../../Components/Modal/Main";
import { useSelector } from "react-redux";

function Profile({ obj }) {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.login);
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
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <motion.section
      initial={"inital"}
      animate={"in"}
      exit={"out"}
      transition={{ duration: 0.5, type: "tween", ease: "anticipate" }}
      variants={pageTransition}
      id={"profile"}
    >
      <ul className="list-group">
        {profileLinks.map((link, index) => {
          return (
            <li
              className="list-group-item"
              data-aos={"fade-left"}
              data-aos-delay={index * 100}
              data-aos-duration={"120"}
              key={link.id}
            >
              <NavLink className={"profile-links"} to={`${link.path}`} end>
                <i className={"nav-icon"}>{link.icon}</i>
                <span className={"nav-title"}>{link.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="contents h-100">
        <Routes>
          <Route exact path={`/`} element={<Overview />}>
            <Route exact path={`edit/*`} element={<Main />} />
          </Route>
          <Route exact path={`/submissions`} element={<Submissions />}>
            <Route exact path={`edit/*`} element={<Main />} />
          </Route>
          <Route exact path={`/problems`} element={<Problems />}>
            <Route exact path={`edit/*`} element={<Main />} />
          </Route>
          <Route path={"*"} element={<Navigate to={"/404"} />} />
        </Routes>
      </div>
    </motion.section>
  );
}

export default Profile;
