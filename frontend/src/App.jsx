import { BrowserRouter, Router } from "react-router-dom";
import "./App.css";
import "./assets/styles/main.scss";
import AppFooter from "./components/AppFooter.jsx";
import InfiniteCanvas from "./components/InfiniteCanvas.jsx";
import { NavBar } from "./components/NavBar.jsx";

function App() {
  return (
    <div className="main-layout">
      <NavBar />
      <InfiniteCanvas />
      <AppFooter />
    </div>
  );
}

export default App;
