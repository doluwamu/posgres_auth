import pool from "../db.js";

class teamMemberQuery {
  constructor(name = "", position = "") {
    (this.name = name), (this.position = position);
  }

  createTeamMember = async () => {
    return await pool.query(
      `INSERT INTO member (name, position) VALUES ('${this.name}', '${this.position}');`,
    );
  };

  listTeamMembers = async () => {
    return await pool.query("SELECT * FROM member;");
  };
}

export default teamMemberQuery;
