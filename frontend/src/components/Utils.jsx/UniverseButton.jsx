import { UNIVERSES } from "../../utils/SavedWords";

const UniverseButton = ({ handleOpen }) => {
  return (
    <button onClick={handleOpen} type="universe-button" className="btn">
      <p>{UNIVERSES?.toUpperCase()}</p>
      <div className="container-stars">
        <div className="stars"></div>
      </div>

      <div className="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </button>
  );
};

export default UniverseButton;


