import { useDispatch, useSelector } from "react-redux"
import { TMDB_API_OPTIONS } from "../utils/constants"
import { addPopular } from "../utils/movieSlice"
import { useEffect } from "react"


const usePopular=()=>{
    const dispatch =useDispatch()
    const popularMovieCheck=useSelector(store=>store.movies.popular)





useEffect(()=>{
  const  GetNowPlayingMovies= async()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/popular?page=1', TMDB_API_OPTIONS)
    const json= await data.json()
   
    dispatch(addPopular(json?.results))
    
    
  }
  
!popularMovieCheck && GetNowPlayingMovies()

},[popularMovieCheck,dispatch])

}

export default usePopular


