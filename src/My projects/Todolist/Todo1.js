import React from "react";
import { useState } from "react";
// import style from "../style/Style.css";
import Todo2 from "./Todo2";

const storedItems = JSON.parse(localStorage.getItem("list")) || [];

function Todo1() {
  const [list, setList] = useState(storedItems);
  const [boo, setBoo] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [alert, setAlert] = useState(false);
  const [read, setRead] = useState(false);

  const submitList = (e) => {
    e.preventDefault();
    if (!inputVal) {
      setAlert(true);
      return false;
    }
    let newList = { id: new Date().getTime().toString(), title: inputVal };
    setList([newList, ...list]);
    setInputVal("");
    setAlert(false);
    setBoo(false);
  };
  const editList = (id, title) => {
    let newArray = list.filter((x) => x.id !== id);
    setList(newArray);
    setInputVal(title);
    setBoo(true);
    setAlert(false);
  };
  const deleteList = (id) => {
    let newArray = list.filter((x) => x.id !== id);
    setList(newArray);
    setAlert(false);
  };

  localStorage.setItem("list", JSON.stringify(list));
  return (
    <div className="todoCon">
      <h1>TODO LIST</h1>
      <div className="errorCon">
        {alert ? <p style={{ color: "red" }}>add an item</p> : ""}
      </div>
      <form onSubmit={submitList}>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button>{boo === true ? "EDIT" : "SUBMIT"}</button>
      </form>
      <div className="listCon">
        <Todo2 list={list} editList={editList} deleteList={deleteList} />
      </div>
      <p onClick={() => setList([])}>{list.length === 0 ? " " : "Clear All"}</p>
    </div>
  );
}

export default Todo1;
