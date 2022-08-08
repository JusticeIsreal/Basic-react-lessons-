import React from "react";
import Data from "./data/Data";
import { useState } from "react";
import Tour2 from "./Tour2";

function Tour1() {
  const [loading, setLoading] = useState(false);
  const [tour, setTour] = useState(Data);

  const deleteTour = (id) => {
    let newList = tour.filter((item) => item.id !== id);
    setTour(newList);
  };
  if (loading) {
    return (
      <main>
        <h2> Loading... </h2>
      </main>
    );
  }
    return <Tour2 tour={tour} deleteTour={deleteTour } />;
}

export default Tour1;
