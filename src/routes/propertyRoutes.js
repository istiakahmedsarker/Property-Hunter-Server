const express = require('express');
const {
  getAllProperty,
  createProperty,
  getSingleProperty,
  changePropertyStatus,
  deleteProperty,
} = require('../controller/propertyController');
const { verifyUser, restricTo } = require('../controller/authController');
const router = express.Router();

router.route('/').get(getAllProperty).post(createProperty);
router
  .route('/:id')
  .get(getSingleProperty)
  .delete(verifyUser, restricTo('admin', 'moderator'), deleteProperty);
router.route('/changePropertyStatus/:id').patch(changePropertyStatus);

module.exports = router;
