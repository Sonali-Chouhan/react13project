import React from "react";
import { Link } from "react-router-dom";

const navLink = () => {
  
  return (
    <nav>
      <div className="web">
        <h5>Web Page</h5>
      </div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/user-login">Login</Link>
        <Link to="/user-registration">Registration</Link>
        {/* <Link to="/login-user" >LoginUser</Link> */}
      </div>
    </nav>
  );
};

export default navLink;
