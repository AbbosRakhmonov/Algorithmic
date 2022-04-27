import React from "react";
import { Link } from "react-router-dom";

function AttemptsRow({ data, fields, dataAos }) {
  const convertDateWithTime = (date) => {
    const dateObj = new Date(date);
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const hours = dateObj.getUTCHours();
    const minutes = dateObj.getUTCMinutes();
    return `${month}/${day}/${year} ${hours}:${minutes}`;
  };
  return (
    <>
      {data.length !== 0 ? (
        data.map((item, index) => (
          <tr
            key={index}
            data-aos={dataAos}
            data-aos-delay={index * 100}
            data-aos-duration={200}
          >
            {fields.map((field, idx) => (
              <td key={idx}>
                {field === "status" ? (
                  <h3
                    className={`table-row-text ${
                      item[field].toLowerCase() === "ok" ? "accepted" : ""
                    }`}
                  >
                    {item[field]}
                  </h3>
                ) : field === "solver" ? (
                  <h3 className={`table-row-text`}>
                    <Link to={`/`}>{item[field].fullName}</Link>
                  </h3>
                ) : field === "problem" ? (
                  <h3 className={`table-row-text`}>
                    <Link to={`/dashboard/problems/p/${item[field].id}`}>
                      {item[field].title}
                    </Link>
                  </h3>
                ) : field === "id" ? (
                  <h3 className={`table-row-text`}>
                    <Link to={`/`}>{item[field]}</Link>
                  </h3>
                ) : field === "date" ? (
                  <h3 className={`table-row-text`}>
                    {convertDateWithTime(item[field])}
                  </h3>
                ) : (
                  <h3 className={`table-row-text`}>{item[field]}</h3>
                )}
              </td>
            ))}
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={fields.length}>
            <p className={"text-center"}>{"No data"}</p>
          </td>
        </tr>
      )}
    </>
  );
}

export default AttemptsRow;
