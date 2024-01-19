import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const USER = {
  email: "cristian@edu.com",
  password: "12sañi5",
};

export const AuthContextProvider = ({ children }) => {
  const [email, setEmail] = useState(USER.email);
  const [password, setPassword] = useState(USER.password);

  return (
    <AuthContext.Provider value={{ email, password }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
