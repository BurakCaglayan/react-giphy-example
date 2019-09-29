import React, { useState, useEffect } from "react";

import SearchMain from "./views/search/SearchMain";
import Trending from "./views/trending/Trending";

const App = () => {
  // Defining states to use
  const [LoadTrending, setLoadTrending] = useState(0)
  const [randomCounter, setRandomCounter] = useState(0);

  const API_KEY = "xBFIFnun24sYnCaEFwJxRhO12dFDadgn";

  useEffect(() => {
    randomCounter !== 0 ? setLoadTrending(LoadTrending => LoadTrending + 20) : console.log("randomCounter = 0");
  }, [randomCounter])

  // For loading with scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setRandomCounter(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <>
      <div className="container">
        <SearchMain API_KEY={API_KEY} />
        <hr className="border border-danger" />
        <Trending LoadTrending={LoadTrending} />
      </div>
    </>
  );
};

export default App;
