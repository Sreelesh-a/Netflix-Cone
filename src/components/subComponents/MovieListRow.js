import React, { useRef, useState } from "react";
import MovieCards from "./MovieCards";
import Slider from "react-slick/lib/slider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const MovieListRow = ({ title, movies,recommend }) => {
  const [showNextArrow, setShowNextArrow] = useState(true);
  const [showPrevArrow, setSHowPrevArrow] = useState(true);
  const [isFirstSLide, setIsFirstSlide] = useState(false);
 

  // let handleAbsolute= title === "Now Playing"

  // let topRatedRow= title=== "Top Rated"

  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 4,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => {
      setIsFirstSlide(next === 0);
    },

    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const goToNextSlide = () => {
    // setSHowPrevArrow(true)

    if (sliderRef) {
      sliderRef.slickNext();
    }
  };
  const goToPrevSlide = () => {
    if (sliderRef) {
      sliderRef.slickPrev();
    }
  };

  const cardMouseOver = () => {
    setShowNextArrow(true);
    setSHowPrevArrow(true);
    if (isFirstSLide) {
      // setSHowPrevArrow(true)
    }
  };

  return (
    <div className={`flex flex-wrap gap-y-3 w-full ${recommend ? `sm:px-0` : 'sm:px-12'} px-2   z-50`}>
      <div className=" text-white font-light w-full">
        <div className="text-white font-medium">{title}</div>
      </div>
      <div
        onMouseOver={cardMouseOver}
        onMouseOut={() => {
          setShowNextArrow(false);
        }}
        onMouseLeave={() => setSHowPrevArrow(false)}
        className=" w-full relative overflow-visible"
      >
        <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
          {movies &&
            movies.map((res) => ( <div className="sm:px-2 px-1 " key={res?.id}><Link onClick={()=>window.scrollTo(0,0)} to={`/movie/${res?.id}`}><MovieCards  res={res} /></Link></div>))}
        </Slider>
        <div>
          {movies && (
            <div>
              {showNextArrow && (
          <div className="hidden sm:block">
            <button
              className={`absolute  right-0  bottom-32`}
              onClick={goToNextSlide}
            >
              <ChevronRight className="size-14 text-white" />
            </button>
          </div>
        )}
        {showPrevArrow && (
          <div className="hidden sm:block">
            <button
              className={`  absolute  left-0  bottom-32  `}
              onClick={goToPrevSlide}
            >
              <ChevronLeft className="size-14 text-white" />
            </button>
          </div>
        )}
            </div>
          )}

        </div>
        
      </div>
    </div>
  );
};

export default MovieListRow;
