const mongoose = require('mongoose')
const SleepSchema = new mongoose.Schema({
    // Other fields...
    sleepTime: {
      type: Date,
      required: true
    },
    // Other fields...
  });
  mongoose.models = {};
  module.exports = mongoose.model('Sleep', SleepSchema);
