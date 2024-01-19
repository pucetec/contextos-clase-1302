import {createContext,useContext,useState} from "react";

const OutContext = createContext();
const USER = {
    email: "test@expample.com",
    pasword:"123"
};

export const OutContextProvider = ({children})

