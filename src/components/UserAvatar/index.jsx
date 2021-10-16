import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const UserAvatar = ({ userInfo }) => {
  return (
    <Fragment>
      <div className="relative">
        <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-600 border rounded-full text-gray-800 border-gray-50"></span>
        <img
          src={`https://i.pravatar.cc/50?u=${userInfo?.hoTen}`}
          alt=""
          className="w-8 h-8 border rounded-full bg-gray-500 border-gray-300"
        />
      </div>
      <Link to="/profile" className="ml-2 mb-0 text-base hover:text-red-500">
        {userInfo?.hoTen}
      </Link>
    </Fragment>
  );
};

export default UserAvatar;
