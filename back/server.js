const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const nodemailer = require("nodemailer");

dotenv.config();

//Créer un transporteur
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

//Envoyer le mail
const sendMail = async (name, theme, message) => {
  try {
    const info = await transporter.sendMail({
      from: `${name} <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: theme,
      text: message,
      html: `<p>${message}</p>`,
    });
    if (info.response) {
      return "Mail envoyé";
    } else {
      return `Mail pas envoyé : ${JSON.stringify(info)}`;
    }
  } catch (error) {
    console.log(error);
  }
};

app.use(cors());
app.use(helmet());
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.post("/mail", async (req, res, next) => {
  try {
    const { name, theme, message } = req.body;
    const response = await sendMail(name, theme, message);
    if (response) {
      res.status(200).json({ message: response });
    } else {
      res.status(400).send("Problème avec l'envoit du mail");
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT || 3000}`);
});
