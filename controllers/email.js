const nodemailer = require('nodemailer');
const moment = require('moment');
const emailConfig = require('../lib/email_config.js'); // use email_config file for testing locally
const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  secure: true,
  auth: {
    // user: process.env.EMAIL_ADDRESS,
    // pass: process.env.EMAIL_PASSWORD
    user: emailConfig.EMAIL_ADDRESS,
    pass: emailConfig.EMAIL_PASSWORD
  }
});

function emailCreate(req, res) {
  const mailOptions = {
    // from: process.env.EMAIL_ADDRESS, // sender address
    // to: process.env.EMAIL_ADDRESS, // list of receivers
    from: emailConfig.EMAIL_ADDRESS, // sender address
    to: emailConfig.EMAIL_ADDRESS, // list of receivers
    subject: 'New message received from George\'s website',
    html: `<p><i>Message received from ${req.body.fromName} (${req.body.fromEmail})<br />
          ${moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}</i></p>
          <p>"${req.body.message}"</p>`
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log(err);
      res.status(500).json({ 'message': 'Error sending email.' });
    } else {
      console.log(info);
      res.status(200).json({ 'message': 'Email sent successfully.' });
    }
  });

}

module.exports = {
  create: emailCreate
};
