import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Problem from "../Task/Problem";
import Codemirror from "../../Components/CodeMirror/Codemirror";
import Select from "../../Components/Select/Select";
import Submit_Button from "../../Components/Buttons/Submit_Button";
import Table from "../../Components/Table/Table";
import Lists from "../../Components/Lists/Lists";
import { useDispatch, useSelector } from "react-redux";
import { getCompiler } from "../../Components/Select/selectSlice";
import { useParams } from "react-router-dom";
import { getThemeProblems } from "./educationSlice";
import { getEducationProblem } from "../Problem/problemSlice";
import { useNavigate } from "react-router-dom";
import "./for_education_tasks.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AttemptsAccordion from "../../Components/Accordion/attemptsAccordion";

function EducationTasks() {
  const { title, problem_index } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { compiler } = useSelector((state) => state.compilers);
  const { attempts, problems } = useSelector((state) => state.education);
  const { isLoggedIn } = useSelector((state) => state.login);

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
    if (isLoggedIn) {
      console.log(value);
    } else {
      toast.warn(`Please Sign (in / up) to submit`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
    dispatch(getCompiler("cpp"));
    dispatch(getThemeProblems(title));
  }, [dispatch]);
  useEffect(() => {
    if (problems.length !== 0) {
      if (problems.length >= Number(problem_index))
        dispatch(getEducationProblem(problems[problem_index - 1].id));
      else navigate("*");
    }
  }, [dispatch, problems]);
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
            <Select chooseLanguage={chooseLanguage} />
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
        <Lists title={title} />
      </div>
      <ToastContainer />
    </motion.section>
  );
}

export default EducationTasks;
