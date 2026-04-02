import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "./backend/.env" });

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

async function checkVector() {
  try {
    const client = await pool.connect();
    console.log("Checking for pgvector extension...");
    await client.query("CREATE EXTENSION IF NOT EXISTS vector;");
    const res = await client.query("SELECT extname FROM pg_extension WHERE extname = 'vector';");
    
    if (res.rows.length > 0) {
      console.log("SUCCESS: pgvector is enabled!");
    } else {
      console.log("ERROR: pgvector could not be enabled.");
    }
    client.release();
  } catch (err) {
    console.error("DATABASE ERROR:", err.message);
  } finally {
    await pool.end();
  }
}

checkVector();
