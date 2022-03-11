import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase";
import Spinner from "../Pages/Spinner/Spinner";
export let AuthContextApi = createContext();

let AuthProvider = ({ children }) => {
  let [state, setState] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user.emailVerified === true||user.reauthenticateWithPhoneNumber) {
        setState(user);
      } else {
        setState(null);
    }
  })
  },[])
  return (
    <AuthContextApi.Provider value={state}>
      {/* {state === null ? <Spinner /> : children} */}
      {children}
    </AuthContextApi.Provider>
  );
};
export default AuthProvider;
