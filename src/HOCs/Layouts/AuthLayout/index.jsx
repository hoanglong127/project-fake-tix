import React from "react";
import { Link } from "react-router-dom";
import background from "../../../assets/images/background.jpg";
import logoGroup from "../../../assets/images/logo-group.png";

const AuthLayout = ({ children }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="relative">
        <div
          className="flex flex-col max-w-xs md:max-w-md my-10 p-6 rounded-md sm:p-10 text-white"
          style={{
            background:
              "linear-gradient(to bottom,rgba(20,50,93,.9),rgba(8,22,48,.9))",
            boxShadow: "0 0 10px 0 rgb(0 0 0 / 45%)",
          }}
        >
          <div className="mb-10">
            <img src={logoGroup} alt="logo" className="w-2/3 mx-auto" />
          </div>
          {children}
        </div>
        <Link
          to="/"
          className="absolute top-5 -right-5 flex items-center justify-center text-white hover:text-white w-12 h-12 rounded-full"
          style={{
            backgroundColor: "#081630",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 50%)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default AuthLayout;