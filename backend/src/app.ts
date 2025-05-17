import express, { Application } from "express";
import healthRouter from "./api/routes/healthRoutes";
import universeRouter from "./api/routes/universeRoutes";
// import characterRouter from "./api/routes/characterRoutes";
import pinoHttp from "pino-http";
import logger from "./logger/logger";
import { logRequestDetails } from "./middleware/logger/logRequests";
import { logErrors } from "./middleware/logger/errorLogger";

const app: Application = express();

app.use(pinoHttp({ logger }));
app.use(logRequestDetails);
app.use(logErrors);

app.use(express.json());
app.use("/health", healthRouter);
app.use("/api/universe", universeRouter);
// app.use("/api/character", characterRouter);

export default app;
