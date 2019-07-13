import React from "react";
import "./style.css";

function Result(props) {
  return <h2 className="result">{props.children}</h2>;
}

export default Result;
