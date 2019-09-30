import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import SearchResults from "./SearchResults";

const SearchMain = (props) => {
  const [SearchResult, setSearchResult] = useState([]);
  const [LoadOffset, setLoadOffset] = useState(0);
  const [SearchText, setSearchText] = useState(null);

  const { API_KEY } = props;

  useEffect(() => {
    if (SearchText === null) {
      console.log("SearchText Null");
    } else {
      axios
        .get(`http://api.giphy.com/v1/gifs/search?q=${SearchText}&api_key=${API_KEY}&limit=8&offset=${LoadOffset}`)
        .then(res => {
          console.log(res.data);
          setSearchResult(SearchResult.concat(res.data.data));
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [SearchText, LoadOffset]);

  const handleSearchClick = text => {
    if (SearchText !== text) {
      setSearchResult([]);
      setLoadOffset(0);
      setSearchText(text);
    }
    else {
      console.log("Same text");
    }
  };

  const handleLoadMoreClick = () => {
    setLoadOffset(LoadOffset + 8);
  };

  return (
    <>
      <Search handleSearchClick={handleSearchClick} />
      <hr className="border border-danger" />
      <div className="row no-gutters justify-content-center text-center">
        <p className="text-info font-weight-bold">Results:</p>
      </div>
      <SearchResults data={SearchResult} handleLoadMoreClick={handleLoadMoreClick} />
    </>
  );
};

export default SearchMain;
