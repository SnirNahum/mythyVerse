import express, { Application } from "express";
import healthRouter from "./api/routes/healthRoutes";
import universeRouter from "./api/routes/universeRoutes";
import pinoHttp from "pino-http";
import logger from "./logger/logger";
import { logRequestDetails } from "./middleware/logger/logRequests";
import { logErrors } from "./middleware/logger/errorLogger";
import familiesRouter from "./api/routes/familiesRoutes";
import characterRouter from "./api/routes/characterRoutes";

const app: Application = express();

app.use(pinoHttp({ logger }));
app.use(logRequestDetails);
app.use(logErrors);

app.use(express.json());
app.use("/health", healthRouter);
app.use("/api/universe", universeRouter);
app.use("/api/families", familiesRouter);
app.use("/api/characters", characterRouter);

export default app;
