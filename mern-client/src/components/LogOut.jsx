import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const LogOut = () => {
    const {logOut} = useContext(AuthContext);
    const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
    const handleLogOut = () => {
        logOut().then(() => {

            alert("Log-Out successfully!!");
            navigate(from, {replace:true})
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
  return (
    <div className='flex items-center justify-center h-screen bg-teal-100'>
        <button className='px-8 py-2 text-white bg-red-700 rounded'onClick={handleLogOut} >Log Out</button>
    </div>
  )
}

export default LogOut