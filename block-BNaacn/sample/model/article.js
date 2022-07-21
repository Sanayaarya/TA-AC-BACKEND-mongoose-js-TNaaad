var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  title:String,
  description:String,
  tags:[string],
  createdAt:{type:Date,default:new Date()},
  likes:{type:Number,default:0}
})
module.exports = mongoose.model('Article' , articleSchema);
