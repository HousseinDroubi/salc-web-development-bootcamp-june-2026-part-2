import dotenv from "dotenv";
dotenv.config();
import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 10, // like connectionLimit: 10 in mysql2
  // waitForConnections: true: This is not supported in pg but it is always enabled by default.
  // queueLimit: 0 (Unlimited Queue): This is not supported in pg but the internal queue is unlimited by default.
});

export default pool;
