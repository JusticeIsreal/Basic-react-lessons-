import React from "react";
import Data from "../Tour/data/Data";
import { useState } from "react";

function Reviews() {
  const [index, setIndex] = useState(0);
  const { id, name, description } = Data[index];

  const condition = (number) => {
    if (number > Data.length - 1) {
      return (number = 0);
    }
    if (number < 0) {
      return (number = Data.length - 1);
    }
    return number;
  };

  const forward = () => {
    setIndex((index) => {
      let newVal = index + 1;
      return condition(newVal);
    });
  };
  const backward = () => {
    setIndex((index) => {
      let newVal = index - 1;
      return condition(newVal);
    });
  };

  const random = () => {
    let newVal = Math.floor(Math.random() * Data.length);
    if (newVal === index) {
      newVal = index + 1;
    }
    setIndex(condition(newVal));
  };

  return (
    <div key={id} className="review">
      <h1>REVIEWS</h1>
      <h3>{name}</h3>
      <p>{description}</p>
      <div>
        <button onClick={() => forward()}>front</button>
        <button onClick={() => backward()}>back</button>
        <button onClick={() => random()}>random</button>
      </div>
    </div>
  );
}

export default Reviews;
