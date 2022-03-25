import React from "react";
import { TextField } from "@material-ui/core";

function NumberInput({ label, onChange, value, placeholder, type }) {
  return (
    <TextField
      InputProps={{ style: { fontSize: "18px", fontFamily: "Open-Sans" } }}
      InputLabelProps={{
        style: {
          fontSize: "18px",
          fontFamily: "Open-Sans",
          color: "#979797",
        },
      }}
      label={label}
      fullWidth={true}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={"mb-5"}
      type={type}
    />
  );
}

export default NumberInput;
