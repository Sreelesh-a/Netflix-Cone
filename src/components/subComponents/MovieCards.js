import React from "react";
import { TMDB_IMG_LINK_W_500 } from "../../utils/constants";


const MovieCards = ({ res }) => {


  // console.log(res)
  return (
    <div
      
      className="relative  overflow-visible"
    >
   
      <div className="relative ">
        <img
          className="w-52 object-cover scale-105  " 
          src={
            TMDB_IMG_LINK_W_500 + res?.poster_path
              
          }
          alt="MovieBanner"
        />
      </div>
    </div>
  );
};

export default MovieCards;
