import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="col-sm-12 col-md-4 col-lg-4 my-2 text-center">
      <div className="customCard" state={props.clicked.toString()} key={props.id}>
        <div className="img-container">
          <img className="img-fluid" alt={props.index} src={props.imageUrl} onClick={() => props.clickImage(props.id)}/>
        </div>
      </div>
    </div>
  );
}
export default Card;