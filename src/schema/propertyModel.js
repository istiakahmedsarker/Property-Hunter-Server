const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  propertyTitle: {
    type: String,
    required: [true, "Property title is required"],
  },
  propertyType: {
    type: String,
    required: [true, "Property type is required"],
  },
  location: {
    address: {
      type: String,
      required: [true, "Location address is required"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
    },
    state: {
      type: String,
      required: [true, "State is required"],
    },
    zipCode: {
      type: String,
      required: [true, "Zip code is required"],
    },
    latitude: {
      type: Number,
      required: [true, "Latitude is required"],
    },
    longitude: {
      type: Number,
      required: [true, "Longitude is required"],
    },
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  squareFootage: {
    type: Number,
    required: [true, "Square footage is required"],
  },
  easement: {
    type: [String],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  propertyImages: {
    type: [String],
    required: [true, "Property images are required"],
  },
  utilities: {
    type: [String],
  },
  parking: {
    included: {
      type: Boolean,
    },
    spaces: {
      type: Number,
    },
  },
  rooms: {
    bedRooms: {
      type: Number,
    },
    bathRooms: {
      type: Number,
    },
    officeRooms: {
      type: Number,
    },
    conferenceRooms: {
      type: Number,
    },
  },
  floorNumber: {
    type: Number,
  },
  blockName: {
    type: String,
  },
  apartmentNumber: {
    type: String,
  },
  yearBuilt: {
    type: Number,
    required: [true, "Year built is required"],
  },
  propertyStatus: {
    type: String,
    required: [true, "Property status is required"],
  },
  ownerInformation: {
    name: {
      type: String,
      required: [true, "Owner name is required"],
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
        message: "Invalid email format",
      },
    },
    phone: {
      type: String,
    },
  },
  favorites: {
    type: [],
  },
  isPending: {
    type: Boolean,
    default: true,
    required: [true, "is pending in required as a Boolean value"],
  },
  job_preferences: {
    type: Array,
  },
  minimum_salary: {
    type: Number,
  },
  accept_type: {
    type: String,
  },
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
