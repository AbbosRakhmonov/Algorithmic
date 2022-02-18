import React from "react";
import LeaderBoardRow from "./leaderBoard_row";

function Theader({ headers, user, fields }) {
  return (
    <thead className={"table-header"}>
      <tr>
        {headers.map((header, index) => {
          return (
            <th key={index} scope={"col"}>
              {header}
            </th>
          );
        })}
      </tr>
      {user && <LeaderBoardRow data={[user]} fields={fields} userRow={true} />}
    </thead>
  );
}

export default Theader;
