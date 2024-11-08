import { useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

import Router from "./routes";

function App() {
  const location = useLocation();
  const hideNavBar = location.pathname === "/login";
  return (
    <>
      {!hideNavBar && <NavBar />}
      <Router />
    </>
  );
}

export default App;
