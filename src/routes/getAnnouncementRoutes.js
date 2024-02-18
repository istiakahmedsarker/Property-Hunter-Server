const express = require('express');
const router = express.Router()
const getAnnouncementController = require('../controller/getAnnouncementController')

router.get('/getAnnouncement',getAnnouncementController)

module.exports = router;