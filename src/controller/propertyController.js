const Property = require('../schema/propertyModel');

const getAllProperty = async (req, res) => {
  try {
    const queryObject = {
      isPending: { $ne: true }, // Add condition to filter properties where isPending is not true
    };

    //search by title
    if (req.query.title) {
      queryObject.propertyTitle = { $regex: req.query.title, $options: 'i' };
    }

    // filter by status
    if (req.query.propertyStatus) {
      queryObject.propertyStatus = req.query.propertyStatus;
    }

    //filter by property type
    if (req.query.propertyType) {
      console.log(req.query);
      queryObject.propertyType = req.query.propertyType;
    }

    // get property by email
    if (req.query.email) {
      queryObject['ownerInformation.email'] = req.query.email;
    }

    if (req.query.bedrooms) {
      queryObject['rooms.bedRooms'] = { $gte: req.query.bedrooms };
    }

    if (req.query.bathrooms) {
      queryObject['rooms.bathRooms'] = { $gte: req.query.bathrooms };
    }

    if (req.query.price) {
      queryObject.price = { $lte: req.query.price };
    }

    let query = Property.find(queryObject);

    //sorting
    if (req.query.sort) {
      const sortItem = req.query.sort.replace(',', ' ');
      query = query.sort(sortItem);
    }

    //limited field
    if (req.query.select) {
      const selectItem = req.query.select.replace(',', ' ');
      query = query.select(selectItem);
    }

    //pagination
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 10;

    if (req.query.limit || req.query.page) {
      const skip = (page - 1) * limit;

      query = query.skip(skip).limit(limit);
    }

    const totalProperty = await Property.countDocuments(queryObject);

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
    console.log(req.body);
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

const changePropertyStatus = async (req, res) => {
  try {
    const propertyId = req.params.propertyId; // Assuming you have the property ID in the request parameters

    // Update the property status to "sold"
    const updatedProperty = await Property.findByIdAndUpdate(
      propertyId,
      { status: 'sold' },
      { new: true } // This option ensures that the updated document is returned
    );

    res.status(200).json({
      status: 'success',
      data: updatedProperty,
    });
  } catch (err) {
    // Handle errors and send a 400 Bad Request response
    console.error(err);
    res.status(400).json({
      status: 'fail',
      message: 'Failed to update property status',
    });
  }
};

const deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;
    await Property.findByIdAndDelete(id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

// update isPending value to false
const updateIsPending = async (req, res) => {
  try {
    const propertyId = req.params.id;
    // Update the property isPending to false
    const updatedProperty = await Property.findByIdAndUpdate(
      propertyId,
      { isPending: false },
      { new: true }
    );

    res.status(200).json({
      status: 'success',
      data: { isPending: false },
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      status: 'fail',
      message: 'Failed to update property status',
    });
  }
};
module.exports = {
  getAllProperty,
  createProperty,
  getSingleProperty,
  changePropertyStatus,
  deleteProperty,
  updateIsPending,
};
