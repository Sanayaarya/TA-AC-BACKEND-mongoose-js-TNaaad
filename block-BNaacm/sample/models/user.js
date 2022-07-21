var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name:String,
  age:{type:Number, default:0},
  email:{type:String, lowercase:true},
  favourates:[String],
  password:{type:String,minlength:5,maxlength:20},
  createdAt:{type:Date, default:new Date()}
})
module.exports = mongoose.model('User' , userSchema);