import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  // register with email and password
  const registerWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   update profile
  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  //   sign in with email and password

  const loginWithEmailandPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   sign in with google
  const googleProvider = new GoogleAuthProvider();
  const loginWithGoogleAccount = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //   observer for user
  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscriber();
  }, []);
  //   sign out
  const logOut = () => {
    return signOut(auth);
  };
  const authInfo = {
    user,
    registerWithEmail,
    loading,
    logOut,
    setLoading,
    updateUserProfile,
    loginWithEmailandPassword,
    loginWithGoogleAccount,
  };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
