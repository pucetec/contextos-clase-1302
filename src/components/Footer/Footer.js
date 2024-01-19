import { usePainContext } from "../../contexts/PainContext";

const Footer = () => {
  const { doesItHurt, setDoesItHurt } = usePainContext();
  return (
    <div
      style={{
        width: "20%",
        margin: "auto",
        display: "block",
        height: "100px",
        backgroundColor: "yellow",
      }}
    >
      Mis Pies duelen? {doesItHurt}
      <button onClick={() => setDoesItHurt("si")}>Activar dolor!</button>
    </div>
  );
};

export default Footer;
