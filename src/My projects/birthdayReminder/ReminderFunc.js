import React from "react";
import { useState } from "react";
import Reminder from "./Reminder";
import Data from "./data/Data";
// import style from "../style/Style.css";

export default function ReminderFunc() {
  const [people, setPeople] = useState(Data);
  return (
    <div className="birthdayCon">
      <h1>BIRTHDAY REMINDER</h1>
      <h5>{people.length} Birthday for the month</h5>
      <Reminder people={people} />
      <button
        onClick={() => {
          setPeople([]);
        }}
      >
        DELETE ALL
      </button>
    </div>
  );
}
