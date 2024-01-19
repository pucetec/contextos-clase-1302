import Footer from "./Components/Footer/Footer";
import Body from "./Components/Body/Body";
import Head from "./Components/Head/head";
import { PainContextProvider } from "./contexts/PainContext";

const App = () => {
  return (
    <>
      <PainContextProvider>
        <div style={{ textAlign: "center" }}>
          <Head doesItHurt={"si"} />
          <Body doesItHurt={"si"} />
          <Footer doesItHurt={"si"} />
        </div>
      </PainContextProvider>
    </>
  );
};

export default App;