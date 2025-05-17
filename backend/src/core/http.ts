// src/core/http.ts
import { Request, Response, RequestHandler } from "express";
import pool from "../db";

// type ParamExtractor = (req: Request) => any[];

// export function get(
//     query: string,
//     tableName: string,
//     extractParams?: ParamExtractor
// ): RequestHandler {
//     return async (req: Request, res: Response): Promise<void> => {
//         try {
//             const params = extractParams ? extractParams(req) : [];
//             const result = await pool.query(query, params);
//             res.json(result.rows);
//         } catch (err) {
//             console.error(`Error fetching ${tableName}: ${err}`);
//             res.status(500).json({ error: `Failed to fetch ${tableName}` });
//         }
//     };
// }


