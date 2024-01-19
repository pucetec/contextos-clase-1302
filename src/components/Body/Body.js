import Arm from "./Arm";
import { useAuthContext } from "../../contexts/AuthContext";
const Body = () => {
  const {loggedIn} = useAuthContext();
  return (
    <div
      style={{
        width: "50%",
        margin: "auto",
        display: "flex",
        height: "100px",
        backgroundColor: "green",
        color: "white",
      }}
    >
      Estas logueado? {loggedIn}
      <Arm side={"left"} />
      <Arm side={"right"} />
    </div>
  );
};

export default Body;
  