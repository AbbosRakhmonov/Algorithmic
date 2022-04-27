import React, { useEffect, useState } from "react";
import Path from "./Path";
import NavbarLink from "./Navlink/navbarLink";
import { NavLink, useLocation } from "react-router-dom";
import ProfileLogo from "../../icons/profileLogo.svg";
import "./for_navbar.scss";
import Api from "../../Feauters/api";

export default function Navbar({ user }) {
  const { pathname } = useLocation();
  const activePath = pathname.split("/")[2] ? pathname.split("/")[2] : "";
  const [imageSrc, setImageSrc] = useState(ProfileLogo);
  const getImage = async (id) => {
    return await Api()
      .get("/files/avatar/" + id, {
        responseType: "arraybuffer",
      })
      .then((res) => {
        let blob = new Blob([res.data], {
          type: res.headers["content-type"],
        });
        return URL.createObjectURL(blob);
      });
  };
  useEffect(() => {
    user && getImage(user.nameid).then((res) => setImageSrc(res));
  }, [user]);
  return (
    <nav className="navbar">
      <div className="profile-badge">
        <NavLink
          className={`profile-container ${
            activePath === "profile" && "active"
          }`}
          to={{
            pathname: user ? `profile/${user.nameid}` : "/",
          }}
        >
          {imageSrc && (
            <img
              className={"profile-image"}
              width="50"
              height="50"
              src={imageSrc}
              alt={`${user ? user.given_name : "algorithmic.uz"}`}
            />
          )}
          <div className="profile-info d-flex flex-column">
            <h3 className={"profile-title"}>
              {user ? user.given_name : "Algorithmic.uz"}
            </h3>
            {user && <p className={"profile-text"}>{user.unique_name}</p>}
          </div>
        </NavLink>
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
