import React from "react";
import Copy from "../CopyButton/Copy_Button";

function ExamplesRow({ data, fields, dataAos }) {
  return (
    <>
      {data.map((example, index) => (
        <tr
          key={index}
          data-aos={dataAos}
          data-aos-delay={index * 100}
          data-aos-duration={800}
        >
          <td key={index}>
            <h3 className={`table-row-text`}>{index + 1}</h3>
          </td>
          {fields.map((field, index) => (
            <td key={index}>
              <div
                className={`${
                  field === "inPut" || field === "outPut"
                    ? "d-flex justify-content-between"
                    : ""
                }`}
              >
                <h3 className={`table-row-text`}>{example[field]}</h3>
                <div
                  className={`${
                    field === "inPut" || field === "outPut"
                      ? "btn-container"
                      : "d-none"
                  }`}
                >
                  <Copy text={example[field]} />
                </div>
              </div>
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

export default ExamplesRow;
