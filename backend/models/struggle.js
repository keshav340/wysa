const mongoose = require('mongoose')
const StruggleSchema = new  mongoose.Schema({
    id : {type : String, required : true},
    Struggleoption: {
      type: String,
      enum: ['Less than 2 Weeks', '2-8 weeks', 'More than 8 Weeks'],
      default: 'Less than 2 Weeks',
      required: true
    }
  });
  mongoose.models = {};
  module.exports = mongoose.model('SleepStruggle', StruggleSchema);

  