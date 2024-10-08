import React from 'react'
import VideoBG from './subComponents/VideoBG'
import VideoBGTitle from './subComponents/VideoBGTitle'
import { useSelector } from 'react-redux'
import MovieListRow from './subComponents/MovieListRow'


const MainContainer = () => {

    const movie = useSelector((store)=>store.movies?.nowPlaying)
    if(!movie) return;
    const topMovie= movie[11]
    const {title,overview}=topMovie
    const id= topMovie?.id 
 
    
    
  return (
    <div>
      <div className=''> <MovieListRow title={"Now Playing"} movies={movie}/></div>
     
      <VideoBGTitle title={title} overview={overview}/>
      <VideoBG id={id}/>
    </div>
  )
}

export default MainContainer
