import React, { useState, useEffect } from 'react';

const Context = React.createContext()

const UserProvider = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {

    }, [])
    
    const handleLogin = () => {
        setLoggedIn(true)
    }

    return (
        <Context.Provider value ={{
            loggedIn, 
            handleLogin
        }}>
            {children}
        </Context.Provider>
    )
}

export { Context, UserProvider };