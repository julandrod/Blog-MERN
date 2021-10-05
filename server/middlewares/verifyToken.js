import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    if (!token) return res.status(403).json({ message: "No token provided" });

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) return res.status(403).json({ message: "Token is not valid", error: err });
      req.user = user;
      next();
    });
  } catch (error) {
    res.status(401).json({ message: "Unauthorized", error });
  }
};