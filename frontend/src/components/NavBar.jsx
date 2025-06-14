<<<<<<< HEAD
import { UNIVERSES } from "../Utils/SavedWords";
import MythyRootsLogo from "../Utils/MythyRootsLogo";
import UniverseDropdown from "../Utils/Mui/UniverseDropdown";
import EntityDropdown from "./EntityDropdown";
import UniverseModal from "./UniverseModal";
import { useEffect, useState } from "react";
import { httpService } from "../services/httpService";

export function NavBar() {
  const [universes, setUniverses] = useState([]);

  useEffect(() => {
    const getAllUniverses = async () => {
      try {
        const response = await httpService.get(UNIVERSES);
        setUniverses(response);
      } catch (error) {
        console.error("Error fetching universes:", error);
      }
    };
    getAllUniverses();
  }, []);
  return (
    <div className="navbar-container">
        <MythyRootsLogo />
        {/* <UniverseDropdown entities={universes} entityName={UNIVERSES} /> */}
        {/* <EntityDropdown /> */}
        <UniverseModal universes={universes} />
=======
import { CHARACTERS, UNIVERSES } from "../Utils/SavedWords";
import MythyRootsLogo from "../Utils/MythyRootsLogo";
import UniverseDropdown from "../Utils/Mui/UniverseDropdown";
import UniversesFilter from "./navbar/UniversesFilter";
import EntityDropdown from "./EntityDropdown";

export function NavBar({ universes, characters }) {
  return (
    <div className="navbar-container">
      <MythyRootsLogo />
      <UniversesFilter />
      {/* <UniverseDropdown
        entities={universes}
        entityName={UNIVERSES}
      /> */}
      {/* <UniverseDropdown
        entities={characters}
        entityName={CHARACTERS}
      /> */}
      <EntityDropdown  universes={universes}/>
>>>>>>> d9bd0bdc9edb474f247c8126948e091cad0a7028
    </div>
  );
}
