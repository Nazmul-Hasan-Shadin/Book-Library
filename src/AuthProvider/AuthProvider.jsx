import React, {  createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.config';

 export const AuthContext= createContext();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState();

 const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
 }

 const handleUpdateUserProfile= (name,photo)=>{
    return updateProfile(auth.currentUser,{
        displayName:name, photoURL: photo
    })
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
       handleUpdateUserProfile
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