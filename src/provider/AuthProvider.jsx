/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password, displayName, photoURL) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, {
          displayName: displayName,
          photoURL: photoURL
        });
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Create user error:", error);
        setLoading(false);
        throw error;
      });
  };
  

  // google sign in
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // Google sign-in successful
        const user = result.user;
        setUser(user);
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors
        console.error("Google sign-in error:", error);
        setLoading(false);
      });
  };
  

//   onauthstatechanged
    useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        console.log("current user:", currentUser);
       setLoading(false);  
    });
      return ()=>{
        return unsubscribe();
      }
    }, [])
  

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = () =>{
       return signOut(auth);
    }


  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    signInWithGoogle
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
