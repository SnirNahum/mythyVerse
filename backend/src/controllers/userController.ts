import { Request, Response } from 'express';
import db from '../db';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
