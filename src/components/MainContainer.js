import React from 'react'
import VideoBG from './subComponents/VideoBG'
import VideoBGTitle from './subComponents/VideoBGTitle'
import { useSelector } from 'react-redux'
import useGetTrailer from '../hooks/useGetTrailer'

const MainContainer = () => {

    const movie = useSelector((store)=>store.movies?.nowPlaying)
    if(!movie) return;
    const topMovie= movie[5]
    const {title,overview}=topMovie
    const id= topMovie?.id 
    
    
  return (
    <div>
      <VideoBGTitle title={title} overview={overview}/>
      <VideoBG id={id}/>
    </div>
  )
}

export default MainContainer
