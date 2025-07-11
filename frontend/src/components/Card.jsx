import FilterNotFound from "./FilterNotFound";
import { UNIVERSE } from "../utils/SavedWords";
import { DynamicIcon } from "lucide-react/dynamic";
import { useMythyRootsStore } from "../store/store";

const Card = ({
  filteredUniverses,
  isUniverse: isUniverseModal = true,
  onClose,
}) => {
  const { setCurrentUniverse } = useMythyRootsStore();

  const UniverseHandler = (filteredUniverse) => {
    setCurrentUniverse(filteredUniverse);
    onClose(false);
  };
  if (filteredUniverses.length < 1) {
    return <FilterNotFound filterName={UNIVERSE} />;
  }

  return (
    <div className="card-container">
      {filteredUniverses.map((filteredUniverse, idx) => {
        return (
          <div
            key={idx}
            className="card-details"
            onClick={() => UniverseHandler(filteredUniverse)}
          >
            <div
              className="card-header"
              style={{ backgroundColor: filteredUniverse.background_color }}
            >
              <h3 className="card-header-title">{filteredUniverse.name}</h3>
              {isUniverseModal && (
                <DynamicIcon
                  name={filteredUniverse.icon}
                  color="white"
                  size={30}
                />
              )}
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
