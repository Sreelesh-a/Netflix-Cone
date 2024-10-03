import { useDispatch } from "react-redux"
import { json } from "react-router-dom"
import { addTrailer } from "../utils/movieSlice"

const { useEffect } = require("react")
const { TMDB_API_OPTIONS } = require("../utils/constants")


const useGetTrailer=(props)=>{
    const dispatch=useDispatch()
    

    const GetTrailerData= async()=>{
        const apiLink= 'https://api.themoviedb.org/3/movie/'+props+"/videos"
        const data= await fetch(apiLink, TMDB_API_OPTIONS)
        const json = await data.json()
        const trailer= json?.results.filter((res)=>res?.type=="Trailer" )
        
        const trailerKey=trailer[1]?.key
        const trailerURL="https://www.youtube.com/watch?v="+trailerKey
        dispatch(addTrailer(trailerKey))
        
       
        
        
    }




    useEffect(()=>{
        GetTrailerData()
    })



    
}

export default useGetTrailer