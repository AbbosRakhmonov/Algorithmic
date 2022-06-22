import React, { lazy, Suspense, useState, useEffect } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { ProblemNav } from "../../Components/Navbar/Path";
import NavbarLink from "../../Components/Navbar/Navlink/navbarLink";
import { useLocation } from "react-router-dom";
import { IoList } from "react-icons/io5";
import Split from "react-split";
import Codemirror from "../../Components/CodeMirror/Codemirror";
import Loader from "../../Components/Loader/Loader";
import { AnimatePresence, motion } from "framer-motion";
import Select from "../../Components/Select/Select";
import Submit_Button from "../../Components/Buttons/Submit_Button";
import "./for_problem.scss";
import { getProblem, submitAnswer, setLastSubmit } from "./problemSlice";
import { getCompiler } from "../../Components/Select/selectSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AttemptsAccordion from "../../Components/Accordion/attemptsAccordion";

const Home = lazy(() => import("../Task/Problem"));
const Attempts = lazy(() => import("./Attempts"));

function Problem({ toogleOffCanvas }) {
  const { isLoggedIn } = useSelector((state) => state.login);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { compiler } = useSelector((state) => state.compilers);
  const { lastAttempt } = useSelector((state) => state.problem);
  const { pathname } = useLocation();
  const activePath = pathname.split("/")[4] ? pathname.split("/")[4] : "";
  const [value, setValue] = useState("");
  const [accordionVisible, setAccordionVisible] = useState(false);
  const handleChange = () => {
    setAccordionVisible(!accordionVisible);
  };
  const chooseLanguage = (e) => {
    dispatch(getCompiler(e.target.value));
  };

  const submit = () => {
    if (isLoggedIn) {
      const data = {
        lang: compiler.lang,
        problemId: id,
        code: value,
      };
      dispatch(
        setLastSubmit({
          id: 1,
          status: "InQueue",
          language: compiler.displayName,
          date: new Date().toLocaleString(),
        })
      );
      setAccordionVisible(true);
      dispatch(submitAnswer(data));
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
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };
  useEffect(() => {
    dispatch(getCompiler("cpp"));
    dispatch(getProblem(id));
  }, [dispatch]);
  useEffect(() => {
    if (compiler) {
      setValue(compiler.sample);
    }
  }, [compiler]);

  return (
    <motion.section
      initial={"out"}
      animate={"in"}
      exit={"out"}
      transition={{ duration: 0.1 }}
      variants={pageTransition}
      id={"problem"}
      className={"h-100"}
    >
      <div className={"position-container"}>
        <div className="left-nav">
          <ul className={"list-group"}>
            {ProblemNav.map((link) => (
              <NavbarLink
                key={link.id}
                path={link.path}
                title={link.title}
                icon={link.icon}
                className={
                  link.id === 3
                    ? "btn disabled"
                    : link.id === 2 && !isLoggedIn
                    ? "btn disabled"
                    : "btn"
                }
                isActive={
                  activePath === link.title.toLowerCase() ||
                  link.childTitles.includes(activePath.toLowerCase())
                }
              />
            ))}
          </ul>
          <button
            type={"button"}
            onClick={toogleOffCanvas}
            className={"toogle-offcanvas"}
          >
            <IoList />
          </button>
        </div>
        <div className="main-route">
          <Split
            className={"d-flex h-100"}
            sizes={[50, 50]}
            gutterSize={10}
            gutterAlign={"center"}
            snapOffset={0}
            dragInterval={0}
            direction={"horizontal"}
            cursor="col-resize"
          >
            <div className="main h-100">
              <Suspense fallback={<Loader />}>
                <AnimatePresence>
                  <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/s" element={<Attempts />} />
                    <Route path="*" element={<Navigate to={""} />} />
                  </Routes>
                </AnimatePresence>
              </Suspense>
            </div>
            <div className="code-editor h-100">
              <Select chooseLanguage={chooseLanguage} />
              <Codemirror
                value={value}
                setValue={setValue}
                mode={compiler ? compiler.type : "text/x-c++src"}
              />
              <AttemptsAccordion
                handleChange={handleChange}
                accordionVisible={accordionVisible}
                data={lastAttempt}
              />
              <Submit_Button onClick={submit} />
            </div>
          </Split>
        </div>
      </div>
      <ToastContainer />
    </motion.section>
  );
}

export default Problem;
