import React from "react";
import { Link } from "react-router-dom";

function AttemptsRow({ data, fields, dataAos }) {
  return (
    <>
      {data.map((item, index) => (
        <tr
          key={index}
          data-aos={dataAos}
          data-aos-delay={index * 100}
          data-aos-duration={800}
        >
          {fields.map((field, idx) => (
            <td key={idx}>
              {field === "status" ? (
                <h3
                  className={`table-row-text ${
                    item[field].toLowerCase() === "accepted" ? "accepted" : ""
                  }`}
                >
                  {item[field]}
                </h3>
              ) : field === "fullName" ? (
                <h3 className={`table-row-text`}>
                  <Link to={`/`}>{item[field]}</Link>
                </h3>
              ) : field === "problem" ? (
                <h3 className={`table-row-text`}>
                  <Link to={`/`}>{item[field]}</Link>
                </h3>
              ) : field === "id" ? (
                <h3 className={`table-row-text`}>
                  <Link to={`/`}>{item[field]}</Link>
                </h3>
              ) : (
                <h3 className={`table-row-text`}>{item[field]}</h3>
              )}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

export default AttemptsRow;
