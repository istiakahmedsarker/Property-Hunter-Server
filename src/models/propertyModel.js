const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  propertyHolder: {
    type: String,
    required: [true, 'A property must have a owner'],
  },

  price: {
    type: Number,
    required: [true, 'A property must have a price'],
  },
});

const Property = mongoose.model('property', propertySchema);

module.exports = Property;
