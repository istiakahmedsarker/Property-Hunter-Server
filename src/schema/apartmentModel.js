const mongoose = require('mongoose');

const apartmentSchema = new mongoose.Schema({
  propertyTitle: {
    type: String,
    required: [true, 'A property must have some title'],
  },
  propertyType: {
    type: String,
    required: [true, 'A property must have some property type'],
  },
  location: {
    address: {
      type: String,
      required: [true, 'A property must have address'],
    },
    city: {
      type: String,
      required: [true, 'A property must have city'],
    },
    state: {
      type: String,
      required: [true, 'A property must have state'],
    },
    zipCode: {
      type: String,
      required: [true, 'A property must have zipcode'],
    },
    latitude: {
      type: Number,
      required: [true, 'A property must have latitude'],
    },
    longitude: {
      type: Number,
      required: [true, 'A property must have longitude'],
    },
  },
  price: {
    type: Number,
    required: [true, 'A property must have price'],
  },
  squareFootage: {
    type: Number,
    required: [true, 'A property must have square footage'],
  },
  easement: [
    {
      type: String,
      required: [true, 'A property must have some easement'],
    },
  ],
  description: {
    type: String,
    required: [true, 'A property must have some description'],
  },
  propertyImages: [
    {
      type: String,
      required: [true, 'A property must have some property images'],
    },
  ],
  utilities: [
    {
      type: String,
      required: [true, 'A property must have some utilities'],
    },
  ],
  parking: {
    included: Boolean,
    spaces: Number,
  },
  yearBuilt: {
    type: String,
    required: [true, 'A property must have year built'],
  },
  propertyStatus: {
    type: String,
    required: [true, 'A property must have some status'],
  },
  ownerInformation: {
    name: {
      type: String,
      required: [true, 'A property must have owner name'],
    },
    email: {
      type: String,
      required: [true, 'A property must have owner email'],
    },
    phone: String,
  },
  floor_number: {
    type: Number,
    required: [true, 'A property must have floor number'],
  },
  room: {
    type: Number,
    required: [true, 'A property must have '],
  },
  block_name: {
    type: String,
    required: [true, 'A property must have block name'],
  },
  apartment_number: {
    type: String,
    required: [true, 'A property must have apartment number'],
  },
});

const Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;
