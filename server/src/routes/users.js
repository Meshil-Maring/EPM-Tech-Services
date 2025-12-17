import express from "express";
import { createUser } from "../controller/create-user.js";
import { login } from "../controller/login.js";

const router = express.Router();

router.post("/sign-up", createUser);
router.post("/log-in", login);

export default router;
