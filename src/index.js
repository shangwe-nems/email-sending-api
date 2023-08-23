import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { ContactAR, QuoteAR, emailContact, emailQuote } from "./sendEmail.js";

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: false,
  })
);

app.use(cookieParser());

app.use(express.json({ limit: "2mb" }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get("/healthcheck", (req, res) => {
  res.sendStatus(200);
});

app.post("/email/quote", async (req, res) => {
  const body = req.body;

  try {
    const mail = await emailQuote(body);
    const ar = await QuoteAR(body);
    console.log("Mail :", { mail, ar });
    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

app.post("/email/contact", async (req, res) => {
  const body = req.body;

  try {
    // const mail = await emailContact(body);
    const ar = await ContactAR(body);
    // console.log("Mail :", { mail, ar });
    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

app.listen(3000, () => console.log("Email app listening on port 3000!"));
