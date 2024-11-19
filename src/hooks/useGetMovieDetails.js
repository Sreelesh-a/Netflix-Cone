import { useDispatch } from "react-redux";
import { addMovieSubDetails } from "../utils/userSlice";

const { useEffect, useState } = require("react");
const { TMDB_API_OPTIONS } = require("../utils/constants");

const useGetMovieDetails = (id) => {
  const [movieData, setMovieData] = useState(null);
  const dispatch = useDispatch();

  // const movieDetailsfetch = useSelector((store) => store.user.movieDetails);
  // console.log(movieDetailsfetch);



  // if(movieData){
  //     return movieData
  // }

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
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
    if (id) {
      fetchMovieDetails();
    }
  }, [id, dispatch]);

  // return movieData;
  dispatch(addMovieSubDetails(movieData));
};

export default useGetMovieDetails;
