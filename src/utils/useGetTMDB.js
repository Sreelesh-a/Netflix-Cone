
import { useEffect, useState } from "react";
import { TMDB_API_OPTIONS } from "./constants";
import { useDispatch } from "react-redux";
import { getAiMovieSuggestions } from "./userSlice";



  


const useGetTMDB=(props)=>{

    const [movieData,setMovieData]=useState(null)

    const dispatch=useDispatch()

    // if(movieData){
    //     dispatch(getAiMovieSuggestions(movieData))
        
    // }

    

    useEffect(()=>{
        if(movieData){
            dispatch(getAiMovieSuggestions(movieData))
        }
    },[movieData,dispatch])




    useEffect(()=>{

        if(!props) return;
        const fetchData=async()=>{
            try{
                const response= await fetch(`https://api.themoviedb.org/3/search/movie?query=${props}&include_adult=false&language=en-US&page=1`, TMDB_API_OPTIONS).then(res => res.json())
                setMovieData(response?.results[0])





            }catch (err){
                console.error("error message :",err)

            }
        }
        fetchData()


    },[props])



}

export default useGetTMDB