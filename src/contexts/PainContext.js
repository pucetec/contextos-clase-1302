import {createContext,useContext,useState} from "react";


const PaintContext=createContext();

export const PaintContextProvider=({children})=>{

  const [doesItHurt,setDoesItHurt]=useState("no");
  return (

    <PaintContext.Provider value={{doesItHurt,setDoesItHurt}}>
      {children}
    </PaintContext.Provider>

  );
};

export const usePainContext=()=>useContext(PaintContext);