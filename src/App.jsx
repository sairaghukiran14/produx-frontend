import "./App.css";
import { Outlet } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
function App() {
  return (
    <div>
      <NavigationBar />
      <div className="layoutbody">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
