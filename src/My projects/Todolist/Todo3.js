import React from "react";
import { useState } from "react";

function Todo3({ id, title, editList, deleteList }) {
  const [read, setRead] = useState(false);
  return (
    <div>
      <div>
        <div className="list">
          <div className="txt">
            <div>
              {read ? title : `${title.substring(0, 100)}...`}
              <p onClick={() => setRead(!read)}>
                {read ? "Read less" : "Read more"}
              </p>
            </div>
          </div>
          <div className="btn">
            <button onClick={() => editList(id, title)}>edit</button>
            <button onClick={() => deleteList(id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo3;
