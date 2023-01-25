const express = require("express");
const { sendEmail } = require("./Service/email.service");
const { mails } = require("./constant/data");
const app = express();

const sendMails = () => {
    let filename = "OxFord.pdf"
  mails.forEach((item) => {
    let subject = "subject";
    sendEmail(item, subject,filename);
  });
};
sendMails();

app.listen(3000, () => {
  console.log("Listening to 3000");
});
