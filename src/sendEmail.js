import nodemailer from "nodemailer";
import {
  generateContactAutomaticResponse,
  generateContactEmail,
} from "./generateContactEmail.js";
import {
  generateQuoteAutomaticResponse,
  generateQuoteEmail,
} from "./generateQuoteEmail.js";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: true,
  logger: true,
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

export const emailContact = async (_data) => {
  const options = {
    from: process.env.EMAIL_USER,
    to: "shangwe.dev@gmail.com",
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

export const ContactAR = async (_data) => {
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

export const emailQuote = async (_data) => {
  const options = {
    from: process.env.EMAIL_USER,
    to: "shangwe.dev@gmail.com",
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

export const QuoteAR = async (_data) => {
  const options = {
    from: process.env.EMAIL_USER,
    to: _data.email,
    subject: `Demande de Quotation du client ${_data.full_name}`,
    html: generateQuoteAutomaticResponse(_data),
  };

  return await transporter.sendMail(options, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent successfully");
    }
  });
};
