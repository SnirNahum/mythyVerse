
export const FamilyTree = ({ person }) => {
  return (
    <div className="ml-4 mt-4 border-l-2 border-gray-300 pl-4">
      <div className="bg-white p-3 rounded shadow-md w-fit">
        <div className="text-lg font-semibold">{person.name}</div>
        <div className="text-sm text-gray-600">
          {person.birthDate} {person.deathDate ? `– ${person.deathDate}` : ""}
        </div>
      </div>

      {person.children?.length > 0 && (
        <div className="mt-2 ml-4 space-y-2">
          {person.children.map((child) => (
            <FamilyTree key={child.id} person={child} />
          ))}
        </div>
      )}
    </div>
  );
};
