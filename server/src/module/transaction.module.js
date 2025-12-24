import db from "../config/db.js";

export const createTransaction = async ({
  userId,
  paymentId = null,
  orderId,
  name,
  email,
  phoneNumber,
  date,
  plan,
  amount,
  status = "PENDING",
}) => {
  const query = `
    INSERT INTO transactions
    (user_id, payment_id, order_id, name, email, phone_number, date, plan_name, amount, status)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING *;
  `;

  const values = [
    userId,
    paymentId,
    orderId,
    name,
    email,
    phoneNumber,
    date,
    plan,
    amount,
    status,
  ];

  const { rows } = await db.query(query, values);
  return rows[0];
};

export const updateTransaction = async ({
  orderId,
  paymentId = null,
  status,
}) => {
  await db.query(
    `UPDATE transactions
    SET 
      payment_id = COALESCE($1, payment_id),
      status = $2
    WHERE order_id = $3
    `,
    [paymentId, status, orderId]
  );
};
