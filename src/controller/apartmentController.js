const Apartment = require('../schema/apartmentModel');

const getAllApartment = async (req, res) => {
  try {
    const apartments = await Apartment.find();

    res.status(200).json({
      status: 'success',
      result: apartments.length,
      data: {
        apartments,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

const getSingleApartment = async (req, res) => {
  const { id } = req.params;
  try {
    const apartment = await Apartment.findById(id);

    res.status(200).json({
      status: 'success',
      data: {
        apartment,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

const createApartment = async (req, res) => {
  try {
    const newApartment = await Apartment.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        newApartment,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

module.exports = { getAllApartment, createApartment, getSingleApartment };
