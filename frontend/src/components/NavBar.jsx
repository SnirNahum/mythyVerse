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
    </div>
  );
}
