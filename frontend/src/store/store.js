import { create } from "zustand";

export const useMythyRootsStore = create((set) => ({
  universes: [],
  currentUniverse: {},
  currentUniverseCharacters: [],
  CurrentRelationships: [],
  setAllUniverses: (newUniverses) => set({ universes: newUniverses }),
  setCurrentUniverse: (universe) => set({ currentUniverse: universe }),
  setUniverseCharacters: (characters) =>
    set({ currentUniverseCharacters: characters }),
  setCurrentRelationships: (universe) => set({ CurrentRelationships: universe }),
}));
