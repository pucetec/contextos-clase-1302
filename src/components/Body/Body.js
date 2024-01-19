import { usePainContext } from "../../contexts/PainContext/PainContext";
import Arm from "./Arm";

const Body = ({ doesItHurt }) => {
  const { isLogged } = usePainContext();
  
  return (
    <div
      style={{
        width: "40%",
        margin: "auto",
        display: "flex",
        height: "100px",
        backgroundColor: "green",
        color: "white",
      }}
    >
      <Arm doesItHurt={doesItHurt} side={"left"} />
      <br/>
      {isLogged ? <p>Estas adentro</p> : <p>Ingresa al sistema</p>}
      <Arm doesItHurt={doesItHurt} side={"right"} />
    </div>
  );
};

export default Body;
