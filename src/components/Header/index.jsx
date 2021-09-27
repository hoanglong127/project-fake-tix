import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory, Link } from "react-router-dom";
import { scroller } from "react-scroll";
import Swal from "sweetalert2";
import logo from "../../assets/images/logo.png";
import { logOut } from "../../store/actions/authAction";
import User from "./User";

const Header = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const userInfo = useSelector((state) => state.authReducer.userInfo);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const handleSetIsSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  const handleClickLink = (id) => {
    if (location.pathname === "/") {
      scroller.scrollTo(id, {
        duration: 800,
        smooth: "easeInOutQuart",
      });

      isSidebar && setIsSidebar(false);
    } else {
      history.push("/", id);
    }
  };

  const handleLogout = () => {
    Swal.fire({
      icon: "question",
      title: "Bạn có chắc muốn đăng xuất?",
      showCancelButton: true,
      confirmButtonText: "Đăng xuất",
      cancelButtonText: "Huỷ",
    }).then((res) => {
      if (res.isConfirmed) {
        dispatch(
          logOut(() => {
            Swal.fire({
              icon: "success",
              title: "Đã đăng xuất",
              text: "Cám ơn bạn đã sử dụng Tix",
            });

            if (isSidebar) setIsSidebar(false);
          })
        );
      }
    });
  };

  return (
    <Fragment>
      <header
        className="fixed w-full max-h-16 z-40 shadow-sm"
        style={{ backgroundColor: "rgba(255,255,255,.95)" }}
      >
        <div className="flex justify-between items-center px-5 py-2">
          <Link to="/">
            <img className="w-12" src={logo} alt="logo" />
          </Link>
          <ul className="hidden md:flex items-center mb-0">
            <li className="px-3">
              <span
                onClick={() => handleClickLink("lichChieu")}
                className="font-medium text-base text-black hover:text-red-500 cursor-pointer transition-all duration-300"
              >
                Lịch chiếu
              </span>
            </li>
            <li className="px-3">
              <span
                onClick={() => handleClickLink("cumRap")}
                className="font-medium text-base text-black hover:text-red-500 cursor-pointer transition-all duration-300"
              >
                Cụm rạp
              </span>
            </li>
            <li className="px-3">
              <span
                onClick={() => handleClickLink("tinTuc")}
                className="font-medium text-base text-black hover:text-red-500 cursor-pointer transition-all duration-300"
              >
                Tin tức
              </span>
            </li>
            <li className="px-3">
              <span className="font-medium text-base text-black hover:text-red-600 cursor-pointer transition-all duration-300">
                Ứng dụng
              </span>
            </li>
          </ul>
          <div className="hidden md:block">
            {userInfo ? (
              <div className="flex items-center">
                <User userInfo={userInfo} />
                <button
                  onClick={handleLogout}
                  className="text-base hover:text-red-600 transition-all duration-300"
                >
                  Đăng xuất
                </button>
              </div>
            ) : (
              <Link
                to="/signin"
                className="hidden md:inline-block bg-red-500 hover:bg-red-600 text-white hover:text-white font-bold text-base px-5 py-2 rounded-md transition-all duration-300"
              >
                Đăng nhập
              </Link>
            )}
          </div>
          <button onClick={handleSetIsSidebar} className="sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-coolGray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>

      {/* SIDEBAR HEADER MOBILE */}
      <div className="md:hidden absolute top-0 left-0 right-0 bottom-0">
        <div
          onClick={handleSetIsSidebar}
          className={`fixed w-full h-full bg-black opacity-50 cursor-pointer z-50 ${
            isSidebar ? "block" : "hidden"
          }`}
        ></div>
        <div
          className={`fixed w-80 top-0 right-0 bottom-0 z-50 bg-white p-4 transition-all duration-300 transform  ${
            isSidebar ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center">
            {userInfo ? (
              <div className="flex items-center">
                <User userInfo={userInfo} />
              </div>
            ) : (
              <Link
                to="/signin"
                className="bg-red-500 hover:bg-red-600 text-white hover:text-white font-bold text-base px-5 py-2 rounded-md transition-all duration-300"
              >
                Đăng nhập
              </Link>
            )}
            <button
              onClick={handleSetIsSidebar}
              className="hover:text-gray-300 transition-all duration-300"
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <ul className="mt-4">
            <li className="p-3">
              <span
                onClick={() => handleClickLink("lichChieu")}
                className="font-medium text-base text-black cursor-pointer hover:text-red-500 transition-all duration-300"
              >
                Lịch chiếu
              </span>
            </li>
            <li className="p-3">
              <span
                onClick={() => handleClickLink("cumRap")}
                className="font-medium text-base text-black cursor-pointer hover:text-red-500 transition-all duration-300"
              >
                Cụm rạp
              </span>
            </li>
            <li className="p-3">
              <span
                onClick={() => handleClickLink("tinTuc")}
                className="font-medium text-base text-black cursor-pointer hover:text-red-500 transition-all duration-300"
              >
                Tin tức
              </span>
            </li>
            <li className="p-3">
              <span className="font-medium text-base text-black cursor-pointer hover:text-red-600 transition-all duration-300">
                Ứng dụng
              </span>
            </li>
            {userInfo && (
              <li className="p-3">
                <button
                  onClick={handleLogout}
                  className="font-medium text-base hover:text-red-600 transition-all duration-300"
                >
                  Đăng xuất
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
