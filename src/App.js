import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
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
