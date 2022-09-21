import React, { useState, useEffect } from 'react';

const Context = React.createContext()

const UserProvider = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(data => {
            if(!data){
                setLoggedIn(false);
            }else{
                setLoggedIn(true);
            }
        })
    }, [])
    
    const handleLogin = () => {
        setLoggedIn(true)
    }

    const handleLogout = () => {
        fetch('/logout', {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        })
        .then(res => {
            setLoggedIn(false)
        })
        

    }

    return (
        <Context.Provider value ={{
            loggedIn, 
            handleLogin,
            handleLogout
        }}>
            {children}
        </Context.Provider>
    )
}

export { Context, UserProvider };