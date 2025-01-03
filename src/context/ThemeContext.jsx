import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();


const getTheme = () =>{
    const theme = localStorage.getItem('theme');
    if(!theme){
        localStorage.setItem('theme', 'light');
        return 'light';
    }else{
        return theme;
    }
}

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState(getTheme());
    

    const toggleTheme = ()=>{
        if(theme === 'light'){
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        }else{
            localStorage.setItem('theme', 'light');
            setTheme('light');
        }
    }


    useEffect(() => {
        const refreshTheme = () => {
          localStorage.setItem("theme", theme);
        }
        refreshTheme();
    }, [theme])


    return (
        <ThemeContext.Provider
          value={{
            theme,
            setTheme,
            toggleTheme,
          }}
        >
          {children}
        </ThemeContext.Provider>
      );
}


