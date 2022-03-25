import React from "react";
import SunEditor from "suneditor-react";
import katex from "katex";
import "suneditor/dist/css/suneditor.min.css";
import "katex/dist/katex.min.css";

function Ckeditor({ value, handleChange, label }) {
  console.log(value);
  return (
    <div className={"react-editor mb-4"}>
      <h4 className={"text-dark mb-3"}>{label}</h4>
      {
        <SunEditor
          onChange={handleChange}
          placeholder="Please type here..."
          setDefaultStyle="font-family: Open-Sans-Semibold, sans-serif; font-size: 14px;"
          setOptions={{
            height: "300px",
            width: "100%",
            katex: katex,
            buttonList: [
              [
                "formatBlock",
                "fontColor",
                "hiliteColor",
                "bold",
                "italic",
                "underline",
                "list",
                "superscript",
                "subscript",
                "math",
                "table",
                "underline",
                "strike",
              ],
              ["align", "horizontalRule", "list", "lineHeight"],
              ["link", "image", "video"],
              ["undo", "redo"],
              ["codeView", "fullScreen"],
            ],
            imageAccept: ".jpg, .jpeg, .png, .gif",
            imageUrlInput: false,
            showPathLabel: false,
            mediaAutoSelect: false,
          }}
        />
      }
    </div>
  );
}

export default Ckeditor;
