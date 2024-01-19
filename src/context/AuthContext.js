import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const User = {
  email: "pablo@gmail.com",
  password: "messi",
};

const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState("no");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = () => {
    if (email === User.email && password === User.password)
      return setLoggedIn("si");
  };

  return (
    <AuthContext.Provider
      value={{ loggedIn, email, setEmail, setPassword, handleLogIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
