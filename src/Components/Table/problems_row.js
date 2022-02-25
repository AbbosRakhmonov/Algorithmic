import React from "react";
import {
  IoRemove,
  IoCheckmark,
  IoCloseSharp,
  IoHelpOutline,
} from "react-icons/io5";
import Badge from "../Badge/badge";
import { Link } from "react-router-dom";
import NotFound from "../Not Found/NotFound";

function ProblemsRow({ data, fields, dataAos }) {
  return (
    <>
      {data.length > 0 ? (
        data.map((item, idx) => (
          <tr
            key={item.id}
            data-aos={dataAos}
            data-aos-delay={idx * 100}
            data-aos-duration={800}
          >
            {fields.map((field, index) =>
              field === "stat" ? (
                <td key={index}>
                  <span>
                    {item[field] === null ? (
                      <IoRemove className="status-icon" title={"Todo"} />
                    ) : item[field] === "ok" ? (
                      <IoCheckmark
                        className="status-icon accepted"
                        title={"accepted"}
                      />
                    ) : item[field] === "InQueue" ? (
                      <IoHelpOutline
                        className={"status-icon text-warning"}
                        title={"In Progress"}
                      />
                    ) : (
                      <IoCloseSharp
                        className="status-icon error"
                        title={"Have Problem"}
                      />
                    )}
                  </span>
                </td>
              ) : field === "title" ? (
                <td key={index}>
                  <h3 className={"table-row-text"}>
                    <Link to={`p/${item.id}`} title={item[field]}>
                      {item[field]}
                    </Link>
                  </h3>
                  <div className="badges-container d-flex">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} title={tag} />
                    ))}
                  </div>
                </td>
              ) : field === "difficulty" ? (
                <td key={index}>
                  <h3
                    className={`table-row-text ${
                      parseInt(item[field]) < 25
                        ? "easy"
                        : parseInt(item[field]) < 50
                        ? "medium"
                        : "hard"
                    }`}
                  >
                    {item[field] + " " + "%"}
                  </h3>
                </td>
              ) : field === "author" ? (
                <td key={index}>
                  <h3 className={`table-row-text`}>
                    {item[field]["fullName"]}
                  </h3>
                </td>
              ) : (
                <td key={index}>
                  <h3 className={`table-row-text`}>{item[field]}</h3>
                </td>
              )
            )}
          </tr>
        ))
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default ProblemsRow;
