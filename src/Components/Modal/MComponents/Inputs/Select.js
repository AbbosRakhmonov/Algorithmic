import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

function SelectForm({
  handleChange,
  handleBlur,
  value,
  options,
  name,
  helperText,
  error,
  defaultValue,
  onChange,
  fields,
}) {
  return (
    <FormControl fullWidth={true}>
      <Select
        value={value}
        name={name}
        error={error}
        onChange={(e) => {
          handleChange(e);
          onChange(e);
        }}
        onBlur={handleBlur}
        className={"mb-2"}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value={""} disabled>
          {defaultValue}
        </MenuItem>
        {options.map((option, index) => (
          <MenuItem key={index} value={option[fields[1]]}>
            {option[fields[0]]}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}

export default SelectForm;
