import razorpay from "../config/razorpay.config.js";
import verifySignature from "../utils/verify-signature.js";
import {
  createTransaction,
  updateTransaction,
} from "../module/transaction.module.js";

export const createOrder = async (req, res) => {
  try {
    const { data } = req.body;

    // Razor pay order
    const amountInPaise = Number(data.amount) * 100;

    const order = await razorpay.orders.create({
      amount: amountInPaise,
      currency: "INR",
    });

    // save PENDING transaction immediately
    await createTransaction({
      orderId: order.id,
      userId: data.userId,
      name: data.name || "Guest",
      phoneNumber: data.phone || null,
      email: data.email,
      date: new Date(),
      plan: data.plan,
      amount: data.amount,
      status: "PENDING",
    });

    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Order creation failed" });
  }
};

export const verifyPayment = async (req, res) => {
  try {
    const isValid = verifySignature(req.body);

    if (!isValid) {
      await updateTransaction({
        orderId: req.body.razorpay_order_id,
        status: "FAILED",
      });

      return res.status(400).json({ message: "Invalid payment" });
    }

    // Payment success
    await updateTransaction({
      orderId: req.body.razorpay_order_id,
      paymentId: req.body.razorpay_payment_id,
      status: "SUCCESS",
    });

    res.json({ message: "Payment verified successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Payment verification failed" });
  }
};
