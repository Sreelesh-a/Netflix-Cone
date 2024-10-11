import React, { useEffect, useState } from "react";
import { NETFLIX_LOGO, USER_ICON } from "../utils/constants";
// import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import AccountHover from "./subComponents/AccountHover";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [showUserIcon, setShowUserIcon] = useState(false);
  // const [showUserHeader, setShowUserHeader] = useState(false);
  const dispatch = useDispatch();


  

  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);



  return (
    <div className="relative">
      {user ? (
        <div className="">
          <div  className="absolute sm:px-12 justify-between flex px-4 py-4 sm:py-6 z-100 bg-gradient-to-b  w-full from-gray-950 ">
            
            <div className="text-gray-300 gap-2 flex items-center ">
              <img className="w-44 " src={NETFLIX_LOGO} alt="Logo" />
              <ul className="flex gap-4 text-xs">
                <li>Home</li>
                <li>TV SHows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse My Language</li>
              </ul>
            </div>
            <div className="justify-between items-center gap-7 flex text-white">
              <i class="fa-solid fa-magnifying-glass text-xl"></i>
              {user && user.displayName}

              <i class="fa-regular fa-bell text-xl"></i>

              <div
                // onMouseOver={() => setShowUserIcon(true)}
                // onMouseOut={() => setShowUserIcon(false)}
                onClick={() => setShowUserIcon(!showUserIcon)}
                className="flex items-center gap-2 "
              >
                <img alt="userImage" className="size-8 " src={USER_ICON} />
                <div className="text-gray-300">
                  {showUserIcon ? (
                    <i class="fa-solid fa-caret-up"></i>
                  ) : (
                    <i class="fa-solid fa-caret-down"></i>
                  )}
                </div>
              </div>
            </div>
            
          </div>
          {showUserIcon && (
            <div className="">
              <AccountHover showUserIcon={showUserIcon} />
            </div>
          )}
        </div>
      ) : (
        <div className="absolute sm:px-32 px-4 py-4 sm:py-6 z-50 bg-gradient-to-b  w-full from-black ">
          <div>
            <img className="w-44 " src={NETFLIX_LOGO} alt="Logo" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
