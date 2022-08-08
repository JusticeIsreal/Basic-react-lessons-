import React from "react";
import { useState } from "react";
import Reminder from "./Reminder";
import Data from "./data/Data";

export default function ReminderFunc() {
  const [people, setPeople] = useState(Data);
  return (
    <div>
      <h3>BIRTHDAY REMINDER</h3>
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
