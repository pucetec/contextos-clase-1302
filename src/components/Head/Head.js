//import { usePainContext } from "../../contexts/PainContext";
import { useAuthContext } from "../../contexts/AuthContext";

export const Head = () => {
  const{setEmail,setPassword,onLogIn}=useAuthContext();
  
  return (
    <div
      style={{
        width: "20%",
        margin: "auto",
        display: "block",
        height: "100px",
        backgroundColor: "#ffdfab",
      }}
    >
 
      <input onChange={(event)=>setEmail(event.target.value)}/>
      <input onChange={(event)=>setPassword(event.target.value)} type="password"/>
      <button onClick={() => onLogIn()}>Log In on</button>
      {/*
      Duele mi cabeza? {doesItHurt}
      <button onClick={()=>setDoesItHurt("no")}>Desactivar dolor!</button>
      */}
    </div>
  );
};

export default Head;
