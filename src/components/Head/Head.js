const Head = ({ doesItHurt }) => {
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
    </div>
  );
};

export default Head;
