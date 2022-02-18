import { IoCheckmark, IoClose } from "react-icons/io5";
import React from "react";
import "./for_checkmarks.scss";

const Checkmarks = ({ status }) => (
  <span className={`status ${status === "accepted" ? "accepted" : "error"}`}>
    {status === "accepted" && <IoCheckmark />}
    {status === "error" && <IoClose />}
  </span>
);

export default Checkmarks;
