import React, { useState } from "react";
import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import katex from "katex";
import "katex/dist/katex.min.css";

function Ckeditor() {
  console.log(buttonList);
  const [data, setData] = useState("");
  const handleChange = (data) => {
    setData(data);
  };
  console.log(data);
  return (
    <div className={"react-editor"}>
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
