import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const USER = {
  email: "a@a.com",
  password: "12345",
};

export const AuthContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
