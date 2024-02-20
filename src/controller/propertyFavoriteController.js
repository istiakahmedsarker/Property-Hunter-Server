const ProperFavorite = require("../schema/propertyFavoriteModel");

const getAllFavorite = async (req, res) => {
  try {
    let favorites;
    if (req.query.usermail) {
      favorites = await ProperFavorite.find({
        user_email: req.query.usermail,
      });
      res.status(200).json({
        status: "success",
        data: favorites,
        favorites_count: favorites.length,
      });
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
    const propertyId = req.body.property_id;
    const userEmail = req.body.user_email;
    const isExist = await ProperFavorite.findOne({
      property_id: propertyId,
      user_email: userEmail,
    });
    if (!isExist) {
      const newFavorite = await ProperFavorite.create(req.body);
      res.status(200).json({
        status: "success",
        data: {
          newFavorite,
        },
      });
    } else {
      res.status(404).json({
        status: "exist",
      });
    }
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

const deleteFavorite = async (req, res) => {
  try {
    const { id } = req.params;
    await ProperFavorite.findByIdAndDelete(id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};
module.exports = {
  getAllFavorite,
  createPropertyFavorite,
  getFavoriteById,
  deleteFavorite,
};
