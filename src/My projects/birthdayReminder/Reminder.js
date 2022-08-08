import React from "react";

export default function Reminder({ people }) {
  return (
    <div>
      {people.map((person) => {
        const { id, name, description } = person;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <p>{description} </p>
          </div>
        );
      })}
    </div>
  );
}
