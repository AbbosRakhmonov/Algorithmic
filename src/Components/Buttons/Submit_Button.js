import React from "react";
import "./for_buttons.scss";

function SubmitButton({ onClick, loading }) {
  return (
    <div className="action-container">
      <button
        className={`btn submit-btn ${loading && "disabled"}`}
        onClick={onClick}
      >
        Submit
      </button>
    </div>
  );
}

export default SubmitButton;
