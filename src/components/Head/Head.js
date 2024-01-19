import { usePainContext } from "../../contexts/PainContext/PainContext";

const Head = ({ doesItHurt }) => {
  const { email, setEmail, loginUser, password, setPassword } = usePainContext();
  
  return (
    <div
      style={{
        width: "20%",
        margin: "auto",
        display: "block",
        height: "250px",
        backgroundColor: "red",
      }}
    >
      <h3>Ingrese su nombre de usuario</h3>
      <input onChange={(e) => setEmail(e.target.value)}/>
      <h3>Ingrese su contraseña</h3>
      <input onChange={(e) => setPassword(e.target.value)}/>
      <br/><br/>
      <button onClick={loginUser}>Enviar</button>
    </div>
  );
};

export default Head;
