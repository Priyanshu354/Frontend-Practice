import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState([]);

    const toggleTheme = () => {
        setTheme((prev) => prev === "light" ? "dark" : "light");
    }

    useEffect(() => {
        let getTheme = localStorage.getItem("Theme");
        if(!getTheme){
            getTheme = "light";
        }
        setTheme(getTheme);
    },[]);

    useEffect(()=> {
        localStorage.setItem("Theme", theme);
    },[theme]);


    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};