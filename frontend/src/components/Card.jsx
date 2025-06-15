import FilterNotFound from "./FilterNotFound";
import { UNIVERSE } from "../Utils/SavedWords";
import { DynamicIcon } from "lucide-react/dynamic";
import { useNavigate } from "react-router-dom";

const Card = ({ filteredUniverses }) => {
  if (filteredUniverses.length < 1) {
    return <FilterNotFound filterName={UNIVERSE} />;
  }

  return (
    <div className="card-container">
      {filteredUniverses.map((filteredUniverse, idx) => {
        return (
          <div key={idx} className="universe-card">
            <div
              className="card-header"
              style={{ backgroundColor: filteredUniverse.background_color }}
            >
              <h3 className="card-header-title">{filteredUniverse.name}</h3>
              <DynamicIcon
                name={filteredUniverse.icon}
                color="white"
                size={30}
              />
            </div>
            <div className="card-body">
              <p className="card-description">{filteredUniverse.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
