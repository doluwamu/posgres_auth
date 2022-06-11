import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const Pool = pg.Pool;

const { user, password, pg_port, host, database } = process.env;
const pool = new Pool({
  user,
  password,
  port: pg_port,
  host,
  database,
});

export default pool;
