import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)

  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header />
      <div className="bgImage absolute">
        <img
          className="bg-current"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix-logo"
        />
      </div>
      <form className="p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="text-3xl font-bold py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input className="p-2 my-4 w-full bg-[#333333] placeholder:text-[#808C80] px-2 rounded-md" type="text" placeholder="Full Name" />}
        <input className="p-2 my-4 w-full bg-[#333333] placeholder:text-[#808C80] px-2 rounded-md" type="text" placeholder="Email Address" />
        <input className="p-2 my-4 w-full bg-[#333333] placeholder:text-[#808C80] px-2 rounded-md" type="text" placeholder="Password" />
        <button className="p-3 my-6 bg-red-700 w-full rounded-md">{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"Already registered? Sign In Now":"Are you a new user? Sign Up Now!"}</p>
      </form>
    </div>
  );
};

export default Login;
