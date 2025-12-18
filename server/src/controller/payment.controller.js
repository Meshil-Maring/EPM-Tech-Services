import razorpay from "../config/razorpay.config.js";
import verifySignature from "../utils/verify-signature.js";

export const createOrder = async (req, res) => {
  const { amount } = req.body;

  const order = await razorpay.orders.create({
    amount: amount * 100,
    currency: "INR",
  });

  res.json(order);
};

export const verifyPayment = (req, res) => {
  const isValid = verifySignature(req.body);

  if (!isValid) return res.status(400).json({ error: "Invalid payment" });

  res.json({ success: true });
};
