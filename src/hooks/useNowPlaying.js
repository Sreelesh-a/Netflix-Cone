import { useDispatch, useSelector } from "react-redux"
import { TMDB_API_OPTIONS } from "../utils/constants"
import { addNowPlaying } from "../utils/movieSlice"
import { useEffect } from "react"


const useNowPlaying=()=>{
    const dispatch =useDispatch()
    const nowplayingCheck= useSelector(store=>store.movies.nowPlaying)
    





useEffect(()=>{
  const  GetNowPlayingMovies= async()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=2', TMDB_API_OPTIONS)
    const json= await data.json()
   
    dispatch(addNowPlaying(json?.results))
    
  }
!nowplayingCheck && GetNowPlayingMovies()

},[dispatch,nowplayingCheck])

}

export default useNowPlaying


