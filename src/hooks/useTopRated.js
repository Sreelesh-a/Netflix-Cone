import { useDispatch } from "react-redux"
import { TMDB_API_OPTIONS } from "../utils/constants"
import { addTopRated } from "../utils/movieSlice"
import { useEffect } from "react"


const useTopRated=()=>{
    const dispatch =useDispatch()

const  GetNowPlayingMovies= async()=>{
  const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?page=2', TMDB_API_OPTIONS)
  const json= await data.json()
 
  dispatch(addTopRated(json?.results))
  console.log(json?.results)
  
}



useEffect(()=>{
GetNowPlayingMovies()

},[])

}

export default useTopRated


