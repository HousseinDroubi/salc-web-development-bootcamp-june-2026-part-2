import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.HOST || "127.0.0.1",
  user: process.env.DATABASE_USER || "root",
  password: process.env.DATABASE_PASSWORD || "",
  database: process.env.DATABASE_NAME || "todos_db",
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 0,
});

export default pool;
