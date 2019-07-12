import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="col-sm-12 col-md-4 col-lg-4 my-2 text-center">
      <div className="customCard" state={props.clicked.toString()} key={props.id.toString()}>
        <div className="img-container">
          <img className="img-fluid" alt={props.id} src={props.imageUrl} />
        </div>
        <div>
          <button type="button" className ="btn btn-primary btn-block" onClick={() => props.clickImage(props.id)}>id: {props.id}</button>
        </div>
      </div>
    </div>
  );
}
export default Card;