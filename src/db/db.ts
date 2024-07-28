import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: process.env.PROD_HOST || process.env.HOST,
    user: process.env.PROD_USER || process.env.MYSQL_USER,
    password: process.env.PROD_PASSWORD || process.env.MYSQL_PASSWORD,
    database: process.env.PROD_DATABASE || process.env.MYSQL_DATABASE,
    port: (process.env.PROD_PORT as unknown as number) || 8000,
  })
  .promise();

export { pool };
