import React from "react";
import { useState } from "react";
import Data from "../Tour/data/Data";

function Paragraph() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const go = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 0;
    }
    if (count > Data.length) {
        amount = Data.length;
    
    }
    setText(Data.slice(0, amount));
  };
  return (
    <div>
      <form onSubmit={go}>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit"> GENERATE TEXT</button>
      </form>
      <div>
        {text.map((item, index) => {
          const { id, name, description } = item;
          return (
            <div key={index}>
              <h3>{name}</h3>
              <p>{description}</p>;
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Paragraph;
