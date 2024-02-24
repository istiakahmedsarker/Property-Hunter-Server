// routes/propertyRoutes.js
const express = require('express');
const router = express.Router();
const propertyController = require('../controller/featuredPropertiesController');

// Define your API endpoint for propertySchema
router.get('/top-liked-properties', propertyController.getTopLikedProperties);

module.exports = router;
