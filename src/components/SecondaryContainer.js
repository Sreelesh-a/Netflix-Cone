import React from 'react'
import MovieListRow from './subComponents/MovieListRow'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies= useSelector((state)=>state.movies)
 
  return (
    <div className='text-white bg-black text-xl  flex flex-wrap gap-y-10 pb-10'>
      <MovieListRow title={"Now Playing"} movies={movies?.nowPlaying}/>
      <MovieListRow title={"Popular"} movies={movies?.popular}/>
      <MovieListRow title={"Top Rated"} movies={movies?.topRated}/>
      
    </div>
  )
}

export default SecondaryContainer
