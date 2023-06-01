const mongoose = require('mongoose')
const WakeSchema = new mongoose.Schema({
  id : {type : String, required : true},
    // Other fields...
    WakeUpTime: {
      type: String,
      default : ''
    },
    // Other fields...
  });
  mongoose.models = {};
  module.exports = mongoose.model('Wakeup', WakeSchema);
  