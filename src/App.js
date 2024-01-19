import "./App.css";
import Footers from "./components/Footers/Footers";
import Body from "./components/Body/Body";
import Head from "./components/Head/Head";
import { PaintContextProvider } from "./contexts/PainContext";
import { AuthContextProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <AuthContextProvider>
      <Head  />
      <Body  />
      <Footers  />
      </AuthContextProvider>
    </div>
  );
};

export default App;
