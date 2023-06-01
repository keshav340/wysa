const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title : {type : String, required : true },
    desc : {type : String, required : true },
    img : {type : String, required : true},
    details:[{quantity : String, price : Number}],
    color:{type:String, required: true},
    tag:{type:String,required: true},
},{timestamps : true});

mongoose.models = {};

module.exports = mongoose.model('products',ProductSchema);