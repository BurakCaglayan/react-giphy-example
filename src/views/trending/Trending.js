import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowImageResult from "../show/ShowImageResult";

const Trending = (props) => {
  const [TrendingList, setTrendingList] = useState([]);

  const API_KEY = "xBFIFnun24sYnCaEFwJxRhO12dFDadgn";
  const {LoadTrending} = props;

  useEffect(() => {
    axios
      .get(`http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=20&offset=${LoadTrending}`)
      .then(res => {
        console.log(res.data);

        let responseData = res.data.data;
        let textResponseTrand = [];

        responseData.forEach((element, i) => {
          textResponseTrand.push(<ShowImageResult imageurl={element.images.fixed_width.url} key={LoadTrending + i} />);
        });
        setTrendingList(TrendingList => {
          const list = TrendingList.concat(textResponseTrand);
          return list;
        });
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
      <div className="row no-gutters justify-content-center mt-2 mb-5">{TrendingList}</div>
    </>
  );
};

export default Trending;
