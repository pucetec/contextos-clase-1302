import Head from "./components/Head/Head";
import Body from "./components/Body/body";
import Footer from "./components/Footer/Footer";
import { AuthContextProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <AuthContextProvider>
      <div style={{ textAlign: "center" }}>
      <Head  />
      <Body/>
      </div>

    </AuthContextProvider>
    
  );
};

export default App;

