import React from "react";
import "./for_buttons.scss";
import { useSelector } from "react-redux";

function SubmitButton({ onClick, loading }) {
  const { problemSubmitted } = useSelector((state) => state.problem);
  return (
    <div className="action-container">
      <button
        className={`btn submit-btn ${loading && "disabled"}`}
        onClick={onClick}
      >
        {!problemSubmitted ? (
          "Submit"
        ) : (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </button>
    </div>
  );
}

export default SubmitButton;
