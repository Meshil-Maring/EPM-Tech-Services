export const isAuth = async (req, res, next) => {
  const userId = await req.session.userId;

  if (!userId)
    return res
      .status(401)
      .json({ authenticated: false, error: "Not authenticated!" });

  next();
};
