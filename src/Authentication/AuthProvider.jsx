import { createContext, useEffect, useState } from "react";


// here is all the imports of the firebase


import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from "./firebase.config";

const auth = getAuth(app)
// here is the auth from the firebase


export const contexM = createContext(null)


const AuthProvider = ({ children }) => {

    // here is teh loader

    const [loader, SetLoader] = useState(true)


    const CrateUSer = (email, password) => {
        SetLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // here is cogin the user

    const LoginTheUser = (email, password) => {
        SetLoader(true)

        return signInWithEmailAndPassword(auth, email, password)
    }


    const SingINUSER = () => {
        SetLoader(true)

        return signOut(auth)
    }


    const UpdateUser = (name, PhotoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: PhotoUrl
        })
    }



    const [user, SetUSer] = useState(null)

    useEffect(() => {

        const off = onAuthStateChanged(auth, Watch => {

            SetUSer(Watch)

            // here is the  loader 

            SetLoader(false)

            console.log('user', Watch);

        })
        return (() => {
            off
        })



    })




    const userInfos = {

        CrateUSer,
        LoginTheUser,
        SingINUSER,
        user,
        loader,
        UpdateUser



    }



    return <contexM.Provider value={userInfos}>
        {children}
    </contexM.Provider>



};

export default AuthProvider;