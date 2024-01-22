const Property = require('../schema/propertyModel');

const getAllProperty = async (req, res) => {
  try {
    const properties = await Property.find();

    res.status(200).json({
      status: 'success',
      result: properties.length,
      data: {
        properties,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

const getSingleProperty = async (req, res) => {
  const { id } = req.params;
  try {
    const property = await Property.findById(id);

    res.status(200).json({
      status: 'success',
      data: {
        property,
      },
    });
  } catch (err) {
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
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

module.exports = { getAllProperty, createProperty, getSingleProperty };
