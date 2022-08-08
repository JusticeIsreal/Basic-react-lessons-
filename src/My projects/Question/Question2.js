import React from "react";
import { useState } from "react";

function Question2({ name, description }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h2>{name}</h2>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "+" : "-"}
      </button>
      <p>{show ? description : ""}</p>
    </div>
  );
}

export default Question2;
