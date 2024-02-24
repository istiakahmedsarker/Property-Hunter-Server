const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  from: { 
    type: String, 
    required: true 
},
  to: { 
    type: String, 
    required: true 
},
  subject: { 
    type: String, 
    required: true 
},
  text: { 
    type: String, 
    required: true 
},
});

const Email = mongoose.model('Email', emailSchema);

module.exports = Email;
