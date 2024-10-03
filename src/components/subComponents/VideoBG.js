import React from 'react'
import useGetTrailer from '../../hooks/useGetTrailer'
import { useSelector } from 'react-redux'

const VideoBG = ({id}) => {

    const getTrailerData= useGetTrailer(id)
    const trailerKey= useSelector((store)=>store.movies?.trailer)
    
  return (
    <div className=''>
        <div className="">
          <div className='absolute z-50 bottom-12 bg-black w-full h-12 '> hai

          </div>
      <iframe
        className="absolute bottom-12 w-full aspect-video "
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
