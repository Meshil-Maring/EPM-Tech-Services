export const sessionConfig = {
  name: "session-id",
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};
