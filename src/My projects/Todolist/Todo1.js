import React from "react";
import { useState } from "react";
import Data from "../birthdayReminder/data/Data";

function Todo1() {
  const [list, setList] = useState([]);
  const [boo, setBoo] = useState(false);
  const [inputVal, setInputVal] = useState("");

  const submitList = (e) => {
    e.preventDefault();
    if (!inputVal) {
      return false;
    }
    let newList = { id: new Date().getTime().toString(), title: inputVal };
    setList([newList, ...list]);
    setInputVal("");
    setBoo(false);
  };
  const editList = (id, title) => {
    let newArray = list.filter((x) => x.id !== id);
    setList(newArray);
    setInputVal(title);
    setBoo(true);
  };
  const deleteList = (id) => {
    let newArray = list.filter((x) => x.id !== id);
    setList(newArray);
  };
  return (
    <div>
      <form onSubmit={submitList}>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button>{boo === true ? "EDIT" : "SUBMIT"}</button>
      </form>
      <div>
        {list.map((item) => {
          const { id, title } = item;
          return (
            <div key={id}>
              <h1>{title}</h1>
              <button onClick={() => editList(id, title)}>edit</button>
              <button onClick={() => deleteList(id)}>Delete</button>
            </div>
          );
        })}
      </div>
      <p onClick={() => setList([])}>{list.length === 0 ? " " : "Clear All"}</p>
    </div>
  );
}

export default Todo1;
