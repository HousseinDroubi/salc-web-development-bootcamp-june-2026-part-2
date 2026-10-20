import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.HOST || "127.0.0.1", // Database server address (defaults to localhost)
  user: process.env.DATABASE_USER || "root", // Database username for authentication
  password: process.env.DATABASE_PASSWORD || "", // Password for the database user
  database: process.env.DATABASE_NAME || "todos_db", // Name of the specific database to connect to
  connectionLimit: 10, // Maximum number of simultaneous connections allowed in the pool
  waitForConnections: true, // Queue requests if all connections are busy instead of throwing an error. Hence, if all connections are busy, next request should wait until a connection is ready for it
  queueLimit: 0, // Maximum number of queued connection requests (0 means unlimited)
  typeCast: (field, next) => {
    if (field.type === "TINY" && field.length === 1) {
      const val = field.string();
      return val === null ? null : val === "1";
    }

    return next();
  },
});

export default pool;
