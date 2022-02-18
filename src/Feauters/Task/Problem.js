import React from "react";
import { IoFlash, IoHardwareChip, IoTime, IoPerson } from "react-icons/io5";
import "./for_problem.scss";
import Table from "../../Components/Table/Table";

function Problem() {
  const propForTable = {
    page: "examples",
    data: [
      {
        inPut: "1 3",
        outPut: "4",
      },
      {
        inPut: "4 5",
        outPut: "9",
      },
    ],
    headers: {
      titles: ["#", "inputs", "outputs"],
      fields: ["inPut", "outPut"],
    },
  };
  const checkStatus = (status) => {
    if (status > 0 && status <= 19) return "easy";
    else if (status > 19 && status <= 50) return "medium";
    else if (status > 50 && status <= 100) return "hard";
    else return "unknown";
  };

  return (
    <div className={"problem-container"}>
      <h1 className={"problem-title"}>1. A+B</h1>
      <span className="line"></span>
      <div className="problem-configuration">
        <div className={`conf-item ${checkStatus(15)}`}>
          <span className="conf-icon">
            <IoFlash />
          </span>
          <span className="conf-title">1%</span>
        </div>
        <div className={`conf-item`}>
          <span className="conf-icon">
            <IoHardwareChip />
          </span>
          <span className="conf-title">2 MB</span>
        </div>
        <div className={`conf-item`}>
          <span className="conf-icon">
            <IoTime />
          </span>
          <span className="conf-title">2 s</span>
        </div>
        <div className={`conf-item`}>
          <span className="conf-icon">
            <IoPerson />
          </span>
          <span className="conf-title">Sardor Salimov</span>
        </div>
      </div>
      <div className="problem-title-container">
        <p className={"problem-title"}>
          Given an array of integers nums and an integer target, return indices
          of the two numbers such that they add up to target.
        </p>
        <p className={"problem-title"}>
          You may assume that each input would have exactly one solution, and
          you may not use the same element twice.
        </p>
        <p className={"problem-title"}>
          You can return the answer in any order.
        </p>
      </div>
      <div className="input-container">
        <h1 className={"input-header"}>Input</h1>
        <p className={"input-data"}>
          The first line of the input contains one integer{" "}
          <b>
            {`N (1<= N <= 10`}
            <sup>18</sup>)
          </b>
        </p>
      </div>
      <div className="output-container">
        <h1 className={"output-header"}>Output</h1>
        <p className={"input-data"}>
          The first line of the input contains one integer{" "}
          <b>
            {`N (1<= N <= 10`}
            <sup>18</sup>)
          </b>
        </p>
      </div>
      <span className="line"></span>
      <div className="examples-container">
        <h1 className={"examples-header"}>Examples</h1>
        <Table propForTable={propForTable} />
      </div>
    </div>
  );
}

export default Problem;
