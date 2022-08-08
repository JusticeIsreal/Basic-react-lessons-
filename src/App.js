import React from "react";
import { useLayoutEffect, useEffect, useRef, useState } from "react";
import TodoListWithuseStateAnduseRef from "./Componets/TodoListWithuseStateAnduseRef";
import WithuseStateAnduseRef from "./Componets/WithuseReducer";
import ReminderFunc from "./My projects/birthdayReminder/ReminderFunc";
import Tour1 from "./My projects/Tour/Tour1";
import Reviews from "./My projects/Reviews/Reviews";
import Question1 from "./My projects/Question/Question1"
import Filter from "./My projects/Filter/Filter1"
import Filter1 from "./My projects/Filter/Filter1";
import Experience1 from "./My projects/Experience/Experience1";
import Paragraph from "./My projects/ParagraphGenerator/Paragraph"

function App() {
  return (
    <div>
      {/* <TodoListWithuseStateAnduseRef /> */}

      {/* <WithuseStateAnduseRef />  */}
      {/* <ReminderFunc /> */}
      {/* <Tour1 /> */}
      {/* <Reviews /> */}
      {/* <Question1 /> */}
      {/* <Filter1 /> */}
      {/* <Experience1 /> */}
      <Paragraph />
    </div>
  );
}

export default App;
