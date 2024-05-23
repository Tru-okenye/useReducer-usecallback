import React, {useContext, useState, useEffect} from "react";


const AppContext = React.createContext();

const AppProvider = ({children})=> {
  const[person, setPerson] = useState('truphy');


    return(
        <AppContext.Provider value={{ person }}>
            {children}
        </AppContext.Provider>
    )
    console.log(AppProvider);
}
export const useGlobalContext = () => {
    return(
    useContext(AppContext)
    )
}
export{AppContext, AppProvider}