import React from "react";
import Todo3 from "./Todo3";
import { useState } from "react";

function Todo2({ list, editList, deleteList }) {
  return (
    <div>
      <div className="listCon">
        {list.map((item) => {
          return (
            <div>
              <Todo3
                key={item.id}
                {...item}
                editList={editList}
                deleteList={deleteList}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo2;
