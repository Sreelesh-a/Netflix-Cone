import React, { useRef, useState } from "react";
import MovieCards from "./MovieCards";
import Slider from "react-slick/lib/slider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { current } from "@reduxjs/toolkit";




const MovieListRow = ({ title, movies }) => {
    const [showNextArrow,setShowNextArrow]=useState(false)
    const [showPrevArrow,setSHowPrevArrow]=useState(false)
    const [isFirstSLide,setIsFirstSlide]=useState(false)
    let handleAbsolute= title === "Now Playing"
   
    let topRatedRow= title=== "Top Rated"

    
    let sliderRef = useRef(null);
    
  
  
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 4,
      autoplay: false,
      speed:1000,
      autoplaySpeed: 3000,
      beforeChange:(current,next)=>{
        setIsFirstSlide(next===0)

      },
      
      arrows: false,

    }; 
    const goToNextSlide = () => {
        setSHowPrevArrow(true)
       
        if (sliderRef) {
          sliderRef.slickNext();
        }
      };
      const goToPrevSlide=()=>{
        if(sliderRef){
            sliderRef.slickPrev()
        }
      }

      const cardMouseOver=()=>{
        setShowNextArrow(true)
        if(isFirstSLide){
            setSHowPrevArrow(true)
        }
        

      }
      
   
  return (
    <div className={` flex flex-wrap gap-y-3 w-full px-12 ${handleAbsolute && `absolute z-50 bottom-0 `}`}>
      <div  className=" text-white font-light w-full">
        <div className="text-white font-medium">{title}</div>
      </div>
      <div onMouseOver={cardMouseOver} onMouseOut={()=>{setShowNextArrow(false)}}  onMouseLeave={()=>setSHowPrevArrow(false)} className=" w-full relative overflow-visible">
      <Slider ref={slider => (sliderRef = slider)} {...settings}>
        {movies && movies.map((res)=>(
            <MovieCards key={res?.id } res={res} topRatedRow={topRatedRow}/>
        ))}
         </Slider>
         {showNextArrow && (
            <div><button  
            className={`absolute ${topRatedRow ? `bottom-28` : `bottom-6` }   right-0 p-2   mr-2 `}
            onClick={goToNextSlide}
          >
            <ChevronRight className="size-14 text-white" />
          </button></div>
         )}
         {showPrevArrow && (
            <div><button  
            className={`absolute ${topRatedRow ? `bottom-28` : `bottom-6` }   left-0 p-2   mr-2 `}
            onClick={goToPrevSlide}
           
          >
            <ChevronLeft className="size-14 text-white" />
          </button></div>
         )}
     
      </div>
      
    </div>
  );
};

export default MovieListRow;
