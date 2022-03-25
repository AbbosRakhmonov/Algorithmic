import React from "react";
import NotFound from "../Not Found/NotFound";
import LeaderRow from "./leaderRow";

function LeaderBoardRow({ data, fields, userRow, dataAos }) {
  return (
    <>
      {data ? (
        data.map((user, idx) => (
          <tr
            key={user.id}
            className={userRow ? "current-user-row" : null}
            data-aos={dataAos}
            data-aos-delay={idx * 100}
            data-aos-duration={200}
          >
            {fields.map((field, index) => (
              <LeaderRow user={user} field={field} key={index} nth={idx + 1} />
            ))}
          </tr>
        ))
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default LeaderBoardRow;
