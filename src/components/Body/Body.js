import { useAuthContext } from "../../context/AuthContext";
import Arm from "./Arm";

const Body = () => {
  const { loggedIn } = useAuthContext();
  return (
    <div
      style={{
        width: "40%",
        margin: "auto",
        display: "flex",
        height: "100px",
        backgroundColor: "brown",
      }}
    >
      Is logged? {loggedIn}
    </div>
  );
};

export default Body;
