import dotenv from "dotenv";
dotenv.config({ path: ".env.development" });

export const DATABASE_URL = process.env.DATABASE_URL!;
