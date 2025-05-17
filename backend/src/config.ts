import dotenv from "dotenv";
dotenv.config({ path: ".env.development" }); // hardcoded for now; will make dynamic later

export const DATABASE_URL = process.env.DATABASE_URL!;
