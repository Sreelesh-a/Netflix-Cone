import React, { useEffect, useState } from "react";
import { NETFLIX_LOGO, USER_ICON } from "../utils/constants";

import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";

function Header() {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user);
  const [showUserIcon, setShowUserIcon] = useState(false);
  const [showUserHeader,setShowUserHeader]=useState(false)
  const dispatch=useDispatch()

  useEffect(() => {
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")


        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
      }
    });
    return ()=> unsubscribe()
  }, []);
  


  

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      

      // Sign-out successful.
      
     
    }).catch((error) => {
      // An error happened.
    });

  }

  return (
    <div>
      {user ? (
        <div>
          <div className="absolute sm:px-32 justify-between flex px-4 py-4 sm:py-6 z-50 bg-gradient-to-b  w-full from-gray-950 ">
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
                onClick={() => setShowUserIcon(!showUserIcon)}
                className="flex items-center gap-2"
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
            <div>
              <div className="text-gray-300 absolute z-50 text-xl right-[9.8rem] mt-20">
                {" "}
                {showUserIcon ? (
                  <i class="fa-solid fa-caret-up"></i>
                ) : (
                  <i class="fa-solid fa-caret-down"></i>
                )}
              </div>
              <div className= "absolute z-50 text-white right-32 mt-24 w-64 bg-black bg-opacity-80 px-5 py-7">
                <div>
                  <ul className="flex-wrap flex gap-y-8 text-lg font-light">
                    <li className="w-full">
                      <i class="fa-solid fa-pencil text-xl text-gray-400 mr-4"></i>
                      Manage Profile
                    </li>
                    <li className="w-full">
                      <i class="fa-solid fa-money-bill-transfer text-xl text-gray-400 mr-4"></i>
                      Transfer Profile
                    </li>
                    <li className="w-full">
                      <i class="fa-regular fa-user text-xl text-gray-400 mr-4"></i>
                      Account
                    </li>
                    <hr className="w-full border-gray-700 " />

                    <li onClick={()=>handleSignOut()} className="w-full pb-2 text-center cursor-pointer">
                      Sign out of Netfix
                    </li>
                  </ul>
                </div>
              </div>
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
