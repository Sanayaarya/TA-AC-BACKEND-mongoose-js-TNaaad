var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name:String,
  age:Number,
  sports:[string],
  marks:[Number],
  family: {
    father:String,
    mother:String
  }
},{timestamps:true})

var articleschema = new Schema({
  title:String,
  decription:String,
  author:Schema.Types.objectId
})
 