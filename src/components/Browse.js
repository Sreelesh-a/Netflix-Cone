import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import GPTPage from "./subComponents/GPTPage";

const Browse = () => {
  useNowPlaying()
  usePopular()
  useTopRated()
  return (
    <div className="bg-black ">
      <Header />
      <GPTPage/>
      <MainContainer/>
      <SecondaryContainer/>
      

    </div>
  );
};

export default Browse;
 