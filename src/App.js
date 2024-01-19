import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import Head from "./components/Head/Head";
import { PainContextProvider } from "./contexts/PainContext/PainContext";

const App = () => {
  return (
    <PainContextProvider>
      <div style={{ textAlign: "center" }}>
        <Head doesItHurt={"si"} />
        <Body doesItHurt={"si"} />
        <Footer doesItHurt={"si"} />
      </div>
    </PainContextProvider>
  );
};

export default App;
