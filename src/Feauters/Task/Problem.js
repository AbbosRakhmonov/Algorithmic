import React, { useEffect, useState } from "react";
import { IoFlash, IoHardwareChip, IoTime, IoPerson } from "react-icons/io5";
import "./for_problem.scss";
import Table from "../../Components/Table/Table";
import SmLoader from "../../Components/SmallLoader/SmallLoader";
import { useSelector } from "react-redux";

function Problem() {
  const [examples, setExamples] = useState([]);
  const { loading, problem } = useSelector((state) => state.problem);
  const propForTable = {
    page: "examples",
    data: examples,
    headers: {
      titles: ["#", "inputs", "outputs"],
      fields: ["inPut", "outPut"],
    },
  };
  useEffect(() => {
    problem && setExamples(problem.examples);
  }, [problem]);
  const checkStatus = (status) => {
    if (status > 0 && status <= 19) return "easy";
    else if (status > 19 && status <= 50) return "medium";
    else if (status > 50 && status <= 100) return "hard";
    else return "unknown";
  };

  return !loading && problem ? (
    <div className={"problem-container"}>
      <h1 className={"problem-title"}>{`${problem.id}. ${problem.title}`}</h1>
      <span className="line"></span>
      <div className="problem-configuration">
        <div className={`conf-item ${checkStatus(problem.difficulty)}`}>
          <span className="conf-icon">
            <IoFlash />
          </span>
          <span className="conf-title">{problem.difficulty}%</span>
        </div>
        <div className={`conf-item`}>
          <span className="conf-icon">
            <IoHardwareChip />
          </span>
          <span className="conf-title">{problem.memory} KB</span>
        </div>
        <div className={`conf-item`}>
          <span className="conf-icon">
            <IoTime />
          </span>
          <span className="conf-title">{problem.time} ms</span>
        </div>
        <div className={`conf-item`}>
          <span className="conf-icon">
            <IoPerson />
          </span>
          <span className="conf-title">{problem.author.fullName}</span>
        </div>
      </div>
      <div className="problem-title-container">
        <p className={"problem-title"}>{problem.question}</p>
      </div>
      <div className="input-container">
        <h1 className={"input-header"}>Input</h1>
        <p className={"input-data"}>{problem.inputData}</p>
      </div>
      <div className="output-container">
        <h1 className={"output-header"}>Output</h1>
        <p className={"input-data"}>{problem.outputData}</p>
      </div>
      <span className="line"></span>
      <div className="examples-container">
        <h1 className={"examples-header"}>Examples</h1>
        <Table propForTable={propForTable} />
      </div>
    </div>
  ) : (
    <SmLoader />
  );
}

export default Problem;
