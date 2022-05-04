const User = require("../model/user.model");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
require('dotenv').config();

const transport = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        `${process.env.SENDGRID_API}`,
    },
  })
);

exports.getSignup = (req, res, next) => {
  res.status(200).json({
    message:
      "Please Sign up if you are new here and want to connect with Manjeet Singh.",
  });
};

exports.postSignup = (req, res, next) => {
  const { name, email, phone, password } = req.body;
  bcrypt
    .hash(password, 12)
    .then((hashedPassword) => {
      const user = new User({
        name: name,
        email: email,
        contactNumber: phone,
        password: hashedPassword,
      });
      return user.save();
    })
    .then((result) => {
      res.status(200).json({ message: "Successfully signuped!", data: [result] });
      return transport.sendMail({
        to: email,
        from: "manjeetkakran66@gmail.com",
        subject: "Signup succeeded!",
        html: "<h1>You successfully signed up in E-shop of Manjeet singh!<h1>",
      });
    })
    .catch((err) =>{
      console.log(err);
    });
};
