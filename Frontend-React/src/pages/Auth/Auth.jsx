/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import SignupForm from "./signup/SignupForm";
import LoginForm from "./login/login";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import CustomeToast from "@/components/custome/CustomeToast";
import ForgotPasswordForm from "./ForgotPassword";
import seahorseLogo from "@/assets/seahorselogo.png";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { auth } = useSelector((store) => store);

  console.log("---------- ", auth.error);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <CustomeToast show={auth.error} message={auth.error?.error} />

      {/* Header Banner */}
      <div className="w-full bg-white py-6 px-4 sm:px-6 lg:px-8 border-b border-2 border-gray-200">
        <div className="max-w-md mx-auto flex items-center justify-center">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
            <img src={seahorseLogo} alt="BlueCurrent" className="w-12 h-12" />
            <span className="text-2xl font-semibold text-celestial-blue">
              BlueCurrent
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-start justify-center px-4 pt-8 pb-12">
        <div className="w-full max-w-md flex flex-col items-center">
          {location.pathname === "/signup" ? (
            <>
              <div className="w-full text-center mb-8">
                <h1 className="text-3xl font-semibold text-gray-900 mb-3">
                  Sign up for BlueCurrent
                </h1>
                <p className="text-gray-600 font-light">
                  Create your account to start investing.
                </p>
              </div>
              <div className="w-full flex flex-col items-center">
                <SignupForm />
              </div>
              <div className="mt-8 text-center">
                <span className="text-gray-600">
                  Already have an account?{" "}
                </span>
                <button
                  onClick={() => navigate("/signin")}
                  className="text-celestial-blue hover:text-persian-blue font-medium"
                >
                  Log in
                </button>
              </div>
            </>
          ) : location.pathname === "/forgot-password" ? (
            <>
              <div className="w-full text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-3">
                  Reset Password
                </h1>
                <p className="text-gray-600 font-light">
                  Enter your email to reset your password.
                </p>
              </div>
              <div className="w-full flex flex-col items-center">
                <ForgotPasswordForm />
              </div>
              <div className="mt-8 text-center">
                <span className="text-gray-600">
                  Back to{" "}
                </span>
                <button
                  onClick={() => navigate("/signin")}
                  className="text-celestial-blue hover:text-persian-blue font-medium"
                >
                  Log in
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="w-full text-center mb-8">
                <h1 className="text-3xl font-semibold text-gray-900 mb-3">
                  Log in to BlueCurrent
                </h1>
                <p className="text-gray-600 font-light">
                  Welcome back! Log in to continue.
                </p>
              </div>
              <div className="w-full flex flex-col items-center">
                <LoginForm />
              </div>
              <div className="mt-8 text-center">
                <span className="text-gray-600">
                  Don't have an account?{" "}
                </span>
                <button
                  onClick={() => navigate("/signup")}
                  className="text-celestial-blue hover:text-persian-blue font-medium"
                >
                  Sign up
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
