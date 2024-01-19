import Arm from "./Arm";
import { useAuthContext } from "../../contexts/AuthContext";
export const Body = () => {
  const { loggedIn } = useAuthContext();
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
      Is logged in? {loggedIn}
      <Arm side={"right"} />
      <Arm side={"left"} />
    </div>
  );
};