import React, { useState } from "react";
import { IoCopy } from "react-icons/io5";
import "./for_copy_button.scss";
import ReactTooltip from "react-tooltip";

function CopyButton({ text, id }) {
  const [data, setData] = useState("copy");
  const handleClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setData("copied");
        setTimeout(() => {
          setData("copy");
        }, 1000);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  };

  return (
    <div className={"text-center"}>
      <button
        id={"ScheduleUpdateTooltip"}
        className={"btn copy-btn"}
        onClick={handleClick}
        data-tip
        data-for={id}
      >
        <IoCopy />
      </button>
      <ReactTooltip id={id} place="top" effect="solid">
        {data}
      </ReactTooltip>
    </div>
  );
}

export default CopyButton;
