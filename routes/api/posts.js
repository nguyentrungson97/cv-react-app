const express = require("express");
const router = express.Router();

// GET api/posts

router.get("/", (req, res) => res.send("posts"));

module.exports = router;
