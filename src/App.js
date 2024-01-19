import Footer from "./components/Footers/Footers.js";
import Body from "./components/Body/Arm.js";
import Head from "./components/Head/Head";

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Head doesItHurt={"si"} />
      <Body doesItHurt={"si"} />
      <Footer doesItHurt={"si"} />
    </div>
  );
};

export default App;
