const express = require('express');
const {
  getAllProperty,
  createProperty,
  getSingleProperty,
} = require('../controller/propertyController');
const router = express.Router();

router.route('/').get(getAllProperty).post(createProperty);
router.route('/:id').get(getSingleProperty);

module.exports = router;
