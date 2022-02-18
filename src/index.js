import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./App/Store";
import "bootstrap/dist/css/bootstrap.min.css";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./style.scss";

ReactDOM.render(
  <Router>
    <Provider store={Store}>
      <SkeletonTheme baseColor={"#E6E9FA"} highlightColor={"#C2C9D1"}>
        <App />
      </SkeletonTheme>
    </Provider>
  </Router>,
  document.getElementById("root")
);
