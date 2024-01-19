import { useAuthContext } from "../../contexts/AuthContext";

const Arm = ({ side }) => {
    const {email} = useAuthContext();
    return (
      <div
        style={{
          width: "20%",
          margin: "auto",
          display: "block",
          height: "100px",
          backgroundColor: side === "left" ? "purple" : "blue",
          color: "white",
        }}
      >
        {email}
      </div>
    );
  };
  
  export default Arm;