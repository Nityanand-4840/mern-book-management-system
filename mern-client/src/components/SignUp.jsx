import React, { useContext, useState,  } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import googleLogo from "../assets/google-logo.svg";

const SignUp = () => {

  const {createUser, loginWithGoogle} = useContext(AuthContext);
  const [error, setError] = useState("error");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    createUser(email,password).then((userCredential) => {

      // Signed in 

      const user = userCredential.user;
      alert("Sign up successfully!");
      navigate(from, {replace:true})

  

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage)
    });
  }

// signup using Google Account 
 
const handleRegister = () => {
  loginWithGoogle().then((result) => {
    const user = result.user;
    alert("Sign up successfully!");
    navigate(from, {replace:true})
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage)
  });
}

  return (

    <div className="flex flex-col justify-center min-h-screen py-6 bg-gray-100 sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-blue-300 to-blue-600 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Sign up Form </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSignUp} className="py-8 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input id="email" name="email" type="text" className="w-full text-gray-900 border-b-2 border-gray-300 peerh-10 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                </div>
                <div className="relative">
                  <input  id="password" name="password" type="password" className="w-full h-10 text-gray-900 border-b-2 border-gray-300 peer focus:outline-none focus:borer-rose-600" placeholder="Password" />
                </div>
                <p>If you have already an account. Please <Link to = "/login" className='text-blue-600 underline'>Login</Link> Here  </p>
                <div className="relative">
                  <button className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-black">Sign Up</button>
                </div>
              </form>
            </div>
            <hr/>
            <div className='flex flex-col items-center w-full gap-3 mt-5'>
              <button onClick={handleRegister} className='block'><img src={googleLogo} alt = " " className='inline-block w-12 h-12' /> LogIn with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp