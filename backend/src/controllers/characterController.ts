import { Request, Response } from "express";
import {
  getCharacterById,
  getCharacterRelations,
} from "../services/characterService";

export async function getCharacterByIdHandler(
  req: Request,
  res: Response
): Promise<void> {
  const characterId = req.params.id;
  try {
    const character = await getCharacterById(characterId);

    if (!character) {
      res.status(404).json({ error: "Character not found" });
      return;
    }

    const relationships = await getCharacterRelations(characterId);

    res.json({ character, relationships });
  } catch (err) {
    console.error("Error fetching character:", err);
    res.status(500).json({ error: "Failed to fetch character" });
  }
}
