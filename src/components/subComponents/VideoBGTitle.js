import React from "react";

const VideoBGTitle = ({ title, overview }) => {
  return (
    <div className="w-full absolute z-50 sm:-bottom-11 -bottom-14 py-64 sm:px-12 px-8  left-0 text-white bg-gradient-to-t from-black ">
      <div className="">
        <div className="flex flex-wrap w-1/2 gap-y-4">
          <div className="w-full font-bold text-5xl md:text-6xl">{title}</div>
          <div className=" truncate ">{overview}</div>
        </div>
        <div className="pt-5 flex gap-x-3">
          <button className="px-6 bg-white rounded-sm py-3 text-gray-900 font-bold"><i class="fa-solid fa-play mr-1"></i> Play</button>
          <button className="px-8 bg-gray-900 rounded-sm bg-opacity-25 py-3 text-white font-bold"><i class="fa-solid fa-circle-info mr-1" ></i>More Info</button>
        </div>
      </div>
    </div>
  );
};

export default VideoBGTitle;
