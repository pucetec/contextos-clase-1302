const Arm = ({ doesItHurt, side }) => {
    return (
      <div
        style={{
          width: "30%",
          margin: "auto",
          display: "block",
          height: "100px",
          backgroundColor: side === "left" ? "purple" : "blue",
          color: "white",
        }}
      >
        Brazo {side} duele? {doesItHurt}
      </div>
    );
  };
  
  export default Arm;
  