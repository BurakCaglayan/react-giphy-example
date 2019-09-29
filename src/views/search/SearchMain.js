import React, { useState, useEffect } from "react";
import axios from "axios";

import ShowImageResult from "../show/ShowImageResult";
import Search from "./Search";
import SearchResults from "./SearchResults";

const SearchMain = (props) => {
  const [SearchResult, setSearchResult] = useState([]);
  const [LoadOffset, setLoadOffset] = useState(0);
  const [SearchText, setSearchText] = useState(null);

  const {API_KEY} = props;

  useEffect(() => {
    if (SearchText === null) {
      console.log("SearchText Null");
    } else {
      axios
        .get(`http://api.giphy.com/v1/gifs/search?q=${SearchText}&api_key=${API_KEY}&limit=8`)
        .then(res => {
          console.log(res.data);

          let responseData = res.data.data;
          let textResponseSearch = [];

          responseData.forEach((element, i) => {
            textResponseSearch.push(<ShowImageResult imageurl={element.images.fixed_width.url} key={i} />);
          });
          setSearchResult(textResponseSearch);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [SearchText]);

  useEffect(() => {
    if (LoadOffset === 0) {
      console.log("Loading Offset = 0");
    } else {
      axios
        .get(
          `http://api.giphy.com/v1/gifs/search?q=${SearchText}&api_key=${API_KEY}&limit=8&offset=${LoadOffset}`
        )
        .then(res => {
          console.log(res.data);
          let responseData = res.data.data;
          let textResponseSearchS = [];
          responseData.forEach((element, i) => {
            textResponseSearchS.push(<ShowImageResult imageurl={element.images.fixed_width.url} key={LoadOffset + i} />);
          });
          setSearchResult(SearchResult => {
            const list = SearchResult.concat(textResponseSearchS);
            return list;
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [LoadOffset]);

  const handleSearchClick = text => {
    setSearchText(text);
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
