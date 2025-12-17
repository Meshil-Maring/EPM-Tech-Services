import db from "../config/db.js";

export const createUser = (name, email, password) => {
  return db`INSERT INTO users (name, email, password) VALUES (${name}, ${email}, ${password}) RETURNING *;`;
};

export const findByEmail = async (email) => {
  const { rows } = await db.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return rows[0];
};
