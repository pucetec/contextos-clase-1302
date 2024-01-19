const Footer = ({ doesItHurt }) => {
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
         Duelen los pies? {doesItHurt}
      </div>
    );
  };
  
  export default Footer;