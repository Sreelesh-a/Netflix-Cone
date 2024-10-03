import React from "react";

const VideoBGTitle = ({ title, overview }) => {
  return (
    <div className="absolute z-50 bottom-1/3 left-24 text-white ">
      <div>
        <div className="flex flex-wrap w-1/2 gap-y-4">
          <div className="w-full font-bold text-6xl">{title}</div>
          <p className="w-full">{overview}</p>
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
