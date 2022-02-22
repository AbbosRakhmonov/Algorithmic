import React from "react";
import { NavLink } from "react-router-dom";
import "./for_navbarlink.scss";

export default function NavbarLink({
  path,
  title,
  isActive,
  icon,
  className,
  dataAosDelay,
}) {
  return (
    <li
      className={"list-group-item"}
      data-aos={"zoom-in"}
      data-aos-delay={dataAosDelay}
      data-aos-duration={"200"}
    >
      <NavLink
        className={`nav-link ${isActive ? "active" : ""} ${
          className ? className : ""
        }`}
        end
        to={path}
      >
        <i className={"nav-icon"}>{icon}</i>
        <span className={"nav-title"}>{title}</span>
      </NavLink>
    </li>
  );
}
