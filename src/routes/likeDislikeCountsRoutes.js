const express = require("express");
const router = express.Router();
const {
  increaseLike,
  increaseDislike,
  decreaseLike,
  decreaseDislike,
} = require("../controller/likeDislikeCountsController"); // Update the path accordingly

// Increase Like
router.patch("/increase-like/:id", increaseLike);

// Increase Dislike
router.patch("/increase-dislike/:id", increaseDislike);

// Decrease Like
router.patch("/decrease-like/:id", decreaseLike);

// Decrease Dislike
router.patch("/decrease-dislike/:id", decreaseDislike);

module.exports = router;
