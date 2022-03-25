import React from "react";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./for_list.scss";

function List({ menus }) {
  const { sub, lists } = menus;
  return (
    <ul className={`list-group modal-list-group ${sub && "modal-sub-menu"}`}>
      {lists.map((list, index) => (
        <Link to={list.link} className={"list-link"} key={index}>
          <li className={"list-group-item"}>
            <div className="list-icon">{list.icon}</div>
            <div>
              <h3 className={"list-title"}>{list.title}</h3>
              {list.placeholder && (
                <p className={"list-placeholder"}>{list.placeholder}</p>
              )}
            </div>
            {sub && (
              <div className="overlay">
                <IoPencil />
              </div>
            )}
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default List;
