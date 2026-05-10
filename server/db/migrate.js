const { Pool } = require('pg');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const migrate = async () => {
  try {
    await pool.query(`
      ALTER TABLE trips 
        ADD COLUMN IF NOT EXISTS budget NUMERIC(12,2),
        ADD COLUMN IF NOT EXISTS travelers INTEGER DEFAULT 1,
        ADD COLUMN IF NOT EXISTS currency VARCHAR(10) DEFAULT '$',
        ADD COLUMN IF NOT EXISTS description TEXT
    `);
    console.log('Migration successful: added budget, travelers, currency, description to trips table');
  } catch (err) {
    console.error('Migration failed:', err.message);
  } finally {
    await pool.end();
  }
};

migrate();
