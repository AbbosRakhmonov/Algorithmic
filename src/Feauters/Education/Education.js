import React, { useEffect } from "react";
import EducationCard from "../../Components/EducationCard/EducationCard";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getEducationThemes } from "./educationSlice";
import "./for_education.scss";
import LinearProgress from "@material-ui/core/LinearProgress";

function Education() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEducationThemes());
  }, [dispatch]);
  const { themes, loading } = useSelector((state) => state.education);
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
      id={"education"}
      className={"h-100"}
    >
      <div className="d-flex flex-wrap">
        {loading ? (
          <LinearProgress className={"w-100"} />
        ) : (
          themes.map((item, index) => (
            <EducationCard
              key={index}
              id={index + 1}
              done={"0"}
              title={item}
              all={"0"}
              dataAosDelay={index * 100}
            />
          ))
        )}
      </div>
    </motion.section>
  );
}

export default Education;
