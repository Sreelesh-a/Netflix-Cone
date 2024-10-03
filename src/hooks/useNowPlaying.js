import { useDispatch } from "react-redux"
import { TMDB_API_OPTIONS } from "../utils/constants"
import { addNowPlaying } from "../utils/movieSlice"
import { useEffect } from "react"


const useNowPlaying=()=>{
    const dispatch =useDispatch()

const  GetNowPlayingMovies= async()=>{
  const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', TMDB_API_OPTIONS)
  const json= await data.json()
 
  dispatch(addNowPlaying(json?.results))
  console.log(json?.results)
}



useEffect(()=>{
GetNowPlayingMovies()

},[])

}

export default useNowPlaying


