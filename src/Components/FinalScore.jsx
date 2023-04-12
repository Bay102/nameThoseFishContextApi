import React from "react";
import { useAppContext } from "../AppContext.context";


export const FinalScore = () => {
  const {correct} = useAppContext();

  return (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correct}</p>
      <hr />
      <p>4</p>
    </div>
  </div>
  )
};
