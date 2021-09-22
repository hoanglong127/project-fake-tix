import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/signin">Signin</Link>
    </div>
  );
};

export default Header;
