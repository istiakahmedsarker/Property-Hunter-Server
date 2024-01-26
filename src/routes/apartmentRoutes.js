const express = require('express');
const {
  getAllApartment,
  createApartment,
  getSingleApartment,
} = require('../controller/apartmentController');
const router = express.Router();

router.route('/').get(getAllApartment).post(createApartment);
router.route('/:id').get(getSingleApartment);

module.exports = router;
