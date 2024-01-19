import { createContext, useContext, useState } from "react";


const AuthContext=createContext();
const USER ={
  email: "Neithan@test",
  password: "1212",
 };


 export const AuthContextProvider=({children}) =>{
   const [login, setlogin]= useState("No");
   const [email, setEmail]= useState("");
   const [password, setPassword]= useState("");
   const onLogin = ()=>{
     if(email === USER.email &&  password ===USER.password){
       setlogg("si");
     }
   };

   return(
     <AuthContext.Provider value={{login, setEmail, setPassword, email, onLogin}}>
     {children}
   </AuthContext.Provider>

   ); 
 };

 export const useAuthContext = () => useContext(AuthContext);