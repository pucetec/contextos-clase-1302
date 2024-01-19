import Arm from "../Arm/Arm";
import { usePainContext } from "../../contexts/PainContext";
import { useAuthContext } from "../../contexts/AuthContext";
const Body = ({  }) => {
  const {email,loggedIn}=useAuthContext();
  return (
    <div
      style={{
        width: "40%",
        margin: "auto",
        display: "flex",
        height: "100px",
        backgroundColor: "#ffdfab",
        color: "red",
      }}
    >
      Estas loggeado?{loggedIn}
      {/*
      Mi cuerpo duele? {doesItHurt}
      <Arm doesItHurt={doesItHurt} side={"left"} />
      <Arm doesItHurt={doesItHurt} side={"right"} />
  
    */}
      </div>
  );
};

export default Body;