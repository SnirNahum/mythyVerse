import { Request, Response, NextFunction } from "express";

export function logRequestDetails(req: Request, res: Response, next: NextFunction) {
  const start = process.hrtime();

  res.on("finish", () => {
    const [seconds, nanoseconds] = process.hrtime(start);
    const duration = (seconds * 1e3 + nanoseconds / 1e6).toFixed(1);

    req.log.info(
      {
        method: req.method,
        url: req.originalUrl,
        statusCode: res.statusCode,
        responseTime: `${duration}ms`,
      },
      "Request completed"
    );
  });

  next();
}
