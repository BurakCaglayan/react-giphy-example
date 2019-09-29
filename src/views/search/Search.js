import React, { useRef } from "react";

const Search = props => {
  const inputSearch = useRef(null);

  return (
    <div className="row no-gutters justify-content-center mt-5">
      <div className="col-6">
        <div className="form-group">
          <input type="text" className="form-control rounded-0" placeholder="Search" ref={inputSearch} />
          <button
            className="btn btn-outline-danger btn-block mt-1 rounded-0"
            onClick={() => props.handleSearchClick(inputSearch.current.value)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
