import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../components/database/firebase-config';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

  const [currentUser,setCurrentUser] = useState({})

    useEffect(()=> {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user){

                setCurrentUser(user)
                console.log(user);
            }
            else {
                setCurrentUser(null);
            }
        });

        return () => {
            unsub()
        }
    },[])

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
  )
}