import React from "react";
import { Link } from "react-router-dom";
import { url } from "../../Feauters/api";

function LeaderRow({ field, user }) {
  return (
    <td>
      {field === "fullName" ? (
        <>
          <h3 className={"table-row-text"}>
            <Link
              to={`/dashboard/profile/${user.id}`}
              state={{ userId: user.id }}
              title={user[field]}
            >
              {user[field]}
            </Link>
          </h3>
          <p className={"user-name"}>{user.userName}</p>
        </>
      ) : field === "img" ? (
        <div className={"user-name-image"}>
          <img
            src={url + `/files/avatar/${user.id}`}
            alt={user.fullName}
            className={"user-image"}
          />
        </div>
      ) : (
        user[field]
      )}
    </td>
  );
}

export default LeaderRow;
