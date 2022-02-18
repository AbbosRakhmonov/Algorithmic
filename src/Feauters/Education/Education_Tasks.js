import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Problem from "../Task/Problem";
import Codemirror from "../../Components/CodeMirror/Codemirror";
import Select from "../../Components/Select/Select";
import Submit_Button from "../../Components/Buttons/Submit_Button";
import Table from "../../Components/Table/Table";
import Lists from "../../Components/Lists/Lists";
import "./for_education_tasks.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCompiler, getCompilers } from "../Problem/problemSlice";

function EducationTasks() {
  const dispatch = useDispatch();
  const { compilers, compiler } = useSelector((state) => state.problem);
  const { attempts } = useSelector((state) => state.education);

  const [value, setValue] = useState("");
  const [submits, setSubmits] = useState([]);
  const propForTable = {
    page: "education",
    data: submits,
    headers: {
      titles: ["#", "Status", "Language", "Date"],
      fields: ["id", "status", "language", "date"],
    },
  };
  const chooseLanguage = (e) => {
    dispatch(getCompiler(e.target.value));
  };
  const submit = () => {
    console.log(value);
  };
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
  useEffect(() => {
    dispatch(getCompilers());
    dispatch(getCompiler("cpp"));
  }, [dispatch]);
  useEffect(() => {
    if (compiler) {
      setValue(compiler.sample);
    }
  }, [compiler]);
  useEffect(() => {
    setSubmits(attempts);
  }, [attempts]);
  return (
    <motion.section
      initial={"initial"}
      animate={"in"}
      exit={"out"}
      transition={{ duration: 0.5, type: "tween", ease: "anticipate" }}
      variants={pageTransition}
      id={"education-tasks"}
      className={"row h-100"}
    >
      <div className="col-8 h-100 task-container">
        <main className="main-content h-100">
          <Problem />
          <div className="code-field">
            <Select
              value={compiler && compiler.lang}
              chooseLanguage={chooseLanguage}
              languages={compilers}
            />
            <div
              className={"code-container"}
              data-aos={"fade-down"}
              data-aos-delay={200}
            >
              <Codemirror
                value={value}
                setValue={setValue}
                mode={compiler ? compiler.type : "text/x-c++src"}
              />
            </div>
            <Submit_Button onClick={submit} />
          </div>
          <div className="submits-container">
            <Table propForTable={propForTable} />
          </div>
        </main>
      </div>
      <div className="col-4 h-100 tasks-container">
        <Lists />
      </div>
    </motion.section>
  );
}

export default EducationTasks;
