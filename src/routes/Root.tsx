import { Outlet } from "react-router-dom";
import "../constants";
import Header from "../components/Header";

function App() {
  return (
    <div
      className="h-screen w-screen flex flex-col bg-gray-100"
      id="app-container"
    >
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
