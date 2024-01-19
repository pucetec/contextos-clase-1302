import { useAuthContext } from "../../contexts/AuthContext";
const Arm = ({  side }) => {
  const{email}=useAuthContext();
  return (
    <div
      style={{
        width: "20%",
        margin: "auto",
        display: "block",
        height: "100px",
        backgroundColor: side === "left" ? "#269337" : "#269337",
        color: "white",
      }}
    >
      {/*
      Brazo {side} duele? {doesItHurt}
    */}
    </div>
  );
};

export default Arm;
