import { Router } from 'express';
import pool from '../../db';

const router = Router();

router.get('/db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ db: 'connected', time: result.rows[0].now });
  } catch (error) {
    console.error('Database health check failed:', error);
    res.status(500).json({ db: 'disconnected', error: error });
  }
});

export default router;
