import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/usercontext">addContext</Link>
      <Link to="/userlist">showList</Link>
      <Link to="/userLogOut">Log-Out</Link>
      {/* <Link to="/showpost">showpost</Link> */}
      <Link to="/about">About</Link>
    </div>
    <div>
      <Outlet/>
    </div>
    </div>
  );
};

export default Navbar;
