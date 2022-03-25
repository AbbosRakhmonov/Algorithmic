import React from "react";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

function ProblemsSolved(props) {
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
  return (
    <motion.div
      initial={"initial"}
      animate={"in"}
      exit={"out"}
      transition={{ duration: 0.5, type: "tween", ease: "anticipate" }}
      variants={pageTransition}
      className={"user-problems"}
    >
      problems solved
      <Outlet />
    </motion.div>
  );
}

export default ProblemsSolved;
