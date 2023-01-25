const nodemailer = require("nodemailer");
const fs = require("fs");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "atweniee@gmail.com",
    pass: "qukhlerfppvrscjf",
  },
});
const { template } = require("../constant/template");
exports.sendEmail = (userEmail, subject, filename) => {
  transporter.verify((error, success) => {
    if (error) return console.log(error);
  });
  var details = {
    attachments: [
      {
        filename: filename,
        streamSource: fs.createReadStream(`./Attachments/${filename}`),
      },
    ],
    from: "Abhishek",
    to: userEmail,
    subject: subject,
    html: template,
  };
  transporter.sendMail(details, (err) => {
    if (err) return console.log("ERROR :>", err);
    console.log("SENT EMAIL");
  });
};
