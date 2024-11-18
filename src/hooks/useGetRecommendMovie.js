import { useDispatch } from "react-redux";
import { getRecommendMovies } from "../utils/userSlice";

const { useEffect, useState } = require("react");
const { TMDB_API_OPTIONS } = require("../utils/constants");

const useGetRecommendMovie = (id) => {
  const [movieData, setMovieData] = useState(null);
  const dispatch = useDispatch();

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
        TMDB_API_OPTIONS
      );

      if (!response) {
        throw new Error("Failed to fetch Movie Details");
      }
      const data = await response.json();
      setMovieData(data);
    } catch (err) {
      console.error("error - movie Details :", err);
    }
  };



  useEffect(() => {
    if (id) {
      fetchMovieDetails();
    }
  }, [id,dispatch]);

//   console.log(movieData?.results)

  // return movieData;
  dispatch(getRecommendMovies(movieData?.results))

};

export default useGetRecommendMovie;
