import React, { createContext } from "react";
import { useState } from "react";

export const ImgContext = createContext({});



export const ImgProvider = (props) => {

    const [userImg, setUserImg] = useState ({
       imagem:""
    })

    return (
        <ImgContext.Provider value={{userImg, setUserImg}}>
            {props.children}
        </ImgContext.Provider>
    )
};

export const useImg = () => React.useContext(ImgContext)