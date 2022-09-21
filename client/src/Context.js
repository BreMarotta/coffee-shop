import React, { useState, useEffect } from 'react';

const Context = React.createContext()

const UserProvider = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {

    }, [])

    return (
        <Context.Provider value ={{

        }}>
            {children}
        </Context.Provider>
    )
}

export { Context, UserProvider };