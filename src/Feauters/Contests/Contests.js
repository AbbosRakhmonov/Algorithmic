import React from "react";
import "./for_contester.scss";
import { motion } from "framer-motion";

function Contests(props) {
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
    <motion.div
      initial={"inital"}
      animate={"in"}
      exit={"out"}
      transition={{ duration: 0.5, type: "tween", ease: "anticipate" }}
      variants={pageTransition}
      className="contests"
    >
      <h3 className={"contest-title"}>COMING SOON...</h3>
    </motion.div>
  );
}

export default Contests;
