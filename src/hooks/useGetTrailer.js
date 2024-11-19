import { useDispatch, useSelector } from "react-redux"
import { json } from "react-router-dom"
import { addTrailer } from "../utils/movieSlice"

const { useEffect } = require("react")
const { TMDB_API_OPTIONS } = require("../utils/constants")


const useGetTrailer=(props)=>{
    const dispatch=useDispatch()
    const trailerData= useSelector(store=>store.movies.trailer)

    

  



    useEffect(()=>{
        const GetTrailerData= async()=>{
            const apiLink= 'https://api.themoviedb.org/3/movie/'+props+"/videos"
            const data= await fetch(apiLink, TMDB_API_OPTIONS)
            const jsonData = await data.json()
            const trailer= jsonData?.results.filter((res)=>res?.type==="Trailer" )
            
            const trailerKey=trailer[0]?.key ? trailer[0]?.key : json?.results[0]?.key
            // const trailerURL="https://www.youtube.com/watch?v="+trailerKey
            dispatch(addTrailer(trailerKey))
            
           
            
            
        }
    
        !trailerData && GetTrailerData()
    },[dispatch,trailerData,props])



    
}

export default useGetTrailer