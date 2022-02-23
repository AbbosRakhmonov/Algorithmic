import React from "react";
import "./for_notfound.scss";

function NotFound() {
  return (
    <tr className={"h-100 not-found"}>
      <td className={"text-container"} colSpan={"6"}>
        <h1>Not Found</h1>
      </td>
    </tr>
  );
}

export default NotFound;
