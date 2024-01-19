import {useAuthContext } from "../../contexts/AuthContext"; 
  
const Head = () => {
const {setEmail, setPassword, onLogin}=useAuthContext();
  return (
    <div
      style={{
        width: "20%",
        margin: "auto",
        display: "block",
        height: "100px",
        backgroundColor: "red",
      }}
    >
      Duele mi cabeza? {doesItHurt}
    <input onChange={event=>setEmail(event.target.value)} />
    <input onChange={event=>setPassword(event.target.value)} />
    <button onClick={onLogin}>Log in</button>
   </div>
  );
};

export default Head;
