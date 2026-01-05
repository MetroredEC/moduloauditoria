import express from "express";
import cors from "cors";
import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

app.get("/api/arc", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM arc_data");
  res.json(rows);
});

app.get("/api/criteria", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM criteria");
  res.json(rows);
});

app.listen(3000, () => console.log("API running on http://localhost:3000"));
