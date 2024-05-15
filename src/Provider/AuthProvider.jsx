import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"; 

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut,GoogleAuthProvider, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";




const auth = getAuth(app);

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();






const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUser = (name , image) => {
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL: image,
        })
    }

  
    const logOut = async () => {
        setLoading(true);
        const { data } =  await axios('https://b9-a11-assignment-server-site.vercel.app/logout',{
            withCredentials : true
        })
        console.log(data);
        return signOut(auth);
    }




    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }




    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            // console.log(currentUser);
        });
        return () =>{
            unSubscribe();
        }
    },[])

    const userInfo = {
        user,
        loading,
        createUser,
        setUser,
        updateUser ,
        signInUser,
        logOut,
        signInWithGoogle
    }





    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;


