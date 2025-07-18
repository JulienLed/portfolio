const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const nodemailer = require("nodemailer");

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
app.use(cors);
app.use(helmet);
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "This is homepage" });
});

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});
