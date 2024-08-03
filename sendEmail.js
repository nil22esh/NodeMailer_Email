const nodeMailer = require("nodemailer");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD,
  },
});

const mailOptions = {
  from: {
    name: "Zobby 👻",
    address: process.env.USER,
  },
  to: "nileshsury4940@gmail.com",
  subject: "Is This Mail Come To You Or Not ✔",
  text: "Is Eveything Good!",
  html: "<h1>HI NILESH!</h1>",
  attachments: [
    {
      filename: "cet.pdf",
      path: path.join(__dirname, "cet.pdf"),
      contentType: "application/pdf",
    },
    {
      filename: "Nilesh.png",
      path: path.join(__dirname, "Nilesh.png"),
      contentType: "application/png",
    },
  ],
};

const sendMail = async (transporter, mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    console.log("E-Mail Sent SuccessFully!");
  } catch (error) {
    console.error(error);
  }
};

sendMail(transporter, mailOptions);
