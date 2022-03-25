import React, { useState } from "react";
import "./for_addtasks.scss";
import NumberInput from "../../Components/Fields/NumberInput";
import Ckeditor from "../../Components/CKEditor/Ckeditor";

function AddTasks() {
  const [complexity, setComplexity] = useState(0);
  const [tests, setTests] = useState(0);
  const [examples, setExamples] = useState(0);
  const [time, setTime] = useState(0);
  const [memory, setMemory] = useState(0);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [note, setNote] = useState("");
  const handleChangeComplexity = (e) => {
    setComplexity(e.target.value);
  };
  const handleChangeTests = (e) => {
    setTests(e.target.value);
  };
  const handleChangeExamples = (e) => {
    setExamples(e.target.value);
  };
  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };
  const handleChangeMemory = (e) => {
    setMemory(e.target.value);
  };
  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDescription = (data) => {
    setDescription(data);
  };
  const handleChangeInput = (data) => {
    setInput(data);
  };
  const handleChangeOutput = (data) => {
    setOutput(data);
  };
  const handleChangeNote = (data) => {
    setNote(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("salom");
  };
  const inputs = [
    {
      id: "complexity",
      label: "Сложность",
      value: complexity,
      onChange: handleChangeComplexity,
      placeholder: "Введите сложность задачи",
      type: "number",
    },
    {
      id: "tests",
      label: "Тесты",
      value: tests,
      onChange: handleChangeTests,
      placeholder: "Введите количество тестов",
      type: "number",
    },
    {
      id: "examples",
      label: "Количество тестов",
      value: examples,
      onChange: handleChangeExamples,
      placeholder: "Введите количество примеров",
      type: "number",
    },
    {
      id: "time",
      label: "Время",
      value: time,
      onChange: handleChangeTime,
      placeholder: "Введите время выполнения задачи",
      type: "number",
    },
    {
      id: "memory",
      label: "Память",
      value: memory,
      onChange: handleChangeMemory,
      placeholder: "Введите максимальную память задачи",
      type: "number",
    },
    {
      id: "author",
      label: "Автор",
      value: author,
      onChange: handleChangeAuthor,
      placeholder: "Введите имя автора",
      type: "text",
    },
    {
      id: "title",
      label: "Название",
      value: title,
      onChange: handleChangeTitle,
      placeholder: "Введите название задачи",
      type: "text",
    },
  ];
  const editors = [
    {
      id: "description",
      label: "Описание",
      value: description,
      onChange: handleChangeDescription,
    },
    {
      id: "input",
      label: "Входные данные",
      value: input,
      onChange: handleChangeInput,
    },
    {
      id: "output",
      label: "Выходные данные",
      value: output,
      onChange: handleChangeOutput,
    },
    {
      id: "note",
      label: "Примечание",
      value: note,
      onChange: handleChangeNote,
    },
  ];
  return (
    <section className={"addtask-container h-100"}>
      <form className={"form-control bg-transparent"} onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <NumberInput key={input.id} {...input} />
        ))}
        {editors.map((editor) => (
          <Ckeditor key={editor.id} {...editor} />
        ))}
        <div className="action-buttons text-end">
          <button type={"submit"} className={"btn btn-success px-5"}>
            Save
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddTasks;
