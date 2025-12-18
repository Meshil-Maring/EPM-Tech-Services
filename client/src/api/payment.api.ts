const API = "http://localhost:5000/api/payment";

export const createOrder = async (amount: number) => {
  const res = await fetch(`${API}/create-order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
  });
  return res.json();
};
