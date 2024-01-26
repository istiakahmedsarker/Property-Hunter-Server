const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  // apartmentImage: {
  //   type: [String],
  //   required: [true, 'A property must have some images'],
  // },
  // propertyType: {
  //   type: String,
  //   required: [true, 'A property must have type'],
  // },
  // price: {
  //   type: Number,
  //   required: [true, 'A property must have a price'],
  // },
  // owner: {
  //   type: String,
  //   required: [true, 'A property must have owner'],
  // },
  // apartmentNumber: {
  //   type: String,
  //   required: [true, 'A apartment must have apartment number'],
  // },
  // blockName: {
  //   type: String,
  //   required: [true, 'A apartment must have block'],
  // },
  // room: {
  //   type: Number,
  //   required: [true, 'A apartment must have room'],
  // },
  // floorNumber: {
  //   type: Number,
  //   required: [true, 'A apartment must have floor number'],
  // },
  // latitude: Number,
  // longtitude: Number,
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
