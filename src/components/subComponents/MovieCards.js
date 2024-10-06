import React, { useRef, useState } from "react";
import { TMDB_IMG_LINK_W_500 } from "../../utils/constants";

import Slider from "react-slick/lib/slider";

const MovieCards = ({ res,  topRatedRow }) => {
  const [movieDetails,setMovieDetails]=useState(false)

  // console.log(res)
  return (
    <div onMouseOver={() => setMovieDetails(true)} onMouseOut={() => setMovieDetails(false)}  className="relative  overflow-visible">
      {movieDetails && (

<div>
<div className="absolute z-50 bottom-0 left-0 w-96  text-white p-4 transform -translate-y-5 translate-x-5">
 <div>{res?.title}</div>

</div>

</div>

      )}
      
      <div className="relative ">
        <img
          className="w-52 object-cover scale-105"
          src={topRatedRow ? TMDB_IMG_LINK_W_500 + res?.poster_path : TMDB_IMG_LINK_W_500 + res?.backdrop_path}
          alt="MovieBanner"
        />
      </div>
    </div>
  );
};

export default MovieCards;
