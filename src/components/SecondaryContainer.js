import React from 'react'
import MovieListRow from './subComponents/MovieListRow'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies= useSelector((state)=>state.movies)
  
 
  return (
    <div className='text-white bg-black text-xl  flex flex-wrap sm:gap-y-10 gap-y-3 pb-28 -mt-52 sm:-mt-32 '>
       {/* <MovieListRow title={"Now Playing"} movies={movies?.nowPlaying}/> */}
      <MovieListRow title={"Now Playing"} movies={movies?.nowPlaying}/>
      <MovieListRow title={"Popular"} movies={movies?.popular}/>
      <MovieListRow title={"Top Rated"} movies={movies?.topRated}/>
      
    </div>
  )
}

export default SecondaryContainer
