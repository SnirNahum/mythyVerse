const FilterNotFound = ({ filterName }) => {
  return (
    <div className="universe-not-found">
      {`${filterName} not Found`}
      <p>Click here to add new universe!</p>
    </div>
  );
};

export default FilterNotFound;
