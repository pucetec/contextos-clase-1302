import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const USER = {
    email: "a@test.com",
    password: "12345",
};

export const AuthContextProvider = ({children}) => {
  const [loggedIn, setLoggedIn] =useState("no");
  const [email, setEmail] = useState ("") ;
  const [password, setPassword] = useState ("") ;
  const onLogIn = () => {
    if (email === USER.email && password === USER.password){
      setLoggedIn("Si")
    }
  }


  return(
    <AuthContext.Provider value={{loggedIn, email, setEmail, setPassword, onLogIn}}>
      {children}
    </AuthContext.Provider>
  );
};
 

export const useAuthContext = () => useContext(AuthContext);
