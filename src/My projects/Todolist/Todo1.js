import React from "react";
import { useState } from "react";
import style from "./style/Style.css";

const storedItems = JSON.parse(localStorage.getItem("list")) || [];

function Todo1() {
  const [list, setList] = useState(storedItems);
  const [boo, setBoo] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [alert, setAlert] = useState(false);

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
        {list.map((item) => {
          const { id, title } = item;
          return (
            <div key={id} className="list">
              <p>{title}</p>
              <div className="btn">
                <button onClick={() => editList(id, title)}>edit</button>
                <button onClick={() => deleteList(id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
      <p onClick={() => setList([])}>{list.length === 0 ? " " : "Clear All"}</p>
    </div>
  );
}

export default Todo1;
