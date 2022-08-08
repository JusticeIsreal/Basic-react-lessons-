import React from 'react'
import Data from "../Tour/data/Data"
import Question2 from "./Question2"

function Question1() {

  return (
      <div>{Data.map((item) => {
          return <Question2 key={ item.id} {...item} />
      }) }</div>
  )
}

export default Question1