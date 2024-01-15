const express = require('express');
const {
  getAllProperty,
  createProperty,
} = require('../controller/propertyController');
const router = express.Router();

router.route('/').get(getAllProperty).post(createProperty);

module.exports = router;
