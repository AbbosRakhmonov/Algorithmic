import React from "react";
import Path from "./Path";
import NavbarLink from "./Navlink/navbarLink";
import { useLocation } from "react-router-dom";
import ProfileLogo from "../../icons/profileLogo.svg";
import "./for_navbar.scss";

export default function Navbar({ userImage, userName, userInfo }) {
  const { pathname } = useLocation();
  const activePath = pathname.split("/")[2] ? pathname.split("/")[2] : "";
  return (
    <nav className="navbar">
      <div className="profile-badge">
        <img
          className={"profile-image"}
          width="50"
          height="50"
          src={userImage ? userImage : ProfileLogo}
          alt="profile image"
        />
        <div className="profile-info d-flex flex-column">
          <h3 className={"profile-title"}>
            {userName ? userName : "Algorithmic.uz"}
          </h3>
          {userInfo ? <p className={"profile-text"}>{userInfo}</p> : ""}
        </div>
      </div>
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
            dataAosDelay={idx * 150}
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
