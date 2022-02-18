import React from "react";
import { NavLink } from "react-router-dom";
import Checkmarks from "../Checkmarks/Checkmarks";

function List({ active, path, index, title, status, id }) {
  return (
    <li
      className="list-group-item"
      data-aos="fade-left"
      data-aos-delay={index * 100}
    >
      <NavLink
        to={path}
        className={`btn tasks-link ${Number(active) === id && "active"}`}
      >
        {title}
      </NavLink>
      {status ? <Checkmarks status={status} /> : null}
    </li>
  );
}

export default List;
