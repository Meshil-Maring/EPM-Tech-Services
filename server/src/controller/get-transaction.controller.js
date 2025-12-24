import { getTransactionModule } from "../module/get-transaction.js";

export const getTransaction = async (req, res) => {
  try {
    const userId = req.session.userId;

    // auth check
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const transactions = await getTransactionModule(userId);

    res.status(200).json(transactions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to get transactions" });
  }
};
