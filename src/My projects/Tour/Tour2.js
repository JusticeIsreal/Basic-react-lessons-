import React from "react";
import Tour3 from "./Tour3";

function Tour2({ tour, deleteTour }) {
  return (
    <>
      {tour.map((item) => {
        return <Tour3 key={item.id} {...item} deleteTour={deleteTour} />;
      })}
    </>
  );
}

export default Tour2;
