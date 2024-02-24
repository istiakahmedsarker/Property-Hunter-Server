const express = require("express");

const {
  getAllFavorite,
  createPropertyFavorite,
  getFavoriteById,
  deleteFavorite,
  createPropertyFavoriteUserList,
  removePropertyFavoriteUserList,
} = require("../controller/propertyFavoriteController");

const router = express.Router();
router.route("/").get(getAllFavorite);
router.route("/propertyid").get(getFavoriteById);
router.route("/add-favorite").post(createPropertyFavorite);
router.route("/delete/:id").delete(deleteFavorite);
router.route("/favorite-user-add").post(createPropertyFavoriteUserList);
router.route("/favorite-user-remove").post(removePropertyFavoriteUserList);

module.exports = router;
