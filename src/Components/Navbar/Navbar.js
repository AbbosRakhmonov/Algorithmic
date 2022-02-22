import React from "react";
import Path from "./Path";
import NavbarLink from "./Navlink/navbarLink";
import { Link, useLocation } from "react-router-dom";
import ProfileLogo from "../../icons/profileLogo.svg";
import "./for_navbar.scss";

export default function Navbar({ user }) {
  const { pathname } = useLocation();
  const activePath = pathname.split("/")[2] ? pathname.split("/")[2] : "";
  return (
    <nav className="navbar">
      <Link className="profile-badge" to={"/"}>
        <img
          className={"profile-image"}
          width="50"
          height="50"
          src={
            user
              ? `http://api.algorithmic.uz/api/files/avatar/${user.nameid}`
              : ProfileLogo
          }
          alt="profile image"
        />
        <div className="profile-info d-flex flex-column">
          <h3 className={"profile-title"}>
            {user ? user.given_name : "Algorithmic.uz"}
          </h3>
          {user && <p className={"profile-text"}>{user.unique_name}</p>}
        </div>
      </Link>
      <ul className={"list-group"}>
        {Path.map((link, idx) => (
          <NavbarLink
            key={link.id}
            path={link.path}
            title={link.title}
            icon={link.icon}
            isActive={
              activePath === link.title.toLowerCase() ||
              link.childTitles.includes(activePath.toLowerCase())
            }
            dataAosDelay={idx * 100}
          />
        ))}
      </ul>
      <div className="nav-footer">
        <h6 className={"footer-title"}>
          Designed and built by the{" "}
          <a href={"http://d-klub.uz"} title={"Go Website"} target={"_blank"}>
            DK
          </a>
        </h6>
        <p className={"footer-text"}>Copyright &copy; 2022-2023</p>
      </div>
    </nav>
  );
}
