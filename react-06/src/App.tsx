import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import routerConfig from "./routes";

function App() {
  const router = createBrowserRouter(routerConfig);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
