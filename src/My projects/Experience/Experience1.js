import React from "react";
import { useState } from "react";
import Data from "../Tour/data/Data";



export default function Experience1() {
  const [value, setValue] = useState(0);
  const [jobs, setJobs] = useState(Data);
  //   console.log(jobs[value]);
  const { id, name, description } = jobs[value];

  return (
    <div className="experienceCon">
      <h3>EXPERIENCE FILTER</h3>
      {jobs.map((job, index) => {
        return (
          <button onClick={() => setValue(index)} key={job.id}>
            {job.role}
          </button>
        );
      })}
      <p>{description}</p>
      <h2>{name}</h2>
    
    </div>
  );
}
