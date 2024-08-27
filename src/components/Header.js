import React from "react";
import { NETFLIX_LOGO } from "../utils/constants";

function Header() {
  return (
    <div className="absolute px-32 py-6 z-50 bg-gradient-to-b w-full from-black">
      <div>
        <img className="w-44 " src={NETFLIX_LOGO} alt="Logo" />
      </div>
    </div>
  );
}

export default Header;
