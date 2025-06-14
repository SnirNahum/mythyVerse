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
    </div>
  );
}
