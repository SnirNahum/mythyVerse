import { useState } from "react";
import Card from "./Card";
import UniverseFilter from "./UniverseFilter";
import { NAME } from "../Utils/SavedWords";

const CardsPage = ({ universes }) => {
  const [filteredUniverses, setFilteredUniverses] = useState(universes);

  const onChangeHandler = (filteredUniverse) => {
    const filter = universes.filter((universe)=> universe[NAME].toLowerCase().startsWith(filteredUniverse.toLowerCase()))
    setFilteredUniverses(filter)
  };

  return (
    <>
      <UniverseFilter universes={universes} universeFilter={onChangeHandler} />

      <div className="universe-card">
        <Card filteredUniverses={filteredUniverses}/>
      </div>
    </>
  );
};

export default CardsPage;
