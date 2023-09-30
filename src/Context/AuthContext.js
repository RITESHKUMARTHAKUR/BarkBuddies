import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from '../components/database/firebase-config';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

  const [currentUser,setCurrentUser] = useState({})
  const [currentUserData, setCurrentUserData] = useState(null);


  
  useEffect(()=> {
      const unsub = onAuthStateChanged(auth, async (user) => {
          if (user){
              setCurrentUser(user)
                console.log(user)
                
              const docRef = doc(db, "profiles", user.uid);
              const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setCurrentUserData(docSnap.data());
                }
                else{
                    setCurrentUserData(null)
                }

            }

            else {
                setCurrentUser(null);
                setCurrentUserData(null)
            }
        });

        return () => {
            unsub()
        }
    },[])

    return (
        <AuthContext.Provider value={{currentUser , currentUserData}}>
            {children}
        </AuthContext.Provider>
  )
}