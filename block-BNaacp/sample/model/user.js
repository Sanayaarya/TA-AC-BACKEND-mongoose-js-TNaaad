var mongoose = require('mongoose');
var Schema = mongoose.Schema;
let userSchema = new Schema(
  {
    name: String,
    email: String,
    sport: [String],
  },
  { timestamps: true }
);

var User = mongoose.model('User', userSchema);
module.exports = User;