import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowImageResult from "../show/ShowImageResult";

const Trending = (props) => {
  const [TrendingList, setTrendingList] = useState([]);

  const { LoadTrending, API_KEY } = props;

  useEffect(() => {
    axios
      .get(`http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=20&offset=${LoadTrending}`)
      .then(res => {
        console.log(res.data);
        setTrendingList(TrendingList.concat(res.data.data));
      })
      .catch(err => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [LoadTrending]);

  return (
    <>
      <div className="row no-gutters justify-content-center mt-2">
        <div className="col-4 text-center font-weight-bold text-success">TRENDING</div>
      </div>
      <div className="row no-gutters justify-content-center mt-2 mb-5">
        {TrendingList.map((result, i) =>
          <ShowImageResult imageurl={result.images.fixed_width.url} key={i} />
        )}
      </div>
    </>
  );
};

export default Trending;
