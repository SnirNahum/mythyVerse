import { useEffect, useState } from "react";
import "./App.css";
import "./assets/styles/main.scss";
import AppFooter from "./components/AppFooter.jsx";
import Canvas from "./components/Canvas.jsx";
import { NavBar } from "./components/NavBar.jsx";

function App() {
  return (
    <div className="main-layout">
      <NavBar />
      <Canvas />
      <AppFooter />
    </div>
  );
}

export default App;
