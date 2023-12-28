import React,{ useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { N_LOGO, userImg } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  //subscribing to the store
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        //dispatch action handled by onAuthStateChange
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  //On auth state change, i want to add user to the store
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}))

        //navigate
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });

    //one more thing, since I want to add user only when user is created, but since the onAuthStateChange logic is inside Header component and header component re-renders many a times, thus every time this will also get called. So to unmount the component whenever its done, firebase provides unsubscribe fn and we will return from the useEffect

    return ()=>unsubscribe()
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={N_LOGO}
        alt="netflix-logo"
      />

      {user && (
        <div className="flex p-4">
          <img
            className="w-12 h-12"
            src={userImg}
            alt="userlogo"
          />

          <button
            className="bg-red-700 border-2 p-2 shadow-md font-sans text-base font-bold text-white ml-2"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
