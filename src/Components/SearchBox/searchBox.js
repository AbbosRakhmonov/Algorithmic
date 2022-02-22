import React from "react";
import "./for_searchbox.scss";
import { IoSearch } from "react-icons/io5";

function SearchBox({ value, onChange }) {
  return (
    <div className="input-group mb-3 mb-md-0 mb-sm-3">
      <span className="input-group-text">
        <IoSearch />
      </span>
      <input
        type="text"
        className="form-control search-box"
        placeholder="Type here..."
        id={"searchbox"}
        spellCheck={false}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBox;
