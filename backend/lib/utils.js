import mysql from "mysql2/promise";

//db connection pool
const pool = mysql.createPool({
  user: "root",
  password: "root",
  database: "bankbuddy",
  host: "localhost",
  port: 3306,
});

//function to make sql querying beautiful to use/write
export async function query(sql, params) {
  const [results] = await pool.execute(sql, params);
  return results;
}
