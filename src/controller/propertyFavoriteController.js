const ProperFavorite = require("../schema/propertyFavoriteModel");
const Property = require("../schema/propertyModel");

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

// create property favorite user list
const createPropertyFavoriteUserList = async (req, res) => {
  try {
    const propertyId = req.body.property_id;
    const userEmail = req.body.user_email;

    // Find the property by propertyId
    const property = await Property.findById(propertyId);

    if (!property) {
      // Property not found
      return res.status(404).json({
        status: "Fail",
        message: "Property not found",
      });
    }

    // Check if the property already has a favorites array
    if (!property.favorites) {
      // If not, create an empty array
      property.favorites = [];
    }

    // Check if the user has already marked this property as favorite
    const existingFavorite = property.favorites.find(
      (favorite) => favorite.user_email === userEmail
    );

    if (!existingFavorite) {
      // If not, add the user to the favorites array with isFavorite set to true
      property.favorites.push({ user_email: userEmail, isFavorite: true });
      await property.save();

      res.status(200).json({
        status: "success",
        data: {
          isFavorite: true,
        },
      });
    } else {
      // If the user already marked this property as favorite,
      res.status(200).json({
        status: "exist",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};

// remove user from favorite list
const removeUserFromFavorites = (property, userEmail) => {
  property.favorites = property.favorites.filter(
    (favorite) => favorite.user_email !== userEmail
  );
};

const removePropertyFavoriteUserList = async (req, res) => {
  try {
    const propertyId = req.body.property_id;
    const userEmail = req.body.user_email;

    // Find the property by propertyId
    const property = await Property.findById(propertyId);

    if (!property) {
      // Property not found
      return res.status(404).json({
        status: "fail",
        message: "Property not found",
      });
    }

    // Check if the property already has a favorites array
    if (!property.favorites || property.favorites.length === 0) {
      // If not, no need to remove
      return res.status(200).json({
        status: "success",
        message: "No favorites to remove",
      });
    }

    // Remove the user from the favorites array
    removeUserFromFavorites(property, userEmail);

    await property.save();

    res.status(200).json({
      status: "success",
      message: "User removed from favorites",
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};

module.exports = {
  getAllFavorite,
  createPropertyFavorite,
  getFavoriteById,
  deleteFavorite,
  createPropertyFavoriteUserList,
  removePropertyFavoriteUserList,
};
