import { findByEmail } from "../module/user.js";

export const login = async (req, res) => {
  const { email } = req.body;

  const response = await findByEmail(email);

  res.json({ message: "User name found" });
};
