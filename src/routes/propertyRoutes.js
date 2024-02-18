const express = require('express');
const {
  getAllProperty,
  createProperty,
  getSingleProperty,
  changePropertyStatus
} = require('../controller/propertyController');
const router = express.Router();

router.route('/').get(getAllProperty).post(createProperty);
router.route('/:id').get(getSingleProperty);
router.route('/changePropertyStatus/:id').patch(changePropertyStatus);

module.exports = router;
