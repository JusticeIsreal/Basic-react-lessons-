import React from "react";
import { useState } from "react";
import Filter2 from "./Filter2";
import FilterBtn from "./FilterBtn";
import Data from "../Tour/data/Data";

const dynamicFilter = ["All", ...new Set(Data.map((item) => item.name))];

function Filter1() {
  const [product, setProduct] = useState(Data);
  const [cat, setCat] = useState(dynamicFilter);

  const filterList = (name) => {
    if (name === "All") {
      setProduct(Data);
      return;
    }
    let newList = Data.filter((newOne) => newOne.name === name);
    setProduct(newList);
  };
  return (
    <div className="Filter1">
      <h3>Filter Products</h3>
      <FilterBtn filterList={filterList} dynamicBtn={cat} />
      <Filter2 product={product} />
    </div>
  );
}

export default Filter1;
