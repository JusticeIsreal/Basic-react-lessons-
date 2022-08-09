import React from "react";
import Tour3 from "./Tour3";

function Tour2({ tour, deleteTour }) {
  return (
    <div className="tour">
      <h1>TOUR LIST</h1>
      {tour.map((item) => {
        return <Tour3 key={item.id} {...item} deleteTour={deleteTour} />;
      })}
    </div>
  );
}

export default Tour2;
