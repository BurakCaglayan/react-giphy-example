import React from "react";
import "./ShowImageResult.css";

const ShowImageResult = props => {
  return (
    <div className="col-6 col-md-3 mt-2 justify-content-center text-center">
      <img className="img-fluid imageHeight px-1" src={props.imageurl} alt="" />
    </div>
  );
};

export default ShowImageResult;
