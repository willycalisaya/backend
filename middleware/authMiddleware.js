const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(403);
  try {
    req.user = jwt.verify(token, process.env.SECRET_JWT);
    next();
  } catch {
    res.sendStatus(403);
  }
};
