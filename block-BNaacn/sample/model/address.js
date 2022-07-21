var mongoose = require('express');
var Schema = mongoose.Schema;
var addressSchema = new Schema(
  {
    village: String,
    city: {type:String,required:true},
    state: {type:String,required:true},
    pin: Number,
    user:Schema.types.ObjectId,
  },{ timestamps: true });

let address = mongoose.model('Address', addressSchema);
module.exports = address;