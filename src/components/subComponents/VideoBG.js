import React from 'react'
import useGetTrailer from '../../hooks/useGetTrailer'
import { useSelector } from 'react-redux'

const VideoBG = ({id}) => {

    useGetTrailer(id)
    const trailerKey= useSelector((store)=>store.movies?.trailer)
    
  return (
    <div className=''>
        <div className="overflow-hidden ">
          {/* <div className='absolute z-50  bottom-12 bg-red-700 w-full h-11 '> 

          </div> */}
      <iframe
      title='video'
        className=" sm:w-screen h-screen aspect-video -mt-10 sm:-ml-0 -ml-14   sm:scale-125 "
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${trailerKey}&mute=1&modestbranding=1&iv_load_policy=3`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
    </div>
  )
}

export default VideoBG
