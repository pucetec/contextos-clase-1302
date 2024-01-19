import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const user = {
  email: "fernando.imkt@hotmail.com",
  password: "12345"
};

export const AuthContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState("");
  
  return (
    <AuthContext.Provider value=({ loggedIn,  setLoggedIn})>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
