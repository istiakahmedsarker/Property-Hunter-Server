const express = require('express');
const {sendEmail} = require('../controller/sendEmailController');

const router = express.Router();
router.route("/").post(sendEmail);

module.exports = router;