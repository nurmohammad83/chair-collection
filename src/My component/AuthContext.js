import React, { createContext, useEffect, useState } from 'react';
import app from '../Lodder/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'


export const ProductContext = createContext()
const auth = getAuth(app)


const AuthContext = ({children}) => {
    const [ user, setUser] = useState(null)
    const [loading, setLoading]= useState(true)


    const googleProvider = new GoogleAuthProvider()
    const gitProvider = new GithubAuthProvider()

    const createNewUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const signInGithub = ()=>{
        setLoading(true)
        return signInWithPopup(auth,gitProvider)
    }
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
}
    useEffect(()=>{
        const unsubsribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubsribe()
        }
    },[])
    const productInfo = {user,signInGoogle,signInGithub,createNewUser,signInUser,logOut,loading}
     
    return (
        <ProductContext.Provider value={productInfo}>
            {children}
        </ProductContext.Provider>
    )
};

export default AuthContext;