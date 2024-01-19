import Arm from "./Arm";

const Body = ({ doesItHurt }) => {
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
      <Arm doesItHurt={doesItHurt} side={"left"} />
      <Arm doesItHurt={doesItHurt} side={"right"} />
    </div>
  );
};

export default Body;
