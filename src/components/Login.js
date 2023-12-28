import React, { useState, useRef } from "react";
import Header from "./Header";
import "../utils/validate";
import { checkValidation } from "../utils/validate";

//Firebase
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { bgImg } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const dispatch = useDispatch();

  const handleSignInClick = () => {
    //Validate the form data
    console.log(email, password);
    const message = checkValidation(
      email.current.value,
      password.current.value
    ); //use reference to get value from input box'
    setErrorMessage(message);

    //if message is not null, means validation failed, just return
    if (message) return;

    //after validation, proceed for signIn/signUp functionality (authentication)

    if (!isSignInForm) {
      //Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCreds) => {
          //SIGNED UP
          const user = userCreds.user; //user object
          // console.log(user);

          //now update the profile
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              //Add user to the store, user will be our authenticated user
              dispatch(addUser({
                uid: auth.currentUser.uid, email: auth.currentUser.email, displayName: auth.currentUser.displayName
              }));

            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message)
            });
        })
        .catch((err) => {
          const errorCode = err.code;
          const errorMessage = err.message;

          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCreds) => {
          // Signed in
          const user = userCreds.user;
          console.log("Success", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="bgImage absolute inset-0">
        <img
          className="object-center object-cover w-full h-full"
          src={bgImg}
          alt="netflix-logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="p-2 my-4 w-full bg-[#333333] placeholder:text-[#808C80] px-2 rounded-md"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-2 my-4 w-full bg-[#333333] placeholder:text-[#808C80] px-2 rounded-md"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-2 my-4 w-full bg-[#333333] placeholder:text-[#808C80] px-2 rounded-md"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-700 font-bold text-md py-2 mx-2 -my-4">
          {errorMessage}
        </p>
        <button
          className="p-3 my-6 bg-red-700 w-full rounded-md"
          onClick={handleSignInClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {!isSignInForm
            ? "Already registered? Sign In Now"
            : "Are you a new user? Sign Up Now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
