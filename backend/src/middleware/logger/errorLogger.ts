// src/middleware/errorLogger.ts
import { Request, Response, NextFunction } from "express";

export function logErrors(err: any, req: Request, res: Response, next: NextFunction) {
  req.log.error(
    {
      err,
      method: req.method,
      url: req.originalUrl,
      body: req.body,
      query: req.query,
      params: req.params,
    },
    "Unhandled error"
  );

  res.status(500).json({ message: "Internal Server Error" });
}
