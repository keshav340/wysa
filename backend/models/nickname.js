const mongoose = require('mongoose');

const NickSchema = new mongoose.Schema({
  nickname: {
    type: String,
    unique: true,
    required: true
  },
  password:{
    type:String,
    required:true
  }
  // other fields...
});
mongoose.models = {};
module.exports = mongoose.model('Nick', NickSchema);

