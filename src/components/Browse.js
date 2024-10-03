import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlaying()
  return (
    <div className="bg-black h-screen">
      <Header />
      <MainContainer/>

    </div>
  );
};

export default Browse;
 