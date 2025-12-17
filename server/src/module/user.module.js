import db from "../config/db.js";

export const newUser = (name, email, password) => {
  return db.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
    [name, email, password]
  );
};

export const findByEmail = async (email) => {
  const { rows } = await db.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  return rows[0];
};
