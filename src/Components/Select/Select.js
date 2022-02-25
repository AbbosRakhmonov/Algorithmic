import React, { useEffect } from "react";
import { Input } from "reactstrap";
import { getCompilers } from "./selectSlice";
import { useSelector, useDispatch } from "react-redux";
import "./for_select.scss";

function Select({ chooseLanguage }) {
  const dispatch = useDispatch();
  const { compilers, compiler } = useSelector((state) => state.compilers);
  useEffect(() => {
    dispatch(getCompilers());
  }, [dispatch]);
  return compilers && compiler ? (
    <div data-aos={"fade-down"} data-aos-delay={200}>
      <h1 className={"title"}>Choose Language</h1>
      <Input
        type={"select"}
        value={compiler.lang}
        onChange={chooseLanguage}
        style={{ border: "2px solid #e4e7e7" }}
        className={"select-language"}
      >
        {compilers.map((language, index) => (
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
