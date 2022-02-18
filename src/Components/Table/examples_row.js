import React from "react";

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
              <h3 className={`table-row-text`}>{example[field]}</h3>
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

export default ExamplesRow;
