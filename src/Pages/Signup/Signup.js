import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

import google from "../../images/Google-Logo.png";
import github from "../../images/Github-Icon.png";
import useFirebase from "../components/useFirebase";

const Signup = () => {
  const {
    handleSignUpForm,
    handleEmailInput,
    handlePasswordInput,
    handleConfirmPasswordInput,
    handleGoogleSignIn,
    handleGithubSignIn,
    error,
    errorElement,
    emailError,
    passError,
    conPassError
  } = useFirebase();
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <div className="block p-6 rounded-lg shadow-lg  bg-indigo-300 max-w-sm mx-auto text-left my-5">
        <form onSubmit={handleSignUpForm}>
          <div className="form-group mb-6">
            <label
              for="exampleInputEmail2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              required
              onBlur={handleEmailInput}
              className="form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <p className="text-red-500">{emailError}</p>
          </div>
          <div className="form-group mb-6">
            <label
              for="exampleInputPassword2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              required
              onBlur={handlePasswordInput}
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputPassword2"
              placeholder="Password"
            />
            <p className="text-red-500">{passError}</p>
          </div>
          <div className="form-group mb-6">
            <label
              for="exampleInputPassword2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              required
              onBlur={handleConfirmPasswordInput}
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputPassword3"
              placeholder="Confirm Password"
            />
            <p className="text-red-500">{conPassError}</p>
          </div>
          <div className="flex justify-between items-center mb-6">
            <div
              
              className="form-group form-check"
            >
              <input
              onClick={() => setChecked(!checked)}
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="exampleCheck2"
              >
                Accept Turms & Consitions
              </label>
            </div>
          </div>
          <p className="text-red-500">{error}</p>
          <button
            type="submit"
            disabled={!checked}
            className={
              !checked
                ? `w-full
            px-6
            py-2.5
            bg-gray-200
            text-gray
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:shadow-lg
            
            transition
            duration-150
            ease-in-out`
                : `w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out`
            }
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Plaese Checked Turms & Condition"
          >
            Sign Up
          </button>
          <p className="text-gray-800 mt-6 text-center">
            Already Have an Account?{" "}
            <Link
              to="/signin"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Sign In
            </Link>
          </p>
          <p className="text-red-500">{errorElement}</p>
        </form>
        <div className="flex items-center py-2">
          <div className="line"></div>
          <span className="px-2">or</span>
          <div className="line"></div>
        </div>
        <div className="social">
          <div
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center border rounded py-2 my-2 cursor-pointer hover:bg-gray-300"
          >
            <img className="w-6" src={google} alt="" />
            <span className="pl-2">Continue With Google</span>
          </div>
          <div
            onClick={handleGithubSignIn}
            className="flex items-center justify-center border rounded py-2 my-2 cursor-pointer hover:bg-gray-300"
          >
            <img className="w-6" src={github} alt="" />
            <span className="pl-2">Continue With Github</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
