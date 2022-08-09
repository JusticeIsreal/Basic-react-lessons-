import React from "react";
import { useState } from "react";

function Question2({ name, description }) {
  const [show, setShow] = useState(false);
  return (
    <div className="question2">
      <div className="quest">
        <h3>{name}</h3>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? " + " : " - "}
        </button>
      </div>
      <p>{show ? description : " "}</p>
    </div>
  );
}

export default Question2;
