import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SingIn from "./Component/SingIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Headers from "./Header";
import SingUp from "./Component/SingUp";
import PageNot from "./Component/PageNot";
import Dashbord from "./Component/DashBoard/Dashbord";
import About from "./Component/DashBoard/About";
import ContextAdd from "./Component/DashBoard/ContextAdd";
import ShowList from "./Component/DashBoard/ShowList";
import LogOut from "./Component/DashBoard/LogOut";
import Navbar from "./Component/DashBoard/Navbar";
import ShowPost from "./Component/DashBoard/ShowPost";
//import LoginUser from "./Component/User";

function App() {
  const gettoken = localStorage.getItem("Token");
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
              <Route path="/usercontext" element={<ContextAdd />} />
              <Route path="/usercontext/:id" element={<ContextAdd />} />
              <Route path="/userlist" element={<ShowList />} />
              <Route path="/userLogOut" element={<LogOut />} />
              <Route path="/about" element={<About />} />
              <Route path="/showpost" element={<ShowPost/>}/>
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
              <Route path="/user-singIn" element={<SingIn />} />
              <Route path="/user-singUp" element={<SingUp />} />
              {/* <Route path="/login-user" element={<LoginUser />} /> */}
              <Route path="*" element={<PageNot />} />
            </Routes>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
