/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";


export const AuthContex = createContext(null )
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user , setUser]=useState(null);
    const [lodding , setLodding] = useState (true)

    const creatUser = (email,password)=>{
        setLodding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn = (email, password) =>{
        setLodding(true)
        signInWithEmailAndPassword(auth,email,password)
    }
    const logout = ()=>{
        setLodding(true)
        signOut(auth);
    }
    const logInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
          const result = await signInWithPopup(auth, provider);
          setUser(result.user);
        } catch (error) {
          console.error(error);
        }
    };
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLodding(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        creatUser,
        logIn,
        logout,
        lodding,
        logInWithGoogle
        
    }
    
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;