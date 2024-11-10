import { useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Router from "./routes";

function App() {
  const location = useLocation();
  const hideNavBar = location.pathname === "/login";
  return (
    <div className="app">
      {!hideNavBar && <NavBar />}
      <Router />
    </div>
  );
}

export default App;
