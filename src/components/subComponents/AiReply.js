import React from 'react'
import { TMDB_IMG_LINK_W_500 } from '../../utils/constants'

const AiReply = ({data}) => {
   
  return (
    <div>
        <div>
            {
                data?.poster_path && (
                    <img className='w-24 sm:w-36 rounded-xl' src={TMDB_IMG_LINK_W_500+data?.poster_path} alt='movie'/>
                )
            }
          
                
           
        </div>
      
    </div>
  )
}

export default AiReply
