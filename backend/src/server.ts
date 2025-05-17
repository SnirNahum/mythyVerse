import app from "./app";
import pool from "./db"; // ✅ Reuse shared pool

const port = 5000;

pool.connect()
  .then(() => {
    console.log("Connected to PostgreSQL DB");
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to DB:", err);
  });
