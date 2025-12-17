import express from "express";
import cors from "cors";
import session from "express-session";

import mail from "./src/services/mail.js";
import usersRoute from "./src/routes/users.js";

import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;
app.use(cors());

app.use(express.json());

// SESSION CONFIG
app.use(
  session({
    name: "session-id",
    secret: process.env.SESSION_SECRET,
    resave: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60,
    },
  })
);

// Intouch send email message
app.post("/send", (req, res) => {
  const data = req.body;

  res.json("Sucessfully send");

  mail(data);
});

app.use("/auth", usersRoute);

app.listen(PORT, () => console.log("Server port: ", PORT));
