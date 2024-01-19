import Arm from "./Arm";
import { useAuthContext } from "../../contexts/AuthContext";
const Body=()=>{
  const {logg}=useAuthContext();
  return(
    <div
      style={{
        with:"20%",
        backgroundColor: "blue",
      }
      } 
    >
      Is logged in? {logg} 
      <Arm side={"left"}/>
      <Arm  side={"right"}/>
    </div>
    );
  
  };
  export default Body;