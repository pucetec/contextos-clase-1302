import { usePainContext } from "../../contexts/PainContext";

const Head = () => {
  const { doesItHurt, setDoesItHurt } = usePainContext();

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
      Duele mi cabeza? {doesItHurt}
      <button onClick={() => setDoesItHurt("no")}>Desactivar dolor!</button>
    </div>
  );
};

export default Head;