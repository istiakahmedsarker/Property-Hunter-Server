const express = require("express");

const {
  getAllFavorite,
  createPropertyFavorite,
  getFavoriteById,
} = require("../controller/propertyFavoriteController");

const router = express.Router();
router.route("/").get(getAllFavorite);
router.route("/propertyid").get(getFavoriteById);
router.route("/add-favorite").post(createPropertyFavorite);

module.exports = router;
