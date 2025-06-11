import express, { Application } from "express";
import cors from "cors";

import healthRouter from "./api/routes/healthRoutes";
import universeRouter from "./api/routes/universeRoutes";
import pinoHttp from "pino-http";
import logger from "./logger/logger";
import { logRequestDetails } from "./middleware/logger/logRequests";
import { logErrors } from "./middleware/logger/errorLogger";
import familiesRouter from "./api/routes/familiesRoutes";
import characterRouter from "./api/routes/characterRoutes";
import { usersRouter } from "./api/routes/usersRoutes";
import relationshipsRouter from "./api/routes/relationshipsRoutes";

const app: Application = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use(pinoHttp({ logger }));
app.use(logRequestDetails);
app.use(logErrors);

app.use(express.json());
app.use("/health", healthRouter);
app.use("/api/universes", universeRouter);
app.use("/api/families", familiesRouter);
app.use("/api/characters", characterRouter);
app.use("/api/relationships", relationshipsRouter);
app.use("/api/users", usersRouter);

export default app;
