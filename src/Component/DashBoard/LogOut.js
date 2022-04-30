import React from 'react';
//mport { useNavigate } from 'react-router';


const Logout = () => {
  //let navigate = useNavigate();
    // const handleLogout=()=>{
        localStorage.removeItem("Token")
        localStorage.removeItem("User_Id")
        localStorage.removeItem("Token1")
        // navigate("/")
        window.location.href="/";
      // }
  return (
    <div>
        
        {/* <h3>LogOut</h3> */}
        {/* <button onClick={handleLogout}>LogOut</button> */}
    </div>
  )
}

export default Logout