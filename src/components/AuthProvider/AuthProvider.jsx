import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
// import app from "../../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth/cordova";

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