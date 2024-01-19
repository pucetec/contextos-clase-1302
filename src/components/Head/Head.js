import { useAuthContext } from "../../contexts/AuthContext";
export const Head = () => {
  const { setEmail, setPassword, onLogIn } = useAuthContext();
  return (
    <div
      style={{
        width: "30%",
        margin: "auto",
        display: "block",
        height: "100px",
        backgroundColor: "red",
      }}
    >
      <input onChange={(event) => setEmail(event.target.value)} />
      <input
        onChange={(event) => setPassword(event.target.value)}
        type="password"
      />
      <button onClick={onLogIn()}>Registrate</button>
    </div>
  );
};