import crypto from "crypto";

export default function verifySignature({
  razorpay_order_id,
  razorpay_payment_id,
  razorpay_signature,
}) {
  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expected = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest("hex");

  return expected === razorpay_signature;
}
