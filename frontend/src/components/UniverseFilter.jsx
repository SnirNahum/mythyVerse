const UniverseFilter = ({ universeFilter }) => {
  return (
    // <!-- From Uiverse.io by Lakshay-art -->
    <>
      <div id="poda">
        <div className="glow"></div>
        <div className="darkBorderBg"></div>
        <div className="darkBorderBg"></div>
        <div className="darkBorderBg"></div>

        <div className="white"></div>

        <div className="border"></div>

        <div id="button-container">
          <input
            onChange={(e) => universeFilter(e.target.value)}
            placeholder="Search for universe..."
            type="text"
            autoComplete="off"
            spellCheck="false"
            name="text"
            className="input"
          />
          <div id="input-mask"></div>
        </div>
      </div>
    </>
  );
};

export default UniverseFilter;
