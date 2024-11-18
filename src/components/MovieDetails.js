import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import Header from "./Header";
// import SecondaryContainer from "./SecondaryContainer";
import useGetMovieDetails from "../hooks/useGetMovieDetails";
import {
  TMDB_IMG_LINK_W_500,
} from "../utils/constants";
import { useSelector } from "react-redux";
import useGetRecommendMovie from "../hooks/useGetRecommendMovie";
import MovieListRow from "./subComponents/MovieListRow";
// import useUserValidate from "../utils/useUserValidate";
import Footer from "./Footer";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // useUserValidate()
  const userData = useSelector((store) => store.user.user);

  useEffect(()=>{
    
    if (!userData) {
      navigate("/");
    }


  },[userData,navigate])



  useGetMovieDetails(id);
  useGetRecommendMovie(id);
  const movieData = useSelector((store) => store.user.movieDetails);
  const recommendMovies = useSelector((store) => store.user.recommendMovies);

  // const {original_language,title}=movieData
  // const {genres}=movieData

  return (
    <>
      <div className=" px-8 bg-gray-900 sm:px-32 py-6 sm:py-20 text-white pb-20">
        <div className="flex flex-wrap">
          <div className="sm:w-[35%]">
            {movieData?.poster_path ? (
              <img
                className="sm:w-96  rounded-3xl"
                src={TMDB_IMG_LINK_W_500 + movieData?.poster_path}
                alt="movie-img"
              />
            ) : (
              <div>
                <div className="h-[25rem] w-[20rem] sm:w-[25rem] rounded-3xl sm:h-[36rem]  bg-gray-500"></div>
              </div>
            )}
          </div>

          
         
          
          <div className="sm:px-20 px-2 py-4 sm:py-20 sm:w-[65%]">
            <div className=" flex  items-center ">
              <div className=" text-4xl sm:font-medium font-semibold  sm:text-6xl truncate sm:w-full w-64">
                {movieData?.title}
              </div>
              {/* <div className="bg-gray-200 scale-50 text-black text-6xl p-1 sm:p-2 sm:text-3xl rounded-lg text-center  my-auto ">
                {movieData && movieData?.original_language}
              </div> */}
            </div>
            <div className="sm:mt-4">
              <ul className="flex   gap-x-3 file: sm:gap-x-6">
                {movieData?.genres &&
                  movieData?.genres.map((data, index) => (
                    <li key={index}>{data?.name}</li>
                  ))}
              </ul>
            </div>
            <div className="py-6 ">
              <div className="flex gap-x-7">
                <div className="flex flex-wrap items-center text-center">
                  <div className="w-full mx-auto ">
                    <i class="fa-solid fa-plus font-light text-3xl "></i>
                    <div className="">My List</div>
                  </div>
                </div>
                <div>
                  <div className=" bg-white h-14 w-32 text-black flex items-center text-3xl text-center justify-center gap-x-2 rounded-lg">
                    <i class="fa-solid fa-play"></i>
                    <div>Play</div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center text-center">
                  <div className="w-full mx-auto ">
                    <i class="fa-solid fa-circle-info font-light text-3xl"></i>
                    <div className="">info</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="font-medium text-3xl">Overview</div>
                <div className="font-thin">
                  {movieData && movieData?.overview}
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="flex gap-x-4 items-center flex-wrap">
                {movieData?.production_companies &&
                  movieData?.production_companies.map((data) => (
                    <div key={data?.id}>
                      {data?.logo_path && (
                        <img
                          className="w-10 sm:w-16"
                          src={TMDB_IMG_LINK_W_500 + data?.logo_path}
                          alt=""
                        />
                      )}{" "}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="py-4">
            <MovieListRow
              title={"Recommended"}
              movies={recommendMovies}
              recommend={true}
            />
          </div>
        </div>
        <div className="text-white py-5">
          <Link to={"/"}>
            <div
              className="py-5 text-center text-lg bg-red-700 rounded-full cursor-pointer"
              onClick={() => window.scrollTo(0, 0)}
            >
              Return to Home
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MovieDetails;
