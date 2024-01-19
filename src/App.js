import "./App.css";
import { Body } from "./components/Body/Body";
import { Footer } from "./components/Footer/Footer";
import { Head } from "./components/Head/Head";
import { AuthContextProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <AuthContextProvider>
      <div style={{ textAlign: "center" }}>
        <Head />
        <Body />
      </div>
    </AuthContextProvider>
  );
};

export default App;