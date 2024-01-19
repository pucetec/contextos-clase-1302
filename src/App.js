import Footer from "./components/Footer/Footer";
import Head from "./components/Head/Head";
import Body from "./components/Body/Body";



const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Head doesItHurt={"si"} />
      <Body doesItHurt={"si"} />
      <Footer doesItHurt={"si"} />
    </div>
  );
}

export default App;
