import { useAuthContext } from "../contexts/AuthContext";
const Head = () => {
  const { setEmail, setPassword } = useAuthContext();
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
      <input onChange={(event) => setEmail(event.target.value)} />
      <input onChange={(event) => setPassword(event.target.value)} />
      <button onClick={onLogIn()}>Login</button>
    </div>
  );
};

export default Head;
