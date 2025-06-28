import { useState, useEffect } from 'react';
import {useContext, createContext} from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoginIn] = useState(false);

    useEffect(()=> {
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");

        if(username && password){
            setIsLoginIn(true);
        }
    },[]);

    const login = (username, password) => {
        if(!username || !password) return ;

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        setIsLoginIn(true);
    }

    const logout = () => {
        console.log("jodsjfpodf");
        if(!isLoggedIn) return;

        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");
        console.log(username, password);
        setIsLoginIn(false);
    }


    return ( <AuthContext.Provider value={{isLoggedIn, login, logout}}>
        {children}
    </AuthContext.Provider>
    )

}
