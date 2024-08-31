import React, { useState } from "react";

function LoginForm() {
  const [toggleSignup, setToggleSignup] = useState(false);

  const toggleSignupButton = () => {
    setToggleSignup(!toggleSignup);
  };

  return (
    <div className="w-full ">
      <div className="absolute z-50 w-[30%]  ml-[35%] mt-32">
        <div className="px-16 py-10 relative  bg-black bg-opacity-70 ">
          <div className="text-3xl text-white py-6 font-semibold">
            {" "}
            {toggleSignup ? "Sign Up" : "Sign In"}
          </div>
          <div className="">
            <form className="flex flex-wrap gap-y-6">
              {toggleSignup && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-11 border-[.01rem] border-white w-full px-6 rounded-sm border-opacity-40 bg-transparent text-white"
                />
              )}
              <input
                type="text"
                placeholder="Email Address"
                className="h-11 border-[.01rem] border-white w-full px-6 rounded-sm border-opacity-40 bg-transparent text-white"
              />
              <input
                type="password"
                placeholder="Password"
                className=" h-11 bg-transparent border-[.01rem] border-white w-full px-6 rounded-sm border-opacity-40 text-white"
              />
              <button
                type="submit"
                className=" bg-[#E50815] font-medium py-2 rounded-md text-white w-full "
              >
                {toggleSignup ? "Sign Up" : "Sign In"}
              </button>
              {!toggleSignup && (
                <>
                  <div className="text-white mx-auto opacity-50 ">OR</div>
                  <button
                    type="submit"
                    className=" bg-white bg-opacity-20 font-medium py-2 rounded-md text-white w-full "
                  >
                    Use a sign-in-code
                  </button>
                </>
              )}

              <div className="mx-auto text-white opacity-90">
                Forgot password?
              </div>
              <div className="text-white flex gap-x-2 items-center">
                <span className="opacity-50 ">
                  {toggleSignup ? "Already Registered?" : "New to Netflix?"}
                </span>
                <span
                  className="font-medium cursor-pointer "
                  onClick={toggleSignupButton}
                >
                  {toggleSignup ? "Sign up now" : "Sign in now"}
                </span>
              </div>
            </form>
          </div>
          {/* <div className="absolute  inset-0 bg-black opacity-100"></div> */}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
