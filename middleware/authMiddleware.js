// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ message: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, "secretkey"); // later move "secretkey" to .env
    req.user = decoded; // store user info
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};
