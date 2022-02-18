import React from "react";
import { Link } from "react-router-dom";

function LeaderBoardRow({ data, fields, userRow, dataAos }) {
  return (
    <>
      {data.map((user, idx) => (
        <tr
          key={user.id}
          className={userRow ? "current-user-row" : null}
          data-aos={dataAos}
          data-aos-delay={idx * 100}
          data-aos-duration={200}
        >
          {fields.map((field, index) => (
            <td key={index}>
              {field === "fullName" ? (
                <>
                  <h3 className={"table-row-text"}>
                    <Link to={"/"} title={user[field]}>
                      {user[field]}
                    </Link>
                  </h3>
                  <p className={"user-name"}>{user.userName}</p>
                </>
              ) : field === "img" ? (
                <div className={"user-name-image"}>
                  <img src={`${user[field]}`} alt="user" />
                </div>
              ) : (
                user[field]
              )}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

export default LeaderBoardRow;
