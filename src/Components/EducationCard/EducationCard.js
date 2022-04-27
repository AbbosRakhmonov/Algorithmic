import React from "react";
import "./for_education_card.scss";
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";

function EducationCard({ title, all, done, dataAosDelay }) {
  return (
    <div
      className={"ed-card"}
      data-aos={"flip-left"}
      data-aos-delay={dataAosDelay}
    >
      <div>
        <h4 className={"title"}>{title}</h4>
      </div>
      <div className="ed-card-footer">
        <Link to={`${title}/1`} className={"btn-link"}>
          <button className={"jump-btn"}>
            <IoArrowForward />
          </button>
        </Link>
        {/*<p className={"task-counter"}>*/}
        {/*  {done} / {all}*/}
        {/*</p>*/}
      </div>
    </div>
  );
}

export default EducationCard;
