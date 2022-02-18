import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "./xcode.css";
import "codemirror/mode/clike/clike.js";
import "codemirror/mode/python/python";
import "codemirror/addon/comment/comment";
import "codemirror/addon/wrap/hardwrap";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/edit/matchtags";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/fold/foldcode";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/brace-fold";
import "codemirror/addon/search/search";
import "codemirror/addon/search/searchcursor";
import "codemirror/addon/search/jump-to-line";
import "codemirror/addon/dialog/dialog.css";
import "codemirror/addon/dialog/dialog.js";
import "codemirror/addon/search/matchesonscrollbar.js";
import "codemirror/addon/search/match-highlighter.js";
import "./for_codemirror.scss";

function Codemirror({ mode, value, setValue }) {
  return (
    <CodeMirror
      value={value}
      className={"code-mirror"}
      options={{
        mode: mode,
        theme: "xcode",
        lineNumbers: true,
        tabSize: 2,
        lineWrapping: true,
        autoCloseBrackets: true,
        autoCloseTags: true,
        matchTags: true,
        matchBrackets: true,
        autoRefresh: true,
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
      }}
      onBeforeChange={(editor, data, value) => {
        setValue(value);
      }}
      onChange={() => {}}
    />
  );
}

export default Codemirror;
