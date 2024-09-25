import React, { useRef, useState } from "react";
import { checkLoginValid } from "../../utils/validate";

function LoginForm() {
  const [toggleSignup, setToggleSignup] = useState(false);
  const [LoginErrorMessage, setLoginErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(email?.current?.value);
    console.log(password?.current?.value);
    const loginMessage = checkLoginValid(
      email?.current?.value,
      password?.current?.value
    );
    setLoginErrorMessage(loginMessage);
  };

  const toggleSignupButton = () => {
    setToggleSignup(!toggleSignup);
  };

  return (
    <div className="w-full ">
      <div className="absolute z-50 w-[90%] sm:w-[30%] ml-[5%]  sm:ml-[35%] mt-28  sm:mt-32">
        <div className="sm:px-16 px-6 rounded-lg  py-2 sm:py-10 relative  bg-black bg-opacity-70 ">
          <div className="text-3xl text-white py-6 font-semibold">
            {" "}
            {toggleSignup ? "Sign Up" : "Sign In"}
          </div>
          <div className="">
            <form
              onSubmit={(e) => e.preventDefault}
              className="flex flex-wrap gap-y-6"
            >
              {toggleSignup && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-11 border-[.01rem] border-white w-full px-6 rounded-sm border-opacity-40 bg-transparent text-white"
                />
              )}
              <input
                ref={email}
                type="email"
                placeholder="Email Address"
                className="h-11 border-[.01rem] border-white w-full px-6 rounded-sm border-opacity-40 bg-transparent text-white"
              />
              <input
                ref={password}
                type="password"
                placeholder="Password"
                className=" h-11 bg-transparent border-[.01rem] border-white w-full px-6 rounded-sm border-opacity-40 text-white"
              />
              {LoginErrorMessage && (
                <p className="text-red-500">{LoginErrorMessage}</p>
              )}
              <button
                type="submit"
                className=" bg-[#E50815] font-medium py-2 rounded-md text-white w-full "
                onClick={(e) => handleFormSubmit(e)}
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
              <div className="text-white flex gap-x-2 mb-4 items-center">
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
