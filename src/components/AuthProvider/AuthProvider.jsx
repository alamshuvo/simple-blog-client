import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
// import app from "../../Firebase/Firebase.config";
// import { GoogleAuthProvider } from "firebase/auth/cordova";

import { getAuth } from "firebase/auth";
import { app } from "../../Firebase/Firebase.config";

export const AuthContext=createContext(null);
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(true);

    // register User with Email and Password
    const registerUser=(email,password)=>{
        setLoading(true);
        setError(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //  login with email and password 

const loginUser=(email,password)=>{
    setLoading(true);
    setError(true)
   return signInWithEmailAndPassword(auth, email, password)
}

// google signin 
const signinWithGoogle=()=>{
    return signInWithPopup(auth,provider)
 }
// Sign out 
const signOutproile=()=>{
    setUser(null)
    setError(true)

     signOut(auth)
   
}
// update profile user 
const updateProfileUser=(name,img)=>{
    return  updateProfile(auth.currentUser, {
         displayName: name, 
         photoURL: img,
       }).then(() => {
         // Profile updated!
         // ...
       }).catch((error) => {
         // An error occurred
         // ...
       });
 }

//  Auth state change 
useEffect(()=>{
    const unSubcribe= onAuthStateChanged(auth,curentUser=>{
           setUser(curentUser);
           setLoading(false);
           setError(false)
       })
       return ()=>
       {
           unSubcribe();
       }
      },[])


    const allInfu={
        registerUser,
        loginUser,
        signinWithGoogle,
        signOutproile,
        updateProfileUser,
        user,
        loading,
        error
    }
    return (
        <div>
            <AuthContext.Provider value={allInfu}>
                  {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;