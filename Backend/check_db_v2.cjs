const { Pool } = require('pg');
require('dotenv').config({ path: './.env' });

async function setup() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  try {
    console.log('--- Database Setup Start ---');
    console.log('Checking for pgvector extension...');
    await pool.query('CREATE EXTENSION IF NOT EXISTS vector;');
    const res = await pool.query('SELECT extname FROM pg_extension WHERE extname = \'vector\'');
    
    if (res.rows.length > 0) {
      console.log('SUCCESS: pgvector is enabled!');
    } else {
      console.log('ERROR: pgvector could not be enabled.');
    }
  } catch (err) {
    console.error('DATABASE ERROR:', err.message);
  } finally {
    await pool.end();
    console.log('--- Database Setup Complete ---');
  }
}

setup();
