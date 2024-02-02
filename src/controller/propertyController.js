const Property = require('../schema/propertyModel');

const getAllProperty = async (req, res) => {
  try {
    console.log(req.query);
    const queryObject = {};

    if (req.query.title) {
      queryObject.propertyTitle = { $regex: req.query.title, $options: 'i' };
    }

    if (req.query.propertyStatus) {
      queryObject.propertyStatus = req.query.propertyStatus;
    }

    if (req.query.propertyType) {
      queryObject.propertyType = req.query.propertyType;
    }

    let query = Property.find(queryObject);

    if (req.query.sort) {
      const sortItem = req.query.sort.replace(',', ' ');
      query = query.sort(sortItem);
    }

    if (req.query.select) {
      const selectItem = req.query.select.replace(',', ' ');
      query = query.select(selectItem);
    }

    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 6;
    const skip = (page - 1) * limit;
    const totalProperty = await Property.countDocuments();

    query = query.skip(skip).limit(limit);

    const properties = await query;

    // const properties = await Property.find();

    res.status(200).json({
      status: 'success',
      result: properties.length,
      data: {
        properties,
        page,
        limit,
        totalProperty,
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
