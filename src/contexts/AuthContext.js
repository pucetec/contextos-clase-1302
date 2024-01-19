import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const USER = {
  email: "test@example.com",
  password: "3101",
};

export const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState("no");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
    return (
      <AuthContext.Provider
        value={{ loggedIn, setEmail, setPassword, email, onLogIn }}
      >
        {children}
      </AuthContext.Provider>
    );
  };


export const useAuthContext = () => useContext(AuthContext);