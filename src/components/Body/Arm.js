const Arm = ({ side }) => {
  return (
    <div
      style={{
        width: "20%",
        margin: "auto",
        display: "block",
        height: "100px",
        backgroundColor: side === "left" ? "yellow" : "blue",
      }}
    >
      Mi brazo {side} duele?
    </div>
  );
};

export default Arm;
