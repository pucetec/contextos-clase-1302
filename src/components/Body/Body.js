import { usePainContext } from "../../contexts/PainContext";
import Arm from "./Arm";

const Body = ({}) => {
  const { doesItHurt } = usePainContext();
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
      Mi cuerpo duele? {doesItHurt}
      <Arm side={"left"} />
      <Arm side={"right"} />
    </div>
  );
};

export default Body;
