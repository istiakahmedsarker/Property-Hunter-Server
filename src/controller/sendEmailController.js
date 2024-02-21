const nodemailer = require('nodemailer');
const Email = require('../schema/sendEmailModel');

const transporter = nodemailer.createTransport({
  host: 'smtp.forwardemail.net',
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

const sendEmail = async (req, res) => {
    try {
        const email = await Email(req.body);
    
        res.status(200).json({
          status: 'success',
          data: {
            email,
          },
        });
      } catch (err) {
        res.status(400).json({
          status: 'Fail',
          message: err.message,
        });
      }
};

module.exports = {
  sendEmail,
};
