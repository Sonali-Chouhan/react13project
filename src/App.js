import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Component/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Headers from "./Header";
import Registration from "./Component/Registration";
import PageNot from "./Component/PageNot";
import Dashbord from "./Component/DashBoard/Dashbord";
import About from "./Component/DashBoard/About";
import Createuser from "./Component/DashBoard/Createuser";
import Userlist from "./Component/DashBoard/Userlist";
import Logout from "./Component/DashBoard/Logout";
import Navbar from "./Component/DashBoard/Navbar";
// import ShowPost from "./Component/DashBoard/ShowPost";

function App() {

  const gettoken = localStorage.getItem("Token");
  // const gettoken1=localStorage.getItem("Token1");
  // console.log("aaa",gettoken1)

  return (
    <div className="App">
      <ToastContainer />
      <Router>
        {gettoken ? (
          <>
            <div className="headers">
              <Navbar />
            </div>
            <Routes>
              <Route path="/dashboard" element={<Dashbord />} />
              <Route path="/createuser" element={<Createuser />} />
              <Route path="/createuser/:id" element={<Createuser />} />
              <Route path="/userlist" element={<Userlist />} />
              <Route path="/userlogout" element={<Logout />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/usershow" element={<ShowPost/>}/> */}
              <Route />
            </Routes>
          </>
        ) : (
          <>
            <div className="header">
              <Headers />
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user-login" element={<Login/>} />
              <Route path="/user-registration" element={<Registration/>} />
              <Route path="*" element={<PageNot />} />
            </Routes>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
