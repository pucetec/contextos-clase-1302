import { useAuthContext } from "../../context/AuthContext";

const Head = () => {
  const { setEmail, setPassword, handleLogIn } = useAuthContext();

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
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      ></input>
      <button onClick={handleLogIn}>Log in</button>
    </div>
  );
};

export default Head;
