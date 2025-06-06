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

export function handleUserError(message: string, err: unknown): string | void {
  logger.error(message, err);

  if (typeof err === "object" && err !== null && "code" in err) {
    const errorCode = (err as any).code;
    const errorDetail = (err as any).detail;
    if (errorCode === "23505") {
      return _get_clean_detail_message(errorDetail);
    }

    return errorDetail;
  }
}

function _get_clean_detail_message(errorDetail: string): string {
  const match = errorDetail.match(/\(([^)]+)\)=\(([^)]+)\)/);

  if (match) {
    const field: string = match[1];
    const value: string = match[2];
    return `${field} ${value} already exist`;
  }
  return "Unknown Error";
}
