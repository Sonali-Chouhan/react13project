import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import SingIn from "./Component/SingIn";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Component/Home";
import Headers from "./Header"
import SingUp from "./Component/SingUp";
import PageNot from "./Component/PageNot";

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Router>
      <div className="header">
        <Headers/>
        </div>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/user-singIn" element={<SingIn/>}/>
          <Route path="/user-singUp" element={<SingUp/>}/>
          <Route path="*" element={<PageNot/>}/>
        </Routes>
      
      </Router>
   
    </div>
  );
}

export default App;
