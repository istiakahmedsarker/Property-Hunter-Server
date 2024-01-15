const Property = require('../models/propertyModel');

const getAllProperty = async (req, res) => {
  try {
    const property = await Property.find();

    res.status(200).json({
      status: 'success',
      result: property.length,
      data: {
        property,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

const createProperty = async (req, res) => {
  try {
    const newProperty = await Property.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        newProperty,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

module.exports = { getAllProperty, createProperty };
