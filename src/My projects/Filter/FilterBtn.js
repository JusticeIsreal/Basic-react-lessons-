import React from "react";

function FilterBtn({ filterList, dynamicBtn }) {
  return (
    <div className="FilterBtn">
      {dynamicBtn.map((item, index) => {
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
