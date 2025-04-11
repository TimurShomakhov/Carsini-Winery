const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { validateRegister, validateLogin } = require("../middleware/validation");
const { validationResult } = require("express-validator");

router.post("/register", validateRegister, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
}, userController.register);

router.post("/login", validateLogin, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
}, userController.login);

module.exports = router;
