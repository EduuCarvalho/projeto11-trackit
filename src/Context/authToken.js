import React, { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext({});



export const AuthProviderToken = (props) => {

    const [userToken, setUserToken] = useState ({
       token:""
    })

    return (
        <AuthContext.Provider value={{userToken, setUserToken}}>
            {props.children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => React.useContext(AuthContext)