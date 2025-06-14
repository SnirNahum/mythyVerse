import { Zap } from "lucide-react";
import FilterNotFound from "./FilterNotFound";
import { UNIVERSE } from "../Utils/SavedWords";

const Card = ({ filteredUniverses }) => {
  if (filteredUniverses.length < 1) {
    return <FilterNotFound filterName={UNIVERSE}/>
  }

  return (
    (<div className="card-container">
      {filteredUniverses.map((filteredUniverse, idx) => (
        <div key={idx} className="universe-card">
          <div className="card-header">
            <h3 className="card-header-title">{filteredUniverse.name}</h3>
            <Zap />
          </div>
          <div className="card-body">
            <p className="card-description">{filteredUniverse.description}</p>
          </div>
        </div>
      ))}
    </div>)
  );
};

export default Card;
