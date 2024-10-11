import React from "react";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";

const AccountHover = ({ showUserIcon }) => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
  }
  return (
    <div className="absolute z-100 right-10 mt-20 ">
      <div className="text-gray-200  text-xl  ml-52">
        
        <i class="fa-solid fa-caret-up "></i>
      
      </div>
      <div className=" text-white  w-64 bg-black bg-opacity-90 px-5 -mt-3 py-7">
        <div>
          <ul className="w-full  flex  flex-col gap-y-8 text-lg text-white font-light">
            <li className=" cursor-pointer hover:text-gray-400 hover:scale-95">
              <i class="fa-solid fa-pencil text-xl text-gray-400 mr-4 cursor-pointer"></i>
              Manage Profile
            </li>
            <li className="cursor-pointer  hover:text-gray-400 hover:scale-95" >
              <i class="fa-solid fa-money-bill-transfer text-xl text-gray-200 mr-4"></i>
              Transfer Profile
            </li>
            <li className=" cursor-pointer hover:text-gray-400 hover:scale-95">
              <i class="fa-regular fa-user text-xl text-gray-400 mr-4"></i>
              Account
            </li>
          </ul>
          <hr className="w-full border-gray-700 my-6" />
          <div
            onClick={handleSignOut}
            className="w-full  pb-2 text-center text-white cursor-pointer hover:scale-95 hover:text-gray-400"
          >
            Sign out of Netfix
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountHover;
