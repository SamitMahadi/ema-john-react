import React, { createContext, useEffect, useState } from 'react';
import{createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../Firebase/Firebase.config';





export const AuthContext =createContext()
const auth = getAuth(app)




const UserContext = ({children}) => {
    const [user,setUser] =useState(null)
    const [loading, setLoading] = useState(true )

    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

const signIn = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}



const logOut =()=>{
    setLoading(true);
    return signOut(auth);

}


useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,curentUser=>{
        console.log(curentUser);
        setUser(curentUser);
        setLoading(false); 
    });
    return ()=>unsubscribe();
},[])

    const authInfo  = {user,loading,  createUser,signIn,logOut}
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;