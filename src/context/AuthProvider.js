import React, { createContext } from 'react';
import { app } from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
///create user with email and password ///
const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email,password)
}

//// login with email and password ///
const emailAndPasswordLogin = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}
 

///google login///
const googleLogin = () =>{
    signInWithPopup(auth, provider)
    .then(result => {
        console.log(result.user);
    }).catch(error=>console.log(error))
}


const info = {
    createUser,
    emailAndPasswordLogin,
    googleLogin


}

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;