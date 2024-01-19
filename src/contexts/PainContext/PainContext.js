import { createContext, useContext, useState } from "react";

const PainContext = createContext();

const user={
  email: "Bob@gmail.com",
  password: "123"
}
export const PainContextProvider = ({ children }) => {
  const [doesItHurt, setDoesItHurt] = useState("no");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const loginUser = () => {
    if (email === user.email && password === user.password) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  };

  return (
    <PainContext.Provider value={{ doesItHurt, setDoesItHurt, email, setEmail, password, setPassword, loginUser, isLogged}}>
      {children}
    </PainContext.Provider>
  );
};

export const usePainContext = () => useContext(PainContext);
