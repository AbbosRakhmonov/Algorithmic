import React, { useState } from "react";
import Theader from "./Theader";
import Tbody from "./Tbody";
import "./for_table.scss";

function Table({ propForTable }) {
  const [scroll, setScroll] = useState(false);
  const { headers, data, user, page } = propForTable;
  const onScroll = (e) => {
    const element = e.target;
    if (element.scrollTop > 4) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  return (
    <div
      className={`table-container h-100 position-relative ${
        scroll ? "scrolled" : ""
      }`}
      onScroll={onScroll}
    >
      <table className={"table table-striped table-hover unic-table m-0"}>
        <Theader headers={headers.titles} user={user} fields={headers.fields} />
        <Tbody fields={headers.fields} data={data} page={page} />
      </table>
    </div>
  );
}

export default Table;
