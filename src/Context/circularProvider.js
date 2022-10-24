import React, {createContext, useState} from "react";

export const CirularImg = createContext({});


export const ProgressProvider = (props)=>{

    const [progress, setProgress] = useState(0);

    return(
        <CirularImg.Provider value={{progress, setProgress}}>
            {props.children}

        </CirularImg.Provider>
    )


}

export const useProgress = () => React.useContext(CirularImg);