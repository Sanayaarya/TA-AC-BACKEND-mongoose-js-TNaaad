var mongoose = require('express');
var Schema = mongoose.Schema;
var addressSchema = new Schema(
  {
    village: String,
    city: String,
    state: String,
    pin: Number,
    user: mongoose.Schema.types.ObjectId,
  },
  { timestamps: true }
);

let address = mongoose.model('Address', addressSchema);
module.exports = address;