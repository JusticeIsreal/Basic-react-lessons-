import React from "react";
import { useState } from "react";

function Tour3({ id, name, description, deleteTour }) {
  const [read, setRead] = useState(false);
  return (
    <div className="tour3">
      <h3>{name}</h3>
      <h5>
        {read ? description : `${description.substring(0, 100)}...`}{" "}
        <p onClick={() => setRead(!read)}>{read ? "Read more" : "Read less"}</p>
      </h5>
      <button onClick={() => deleteTour(id)}>DELETE</button>
    </div>
  );
}

export default Tour3;
