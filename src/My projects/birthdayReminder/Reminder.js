import React from "react";

export default function Reminder({ people }) {
  return (
    <div className="birthdayNames">
      {people.map((person) => {
        const { id, name, description } = person;
        return (
          <div key={id} className="birth">
            <h3>{name}</h3>
            <p>{description} </p>
          </div>
        );
      })}
    </div>
  );
}
