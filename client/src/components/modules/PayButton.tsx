import { createOrder } from "../../api/payment.api.ts";
import { loadRazorpay } from "../../utils/loadRazorpay.ts";
import { server_url } from "../../utils/url.tsx";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const PayButton = () => {
  const pay = async () => {
    await loadRazorpay();
    const order = await createOrder(500);

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      order_id: order.id,
      handler: async function (res: any) {
        await fetch(`${server_url}/api/payment/verify`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(res),
        });
      },
    };

    new window.Razorpay(options).open();
  };

  return (
    <button className="bg-yellow-50/20 z-30" onClick={pay}>
      Pay ₹500
    </button>
  );
};

export default PayButton;
