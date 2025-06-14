import { useEffect, useState } from "react";
import "./App.css";
import "./assets/styles/main.scss";
<<<<<<< HEAD
import AppFooter from "./components/AppFooter.jsx";
import Canvas from "./components/Canvas.jsx";
import { NavBar } from "./components/NavBar.jsx";

function App() {
  return (
    <div className="main-layout">
      <NavBar />
=======
import AppFooter from "./components/AppFooter";
import Canvas from "./components/Canvas";
import { NavBar } from "./components/NavBar";
import { httpService } from "./services/httpService";
import { CHARACTERS, UNIVERSES } from "./Utils/SavedWords";
 

function App() {
  const [universes, setUniverses] = useState([]);

  useEffect(() => {
    async function fetchEntities() {
      const allUniverses = await getAllUniverses();      
      setUniverses(allUniverses);
    }
    fetchEntities();
  }, []);

  async function getAllUniverses() {
    const universes = await httpService.get(UNIVERSES);
    return universes;
  }

  return (
    <div className="main-layout">
      <NavBar universes={universes}/>
>>>>>>> d9bd0bdc9edb474f247c8126948e091cad0a7028
      <Canvas />
      <AppFooter />
    </div>
  );
}

export default App;
