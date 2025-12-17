import bcrypt, { hash } from "bcrypt";
import { findByEmail } from "../module/user.module.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await findByEmail(email);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // encrypted salted password
  const validPass = await bcrypt.compare(password, user.password);

  if (!validPass) return res.status(401).json({ error: "Wrong password!" });

  return res.status(200).json({
    message: "Login successful",
    user,
  });
};
