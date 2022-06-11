import pool from "../db.js";
import bcrypt from "bcryptjs";

class userQuery {
  constructor(name = "", email = "", password = "") {
    (this.name = name), (this.email = email), (this.password = password);
  }

  hashedPassword = async () => {
    return this.password && this.password.length > 0
      ? await bcrypt.hash(this.password, 10)
      : null;
  };

  allUsers = async () => {
    return await pool.query("SELECT id, name, email FROM users");
  };

  createUserAccount = async () => {
    return await pool.query(
      `INSERT INTO users (name, email, password) VALUES ('${this.name}', '${
        this.email
      }', '${await this.hashedPassword()}');`,
    );
  };

  userExists = async () => {
    return await pool.query(
      `SELECT * FROM users WHERE email = '${this.email}';`,
    );
  };

  userExistsById = async (id) => {
    return await pool.query(`SELECT * FROM users WHERE id = ${id};`);
  };

  editUser = async (id) => {
    return await pool.query(
      `UPDATE users SET name = '${this.name}', email = '${
        this.email
      }', password = '${await this.hashedPassword()}' WHERE id = ${id}`,
    );
  };

  removeUser = async (id) => {
    return await pool.query(`DELETE FROM users WHERE id = ${id}`);
  };
}

export default userQuery;
