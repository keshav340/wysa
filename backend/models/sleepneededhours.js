const mongoose = require('mongoose')
const sleepHourSchema = new mongoose.Schema({
  id:{type:String,required:true},
  hoursNeeded: {
    type: String,
    required: true
  }
});
  mongoose.models = {};
  module.exports = mongoose.model('sleepHoursNeeded', sleepHourSchema);
  