const express = require("express");

const {
  getAllFavorite,
  createPropertyFavorite,
  getFavoriteById,
  deleteFavorite,
} = require("../controller/propertyFavoriteController");

const router = express.Router();
router.route("/").get(getAllFavorite);
router.route("/propertyid").get(getFavoriteById);
router.route("/add-favorite").post(createPropertyFavorite);
router.route("/delete/:id").delete(deleteFavorite);

module.exports = router;
