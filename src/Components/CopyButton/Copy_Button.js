import React from "react";
import { IoCopy } from "react-icons/io5";
import "./for_copy_button.scss";
import ReactTooltip from "react-tooltip";

function CopyButton({ text }) {
  const handleClick = () => {
    navigator.clipboard.writeText(text).then(() => {
      console.log("Copied to clipboard");
    });
    ReactTooltip.show();
  };

  return (
    <div className={"text-center"}>
      <button
        id={"ScheduleUpdateTooltip"}
        className={"btn copy-btn"}
        onClick={handleClick}
        data-tip={"tooltip"}
      >
        <IoCopy />
      </button>
      <ReactTooltip />
    </div>
  );
}

export default CopyButton;
