import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const USER = {
  email: "test@example.com",
  password: "123",
};

export const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  const handleLogin = () => {
    if (email === USER.email && password === USER.password) {
      setLoggedIn(true);
      setLoginError(null);
    } else {
      setLoggedIn(false);
      setLoginError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        email,
        password,
        loginError,
        setEmail,
        setPassword,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
