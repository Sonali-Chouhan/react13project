import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/createuser">CreateUser</Link>
      <Link to="/userlist">UserList</Link>
      <Link to="/userlogout">Logout</Link>
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
