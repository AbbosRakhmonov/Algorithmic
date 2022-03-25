import React from "react";
import { TextField } from "@material-ui/core";

function Text({
  label,
  handleChange,
  handleBlur,
  value,
  name,
  placeholder,
  helperText,
  error,
}) {
  return (
    <TextField
      id={name}
      InputProps={{ style: { fontSize: "14px", fontFamily: "Open-Sans" } }}
      InputLabelProps={{
        style: { fontSize: "14px", fontFamily: "Open-Sans", color: "#979797" },
      }}
      error={error}
      helperText={helperText}
      label={label}
      fullWidth={true}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
      placeholder={placeholder}
      className={"mb-3"}
    />
  );
}

export default Text;
