import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import List from "./List";
import "./for_lists.scss";

function Lists(props) {
  const { pathname } = useLocation();
  const active = pathname.split("/")[4] || 1;
  const data = [
    {
      id: 1,
      title: "Task 1",
      status: "accepted",
    },
    {
      id: 2,
      title: "Task 2",
      status: "error",
    },
    {
      id: 3,
      title: "Task 3",
    },
  ];
  return (
    <ul className="list-group tasks-list">
      {data.map((task, index) => (
        <List
          key={index}
          index={index}
          status={task.status}
          id={task.id}
          active={active}
          title={task.title}
          path={`${task.id}`}
        />
      ))}
    </ul>
  );
}

export default Lists;
