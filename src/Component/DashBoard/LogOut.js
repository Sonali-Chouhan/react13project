import React from 'react';
//mport { useNavigate } from 'react-router';


const LogOut = () => {
  //let navigate = useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem("Token")
        // navigate("/")
        window.location.href="/";
      }
  return (
    <div>
        
        <h3>LogOut</h3>
        <button onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default LogOut