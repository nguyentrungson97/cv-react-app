const express = require("express");

const connectDB = require("./config/db");

const app = express();

app.get("/", (req, res) => res.send("API running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Start server"));

connectDB();

app.use(express.json({ extended: false }));

//Router
app.use("/api/users", require("./routes/api/user"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
