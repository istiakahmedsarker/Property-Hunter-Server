const express = require('express');
const router = express.Router()
const getAnnouncementController = require('')

router.get('/getAnnouncement',getAnnouncementController)

module.exports = router;