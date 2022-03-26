import React, { lazy, Suspense, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader/Loader";
import { AnimatePresence } from "framer-motion";

const Signin = lazy(() => import("./Feauters/Login/Login"));
const Signup = lazy(() => import("./Feauters/Registration/Registration"));
const Oops = lazy(() => import("./Feauters/404/Oops"));
const Dashboard = lazy(() => import("./Feauters/Dashboard/Dashboard"));

function App() {
  AOS.init({
    once: true,
    easing: "ease",
    startEvent: "DOMContentLoaded",
    duration: 500,
    throttleDelay: 0,
    offset: -1000,
    useClassNames: false,
    disableMutationObserver: false,
    mirror: false,
    anchorPlacement: "top-top",
  });
  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <AnimatePresence>
          <Routes>
            <Route exact path="/" element={<Navigate to={"/dashboard"} />} />
            <Route exact path="/dashboard/*" element={<Dashboard />} />
            <Route exact path="/signin" element={<Signin />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route path="*" element={<Oops />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
}

export default App;
