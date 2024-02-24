const express = require('express');
const { accessToken, clearToken } = require('../controller/authController');
const router = express.Router();

router.post('/access_token', accessToken);
router.post('/remove_token', clearToken);

module.exports = router;
