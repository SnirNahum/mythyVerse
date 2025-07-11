import { useState } from "react";
import Card from "./Card";
import UniverseFilter from "./UniverseFilter";
import { NAME } from "../utils/SavedWords";
import { useMythyRootsStore } from "../store/store";

const CardsPage = ({ onClose }) => {
  const universes = useMythyRootsStore((state) => state.universes);
  const [filteredUniverses, setFilteredUniverses] = useState(universes);

  const onChangeHandler = (filteredUniverse) => {
    const filter = universes.filter((universe) =>
      universe[NAME].toLowerCase().startsWith(filteredUniverse.toLowerCase())
    );
    setFilteredUniverses(filter);
  };

  return (
    <>
      <UniverseFilter universes={universes} universeFilter={onChangeHandler} />

      <div className="universe-card">
        <Card filteredUniverses={filteredUniverses} onClose={onClose} />
      </div>
    </>
  );
};

export default CardsPage;
