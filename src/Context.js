import React, { createContext, useContext, useState } from 'react'

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
    
    const [username, setUsername] = useState("john");
    
    const changeUseranme = (uname) => {
        setUsername(uname);
    }
    
    return (
    <MyContext.Provider value={{username, changeUseranme}}>
        {children}
    </MyContext.Provider>
  )
}


export function Handler() {
    return useContext(MyContext);
}