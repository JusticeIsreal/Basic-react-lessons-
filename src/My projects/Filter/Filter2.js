import React from "react";

function Filter2({ product }) {
  return (
    <div className="filterDetails">
      {product.map((item) => {
        const { id, name, description } = item;
        return (
          <div key={id} className="filterItem">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Filter2;
