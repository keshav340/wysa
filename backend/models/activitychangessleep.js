const mongoose = require('mongoose')
const SleepActivitySchema = new  mongoose.Schema({
    id : {type : String, required  : true},
    changesOptions: [{
        type: String,
        enum: ["I would go to sleep easily", "I would sleep through the night", "I wakeded up on time and refreshed"]
      }
    ]
  });
  mongoose.models = {};
  module.exports = mongoose.model('SleepActiviyChanges', SleepActivitySchema);

  