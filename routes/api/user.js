const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

// GET api/user

router.post(
  "/",
  [
    check("name", "Name is require").not().isEmpty(),
    check("password", "Password is require 6 character").isLength({ min: 6 }),
    check("email", "Valid Email is require").isEmail(),
  ],
  (req, res) => {
    const errors = validationResult(req);

    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("Usr");
  }
);

module.exports = router;
