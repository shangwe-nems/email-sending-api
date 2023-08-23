const nodemailer = require("nodemailer");
const {
  generateContactEmail,
  generateContactAutomaticResponse,
} = require("./generateContactEmail");
const {
  generateQuoteEmail,
  generateQuoteAutomaticResponse,
} = require("./generateQuoteEmail");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  logger: false,
  debug: true,
  secureConnection: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: true,
  },
});

const emailContact = (_data) => {
  const options = {
    from: process.env.EMAIL_USER,
    to: `cedricnyembwe@gmail.com, ${process.env.EMAIL_USER}`,
    subject: `Renseignements du client ${_data.full_name}`,
    html: generateContactEmail(_data),
  };

  return transporter.sendMail(options, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent successfully");
    }
  });
};

const ContactAR = (_data) => {
  const options = {
    from: process.env.EMAIL_USER,
    to: _data.email,
    subject: `Renseignements du client ${_data.full_name}`,
    html: generateContactAutomaticResponse(_data),
  };

  return transporter.sendMail(options, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent successfully");
    }
  });
};

const emailQuote = (_data) => {
  const options = {
    from: process.env.EMAIL_USER,
    to: `cedricnyembwe@gmail.com, ${process.env.EMAIL_USER}`,
    subject: `Demande de Quotation du client ${_data.full_name}`,
    html: generateQuoteEmail(_data),
  };

  return transporter.sendMail(options, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent successfully");
    }
  });
};

const QuoteAR = (_data) => {
  const options = {
    from: process.env.EMAIL_USER,
    to: _data.email,
    subject: `Demande de Quotation du client ${_data.full_name}`,
    html: generateQuoteAutomaticResponse(_data),
  };

  return transporter.sendMail(options, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent successfully");
    }
  });
};

module.exports = { emailContact, ContactAR, emailQuote, QuoteAR };
