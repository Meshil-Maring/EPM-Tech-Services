import bcrypt from "bcrypt";
import { newUser } from "../module/user.module.js";

export const createUser = async (req, res) => {
  const { userName, email, password } = req.body;

  if (!userName || !email || !password)
    return res.status(404).json({ error: "All fields are required" });

  try {
    // hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await newUser(userName, email, hashedPassword);

    res.status(201).json({ message: "Account created successfully" });
  } catch (err) {
    // duplicate email error
    if (err.code === "23505") {
      return res.status(409).json({
        error: "Email already exists",
      });
    }

    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};
