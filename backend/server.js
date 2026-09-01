import express from "express";
import cors from "cors";
import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pkg;

const PORT = Number(process.env.PORT || 3000);
const DATABASE_URL = process.env.DATABASE_URL;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";

if (!DATABASE_URL) {
  console.error("DATABASE_URL is required");
  process.exit(1);
}

const app = express();
app.disable("x-powered-by");
app.use(cors({ origin: CORS_ORIGIN === "*" ? true : CORS_ORIGIN.split(",").map((value) => value.trim()) }));
app.use(express.json({ limit: "1mb" }));

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: process.env.PGSSL === "false" ? false : { rejectUnauthorized: false },
});

const asyncRoute = (handler) => async (req, res, next) => {
  try {
    await handler(req, res);
  } catch (error) {
    next(error);
  }
};

app.get("/health", asyncRoute(async (_req, res) => {
  await pool.query("SELECT 1");
  res.json({ ok: true });
}));

app.get("/api/arc", asyncRoute(async (_req, res) => {
  const { rows } = await pool.query("SELECT * FROM arc_data");
  res.json(rows);
}));

app.get("/api/criteria", asyncRoute(async (_req, res) => {
  const { rows } = await pool.query("SELECT * FROM criteria");
  res.json(rows);
}));

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ error: "internal_server_error" });
});

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`API listening on port ${PORT}`);
});

const shutdown = async () => {
  server.close(async () => {
    await pool.end();
    process.exit(0);
  });
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
