import { createContext, useContext, useState } from "react";

const PainContext = createContext();

export const PainContextProvider = ({children}) => {

  const [doesItHurt, setDoesItHurt] = useState ("no") ;

  return(
    <PainContext.Provider value={{doesItHurt, setDoesItHurt}}>
      {children}
    </PainContext.Provider>
  );
};
 

export const usePainContext = () => useContext(PainContext);

