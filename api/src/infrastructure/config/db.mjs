import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config(); //dotenv variables

export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connection to db:", err.message);
  } else {
    console.log("Successful conection to db");
    connection.release(); // dispose connection
  }
});

export default pool;
