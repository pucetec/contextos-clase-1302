import { createContext, useContext, useState } from "react";


const AuthContext=createContext();
const USER ={
  email: "logeo@test.com",
  password: "666",
};


export const AuthContextProvider=({children}) =>{
  const [logg, setlogg]= useState("no");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const onLogIn = ()=>{
    if(email === USER.email &&  password ===USER.password){
      setlogg("si");
    }
  };

  return(
    <AuthContext.Provider value={{logg, setEmail, setPassword, email, onLogIn}}>
    {children}
  </AuthContext.Provider>

  ); 
};

export const useAuthContext = () => useContext(AuthContext);