import Body from "./components/Body/Body";
import Head from "./components/Head/Head";
import AuthContextProvider from "./context/AuthContext";

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
