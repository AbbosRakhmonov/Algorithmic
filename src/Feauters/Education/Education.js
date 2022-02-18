import React from "react";
import "./for_education.scss";
import EducationCard from "../../Components/EducationCard/EducationCard";
import { motion } from "framer-motion";

function Education(props) {
  const data = [
    {
      id: 1,
      title: "Input Output",
      all: "100",
      done: "0",
    },
    {
      id: 2,
      title: "For Loop",
      all: "100",
      done: "0",
    },
    {
      id: 3,
      title: "While Loop",
      all: "100",
      done: "0",
    },
    {
      id: 4,
      title: "Do While Loop",
      all: "100",
      done: "0",
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
        {data.map((item, index) => (
          <EducationCard
            key={index}
            id={item.id}
            done={item.done}
            title={item.title}
            all={item.all}
            dataAosDelay={index * 100}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default Education;
