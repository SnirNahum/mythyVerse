import { Response } from "express";
import logger from "../logger/logger";

export default function handleServerError(
  res: Response,
  message: string,
  err: unknown
): void {
  logger.error(message, err);
  res.status(500).json({
    message: message,
    error: err instanceof Error ? err.message : "Unknown error",
  });
}
