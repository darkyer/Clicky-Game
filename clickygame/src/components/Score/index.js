import React from "react";
import "./style.css";

function Score(props) {
  return (
    <div className="text-center">
        <p className="card-text">Score: {props.score}</p>
    </div>
  );
}

export default Score;
