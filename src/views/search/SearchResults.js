import React from "react";
import ShowImageResult from "../show/ShowImageResult"

const SearchResults = props => {
  if (props.data.length < 1) {
    return null;
  } else {
    return (
      <>
        <div className="row no-gutters justify-content-center mt-3">
          {props.data.map((result, i) =>
            <ShowImageResult imageurl={result.images.fixed_width.url} key={i} />
          )}
        </div>
        <div className="row no-gutters justify-content-center text-center mt-2">
          <div className="col-3">
            <button className="btn btn-success rounded-0 btn-block mt-2" onClick={props.handleLoadMoreClick}>Load More</button>
          </div>
        </div>
      </>
    );
  }
};

export default SearchResults;
