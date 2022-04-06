import {createContext, useState} from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const signin = (newUser, cb) => {
        setUser(newUser)
        cb()
    }
    const signup = (cb) => {
        setUser(null)
        cb()
    }

    const value = {user, signup, signin}


    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}
