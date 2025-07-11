const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "This is homepage" });
});

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});
