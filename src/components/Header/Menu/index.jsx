import React from "react";

const Menu = ({ handleClickLink }) => {
  return (
    <ul className="md:flex items-center mb-0">
      <li className="py-3 md:py-0 md:px-3">
        <span
          onClick={() => handleClickLink("lichChieu")}
          className="font-medium text-base text-black hover:text-red-500 cursor-pointer transition-all duration-300"
        >
          Lịch chiếu
        </span>
      </li>
      <li className="hidden md:block py-3 md:py-0 md:px-3">
        <span
          onClick={() => handleClickLink("cumRap")}
          className="font-medium text-base text-black hover:text-red-500 cursor-pointer transition-all duration-300"
        >
          Cụm rạp
        </span>
      </li>
      <li className="py-3 md:py-0 md:px-3">
        <span
          onClick={() => handleClickLink("tinTuc")}
          className="font-medium text-base text-black hover:text-red-500 cursor-pointer transition-all duration-300"
        >
          Tin tức
        </span>
      </li>
      <li
        onClick={() => handleClickLink("ungDung")}
        className="py-3 md:py-0 md:px-3"
      >
        <span className="font-medium text-base text-black hover:text-red-600 cursor-pointer transition-all duration-300">
          Ứng dụng
        </span>
      </li>
    </ul>
  );
};

export default Menu;
