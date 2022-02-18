import React from "react";
import { Input } from "reactstrap";
import "./for_select.scss";

function Select({ value, chooseLanguage, languages }) {
  return languages && value ? (
    <div data-aos={"fade-down"} data-aos-delay={200}>
      <h1 className={"title"}>Choose Language</h1>
      <Input
        type={"select"}
        value={value}
        onChange={chooseLanguage}
        style={{ border: "2px solid #e4e7e7" }}
        className={"select-language"}
      >
        {languages.map((language, index) => (
          <option key={index} value={language.lang}>
            {language.displayName}
          </option>
        ))}
      </Input>
    </div>
  ) : (
    ""
  );
}

export default Select;
