import { usePainContext } from "../../contexts/PainContext";

const Head = ({ doesItHurt }) => {
  const { doesItHurt } = usePainContext();
  return (
    <div
      style={{
        width: "20%",
        margin: "auto",
        display: "block",
        height: "100px",
        backgroundColor: "red",
      }}
    >
      <>input onChange={email}</>
    </div>
  );
};
