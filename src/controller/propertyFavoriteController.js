const ProperFavorite = require("../schema/propertyFavoriteModel");

const getAllFavorite = async (req, res) => {
  try {
    let favorites;
    if (req.query.propertyid) {
      favorites = await ProperFavorite.find({
        property_id: req.query.propertyid,
      });
      res.status(200).json({
        status: "success",
        favorites: favorites.length,
      });
    } else if (req.query.use) {
    } else {
      favorites = await ProperFavorite.find();
      res.status(200).json({
        status: "success",
        data: favorites,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};

const createPropertyFavorite = async (req, res) => {
  try {
    const newFavorite = await ProperFavorite.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        newFavorite,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};

// find by property id
const getFavoriteById = async (req, res) => {
  try {
    const id = req.params.propertyid;
    const filter = { _id: id };
    const doc = await ProperFavorite.find({ filter });
    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  } catch (err) {}
};
module.exports = {
  getAllFavorite,
  createPropertyFavorite,
  getFavoriteById,
};
