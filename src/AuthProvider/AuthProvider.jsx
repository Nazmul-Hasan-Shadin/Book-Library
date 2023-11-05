import React, {  createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.config';

 export const AuthContext= createContext();
 const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const [user,setUser]=useState();

 const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
 }

 const handleGooleLogin= ()=>{
    return signInWithPopup(auth,provider)
 }

 const handleUpdateUserProfile= (name,photo)=>{
    return updateProfile(auth.currentUser,{
        displayName:name, photoURL: photo
    })
 }

 const handleLoginWithEmailPass= (email,password)=>{
    
   return signInWithEmailAndPassword(auth,email,password)

 }

 const logOut= ()=>{
   return signOut(auth)
 }


   useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth,currentUser=>{
          setUser(currentUser)
     })
     return ()=> unsubscribe()
   },[])


    const authInfo={
        createUser,
       logOut,
       user,
       handleUpdateUserProfile,
       handleGooleLogin,
       handleLoginWithEmailPass
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;