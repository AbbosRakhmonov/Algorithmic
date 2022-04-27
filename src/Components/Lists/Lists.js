import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import List from "./List";
import "./for_lists.scss";
import { useSelector } from "react-redux";

function Lists() {
  const { problems } = useSelector((state) => state.education);
  const { pathname } = useLocation();
  const oldPath = pathname.split("/").splice(0, 4).join("/");
  const active = pathname.split("/")[4] || 1;
  useEffect(() => {});
  return (
    <ul className="list-group tasks-list">
      {problems.map((task, index) => (
        <List
          key={index}
          index={index}
          status={task.status}
          id={task.id}
          active={active}
          title={task.title}
          path={`${oldPath + "/" + (index + 1)}`}
        />
      ))}
    </ul>
  );
}

export default Lists;
