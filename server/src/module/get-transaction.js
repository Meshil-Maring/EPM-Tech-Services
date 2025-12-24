import db from "../config/db.js";

export const getTransactionModule = async (userId) => {
  const query = `
    SELECT *
    FROM transactions
    WHERE user_id = $1
    ORDER BY date DESC
  `;

  const { rows } = await db.query(query, [userId]);

  return rows;
};
