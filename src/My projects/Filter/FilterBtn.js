import React from "react";

function FilterBtn({ filterList, dynamicBtn }) {
  return (
    <div>
      <button onClick={() => filterList("All")}>All</button>
      {dynamicBtn.map((item, index) => {
        // const { id, name } = item;
        return (
          <button onClick={() => filterList(item)} key={index}>
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default FilterBtn;
